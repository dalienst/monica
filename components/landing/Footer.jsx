import { contacts } from "@/data/contact";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="footer py-5">
      <section className="container">
        <div className="row mb-3">
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
              {contacts?.map((contact) => (
                <li key={contact?.id} className="nav-item mb-2">
                  <Link
                    href={contact?.link}
                    className="nav-link p-0 text-white"
                  >
                    {contact?.icon} {contact?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-light small">Copyright &copy; 2025 Monica Tours & Safaris</p>
      </section>
    </div>
  );
}

export default Footer;
