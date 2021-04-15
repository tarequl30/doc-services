import React from "react";
import AppointmentService from "./AppoinmentService/AppointmentService";
import FeatureService from "./FeatureService/FeatureService";
import Header from "./Header/Header";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <FeatureService />
      <AppointmentService />
    </div>
  );
};

export default Home;
