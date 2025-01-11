import { contacts, paymentMethods } from "@/data/contact";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="footer py-5">
      <section className="container">
        <div className="row mb-3">
          <div className="col-md-4 col-sm-12 mb-3">
            <Image
              src="/logoblackNoBg.png"
              alt="Monica Tours & Safaris"
              width={100}
              height={100}
            />
            <h4>Monica Tours & Safari</h4>
            <p>
              Explore unforgettable adventures with Monica Tours & Safaris.
              Discover breathtaking destinations, customized excursions, and
              seamless booking experiences. Your journey starts here!
            </p>
            <div className="mb-3 mt-3">
              {paymentMethods?.map((method) => (
                <Image
                  src={method?.image}
                  alt={method?.title}
                  key={method?.id}
                  width={48}
                  height={48}
                />
              ))}
            </div>
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
        <hr />
        <div className="row">
          <p className="text-light small col-md-6 col-sm-12">
            Copyright &copy; 2025 Monica Tours & Safaris
          </p>
          <p className="text-light small col-md-6 col-sm-12 text-md-end">
            Powered by Corban Technologies
          </p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
