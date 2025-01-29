import { auth, clerkClient } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";
//import { ratelimit } from "~/server/ratelimit";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 40 } })
    .middleware(async ({ req }) => {
      console.log("MIDDLEWARE");
      
      const user = await auth();
      // console.log("user");
     // console.log(user);
      if (!user.userId) throw new UploadThingError({message: "User Not Found", code: "BAD_REQUEST"});
      
      //const fullUserData = await clerkClient.users.getUser(user.userId);
      const clerk = await clerkClient();
      const fullUserData = await clerk.users.getUser(user.userId);
      console.log("fullUserData");
      console.log(fullUserData);
      //if (fullUserData?.privateMetadata?.["can-upload"] !== true)
      //  throw new UploadThingError("User Does Not Have Upload Permissions");

      //const { success } = await ratelimit.limit(user.userId);
      //if (!success) throw new UploadThingError("Ratelimited");

      return { userId: user.userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      //console.log("metadata", metadata);
      //console.log("file");
      //console.log(file);
      
      const insertImages = await db.insert(images).values({
        title: file.name,
        url: file.url,
        userId: metadata.userId,
      });
      console.log("insertImages");
      console.log(insertImages);
      console.log("Uploaded by", metadata.userId);
      
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;