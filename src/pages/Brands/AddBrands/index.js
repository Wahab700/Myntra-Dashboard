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

const AddBrands = () => {
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
          <title>Brands | Add Brands</title>
        </MetaTags>
        <Container fluid>
          <BreadCrumb title="Add Brands" pageTitle="Brands" />
          <Row>
            <Col lg={8}>
              <Card>
                <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="project-title-input">
                      Name
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="project-title-input"
                      placeholder="Enter Name"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Feature Image for Web</label>
                    <input className="form-control" type="file"></input>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Feature Image for Mobile
                    </label>
                    <input className="form-control" type="file"></input>
                  </div>

                  <div className="mb-3">
                    <Label className="form-label" htmlFor="project-title-input">
                      Contact
                    </Label>

                    <textarea
                      className="form-control"
                      placeholder="Enter Contact"
                      id=""
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <Label className="form-label" htmlFor="project-title-input">
                      Note
                    </Label>

                    <textarea
                      className="form-control"
                      placeholder="Comment here"
                      id=""
                    ></textarea>
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

                  <div className="mb-3">
                    <Label className="form-label" htmlFor="project-title-input">
                      Status
                    </Label>

                    <textarea
                      className="form-control"
                      placeholder="Your status"
                      id=""
                    ></textarea>
                  </div>

                  {/* <div className="mb-3">
                    <Label className="form-label" htmlFor="project-title-input">
                      Status
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="project-title-input"
                      placeholder="Enter project title"
                    />
                  </div> */}
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
                  <h5 className="card-title mb-0">Image</h5>
                </div>
                <CardBody>
                  <div>
                    <img className="add_category_img" alt="img" src={avatar3} />
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

export default AddBrands;
