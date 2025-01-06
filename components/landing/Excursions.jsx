"use client";
import { topExcursions } from "@/data/excursions";
import Image from "next/image";
import React from "react";

function Excursions() {
  return (
    <section className="py-5" id="top-excursions">
      <div className="text-center">
        <h5 className="fw-bold text-uppercase about-heading">
          Excursions & Safaris
        </h5>
        <h2>Our Top Excursions</h2>
        <hr className="about-hr w-25 m-auto border-5" />
      </div>

      <section className="container py-5">
        <div className="row">
          {topExcursions?.map((item) => (
            <div key={item?.id} className="col-sm-6 col-md-4 mb-3">
              <div className="card exc-card h-100">
                <Image
                  src={item?.image}
                  className="card-img-top img-fluid"
                  width={300}
                  height={200}
                  alt={`${item?.title} Image`}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{item?.title}</h5>
                  <p className="card-pricing">
                    {item?.dollar} | {item?.euro} | {item?.pound}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Excursions;
