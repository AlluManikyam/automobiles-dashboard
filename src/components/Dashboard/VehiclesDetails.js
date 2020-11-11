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

const VehicleDetails = (props) => {
  const { vehicles } = useContext(VehicleListContext);
  const { setMaintenance } = useContext(MaintenanceContext);
  const gotoMaintenanceDetails = (vehicle, maintenance) => {
    setMaintenance({ vehicle, maintenance });
    props.history.push("/vehicle-maintenance");
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
            })
          : null}
      </Row>
    </div>
  );
};

export default withRouter(VehicleDetails);
