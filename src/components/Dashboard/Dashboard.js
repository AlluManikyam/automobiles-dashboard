import React from "react";
import { withRouter } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
let customers = require("../../constants/customers.json");

const Dashboard = (props) => {
  const gotoVehicleDetails = (personName, vehicles) => {
    localStorage.setItem("personName", personName);
    localStorage.setItem("vehicles", JSON.stringify(vehicles));
    props.history.push("/vehicle-details");
  };
  return (
    <div className="main-page">
      <div className="title">Customers</div>
      <Row>
        {customers &&
          customers.people &&
          customers.people.map((customer, index) => {
            let person = customer[`person${index + 1}`];
            let personName = `${person.name.first} ${person.name.last}`;
            return (
              <Col sm="4">
                <Card>
                  <CardBody>
                    <CardTitle tag="h5">{personName}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      {person.gender}
                    </CardSubtitle>
                    <CardText>{person.age}</CardText>
                    <Button
                      color="info"
                      onClick={() =>
                        gotoVehicleDetails(personName, customer.vehicles)
                      }
                    >
                      Vehicles History
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

export default withRouter(Dashboard);
