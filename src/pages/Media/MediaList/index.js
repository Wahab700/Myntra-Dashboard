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

const MediaList = () => {
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
          <title>Media | Media</title>
        </MetaTags>
        <Container fluid>
          <BreadCrumb title="Media" pageTitle="Media" />
          <Row>
            <div className="col-xl-12 col-lg-12">
              <div>
                <div className="card">
                  <div className="card-header border-0">
                    <div className="row g-4">
                      <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                        <div>
                          <select
                            className="form-select mb-3"
                            aria-label="Default select example"
                          >
                            <option>Media Items </option>
                            <option value="1">All Media Items</option>
                            <option value="2">Selected Items</option>
                            <option value="3">Wrong Items</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                        <div>
                          <select
                            className="form-select mb-3 media_obj"
                            aria-label="Default select example"
                          >
                            <option>All Dates </option>
                            <option value="1">All Media Items</option>
                            <option value="2">Selected Items</option>
                            <option value="3">Wrong Items</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                        <div>
                          <button className="btn media_btn">Bulk Select</button>
                        </div>
                      </div>
                      <div className="col-sm">
                        <div className="d-flex justify-content-sm-end">
                          <div className="search-box ms-2">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search here"
                            />
                            <i className="ri-search-line search-icon"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Col lg={12}>
                    <Card>
                      <CardBody>
                        <div className="row">
                          <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                            <img
                              src={avatar3}
                              className="media_img"
                              alt="media"
                            />
                          </div>

                          <div className="col-2 col-lg-2 col-md-3 col-sm-4 col-6">
                            <img
                              src={avatar3}
                              className="media_img"
                              alt="media"
                            />
                          </div>

                          <div className="col-2 col-lg-2 col-md-3 col-sm-4 col-6">
                            <img
                              src={avatar3}
                              className="media_img"
                              alt="media"
                            />
                          </div>

                          <div className="col-2 col-lg-2 col-md-3 col-sm-4 col-6">
                            <img
                              src={avatar3}
                              className="media_img"
                              alt="media"
                            />
                          </div>

                          <div className="col-2 col-lg-2 col-md-3 col-sm-4 col-6">
                            <img
                              src={avatar3}
                              className="media_img"
                              alt="media"
                            />
                          </div>

                          <div className="col-2 col-lg-2 col-md-3 col-sm-4 col-6">
                            <img
                              src={avatar3}
                              className="media_img"
                              alt="media"
                            />
                          </div>

                          <div className="col-2 col-lg-2 col-md-3 col-sm-4 col-6">
                            <img
                              src={avatar3}
                              className="media_img"
                              alt="media"
                            />
                          </div>

                          <div className="col-2 col-lg-2 col-md-3 col-sm-4 col-6">
                            <img
                              src={avatar3}
                              className="media_img"
                              alt="media"
                            />
                          </div>

                          <div className="col-2 col-lg-2 col-md-3 col-sm-4 col-6">
                            <img
                              src={avatar3}
                              className="media_img"
                              alt="media"
                            />
                          </div>

                          <div className="col-2 col-lg-2 col-md-3 col-sm-4 col-6">
                            <img
                              src={avatar3}
                              className="media_img"
                              alt="media"
                            />
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default MediaList;
