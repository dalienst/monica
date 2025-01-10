"use client";
import LoadingSpinner from "@/components/general/LoadingSpinner";
import Header from "@/components/tours/Header";
import { useFetchAllTourDetail } from "@/hooks/tours/actions";
import React, { use } from "react";

function TourDetail({ params }) {
  const tourReference = use(params);
  const reference = tourReference?.tourReference;

  const {
    isLoading: isLoadingTour,
    data: tour,
    isError: isErrorTour,
    refetch: refetchTour,
  } = useFetchAllTourDetail(reference);

  console.log(tour);

  if (isLoadingTour) return <LoadingSpinner />;

  return (
    <>
      <Header
        image={tour?.image || "/ele.jpg"}
        title={tour?.title}
        desc={tour?.description}
      />
      <div className="container py-3 pb-5">
        <div className="row">
          <div className="col-md-8 col-sm-12 mb-3">
            <section className="mt-3 mb-3">
              <h2>{tour?.title}</h2>
            </section>

            <section className="mb-3">
              <h6>Rates</h6>
              <p>
                ${tour?.dollar} | €{tour?.euro} | £{tour?.pound}
              </p>
            </section>

            <section className="mb-3">
              <h6>Tour Details</h6>
              <p>
                <i className="bi bi-geo-alt" /> {tour?.duration} days
              </p>
              <p>
                <i className="bi bi-people" /> {tour?.capacity} people
              </p>
            </section>

            <section className="mb-3">
              <h6>Description</h6>
              <p>{tour?.description}</p>
            </section>
          </div>

          <div className="col-md-4 col-sm-12 mb-3">
            {/* add booking form */}
          </div>
        </div>
      </div>
    </>
  );
}

export default TourDetail;
