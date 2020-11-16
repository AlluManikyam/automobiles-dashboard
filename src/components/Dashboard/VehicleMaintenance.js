import React, {useContext } from "react";
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { MaintenanceContext } from "../../context/MaintenanceContext";

const VehicleMaintenance = () => {
  const { maintenance } = useContext(MaintenanceContext);
  return (
    <div className="main-page">
      <div className="title my-2">
        {maintenance.vehicle && Object.keys(maintenance.vehicle).length
          ? maintenance.vehicle.model
          : null}
      </div>
      <div className="title-text my-2">Insurance</div>
      <Row>
        {maintenance.vehicle && Object.keys(maintenance.vehicle).length && (
          <Col sm="4">
            <Card>
              <CardBody>
                <CardTitle tag="h5">
                 Company :  {maintenance.vehicle.insurance.company}
                </CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Policy Number : {maintenance.vehicle.insurance.policy_num}
                </CardSubtitle>
              </CardBody>
            </Card>
          </Col>
        )}
      </Row>
      <div className="title-text my-2">Maintenance</div>
      <Row>
        {maintenance.maintenance &&
          maintenance.maintenance.length &&
          maintenance.maintenance.map((mt) => {
            return (
             
              <Col sm="4">
                <Card>
                  <CardBody>
                    <CardTitle tag="h5">Date : {mt.date}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                     Description :  {mt.desc}
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
