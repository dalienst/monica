"use client";
import LoadingSpinner from "@/components/general/LoadingSpinner";
import { useFetchProfile } from "@/hooks/accounts/actions";
import { useFetchBookings } from "@/hooks/bookings/actions";
import Link from "next/link";
import React from "react";

function Dashboard() {
  const {
    isLoading: isLoadingUser,
    data: user,
    isError: isErrorUser,
    refetch: refetchUser,
  } = useFetchProfile();

  const {
    isLoading: isLoadingBookings,
    data: bookings,
    isError: isErrorBookings,
    refetch: refetchBookings,
  } = useFetchBookings();


  if (isLoadingUser || isLoadingBookings) return <LoadingSpinner />;

  return (
    <div className="container-fluid">
      <section className="mt-3">
        <div className="row">
          <div className="col-md-4 col-sm-12 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-text">{user?.name}</h5>
                <p className="card-text">{user?.email}</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-12 mb-3">
            <Link href="/admin/tours" className="card h-100 text-decoration-none">
              <div className="card-body">
                <h5 className="card-text">{user?.tours?.length}</h5>
                <p className="card-text">Tour Packages</p>
              </div>
            </Link>
          </div>

          <div className="col-md-4 col-sm-12 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-text">{bookings?.length}</h5>
                <p className="card-text">Bookings</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
