import React from "react";
import Navbar from "../components/Layouts/Navbar";
import VehiclesDetails from "../components/Dashboard/VehicleMaintenance";
import Footer from "../components/Layouts/Footer";

function VehicleMaintenancePage() {
  return (
    <div>
      <Navbar />
      <VehiclesDetails />
      <Footer />
    </div>
  );
}

export default VehicleMaintenancePage;
