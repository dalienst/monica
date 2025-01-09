"use client";
import LoadingSpinner from "@/components/general/LoadingSpinner";
import { useFetchProfile } from "@/hooks/accounts/actions";
import React from "react";

function Dashboard() {
  const {
    isLoading: isLoadingUser,
    data: user,
    isError: isErrorUser,
    refetch: refetchUser,
  } = useFetchProfile();

  console?.table(user);

  if (isLoadingUser) return <LoadingSpinner />;

  return <div className="container-fluid">Dashboard</div>;
}

export default Dashboard;
