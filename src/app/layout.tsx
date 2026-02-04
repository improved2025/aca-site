import "./globals.css";
import TopTicker from "@/components/TopTicker";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Awkuzu Cultural Association",
  description: "Unity and Progress",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-paper text-black antialiased">
        <TopTicker />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
