import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { AutoMobilesContext } from "../../context/AutoMobilesContext";

const Navbar = (props) => {
  const { automobiles} = useContext(AutoMobilesContext);
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
            <li>{automobiles.user ? automobiles.user : ""}</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
