import React, { Component } from "react";
import "./App.css";
import DashboardPage from "./containers/DashboardPage";
import VehicleDetailsPage from "./containers/VehicleDetailsPage";
import VehicleMaintenancePage from "./containers/VehicleMaintenancePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/vehicle-details" component={VehicleDetailsPage} />
          <Route path="/vehicle-maintenance" component={VehicleMaintenancePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
