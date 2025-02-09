// import TopNav from "../_components/TopNav";

export default function RootLayout({
    children,
  }: Readonly<{ children: React.ReactNode }>) {
    return (
      <div>
          {/*<TopNav />*/}
          {children}
      </div>
    );
  }