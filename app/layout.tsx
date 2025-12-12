import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ON CHHUNLIN",
  description: "Full Stack Developer",
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    type: 'website',
    title: 'ON CHHUNLIN',
    description: 'Full Stack Developer',
    images: [
      {
        url: 'https://res.cloudinary.com/deszfzhei/image/upload/v1765553979/obw410azxlahu0p6hj0l.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ON CHHUNLIN',
    description: 'Full Stack Developer',
    images: ['https://res.cloudinary.com/deszfzhei/image/upload/v1765553979/obw410azxlahu0p6hj0l.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
