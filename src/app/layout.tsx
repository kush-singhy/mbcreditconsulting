import type { Metadata } from "next";
import { Space_Grotesk, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"] });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mbcreditconsulting.com.au"),
  title: {
    default: "MB Credit Consulting | Sydney Mortgage Broker",
    template: "%s | MB Credit Consulting",
  },
  description:
    "MFAA-accredited mortgage broker in Sydney. We compare 30+ lenders to find you the right home loan — at no cost to you. First homes, refinancing, SMSF & more.",
  keywords: [
    "mortgage broker Sydney",
    "home loan broker",
    "refinancing",
    "first home buyer",
    "SMSF lending",
    "MB Credit Consulting",
    "Manisha Bakshi",
  ],
  authors: [{ name: "MB Credit Consulting" }],
  openGraph: {
    title: "MB Credit Consulting | Sydney Mortgage Broker",
    description:
      "MFAA-accredited mortgage broker in Sydney. We compare 30+ lenders to find you the right home loan — at no cost to you.",
    url: "https://mbcreditconsulting.com.au",
    siteName: "MB Credit Consulting",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "MB Credit Consulting | Sydney Mortgage Broker",
    description:
      "MFAA-accredited mortgage broker in Sydney. We compare 30+ lenders to find you the right home loan — at no cost to you.",
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
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
