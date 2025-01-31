import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getImages() {
  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id)
  });
  return images;
}

export async function getMyImages() {
    const user = await auth();
    if (!user.userId) {
        throw new Error("User not found");
    }
  const images = await db.query.images.findMany({
    where: (model, req) => req.eq(model.userId, user.userId),
    orderBy: (model, {desc}) => desc(model.id)
  });
  return images;
}

export async function getImage(id: number) {
  const user = await auth();
  if (!user.userId) {
    throw new Error("User not found");
  }
  const image = await db.query.images.findFirst({
    where: (modal, req) => req.eq(modal.id, id)
  });
  if (!image) {
    throw new Error("Image not found");
  }
  if (image.userId !== user.userId) {
    throw new Error("Unauthorized");
  }
  return image;
}