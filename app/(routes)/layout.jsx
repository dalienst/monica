"use client";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import Link from "next/link";
import React from "react";

function BaseLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />

      <Link
        href="https://wa.me/254788089205"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-whatsapp"></i>
      </Link>
    </div>
  );
}

export default BaseLayout;
