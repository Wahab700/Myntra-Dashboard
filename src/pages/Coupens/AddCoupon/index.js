import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Input,
  Label,
  Row,
} from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import MetaTags from "react-meta-tags";
//Import Flatepicker
import Flatpickr from "react-flatpickr";
import Select from "react-select";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Dropzone from "react-dropzone";

//Import Images
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";

const AddCoupens = () => {
  const SingleOptions = [
    { value: "Watches", label: "Watches" },
    { value: "Headset", label: "Headset" },
    { value: "Sweatshirt", label: "Sweatshirt" },
    { value: "20% off", label: "20% off" },
    { value: "4 star", label: "4 star" },
  ];

  const [selectedMulti, setselectedMulti] = useState(null);

  function handleMulti(selectedMulti) {
    setselectedMulti(selectedMulti);
  }

  //Dropzone file upload
  const [selectedFiles, setselectedFiles] = useState([]);
  const [files, setFiles] = useState([]);

  function handleAcceptedFiles(files) {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  }

  /**
   * Formats the size
   */
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Coupens | Add Coupens</title>
        </MetaTags>
        <Container fluid>
          <BreadCrumb title="Add Coupen" pageTitle="Coupens" />
          <Row>
            <Col lg={8}>
              <Card>
                <CardBody>
                  <h5 className="mb-4">Basic Innformation</h5>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="project-title-input">
                      Code
                    </Label>
                    <Input
                      type="number"
                      className="form-control"
                      id="project-title-input"
                      placeholder="Enter Name"
                    />
                  </div>

                  <div className="mb-3">
                    <Label className="form-label">Document type</Label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="this"
                      />
                      <label className="form-check-label">Percentage</label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="this"
                      />
                      <label className="form-check-label">Fixed Amount</label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="this"
                      />
                      <label className="form-check-label">Free Shiping</label>
                    </div>
                  </div>

                  <div className="mb-3">
                    <Label className="form-label" htmlFor="project-title-input">
                      Coupen Amount
                    </Label>
                    <Input
                      type="number"
                      className="form-control"
                      id="project-title-input"
                      placeholder="Enter Name"
                    />
                  </div>

                  <div className="mb-3">
                    <Label className="form-label" htmlFor="project-title-input">
                      Usage Amount
                    </Label>
                    <Input
                      type="number"
                      className="form-control"
                      id="project-title-input"
                      placeholder="Enter Name"
                    />
                  </div>

                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label">
                        Allow Free Shipping
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label">
                        Usage Restrictions Products
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label">
                        Usage Restrictions Categories
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label">
                        Usage Restrictions Brands
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label">Usage By User</label>
                    </div>
                  </div>

                  <div className="mb-3">
                    <Label className="form-label">Description</Label>
                    <CKEditor
                      editor={ClassicEditor}
                      data="<p></p>"
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                      }}
                      onChange={(editor) => {
                        editor.getData();
                      }}
                    />
                  </div>
                </CardBody>
              </Card>

              <div className="text-start mb-4">
                <button type="submit" className="btn btn-success w-sm">
                  Create
                </button>
              </div>
            </Col>

            <Col lg={4}>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">Schedule</h5>
                </div>

                <CardBody>
                  <p>
                    Use these settings to limit the coupens in the expiration
                    inthe mode
                  </p>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="project-title-input">
                      End Date
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="project-title-input"
                      placeholder="Enter Date"
                    />
                  </div>
                </CardBody>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AddCoupens;
