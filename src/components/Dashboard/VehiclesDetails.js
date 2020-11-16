import React, { useContext } from "react";
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
import { VehicleListContext } from "../../context/VehicleListContext";
import { MaintenanceContext } from "../../context/MaintenanceContext";
// import {toTitleCase} from "./App.js"


const VehicleDetails = (props) => {
  const { vehicles } = useContext(VehicleListContext);
  const { setMaintenance } = useContext(MaintenanceContext);
  const gotoMaintenanceDetails = (vehicle, maintenance) => {
    setMaintenance({ vehicle, maintenance });
    props.history.push("/vehicle-maintenance");
  };


  
  const toTitleCase = (phrase) => {
    return phrase
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

 
  
  return (
    <div className="main-page">
      <div className="title">AutoMobiles</div>
      <Row>
        {vehicles && vehicles.length
          ? vehicles.map((vehicle) => {
              return (
                <Col sm="4">
                  <Card>
                    <CardBody >
                      <CardTitle tag="h5"  >{toTitleCase(vehicle.type)}</CardTitle>
                      <CardSubtitle tag="h6" className="mb-2 text-muted">
                        Model : {vehicle.model}
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
            })
          : null}
      </Row>
    </div>
  );
};

export default withRouter(VehicleDetails);
