"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="navbar navbar-expand-md sticky-top border-bottom bg-white">
      <div className="container-fluid">
        <Link href="/admin/dashboard" className="navbar-brand">
          Admin Panel
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
              <Link href="/admin/dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/admin/tours" className="nav-link">
                Tours
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/admin/bookings" className="nav-link">
                Bookings
              </Link>
            </li>

            <li className="nav-item">
              <button
                onClick={() => signOut()}
                className="nav-link text-danger"
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
