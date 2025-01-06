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
            <div key={item?.id} className="about-card mb-3 p-2 rounded-3">
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
            Embark on an unforgettable journey with Monica Tours & Safaris.
            Explore stunning landscapes, encounter incredible wildlife, and
            create memories that will last a lifetime. Whether you're seeking
            adventure or relaxation, we offer personalized tours designed to
            provide you with the ultimate experience in the wild.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
