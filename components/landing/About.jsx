"use client";
import Link from "next/link";
import React from "react";

const whyUs = [
  {
    id: 1,
    title: "Safety First",
    desc: "We prioritize your safety and well-being above all.",
    icon: <i className="bi bi-cone-striped"></i>,
  },
  {
    id: 2,
    title: "Personalized Tours",
    desc: "Every adventure is customized to your interests.",
    icon: <i className="bi bi-bus-front"></i>,
  },
  {
    id: 3,
    title: "Sustainability",
    desc: "We care about preserving the environment.",
    icon: <i className="bi bi-recycle"></i>,
  },
];

function About() {
  return (
    <section id="about-us" className="about-us py-4 container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h5 className="fw-bold text-uppercase about-heading">About Us</h5>
          <h2>Why Choose Monica Tours & Safaris</h2>
          <hr className="about-hr w-25 border-5" />
          {whyUs?.map((item) => (
            <div
              key={item?.id}
              className="about-card mb-3 p-2 rounded-3 border"
            >
              <div className="d-flex gap-2">
                {item?.icon}
                <div>
                  <h6>{item?.title}</h6>
                  <p>{item?.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-md-6 col-sm-12">
          <p>
            At Monica Tours & Safaris, we are committed to delivering
            exceptional travel experiences that connect you with the natural
            world. Our tours are designed to inspire, educate, and leave you
            with lifelong memories. Whether you're venturing deep into the heart
            of the savannah, trekking through lush rainforests, or witnessing
            breathtaking sunsets over vast landscapes, we promise an adventure
            like no other.
          </p>
          <p>
            Our team of expert guides brings unmatched knowledge of local
            wildlife, ecosystems, and cultures to ensure that every moment of
            your journey is enriching. We take pride in crafting personalized
            itineraries that cater to your unique preferences, whether you're a
            solo traveler seeking tranquility, a couple looking for romance, or
            a family eager for shared discoveries.
          </p>
          <p>
            Let us take care of the details while you immerse yourself in the
            magic of the wild. With Monica Tours & Safaris, every journey is a
            story waiting to be told.
          </p>
          <Link href="/" className="btn action-btn rounded-pill btn-lg ">
            Explore Tours
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
