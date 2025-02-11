import "server-only";
import { db } from "./db";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { usersTable } from "./db/schemas/user";
import { imagesTable } from "./db/schemas/image";
import { desc, eq } from "drizzle-orm";

export async function getImages() {
  const images = await db.select().from(imagesTable).orderBy(desc(imagesTable.id));
  return images;
}

export async function getMyImages() {
    const user = await auth();
    if (!user.userId) {
        throw new Error("User not found");
    }
    const images = await db.select().from(imagesTable).where( eq(imagesTable.userId, user.userId) ).orderBy(desc(imagesTable.id));
  //const images = await db.query.images.findMany({
  //  where: (model, req) => req.eq(model.userId, user.userId),
  //  orderBy: (model, {desc}) => desc(model.id)
  //});
  return images;
}

export async function getImage(id: number) {
  const user = await auth();
  if (!user.userId) {
    throw new Error("User not found");
  }
  const image = await db.select().from(imagesTable).where( eq(imagesTable.id, id) ).limit(1);
  //const image = await db.query.images.findFirst({
  //  where: (modal, req) => req.eq(modal.id, id)
  //});
  if (!image) {
    throw new Error("Image not found");
  }
  if (image[0]?.userId !== user.userId) {
    throw new Error("Unauthorized");
  }
  return image;
}
export async function getUser() {
  const user = await auth();
  if (!user.userId) {
    throw new Error("User not found");
  }
  const client = await clerkClient()
  const userClient = await client.users.getUser(user.userId)
  return userClient;
}


export async function createUser() {
  try {
    const user = await getUser();
    // verify user exists
    const existingUser = await db.select().from(usersTable).where( eq(usersTable.clerk_id, user.id) ).limit(1);
    console.log('--existingUser-');
    console.log(existingUser);
    
    if (existingUser.length === 0) {
      // create user
      console.log("--Creating user--");
      await db.insert(usersTable).values({
        clerk_id: user.id,
        email: user.emailAddresses[0]?.emailAddress,
        name: user.fullName,
        first_name: user.firstName,
        last_name: user.lastName,
        username: user.username,
        avatar: user.hasImage ? user.imageUrl : null,
      });

      return Response.json({status_code: 200, message: "USER_CREATED"});
    }
    return Response.json({status_code: 400, message: "USER_ALREADY_EXISTS"});
  } catch (error) {
    console.error(error);
    
  }

}