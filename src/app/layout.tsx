import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adam Schroeder | Software Developer",
  description:
    "Adam Schroeder is a Minnesota-based software developer specializing in frontend, cloud and AI-assisted development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plexMono.className}>{children}</body>
    </html>
  );
}
