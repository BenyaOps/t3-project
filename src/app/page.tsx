import Link from "next/link";

export default function HomePage() {

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
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-wrap">
        {[...mockImages, ...mockImages].map((image) => (
          <div key={Date().toString() + image.id}  className="w-48">
            <img src={image.url} alt={image.title} className="w-1/2 p-4" />
          </div>
        ))}
      </div>
    </main>
  );
}
