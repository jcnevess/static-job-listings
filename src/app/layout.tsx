import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Job Listings",
  description: "A Job Listings Page",
};

const leagueSpartan = League_Spartan({
  weight: ["500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>{children}</body>
    </html>
  );
}
