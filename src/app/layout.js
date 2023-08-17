"use client";
import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import { useEffect } from "react";
import "react-tabs/style/react-tabs.css";
import "./globals.css";

const metadata = {
  title: "Money Gold",
  description: "Money Gold",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap.min.js")
      : null;
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
