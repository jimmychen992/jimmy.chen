import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jimmy.chen.github.io"),
  title: "Jimmy H. Chen | Mechanics, Materials & Engineering Education",
  description:
    "Academic profile of Dr Jimmy Huanming Chen, working across experimental mechanics, impact engineering, polymers, architected structures and engineering education.",
  openGraph: {
    title: "Jimmy H. Chen | Mechanics for resilient futures",
    description:
      "Experimental mechanics, architected materials, polymers, impact protection and engineering education.",
    type: "website",
    images: [
      {
        url: "/mechanics-hero.png",
        width: 1536,
        height: 1024,
        alt: "An illustrated curved lattice under impact with polymer and finite-element motifs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jimmy H. Chen | Mechanics for resilient futures",
    description:
      "Experimental mechanics, architected materials, polymers, impact protection and engineering education.",
    images: ["/mechanics-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
