import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { VehicleListContext } from "../../context/VehicleListContext";

const Navbar = (props) => {
  const { user} = useContext(UserContext);
  const { vehicles } = useContext(VehicleListContext);
  console.log("vehicles--list",vehicles);
  return (
    <nav className="navbar navbar-expand-lg">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="company-title" onClick={() => props.history.push("/")}>
          Zen3 AutoMobiles
        </div>
        <div className="navbar-nav ml-auto">
          <ul>
            <li>{user ? user : ""}</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
