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
import { AutoMobilesContext } from "../../context/AutoMobilesContext";
import { toTitleCase } from "../../constants/functions/global";

const VehicleDetails = (props) => {
  const { automobiles, setAutomobiles } = useContext(AutoMobilesContext);

  const gotoMaintenanceDetails = (vehicle, maintenance) => {
    setAutomobiles({
      user: automobiles.user,
      vehicles: automobiles.vehicles,
      selectedVehicle: vehicle,
      maintenance: maintenance,
    });
    props.history.push("/vehicle-maintenance");
  };


  return (
    <div className="main-page">
      <div className="title">AutoMobiles</div>
      <Row>
        {automobiles.vehicles && automobiles.vehicles.length
          ? automobiles.vehicles.map((vehicle) => {
              return (
                <Col sm="4">
                  <Card>
                    <CardBody>
                      <CardTitle tag="h5">
                        {toTitleCase(vehicle.type)}
                      </CardTitle>
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
