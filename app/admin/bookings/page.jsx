"use client";
import BookingsTable from "@/components/bookings/BookingsTable";
import LoadingSpinner from "@/components/general/LoadingSpinner";
import { useFetchBookings } from "@/hooks/bookings/actions";
import React from "react";

function Bookings() {
  const {
    isLoading: isLoadingBookings,
    data: bookings,
    refetch: refetchBookings,
  } = useFetchBookings();

  if (isLoadingBookings) return <LoadingSpinner />;

  return (
    <div className="container-fluid min-vh-100">
      <section className="mb-3 mt-3">
        <h3>Bookings</h3>
      </section>

      <section className="mb-3">
        <BookingsTable bookings={bookings} />
      </section>
    </div>
  );
}

export default Bookings;
