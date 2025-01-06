import About from "@/components/landing/About";
import Excursions from "@/components/landing/Excursions";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Navbar from "@/components/landing/Navbar";
import React from "react";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Excursions />
      <FAQ />
      <Footer />
    </>
  );
}

export default LandingPage;
