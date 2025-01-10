"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function TourCard({ tour }) {
  return (
    <div key={tour?.id} className="col-sm-6 col-md-4 mb-3">
      <Link
        className="card exc-card h-100 text-decoration-none"
        href={`/tours/${tour?.slug}`}
      >
        {tour?.image ? (
          <Image
            src={tour?.image}
            className="card-img-top img-fluid"
            width={300}
            height={200}
            alt="Tour Image"
          />
        ) : (
          <Image
            src="/balloon.jpg"
            className="card-img-top img-fluid"
            width={300}
            height={200}
            alt="Tour Image"
          />
        )}
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{tour?.title}</h5>
          <p className="card-pricing">
            ${tour?.dollar} | €{tour?.euro} | £{tour?.pound}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default TourCard;
