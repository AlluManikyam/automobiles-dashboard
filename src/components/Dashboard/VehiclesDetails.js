import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const VehicleDetails = (props) => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    let vehicles = JSON.parse(localStorage.getItem("vehicles"));
    if (vehicles.length) {
      setVehicles(vehicles);
    }
  },[]);

  const gotoMaintenanceDetails = (vehicle, maintenance) => {
    localStorage.setItem("vehicle", JSON.stringify(vehicle));
    localStorage.setItem("maintenance", JSON.stringify(maintenance));
    props.history.push("/vehicle-maintenance");
  };

  return (
    <div className="main-page">
      <div className="title">AutoMobiles</div>
      <Row>
        {vehicles &&
          vehicles.length &&
          vehicles.map((vehicle) => {
            return (
              <Col sm="4">
                <Card>
                  <CardBody>
                    <CardTitle tag="h5">{vehicle.type}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      {vehicle.model}
                    </CardSubtitle>
                    <Button
                      color="info"
                      onClick={() =>
                        gotoMaintenanceDetails(vehicle, vehicle.maintenance)
                      }
                    >
                      Maintenance
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};
// }

export default withRouter(VehicleDetails);
