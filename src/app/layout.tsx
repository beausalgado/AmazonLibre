import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/header"
import "./ui/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AmazonLibre",
  description: "Amazon and MercadoLibre",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta charSet="utf-8"></meta>
      <link rel="icon" href="./favicon.png" type="image/x-icon"></link>
      <body className={inter.className}>
      <Header/>
        {children}</body>
    </html>
  );
}


