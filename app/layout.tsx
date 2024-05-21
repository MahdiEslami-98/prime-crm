import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/main-layout/header";
import FooterComponent from "@/components/main-layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prime-CRM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={inter.className + " flex h-full flex-col"}>
        <HeaderComponent />
        <div className="container mx-auto flex-1 px-4">{children}</div>
        <FooterComponent />
      </body>
    </html>
  );
}
