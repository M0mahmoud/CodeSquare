import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Hydration Error
// import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoderSquare",
  description: "CoderSquare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
