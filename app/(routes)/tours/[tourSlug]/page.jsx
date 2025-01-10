import React, { use } from "react";

function TourDetail({ params }) {
  const tourSlug = use(params);
  const slug = tourSlug?.tourSlug;
  return <div>TourDetail</div>;
}

export default TourDetail;
