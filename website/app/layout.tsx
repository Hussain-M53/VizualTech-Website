import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "./_Components/navbar";
import Footer from "./_Components/footer";

const inter = Roboto_Slab({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VizualTech Solutions",
  description: "Developed By DigiLabs.Co",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
