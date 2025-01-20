"use client";
import Link from "next/link";
import React from "react";

function BookingsTable({ bookings }) {
  return (
    <>
      {bookings?.length > 0 ? (
        <div className="card p-2">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tour</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Currency</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {bookings?.map((booking, index) => (
                  <tr key={booking?.id}>
                    <td>{index + 1}</td>
                    <td>{booking?.tour_details?.title}</td>
                    <td>{booking?.name}</td>
                    <td>{booking?.email}</td>
                    <td>{booking?.phone}</td>
                    <td>{booking?.date}</td>
                    <td>{booking?.amount}</td>
                    <td>{booking?.currency}</td>
                    <td>
                      <span
                        className={`badge ${
                          booking?.status === "Confirmed"
                            ? "bg-success"
                            : "bg-warning text-dark"
                        }`}
                      >
                        {booking?.status}
                      </span>
                    </td>
                    <td>
                      <Link
                        href={`/admin/bookings/${booking?.slug}`}
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
        </div>
      ) : (
        <div className="alert alert-info">
          <i className="bi bi-info-circle"></i> No Bookings Found
        </div>
      )}
    </>
  );
}

export default BookingsTable;
