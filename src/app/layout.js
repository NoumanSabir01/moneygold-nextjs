"use client";
import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import "react-tabs/style/react-tabs.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Money Gold",
  description: "Money Gold",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
