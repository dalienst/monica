"use client";
import LoadingSpinner from "@/components/general/LoadingSpinner";
import Header from "@/components/tours/Header";
import TourCard from "@/components/tours/TourCard";
import { useFetchAllTours } from "@/hooks/tours/actions";
import React from "react";

function Tours() {
  const {
    isLoading: isLoadingTours,
    data: tours,
    refetch: refetchTours,
  } = useFetchAllTours();

  if (isLoadingTours) return <LoadingSpinner />;

  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="row mb-3">
          {tours?.map((tour) => (
            <TourCard key={tour?.id} tour={tour} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Tours;
