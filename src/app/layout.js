import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import "react-tabs/style/react-tabs.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Money Gold",
  description: "Money Gold",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script
          strategy="beforeInteractive"
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-pzjw5f+ua8n8PpGCF6F9B5dVsp+MHFq8hXj5xvFpOVzO4DBa8ksj1z9tOF0TA"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
