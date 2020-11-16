import React, { useContext } from "react";
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
import { UserContext } from "../../context/UserContext";
import { VehicleListContext } from "../../context/VehicleListContext";
let customers = require("../../constants/customers.json");

const Dashboard = (props) => {
  const { setUser } = useContext(UserContext);
  const { setVehicles } = useContext(VehicleListContext);
  const gotoVehicleDetails = (personName, vehicles) => {
    setUser(personName);
    setVehicles(vehicles);
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
                    <CardTitle tag="h5">Name : {personName}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted"> Gender : 
                      {person.gender}
                    </CardSubtitle>
                    <CardText>Age : {person.age}</CardText>
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
