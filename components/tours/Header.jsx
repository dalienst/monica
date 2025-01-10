import React from "react";

function Header({ image, title, desc }) {
  return (
    <div
      className="container-fluid tour-bg d-flex flex-column align-items-center justify-content-center text-center mx-auto"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div>
        <h1>{title}</h1>
      </div>

      <div>
        <h6>{desc}</h6>
      </div>
    </div>
  );
}

export default Header;
