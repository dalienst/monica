"use client";
import Link from "next/link";
import React from "react";

function ToursTable({ tours }) {
  return (
    <>
      {tours?.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>€</th>
                <th>$</th>
                <th>£</th>
                <th>Discount</th>
                <th>Bookings</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tours?.map((tour, index) => (
                <tr key={tour?.id}>
                  <td>{index + 1}</td>
                  <td>{tour?.title}</td>
                  <td>€{tour?.euro}</td>
                  <td>${tour?.dollar}</td>
                  <td>£{tour?.pound}</td>
                  <td>{tour?.discount}%</td>
                  <td>{tour?.bookings?.length}</td>
                  <td>
                    <Link
                      href={`/admin/tours/${tour?.slug}`}
                      className="btn auth-btn btn-sm"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="alert alert-info">
          <i className="bi bi-info-circle"></i> No Tours Found
        </div>
      )}
    </>
  );
}

export default ToursTable;
