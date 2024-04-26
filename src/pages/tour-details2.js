import Layout from "@/components/Layout/Layout";
import MainSliderTwo from "@/components/MainSliderTwo/MainSliderTwo";
import TourDetailsPage2 from "@/components/TourDetails/TourDetailsPage2";
import React from "react";

const TourDetails = () => {
  return (
    <Layout pageTitle="Tours Details">
      <MainSliderTwo />
      <TourDetailsPage2 />
    </Layout>
  );
};

export default TourDetails;
