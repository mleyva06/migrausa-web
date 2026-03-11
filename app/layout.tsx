import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "American Solutions Center LLC",
  description:
    "Track your USCIS and EOIR immigration cases in real time. Get instant status updates, analyze statistics, and get AI-powered assistance — all in one app by American Solutions Center LLC.",
  keywords: [
    "USCIS",
    "EOIR",
    "case tracker",
    "immigration",
    "case status",
    "American Solutions Center",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
