import type { Metadata } from "next";
import {Noto_Sans} from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ['latin'], // Required subsets
  display: 'swap',   // Optional: ensures text is visible while font loads
  variable: '--font-noto-sans', // Optional: for use with CSS variables (e.g., in Tailwind CSS)
});



export const metadata: Metadata = {
  title: "byamadeus",
  description: "by amadeus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
