import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "budgie",
  description: "making a flock of software.",
  openGraph: {
    title: "budgie",
    description: "making a flock of software.",
    images: [
      {
        url: "/budgie.png",
        width: 500,
        height: 500,
        alt: "budgie",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "budgie",
    description: "making a flock of software.",
    images: ["/budgie.png"],
  },
  icons: {
    icon: "/budgie.png",
    shortcut: "/budgie.png",
    apple: "/budgie.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.className} antialiased`}>{children}</body>
    </html>
  );
}
