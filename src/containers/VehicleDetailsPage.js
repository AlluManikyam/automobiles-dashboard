import React from "react";
import Navbar from "../components/Layouts/Navbar";
import VehiclesDetails from "../components/Dashboard/VehiclesDetails";
import Footer from "../components/Layouts/Footer";

function VehicleDetailsPage() {
  return (
    <div>
      <Navbar />
      <VehiclesDetails />
      <Footer />
    </div>
  );
}

export default VehicleDetailsPage;
