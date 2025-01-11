"use client";
import LoadingSpinner from "@/components/general/LoadingSpinner";
import { useFetchBookings } from "@/hooks/bookings/actions";
import React from "react";

function Bookings() {
  const {
    isLoading: isLoadingBookings,
    data: bookings,
    refetch: refetchBookings,
  } = useFetchBookings();

  console.table(bookings);

  if (isLoadingBookings) return <LoadingSpinner />;

  return (
    <div className="container-fluid min-vh-100">

    </div>
  )
}

export default Bookings;
