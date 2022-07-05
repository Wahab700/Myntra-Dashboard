import React, { useState, useEffect } from "react";
import { call, put } from "redux-saga/effects";
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
import { useDispatch, useSelector } from "react-redux";
import { useReducer } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import { addCategoryAsync } from "../../../store/categories/saga";
import categorieResponsePost from "../../../store/categories/action";

const AddCategories = () => {
  const SingleOptions = [
    { value: "Watches", label: "Watches" },
    { value: "Headset", label: "Headset" },
    { value: "Sweatshirt", label: "Sweatshirt" },
    { value: "20% off", label: "20% off" },
    { value: "4 star", label: "4 star" },
  ];

  // const { CategoriesReducerPost } = useSelector((state) => ({
  //   CategoriesReducerPost: state.CategoriesReducerPost,
  // }));

  const dispatch = useDispatch();

  function submitData(finalFormData) {
    console.log("Im putting final form data to be -->");
    for (var [key, value] of finalFormData.entries()) {
      console.log(key, value);
    }
    return dispatch({
      type: "CATEGORIE_POST_API",
      payload: finalFormData,
    });
  }
  // console.clear();

  const [selectedMulti, setselectedMulti] = useState(null);

  function handleMulti(selectedMulti) {
    setselectedMulti(selectedMulti);
  }

  //Dropzone file upload
  const [selectedFiles, setselectedFiles] = useState([]);
  // const [file1, setFile1] = useState([]);
  // const [file2, setFile2] = useState([]);
  // const [file3, setFile3] = useState([]);

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

  const [webImage, setWebImage] = useState("");
  const [mobImage, setMobImage] = useState("");
  const [bgImage, setBgImage] = useState("");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  let finalFormData = new FormData();

  useEffect(() => {
    webImage && finalFormData.append("web_img", webImage);
    mobImage && finalFormData.append("mobile_img", mobImage);
    bgImage && finalFormData.append("bg_img", bgImage);
    name && finalFormData.append("name", name);
    note && finalFormData.append("note", note);
  }, [webImage, mobImage, bgImage, name, note]);

  // const handleChange_1 = (e) => {
  //   let files = e.target.files;
  //   setWebImage(files[0]);
  // };

  // const handleChange_2 = (e) => {
  //   let files = e.target.files;
  //   setMobImage(files[0]);
  // };

  // const handleChange_3 = (e) => {
  //   let files = e.target.files;
  //   setBgImage(files[0]);
  // };

  // console.log("form data ==>", finalFormData);
  // console.log("img 2 ==>", mobImage);
  // console.log("img 3 ==>", bgImage);

  // api data fetching
  // const addCategoryAsync = async () => {
  //   const snapshot = await fetch("http://localhost:3000/api/categories/add", {
  //     method: "POST",
  //     body: finalFormData,
  //   });
  //   const data = await snapshot.json();
  //   return data;
  // };

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Category | Add Category</title>
        </MetaTags>
        <Container fluid>
          <BreadCrumb title="Add Category" pageTitle="Category" />
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
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  {/* <div className="mb-3">
                    <label className="form-label">Feature Image for Web</label>
                    <input
                      className="form-control"
                      onChange={handleChange_1}
                      type="file"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Feature Image for Mobile
                    </label>
                    <input
                      className="form-control"
                      onChange={handleChange_2}
                      type="file"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Background Image for Mobile
                    </label>
                    <input
                      className="form-control"
                      onChange={handleChange_3}
                      type="file"
                    ></input>
                  </div> */}

                  <div className="mb-3">
                    <Label className="form-label" htmlFor="project-title-input">
                      Note
                    </Label>

                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Enter note here"
                      onChange={setNote}
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <Label className="form-label" htmlFor="project-title-input">
                      Status
                    </Label>
                    <select
                      className="form-select mb-3"
                      aria-label="Default select example"
                    >
                      <option value="1">Published</option>
                      <option value="2">Drafts</option>
                      <option value="3">Decline</option>
                    </select>
                  </div>
                </CardBody>
              </Card>

              <div className="text-start mb-4">
                <button
                  type="submit"
                  className="btn btn-success w-sm"
                  onClick={() => {
                    console.log("api set started!");
                    submitData(finalFormData);
                  }}
                >
                  Create
                </button>
              </div>
            </Col>

            <Col lg={4}>
              <div className="card">
                <CardHeader>
                  <h4 className="card-title mb-0">Feature Image for Web</h4>
                </CardHeader>

                <CardBody>
                  <FilePond
                    files={webImage}
                    onupdatefiles={setWebImage}
                    allowMultiple={false}
                    maxFiles={1}
                    name="webImage"
                    className="multiple_filepond_custom filepond-input-multiple"
                  />
                </CardBody>
              </div>
              <div className="card">
                <CardHeader>
                  <h4 className="card-title mb-0">Feature Image for Mobile</h4>
                </CardHeader>

                <CardBody>
                  <FilePond
                    files={mobImage}
                    onupdatefiles={setMobImage}
                    allowMultiple={false}
                    maxFiles={1}
                    name="mobImage"
                    className="multiple_filepond_custom filepond-input-multiple"
                  />
                </CardBody>
              </div>
              <div className="card">
                <CardHeader>
                  <h4 className="card-title mb-0">
                    Background Image for Mobile
                  </h4>
                </CardHeader>

                <CardBody>
                  <FilePond
                    files={bgImage}
                    onupdatefiles={setBgImage}
                    allowMultiple={false}
                    maxFiles={1}
                    name="bgImage"
                    className="multiple_filepond_custom filepond-input-multiple"
                  />
                </CardBody>
              </div>

              {/* <div className="card">
                <CardBody>
                  <div className="card-header">
                    <h5 className="card-title mb-0">Image</h5>
                  </div>
                  <div>
                    <img className="add_category_img" alt="img" src={avatar3} />
                  </div>
                </CardBody>
              </div> */}
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AddCategories;
