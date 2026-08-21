import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Energizese",
    template: "%s",
  },
  description:
    "Energizese is a specialized mechanical services firm catering to the industrial, commercial, and residential industry.",
  icons: {
    icon: "/uploads/3af253d99bd04058.png",
    apple: "/uploads/3af253d99bd04058.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#002e5e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/owl.carousel.css" />
        <link rel="stylesheet" href="/assets/css/styles.css" />
      </head>
      <body className={poppins.className}>
        <div id="main-container">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
