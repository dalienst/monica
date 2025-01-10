"use client";
import { topExcursions } from "@/data/excursions";
import { useFetchFeaturedTours } from "@/hooks/tours/actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TourCard from "../tours/TourCard";

function Excursions({ tours }) {
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
        <div className="row mb-3">
          {tours?.map((tour) => (
            <TourCard key={tour?.id} tour={tour} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/tours" className="btn action-btn rounded-pill btn-lg text-white fw-bold">
            Explore Tours
          </Link>
        </div>
      </section>
    </section>
  );
}

export default Excursions;
