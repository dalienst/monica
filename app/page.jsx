"use client";
import About from "@/components/landing/About";
import Excursions from "@/components/landing/Excursions";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Navbar from "@/components/landing/Navbar";
import React from "react";
import Contact from "@/components/landing/Contact";
import { useFetchFeaturedTours } from "@/hooks/tours/actions";
import LoadingSpinner from "@/components/general/LoadingSpinner";

function LandingPage() {
  const {
    isLoading: isLoadingTours,
    data: tours,
    refetch: refetchTours,
  } = useFetchFeaturedTours();

  if (isLoadingTours) return <LoadingSpinner />;

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Excursions tours={tours} />
      <Contact />
      <Footer />
    </>
  );
}

export default LandingPage;
