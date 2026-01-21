import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "5ive Gent Enterprise | Premium Global Import & Distribution",
  description: "Your gateway to premium international goods. Import and distribution of fashion, home appliances, and gadgets from China and Turkey to Nigeria, Africa, Europe, USA, and globally.",
  keywords: "import, export, fashion, appliances, gadgets, Nigeria, Africa, China, Turkey, wholesale, distribution",
  authors: [{ name: "Ugo Chimuanya Darlington" }],
  openGraph: {
    title: "5ive Gent Enterprise | Global Trade, Local Trust",
    description: "Connecting continents through quality - Premium import and distribution services",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "5ive Gent Enterprise",
    description: "Your gateway to premium international goods",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
