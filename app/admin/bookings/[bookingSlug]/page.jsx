"use client";
import LoadingSpinner from "@/components/general/LoadingSpinner";
import UpdateBooking from "@/forms/bookings/UpdateBooking";
import { useFetchBookingDetail } from "@/hooks/bookings/actions";
import Link from "next/link";
import React, { use, useState } from "react";
import Modal from "react-bootstrap/Modal";

function BookingDetail({ params }) {
  const bookingSlug = use(params);
  const slug = bookingSlug?.bookingSlug;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    isLoading: isLoadingBooking,
    data: booking,
    isError: isErrorBooking,
    refetch: refetchBooking,
  } = useFetchBookingDetail(slug);

  if (isLoadingBooking) return <LoadingSpinner />;

  return (
    <>
      <div className="container-fluid min-vh-100 py-4">
        {/* Breadcrumb Navigation */}
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

        {/* Booking Information Section */}
        <div className="card shadow p-4">
          <section className="mb-3 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
            <h3 className="text-primary">Booking Details</h3>
            {/* Update Button */}
            <button className="btn btn-primary btn-sm" onClick={handleShow}>
              Update Booking
            </button>

            <Modal
              show={show}
              onHide={handleClose}
              dialogClassName="modal-dialog modal-dialog-scrollable modal-dialog-centered"
            >
              <div className="modal-header">
                <h5 className="modal-title">
                  Update Booking: {booking?.reference}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                ></button>
              </div>

              <div className="modal-body">
                <UpdateBooking
                  booking={booking}
                  slug={slug}
                  refetch={refetchBooking}
                  closeModal={handleClose}
                />
              </div>
            </Modal>
          </section>

          <hr />

          <section className="mb-4">
            <div className="row">
              <div className="col-md-6">
                <p>
                  <strong>Name:</strong> {booking?.name}
                </p>
                <p>
                  <strong>Email:</strong> {booking?.email}
                </p>
                <p>
                  <strong>Phone:</strong> {booking?.phone}
                </p>
                <p>
                  <strong>Guests:</strong> {booking?.guests}
                </p>
                <p>
                  <strong>Status:</strong> {booking?.status}
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  <strong>Reference:</strong> {booking?.reference}
                </p>
                <p>
                  <strong>Date:</strong> {booking?.date}
                </p>
                <p>
                  <strong>Payment Status:</strong> {booking?.payment_status}
                </p>
                <p>
                  <strong>Payment Method:</strong> {booking?.payment_method}
                </p>
                <p>
                  <strong>Currency:</strong> {booking?.currency}
                </p>
                <p>
                  <strong>Amount:</strong> {booking?.amount}
                </p>
              </div>
            </div>
          </section>

          <hr />

          {/* Tour Information Section */}
          <section className="mb-4">
            <h3 className="text-success">Tour Details</h3>
            <p>
              <strong>Title:</strong> {booking?.tour_details?.title}
            </p>
            <p>
              <strong>Description:</strong> {booking?.tour_details?.description}
            </p>
            <p>
              <strong>Duration:</strong> {booking?.tour_details?.duration} days
            </p>
            <p>
              <strong>Capacity:</strong> {booking?.tour_details?.capacity}{" "}
              people
            </p>
            <p>
              <strong>Tour Reference:</strong>{" "}
              {booking?.tour_details?.reference}
            </p>
          </section>

          <hr />

          {/* Special Requests Section */}
          <section>
            <h3 className="text-warning">Special Requests</h3>
            <p>
              {booking?.special_requests || "No special requests provided."}
            </p>
            <p>
              <strong>Jeep Required:</strong>{" "}
              {booking?.request_jeep ? "Yes" : "No"}
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default BookingDetail;
