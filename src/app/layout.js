import React from "react";
import { ReduxProvider } from "./store/Providers";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>MovieFlix</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ReduxProvider>
          <Navbar />
          <div style={{ paddingTop: "60px" }}>{children}</div>{" "}
        </ReduxProvider>
      </body>
    </html>
  );
}
