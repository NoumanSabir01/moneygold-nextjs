// "use client";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { Inter } from "next/font/google";
// import { useEffect } from "react";
import "react-tabs/style/react-tabs.css";
import "./globals.css";
import("bootstrap/dist/js/bootstrap");

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Money Gold",
  description: "Money Gold",
};

export default function RootLayout({ children }) {
  // useEffect(() => {

  // }, []);
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
