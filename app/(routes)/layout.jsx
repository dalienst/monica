"use client";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import React from "react";

function BaseLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default BaseLayout;
