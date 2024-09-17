import type { Metadata } from "next";
import "./globals.css";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import ToastBox from "@/components/common/Toast";

const outfit = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saha Sheikh Abubakr Egypt",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <ToastBox/>{children}</body>
    </html>
  );
}
