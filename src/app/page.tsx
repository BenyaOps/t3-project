import { SignedOut, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {images.map((image) => (
        <div key={image.id} className="w-48 h-48 flex flex-col">
         <Link href={`img/${image.id}`}>
          <Image src={image.url ?? ""} alt={image.title ?? "Image"} width={320} height={320} />
         </Link>
          <p>{image.title}</p>
        </div>
      ))}
    </div>
  );
}
async function Posts() {
  const posts = await db.query.posts.findMany();
  return posts.map((post) => (
    <div key={post.id}>
      <h2>{post.name}</h2>
      <p>{post.updatedAt?.toString()}</p>
    </div>
  ));
}
export default async function HomePage() {

  //const posts = await db.query.posts.findMany();
  //const images = await db.query.images.findMany({
  //  orderBy: (model, {desc}) => desc(model.id),
  //});
  // HARDCODE EXAMPLE IMAGES URLS
  /*const mockUrls = [
    "https://9cy4yz6jxh.ufs.sh/f/ZQne984Awk8UW0AoDGPSF4jVBRxGfpkcwb76d0P23IzlQhUJ",
    "https://9cy4yz6jxh.ufs.sh/f/ZQne984Awk8UW0AoDGPSF4jVBRxGfpkcwb76d0P23IzlQhUJ",
    "https://9cy4yz6jxh.ufs.sh/f/ZQne984Awk8UW0AoDGPSF4jVBRxGfpkcwb76d0P23IzlQhUJ"
  ]
  const mockImages = mockUrls.map((url, index) => ({
    id: index,
    url,
    title: `Image ${index + 1}`
  }));*/

  return (
    <main>
      <SignedOut>
        <div className="w-full h-full text-2xl">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Posts />
        <Images />
      </SignedIn>
    </main>
  );
}
