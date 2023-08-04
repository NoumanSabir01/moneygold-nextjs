"use client";
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
