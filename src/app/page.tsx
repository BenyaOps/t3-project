import { SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {

  const posts = await db.query.posts.findMany();
  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id),
  });
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
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            <p>{ post.name }</p>
          </div>
        ))}
        {[...images, ...images].map((image, idx) => (
          <div key={Date().toString() + image.id + idx}  className="w-48 flex fllex-col">
            <img src={image?.url ?? 'https://9cy4yz6jxh.ufs.sh/f/ZQne984Awk8UW0AoDGPSF4jVBRxGfpkcwb76d0P23IzlQhUJ'} alt={image.title ?? 'title'} className="p-4" />
          </div>
        ))}
      </div>
    </main>
  );
}
