import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adam",
  description: "Resume website for Adam Schroeder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
