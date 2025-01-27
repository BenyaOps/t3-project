export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
        <div className="w-full">second layout</div>
        {children}
    </div>
  );
}