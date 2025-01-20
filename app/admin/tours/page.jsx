"use client";
import LoadingSpinner from "@/components/general/LoadingSpinner";
import ToursTable from "@/components/tours/ToursTable";
import AddTour from "@/forms/tours/AddTour";
import { useFetchTours } from "@/hooks/tours/actions";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function Tours() {
  const [show, setShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    isLoading: isLoadingTours,
    data: tours,
    refetch: refetchTours,
  } = useFetchTours();


  const filteredTours = tours?.filter((tour) =>
    tour?.title?.toLowerCase()?.includes(searchQuery.toLowerCase())
  );

  if (isLoadingTours) return <LoadingSpinner />;

  return (
    <div className="container-fluid">
      <section className="mb-3 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
        <div className="mb-1">
          <h3>Tour Packages</h3>
        </div>

        <button className="btn auth-btn" onClick={handleShow}>
          <i className="bi bi-plus-lg"></i>
        </button>

        <Modal
          show={show}
          onHide={handleClose}
          dialogClassName="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg"
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

      <section className="mb-3 col-md-3">
        <input
          type="search"
          name="search"
          id="search"
          className="form-control"
          placeholder="Search Tours"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </section>

      <section className="mb-3">
        <ToursTable tours={filteredTours} />
      </section>
    </div>
  );
}

export default Tours;
