import React, { useState, useMemo } from "react";
import "./App.css";
import DashboardPage from "./containers/DashboardPage";
import VehicleDetailsPage from "./containers/VehicleDetailsPage";
import VehicleMaintenancePage from "./containers/VehicleMaintenancePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AutoMobilesContext } from "./context/AutoMobilesContext";

function App() {
  const [automobiles, setAutomobiles] = useState({});
  const automobilesData = useMemo(() => ({ automobiles, setAutomobiles }), [
    automobiles,
    setAutomobiles,
  ]);

  return (
    <Router>
      <Switch>
        <AutoMobilesContext.Provider value={automobilesData}>
          <Route exact path="/" component={DashboardPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/vehicle-details" component={VehicleDetailsPage} />
          <Route
            path="/vehicle-maintenance"
            component={VehicleMaintenancePage}
          />
        </AutoMobilesContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
