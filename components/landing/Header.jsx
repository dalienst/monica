"use client";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="container-fluid header-bg mb-3 d-flex flex-column align-items-center justify-content-center text-center mx-auto">
      <div>
        <h1>Explore the Wild Like Never Before!</h1>
      </div>

      <div>
        {/* <h6>Tailored tours for unforgettable adventures.</h6> */}
        <h6>
          Explore stunning landscapes, encounter incredible wildlife, and create
          memories that will last a lifetime. Whether you're seeking adventure
          or relaxation, we offer personalized tours designed to provide you
          with the ultimate experience in the wild.
        </h6>
      </div>

      <div>
        <Link href="/" className="btn btn-primary me-3">
          Explore Tours
        </Link>
        <Link href="/" className="btn btn-secondary">
          Book A Trip
        </Link>
      </div>
    </div>
  );
}

export default Header;
