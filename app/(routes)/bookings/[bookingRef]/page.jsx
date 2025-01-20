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
        <div className="card shadow-lg border-0 p-4">
          {/* Booking Details */}
          <section className="mb-4">
            <h5 className="text-success fw-bold mb-3">Booking Details</h5>
            <div className="row">
              <div className="col-md-6 mb-3">
                <h3 className="fw-bold">{booking?.name}</h3>
                <p className="text-muted mb-1">{booking?.email}</p>
                <p className="text-muted mb-1">{booking?.phone}</p>
              </div>
              <div className="col-md-6 text-md-end">
                <p className="mb-1">
                  <strong>Ref:</strong> #{booking?.reference}
                </p>
                <p className="mb-1">
                  <strong>Status:</strong>{" "}
                  <span
                    className={`badge ${
                      booking?.status === "Confirmed"
                        ? "bg-success"
                        : booking?.status === "Cancelled"
                        ? "bg-danger"
                        : "bg-warning"
                    }`}
                  >
                    {booking?.status}
                  </span>
                </p>
                <p className="mb-1">
                  <strong>Booking Date:</strong>{" "}
                  {extractDate(booking?.created_at)}
                </p>
              </div>
            </div>
          </section>
          <hr />

          {/* Tour Details */}
          <section className="mb-4">
            <h5 className="text-success fw-bold mb-3">Tour Details</h5>
            <div className="row">
              <div className="col-md-6 mb-3">
                <h3 className="fw-bold">{booking?.tour_details?.title}</h3>
                <p className="text-muted mb-1">
                  <strong>Tour Date:</strong> {booking?.date}
                </p>
                <p className="text-muted mb-1">
                  <strong>Amount:</strong> {booking?.amount} {booking?.currency}
                </p>
                <p className="text-muted mb-1">
                  <strong>Days:</strong> {booking?.tour_details?.duration}
                </p>
              </div>
              <div className="col-md-6 text-md-end">
                <p className="mb-1">
                  <strong>Currency:</strong> {booking?.currency}
                </p>
                <p className="mb-1">
                  <strong>Payment Status:</strong>{" "}
                  <span
                    className={`badge ${
                      booking?.payment_status === "Paid"
                        ? "bg-success"
                        : booking?.payment_status === "Refunded"
                        ? "bg-info"
                        : "bg-danger"
                    }`}
                  >
                    {booking?.payment_status}
                  </span>
                </p>
                <p className="mb-1">
                  <strong>Payment Method:</strong> {booking?.payment_method}
                </p>
              </div>
            </div>
          </section>
          <hr />

          {/* Other Details */}
          <section className="mb-4">
            <h5 className="text-success fw-bold mb-3">Other Details</h5>
            <p className="text-muted mb-1">
              <strong>Adults:</strong> {booking?.adults}
            </p>
            <p className="text-muted mb-1">
              <strong>Kids:</strong> {booking?.kids}
            </p>
            <p className="text-muted mb-1">
              <strong>Require Jeep:</strong>{" "}
              {booking?.request_jeep === true ? "Yes" : "No"}
            </p>
            {booking?.special_requests && (
              <>
                <p className="text-muted mb-1">
                  <strong>Special Requests:</strong>
                </p>
                <p className="text-muted">{booking?.special_requests}</p>
              </>
            )}
          </section>

          <p className="mt-3 small fst-italic text-muted">
            *You can track your booking here
          </p>
        </div>
      </div>
    </>
  );
}

export default ClientBooking;
