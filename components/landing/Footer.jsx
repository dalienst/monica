import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="container-fluid footer py-3">
      <section className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12 mb-3">
            <h4>Monica Tours & Safari</h4>
            <p>
              Explore unforgettable adventures with Monica Tours & Safaris.
              Discover breathtaking destinations, customized excursions, and
              seamless booking experiences. Your journey starts here!
            </p>
          </div>

          <div className="col-md-4 col-sm-12 mb-3">
            <h4>Quick Links</h4>
            <hr className="text-white" />
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link href="/">Home</Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="/">About Us</Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="/">Excursions</Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="/">Sights</Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="/">FAQ</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4 col-sm-12 mb-3">
            <h4>Contact</h4>
            <hr className="text-white" />
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link href="/" className="nav-link p-0 text-white">
                  <i className="bi bi-envelope"></i> Email
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="/" className="nav-link p-0 text-white">
                  <i className="bi bi-telephone"></i> Phone
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="/" className="nav-link p-0 text-white">
                  <i className="bi bi-instagram"></i> Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
