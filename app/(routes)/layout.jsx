"use client";
import Navbar from "@/components/landing/Navbar";
import React from "react";

function BaseLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default BaseLayout;
