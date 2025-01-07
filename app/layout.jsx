"use client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import BootstrapClient from "@/providers/BootstrapClient";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import React from "react";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import NextAuthProvider from "@/providers/NextAuthProvider";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Monica Tours & Safaris</title>
        <meta
          name="description"
          content="Explore unforgettable adventures with Monica Tours & Safaris. Discover breathtaking destinations, customized excursions, and seamless booking experiences. Your journey starts here!"
        />
      </head>
      <body>
        <Toaster position="top-center" />
        <NextAuthProvider>
          <TanstackQueryProvider>{children}</TanstackQueryProvider>
        </NextAuthProvider>
        <BootstrapClient />
      </body>
    </html>
  );
}

export default RootLayout;
