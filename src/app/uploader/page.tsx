"use client";

import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export default function Home() {
    const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="imageUploader"

        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          router.refresh();
          //alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}
