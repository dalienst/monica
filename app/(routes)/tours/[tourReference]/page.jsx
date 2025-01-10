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
          {/* Tour Details Section */}
          <div className="col-md-8 col-sm-12 mb-3">
            <div className="card h-100 p-4">
              <section className="mb-3">
                <h2 className="mb-3 text-primary">{tour?.title}</h2>
              </section>

              <section className="mb-3">
                <h6 className="text-secondary">Rates</h6>
                <p className="fs-5">
                  <strong>${tour?.dollar}</strong> | €{tour?.euro} | £
                  {tour?.pound}
                </p>
              </section>

              <section className="mb-3">
                <h6 className="text-secondary">Tour Details</h6>
                <p>
                  <i className="bi bi-geo-alt text-primary" /> {tour?.duration}{" "}
                  days
                </p>
                <p>
                  <i className="bi bi-people text-primary" /> {tour?.capacity}{" "}
                  people
                </p>
              </section>

              <section className="mb-3">
                <h6 className="text-secondary">Description</h6>
                <p>{tour?.description}</p>
              </section>
            </div>
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
