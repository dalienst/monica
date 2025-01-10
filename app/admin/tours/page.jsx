"use client";
import LoadingSpinner from "@/components/general/LoadingSpinner";
import AddTour from "@/forms/tours/AddTour";
import { useFetchTours } from "@/hooks/tours/actions";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function Tours() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    isLoading: isLoadingTours,
    data: tours,
    refetch: refetchTours,
  } = useFetchTours();

  console.table(tours)

  if (isLoadingTours) return <LoadingSpinner />;

  return (
    <div className="container-fluid">
      <section className="d-flex justify-content-between align-items-center mt-3 mb-3">
        <div className="mb-1">
          <h3>Tour Packages</h3>
        </div>

        <button className="btn auth-btn" onClick={handleShow}>
          <i className="bi bi-plus-lg"></i>
        </button>

        <Modal
          show={show}
          onHide={handleClose}
          dialogClassName="modal-dialog modal-dialog-scrollable modal-dialog-centered"
        >
          <div className="modal-header">
            <h5 className="modal-title">Add Tour Package</h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
            ></button>
          </div>

          <div className="modal-body">
            <AddTour refetch={refetchTours} closeModal={handleClose} />
          </div>
        </Modal>
      </section>
    </div>
  );
}

export default Tours;
