import React, { Component } from "react";
import {withRouter} from 'react-router-dom'
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

class VehicleDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            vehicles: [],
          };
        this.gotoMaintenanceDetails= this.gotoMaintenanceDetails.bind(this)
    }
   
  componentDidMount() {
    let personName = localStorage.getItem("personName");
    let vehicles = JSON.parse(localStorage.getItem("vehicles"));
    if (personName && vehicles.length) {
      this.setState({
        name: personName,
        vehicles: vehicles,
      });
    }
  }

  gotoMaintenanceDetails(vehicle,maintenance){
    localStorage.setItem("vehicle",JSON.stringify(vehicle))
    localStorage.setItem("maintenance",JSON.stringify(maintenance))
    this.props.history.push("/vehicle-maintenance")
  }

  render() {
    let {vehicles } = this.state;
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
                      <Button color="info"  onClick={this.gotoMaintenanceDetails.bind(this,vehicle,vehicle.maintenance)}>Maintenance</Button>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </div>
    );
  }
}

export default withRouter(VehicleDetails);
