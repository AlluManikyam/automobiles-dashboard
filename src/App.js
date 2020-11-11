import React, { useState, useMemo } from "react";
import "./App.css";
import DashboardPage from "./containers/DashboardPage";
import VehicleDetailsPage from "./containers/VehicleDetailsPage";
import VehicleMaintenancePage from "./containers/VehicleMaintenancePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { VehicleListContext } from "./context/VehicleListContext";
import { MaintenanceContext } from "./context/MaintenanceContext";

function App() {
  const [user, setUser] = useState(null);
  const [vehicles, setVehicles] = useState([]);
  const [ maintenance, setMaintenance] = useState({});

  const userInfo = useMemo(() => ({ user, setUser }), [user, setUser]);
  const vehiclesList = useMemo(() => ({ vehicles, setVehicles }), [vehicles, setVehicles]);
  const vehicleMaintenance = useMemo(() => ({ maintenance, setMaintenance }), [ maintenance, setMaintenance]);

  return (
    <Router>
      <Switch>
        <UserContext.Provider value={userInfo}>
        <VehicleListContext.Provider  value={vehiclesList}>
        <MaintenanceContext.Provider  value={vehicleMaintenance}>
          <Route exact path="/" component={DashboardPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/vehicle-details" component={VehicleDetailsPage} />
          <Route
            path="/vehicle-maintenance"
            component={VehicleMaintenancePage}
          />
        </MaintenanceContext.Provider>
        </VehicleListContext.Provider>
        </UserContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
