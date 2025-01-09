"use client";
import Navbar from "@/components/admin/Navbar";
import React from "react";

function AdminLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default AdminLayout;
