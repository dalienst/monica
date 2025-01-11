"use client";
import LoadingSpinner from "@/components/general/LoadingSpinner";
import { useFetchBookingDetail } from "@/hooks/bookings/actions";
import Link from "next/link";
import React, { use } from "react";

function BookingDetail({ params }) {
  const bookingSlug = use(params);
  const slug = bookingSlug?.bookingSlug;

  const {
    isLoading: isLoadingBooking,
    data: booking,
    isError: isErrorBooking,
    refetch: refetchBooking,
  } = useFetchBookingDetail(slug);

  if (isLoadingBooking) return <LoadingSpinner />;

  return (
    <>
      <div className="container-fluid min-vh-100">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/admin/bookings">Bookings</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {booking?.reference}
            </li>
          </ol>
        </nav>
        <section className="mb-3 mt-3">
          <h3>Booking: {booking?.name}</h3>
        </section>
      </div>
    </>
  );
}

export default BookingDetail;
