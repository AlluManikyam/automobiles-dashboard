import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import VehiclesDetails from "../components/Dashboard/VehiclesDetails";
import Footer from "../components/Layouts/Footer";

class VehicleDetailsPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <VehiclesDetails />
        <Footer />
      </div>
    );
  }
}

export default VehicleDetailsPage;
