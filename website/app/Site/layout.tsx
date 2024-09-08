
import Navbar from "../_Components/navbar";
import Footer from "../_Components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
  );
}
