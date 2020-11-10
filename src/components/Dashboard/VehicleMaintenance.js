import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const VehicleMaintenance = () => {
  const [vehicle, setVehicle] = useState({});
  const [maintenance, setMaintenance] = useState([]);

  useEffect(() => {
    let vehicle = JSON.parse(localStorage.getItem("vehicle"));
    let maintenance = JSON.parse(localStorage.getItem("maintenance"));
    if (maintenance && maintenance.length) {
      setVehicle(vehicle);
      setMaintenance(maintenance);
    }
  },[]);

  return (
    <div className="main-page">
      <div className="title my-2">
        {vehicle && Object.keys(vehicle).length ? vehicle.model : null}
      </div>
      <div className="title-text my-2">Insurance</div>
      <Row>
        {vehicle && Object.keys(vehicle).length && (
          <Col sm="4">
            <Card>
              <CardBody>
                <CardTitle tag="h5">{vehicle.insurance.company}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  {vehicle.insurance.policy_num}
                </CardSubtitle>
              </CardBody>
            </Card>
          </Col>
        )}
      </Row>
      <div className="title-text my-2">Maintenance</div>
      <Row>
        {maintenance &&
          maintenance.length &&
          maintenance.map((mt) => {
            return (
              <Col sm="4">
                <Card>
                  <CardBody>
                    <CardTitle tag="h5">{mt.date}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      {mt.desc}
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default VehicleMaintenance;
