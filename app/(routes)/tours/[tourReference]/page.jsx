"use client";
import LoadingSpinner from "@/components/general/LoadingSpinner";
import Header from "@/components/tours/Header";
import CreateBooking from "@/forms/bookings/CreateBooking";
import { useFetchAllTourDetail } from "@/hooks/tours/actions";
import React, { use, useState } from "react";
import Modal from "react-bootstrap/Modal";

function TourDetail({ params }) {
  const tourReference = use(params);
  const reference = tourReference?.tourReference;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    isLoading: isLoadingTour,
    data: tour,
    isError: isErrorTour,
    refetch: refetchTour,
  } = useFetchAllTourDetail(reference);

  if (isLoadingTour) return <LoadingSpinner />;

  return (
    <>
      <Header
        image={tour?.image || "/ele.jpg"}
        title={tour?.title}
        desc={tour?.description}
      />
      <div className="container py-5">
        <div className="card h-100 p-4">
          <section className="mb-3 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
            <div className="mb-sm-1">
              <h2 className="mb-3 text-primary">{tour?.title}</h2>
            </div>

            <button className="btn auth-btn btn-sm" onClick={handleShow}>
              Book Tour
            </button>

            <Modal
              show={show}
              onHide={handleClose}
              dialogClassName="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg"
            >
              <div className="modal-header">
                <h5 className="modal-title">Book Tour: {tour?.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                ></button>
              </div>

              <div className="modal-body">
                <CreateBooking tour={tour} closeModal={handleClose} />
              </div>
            </Modal>
          </section>

          <section className="mb-3">
            <h6 className="text-secondary">Rates</h6>
            <p className="fs-5">
              <strong>${tour?.dollar}</strong> | €{tour?.euro}
            </p>
          </section>

          <section className="mb-3">
            <h6 className="text-secondary">Tour Details</h6>
            <p>
              <i className="bi bi-geo-alt text-primary" /> {tour?.duration} days
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
    </>
  );
}

export default TourDetail;
