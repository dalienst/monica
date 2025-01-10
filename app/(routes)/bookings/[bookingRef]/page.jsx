"use client";
import LoadingSpinner from "@/components/general/LoadingSpinner";
import extractDate from "@/hooks/authentication/useDateFormat";
import { useClientGetBookingDetail } from "@/hooks/bookings/actions";
import React, { use } from "react";

function ClientBooking({ params }) {
  const bookingRef = use(params);
  const reference = bookingRef?.bookingRef;

  const {
    isLoading: isLoadingBooking,
    data: booking,
    isError: isErrorBooking,
    refetch: refetchBooking,
  } = useClientGetBookingDetail(reference);

  if (isLoadingBooking) return <LoadingSpinner />;

  return (
    <>
      <div className="container py-5 min-vh-100">
        <div className="card p-4">
          <section className="mb-3 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
            <div className="mb-3">
              <h5 className="mb-3 text-success">Booking Detail</h5>
              <h3>{booking?.name}</h3>
              <p className="mb-0">{booking?.email}</p>
              <p className="mb-0">{booking?.phone}</p>
            </div>

            <div>
              <p className="mb-0">Ref: #{booking?.reference}</p>
              <p className="mb-0">Status: {booking?.status}</p>
              <p className="mb-0">
                Booking Date: {extractDate(booking?.created_at)}
              </p>
            </div>
          </section>
          <hr />
          <section className="mb-3 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
            <div className="mb-3">
              <h5 className="mb-3 text-success">Tour Detail</h5>
              <h3>{booking?.tour_details?.title}</h3>
              <p className="mb-0">Tour Date: {booking?.dategit }</p>
              <p className="mb-0">Amount: {booking?.amount}</p>
              <p className="mb-0">Days: {booking?.tour_details?.duration}</p>
            </div>

            <div>
              <p className="mb-0">Currency: {booking?.currency}</p>
              <p className="mb-0">Payment Status: {booking?.payment_status}</p>
              <p className="mb-0">Payment Method: {booking?.payment_method}</p>
            </div>
          </section>

          <section className="mb-3">
            <h5 className="mb-3 text-success">Other Details</h5>
            <p className="mb-0">{booking?.guests} Guests</p>
            <p className="mb-0">
              Require Jeep: {booking?.request_jeep === true ? "Yes" : "No"}
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default ClientBooking;
