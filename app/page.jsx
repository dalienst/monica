import About from "@/components/landing/About";
import Excursions from "@/components/landing/Excursions";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Navbar from "@/components/landing/Navbar";
import React from "react";
import Contact from "@/components/landing/Contact";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Excursions />
      <Contact />
      <Footer />
    </>
  );
}

export default LandingPage;
