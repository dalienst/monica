"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="navbar navbar-expand-md sticky-top border-bottom bg-white">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          Monica Tours & Safaris
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
          aria-controls="collapsibleNavbar"
        >
          <i className="bi bi-list text-dark"></i>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/tours" className="nav-link">
                Tours
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/#about-us" className="nav-link">
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/#contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
