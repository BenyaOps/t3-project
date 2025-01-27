import Link from "next/link";
import { db } from "~/server/db";

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  const mockUrls = [
    "https://9cy4yz6jxh.ufs.sh/f/ZQne984Awk8UW0AoDGPSF4jVBRxGfpkcwb76d0P23IzlQhUJ",
    "https://9cy4yz6jxh.ufs.sh/f/ZQne984Awk8UW0AoDGPSF4jVBRxGfpkcwb76d0P23IzlQhUJ",
    "https://9cy4yz6jxh.ufs.sh/f/ZQne984Awk8UW0AoDGPSF4jVBRxGfpkcwb76d0P23IzlQhUJ"
  ]
  const mockImages = mockUrls.map((url, index) => ({
    id: index,
    url,
    title: `Image ${index + 1}`
  }));

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            <p>{ post.name }</p>
          </div>
        ))}
        {[...mockImages, ...mockImages].map((image, idx) => (
          <div key={Date().toString() + image.id + idx}  className="w-48">
            <img src={image.url} alt={image.title} className="p-4" />
          </div>
        ))}
      </div>
    </main>
  );
}
