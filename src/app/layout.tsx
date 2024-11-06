import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Layout from "@/common/layout";

const dohyeon = localFont({
  src: "./fonts/BMDOHYEON_ttf.ttf",
  variable: "--font-dohyeon",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tripper",
  description: "인생을 여행하는 Tripper들을 위한 커뮤니티",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dohyeon.variable} w-screen`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
