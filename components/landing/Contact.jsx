"use client";
import { faq } from "@/data/contact";
import React from "react";

function Contact() {
  return (
    <section className="py-5 bg-white" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <h5 className="fw-bold text-uppercase about-heading">FAQ</h5>
            <h2>Frequently Asked Questions</h2>
            <hr className="about-hr w-25 border-5" />

            <div className="accordion accordion-flush" id="accordionFlushOne">
              {faq?.map((item) => (
                <div key={item?.id} className="accordion-item">
                  <h3 className="accordion-header fw-semibold">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${item.id}`}
                      aria-expanded="false"
                      aria-controls={item.id}
                    >
                      {item.question}
                    </button>
                  </h3>
                  <div
                    id={item.id}
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushOne"
                  >
                    <div className="accordion-body">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
