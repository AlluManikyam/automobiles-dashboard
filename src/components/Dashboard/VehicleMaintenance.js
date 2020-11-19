import React, { useState, useContext } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Input,
  CardFooter,
} from "reactstrap";
import DatePicker from "react-date-picker";
import swal from "sweetalert";
import moment from "moment";
import { AutoMobilesContext } from "../../context/AutoMobilesContext";
let _ = require("lodash");

const VehicleMaintenance = () => {
  const { automobiles, setAutomobiles } = useContext(AutoMobilesContext);
  const [modal, setModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState({});
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState("");
  const [modalType, setModalType] = useState("add");

  //! Edit Maintenance
  const EditMaintenance = (record) => {
    setSelectedRecord(record);
    setModal(!modal);
    setModalType("edit");
    setDate(new Date(record.date));
    setDescription(record.desc);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  //! Add Maintenance
  const AddMaintenance = () => {
    setModal(!modal);
    setDate(new Date());
    setDescription("");
    setModalType("add");
  };

  //! Delete Maintenance
  const DeleteMaintenance = (record) => {
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover this record!",
      icon: "warning",
      buttons: ["No, cancel it!", "Yes, I am sure!"],
      dangerMode: true,
    }).then((isConfirm) => {
      if (isConfirm) {
        automobiles.maintenance = automobiles.maintenance.filter((mt) => {
          return mt.date !== record.date && mt.desc !== record.desc;
        });
        setAutomobiles({
          user: automobiles.user,
          vehicles: automobiles.vehicles,
          selectedVehicle: automobiles.selectedVehicle,
          maintenance: automobiles.maintenance,
        });
        swal("", "Your record deleted successfully", "success");
      }
    });
  };

  const toggle = () => setModal(!modal);

  const onSubmitMaintenance = () => {
    let msg =
      modalType === "edit"
        ? "Record updated successfully"
        : "You record has been created successfully";
    if (modalType === "edit") {
      let recordIndex = _.findIndex(
        automobiles.maintenance,
        selectedRecord
      );
      if (recordIndex > -1) {
        automobiles.maintenance[recordIndex].date = moment(date).format(
          "MM-DD-YYYY"
        );
        automobiles.maintenance[recordIndex].desc = description;
      }
    } else {
      automobiles.maintenance.push({
        date: moment(date).format("MM-DD-YYYY"),
        desc: description,
      });
    }

    setAutomobiles({
      user: automobiles.user,
      vehicles: automobiles.vehicles,
      selectedVehicle: automobiles.selectedVehicle,
      maintenance: automobiles.maintenance,
    });
    swal("", msg, "success");
    setModal(!modal);
  };

  return (
    <div className="main-page">
      <div className="title my-2">
        {automobiles.selectedVehicle &&
        Object.keys(automobiles.selectedVehicle).length
          ? automobiles.selectedVehicle.model
          : null}
      </div>
      <div className="d-flex justify-content-end">
        <Button color="danger" onClick={AddMaintenance}>
          Add Maintenance
        </Button>
      </div>
      <div className="title-text my-2">Insurance</div>
      <Row>
        {automobiles.selectedVehicle &&
          Object.keys(automobiles.selectedVehicle).length && (
            <Col sm="4">
              <Card>
                <CardBody>
                  <CardTitle tag="h5">
                    Company : {automobiles.selectedVehicle.insurance.company}
                  </CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    Policy Number :{" "}
                    {automobiles.selectedVehicle.insurance.policy_num}
                  </CardSubtitle>
                </CardBody>
              </Card>
            </Col>
          )}
      </Row>
      <div className="title-text my-2">Maintenance</div>
      <Row>
        {automobiles.maintenance && automobiles.maintenance.length
          ? automobiles.maintenance.map((mt) => {
              return (
                <Col sm="3">
                  <Card>
                    <CardBody>
                      <CardTitle tag="h5">Date : {mt.date}</CardTitle>
                      <CardSubtitle tag="h6" className="mb-2 text-muted">
                        Description : {mt.desc}
                      </CardSubtitle>
                    </CardBody>
                    <CardFooter
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Button
                        className="px-4"
                        color="info"
                        onClick={() => {
                          EditMaintenance(mt);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => {
                          DeleteMaintenance(mt);
                        }}
                        color="info"
                      >
                        Delete
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              );
            })
          : null}
      </Row>

      {/* Add or Edit Maintenance UI */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          {modalType === "add" ? "Add Maintenance" : "Edit Maintenance"}
        </ModalHeader>
        <ModalBody>
          <FormGroup row>
            <Label for="date" sm={3}>
              Date
            </Label>
            <Col sm={9}>
              <DatePicker className="w-100" onChange={setDate} value={date} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="description" sm={3}>
              Description
            </Label>
            <Col sm={9}>
              <Input
                type="text"
                name="description"
                id="description"
                defaultValue={description}
                onChange={handleDescriptionChange}
              />
            </Col>
          </FormGroup>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Button className="px-4" color="info" onClick={onSubmitMaintenance}>
              {modalType === "add" ? "Submit" : "Update"}
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default VehicleMaintenance;
