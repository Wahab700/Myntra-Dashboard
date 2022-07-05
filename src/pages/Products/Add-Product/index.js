import React, { useEffect, useState } from "react";
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
  Accordion,
  AccordionItem,
  Button,
  Collapse,
} from "reactstrap";

import CustomAccordion from "../../../Components/Common/Accordion/index";

import { nanoid } from "nanoid";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import MetaTags from "react-meta-tags";
//Import Flatepicker
import Flatpickr from "react-flatpickr";
// import Select from "react-select";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  UncontrolledTooltip,
} from "reactstrap";
import classnames from "classnames";
import Dropzone from "react-dropzone";

//Import Images
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../../assets/images/users/avatar-8.jpg";
// start form code
import { DefaultSelect, MenuSize, SelectSize } from "./FormSelectCode";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import "../../../assets/scss/config/creative/custom.scss";

// file uploads data
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import slugify from "slugify";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const animatedComponents = makeAnimated();
// const SingleOptions = [
//   { value: "Choices 1", label: "Choices 1" },
//   { value: "Choices 2", label: "Choices 2" },
//   { value: "Choices 3", label: "Choices 3" },
//   { value: "Choices 4", label: "Choices 4" },
// ];

const GroupOptions = [
  {
    label: "UK",
    options: [
      { label: "London", value: "London" },
      { label: "Manchester", value: "Manchester" },
      { label: "Liverpool", value: "Liverpool" },
    ],
  },
  {
    label: "FR",
    options: [
      { label: "Paris", value: "Paris" },
      { label: "Lyon", value: "Lyon" },
      { label: "Marseille", value: "Marseille" },
    ],
  },
  {
    label: "DE",
    options: [
      { label: "Hamburg", value: "Hamburg" },
      { label: "Munich", value: "Munich" },
      { label: "Berlin", value: "Berlin" },
    ],
  },
  {
    label: "US",
    options: [
      { label: "New York", value: "New York" },
      { label: "Washington", value: "Washington" },
      { label: "Michigan", value: "Michigan" },
    ],
  },
  {
    label: "SP",
    options: [
      { label: "Madrid", value: "Madrid" },
      { label: "Barcelona", value: "Barcelona" },
      { label: "Malaga", value: "Malaga" },
    ],
  },
  {
    label: "CA",
    options: [
      { label: "Montreal", value: "Montreal" },
      { label: "Toronto", value: "Toronto" },
      { label: "Vancouver", value: "Vancouver" },
    ],
  },
];

const GroupOptions2 = [
  { value: "Zero", label: "Zero" },
  { value: "Two", label: "Two" },
  { value: "Four", label: "Four" },
  { value: "One", label: "One" },
  { value: "Five", label: "Five" },
  { value: "Three", label: "Three" },
  { value: "Six", label: "Six" },
];

const noSortingGroup = [
  { value: "Madrid", label: "Madrid" },
  { value: "Toronto", label: "Toronto" },
  { value: "Vancouver", label: "Vancouver" },
  { value: "London", label: "London" },
  { value: "Manchester", label: "Manchester" },
  { value: "Liverpool", label: "Liverpool" },
  { value: "Paris", label: "Paris" },
  { value: "Malaga", label: "Malaga" },
  { value: "Washington", label: "Washington" },
  { value: "Lyon", label: "Lyon" },
  { value: "Marseille", label: "Marseille" },
  { value: "Hamburg", label: "Hamburg" },
  { value: "Munich", label: "Munich" },
  { value: "Barcelona", label: "Barcelona" },
  { value: "Berlin", label: "Berlin" },
  { value: "Montreal", label: "Montreal" },
  { value: "New York", label: "New York" },
  { value: "Michigan", label: "Michigan" },
];

const options = [
  { label: "josh@joshuajohnson.co.uk", value: 1, disabled: true },
  { label: "joe@bloggs.co.uk", value: 2, disabled: true },
];

// main page function
const AddProduct = (props) => {
  const [variationsState, setVariationsState] = useState([]);
  const [selectedSingle, setSelectedSingle] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedGroup2, setSelectedGroup2] = useState(null);
  const [selectedNoSortingGroup, setSelectedNoSortingGroup] = useState(null);
  const [selectedMulti2, setselectedMulti2] = useState([]);
  const [selectedMulti3, setselectedMulti3] = useState(null);
  const [selectedMultisize, setselectedMultisize] = useState([]);

  useEffect(() => {
    const varits = createVariations();
    setVariationsState(varits);
  }, [selectedMulti2, selectedMultisize]);

  // variation function
  const createVariations = () => {
    if (selectedMulti2.length > 0 && selectedMultisize.length > 0) {
      const variations = selectedMulti2.map((color) => {
        return selectedMultisize.map((size) => {
          return {
            color: color.value,
            size: size.value,
          };
        });
      });

      console.log("variations => ", variations);
      return variations;
    }

    return [];
  };

  // const [menuItems, setMenuItems] = useState(variations);
  // const clickHandler = (name) => () => {
  //   setMenuItems((items) =>
  //     items.map((item) => ({
  //       ...item,
  //       active: item.name === name,
  //     }))
  //   );
  // };

  // perma link
  const [namelink, setNamelink] = useState("");
  function handleChange(event) {
    setNamelink(slugify(event.target.value));
  }

  // Tabs show hide
  const [showhide, setShowhide] = useState("1");
  function handleShowHide(event) {
    const userData = event.target.value;
    setShowhide(userData);
  }

  // Custom Vertical Tabs
  const [customverticalTab, setcustomverticalTab] = useState("1");
  const customtoggleVertical = (tab) => {
    if (customverticalTab !== tab) {
      setcustomverticalTab(tab);
    }
  };

  function handleSelectSingle(selectedSingle) {
    setSelectedSingle(selectedSingle);
  }

  function handleSelectGroups(selectedGroup) {
    setSelectedGroup(selectedGroup);
  }

  function handleSelectGroups2(selectedGroup2) {
    setSelectedGroup2(selectedGroup2);
  }

  function handleSelectNoSortingGroup(selectedNoSortingGroup) {
    setSelectedNoSortingGroup(selectedNoSortingGroup);
  }

  function handleMulti2(e) {
    let arr = [];
    arr.push(...e);
    setselectedMulti2(arr);
  }

  function handleMultisize(e) {
    let newarr = [];
    newarr.push(...e);
    setselectedMultisize(e);
  }

  function handleMulti3(selectedMulti3) {
    setselectedMulti3(selectedMulti3);
  }

  const SingleOptions = [
    { value: "Red", label: "Red" },
    { value: "Blue", label: "Blue" },
    { value: "Green", label: "Green" },
    { value: "White", label: "White" },
    { value: "Black", label: "Black" },
  ];

  const SingleOptionssize = [
    { value: "Small", label: "Small" },
    { value: "Medium", label: "Medium" },
    { value: "Large", label: "Large" },
  ];

  const [selectedMulti, setselectedMulti] = useState(null);

  function handleMulti(selectedMulti) {
    setselectedMulti(selectedMulti);
  }

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

  const [general, setGeneral] = useState(true);
  const [inventery, setInventery] = useState(true);
  const [secondinventery, setSecondinventery] = useState(true);
  const [products, setProducts] = useState(true);
  const [stock, setStock] = useState(true);
  const [permalink, setPermalink] = useState(true);
  const [content, setContent] = useState(false);

  console.log("content is", content);
  // accordians
  const [col1, setcol1] = useState(false);
  const [col2, setcol2] = useState(false);
  const [col3, setcol3] = useState(false);

  const t_col1 = () => {
    setcol1(!col1);
    setcol2(false);
    setcol3(false);
  };

  const t_col2 = () => {
    setcol2(!col2);
    setcol1(false);
    setcol3(false);
  };

  const t_col3 = () => {
    setcol3(!col3);
    setcol1(false);
    setcol2(false);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Products | Add Product</title>
        </MetaTags>
        <Container fluid>
          <BreadCrumb title="Add Product" pageTitle="Products" />
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
                      onChange={handleChange}
                      onClick={() => setPermalink((t) => !t)}
                      setContent={content}
                      placeholder="Enter Name"
                    />
                    <p
                      className="permalink_main"
                      style={{ display: permalink ? "none" : "block" }}
                    >
                      <span className="permalink_tag">PermaLink:</span>{" "}
                      <span className="perma_url">
                        <span>https://modjen.com/</span>
                        <span
                          contentEditable={content}
                          style={
                            content
                              ? {
                                  border: "1px solid #999898",
                                  padding: "2px",
                                  borderRadius: "3px",
                                }
                              : { border: "none" }
                          }
                        >
                          {namelink}
                        </span>
                      </span>
                      <button
                        type="btn"
                        className="edit_perma_url"
                        onClick={() => setContent((t) => !t)}
                      >
                        {content ? "Ok" : "Edit"}
                      </button>
                    </p>
                  </div>

                  <div className="mb-3">
                    <Label
                      htmlFor="choices-multiple-groups"
                      className="form-label"
                    >
                      Brands
                    </Label>
                    <Select
                      value={selectedMulti3}
                      isMulti={true}
                      onChange={() => {
                        handleMulti3();
                      }}
                      options={GroupOptions}
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                    />
                  </div>
                </CardBody>
              </Card>

              {/* Main tabs  */}
              <Card>
                <CardBody>
                  <Row>
                    <div className="row mb-3 m-0">
                      <div className="col-6">
                        <label className="product_data">Product Data</label>
                      </div>
                      <div className="col-6 p-0">
                        <select
                          className="form-select mb-3"
                          aria-label="Default select example"
                          onChange={(e) => handleShowHide(e)}
                        >
                          <option value="1" className="active">
                            Simple Product
                          </option>
                          <option value="2">Variable Product</option>
                        </select>
                      </div>
                    </div>

                    {/* simple product tabs */}
                    {showhide === "1" && (
                      <>
                        <Col lg={3}>
                          <Nav
                            pills
                            className="nav nav-pills flex-column nav-pills-tab custom-verti-nav-pills text-center"
                          >
                            <NavItem>
                              <NavLink
                                style={{ cursor: "pointer" }}
                                className={classnames({
                                  "mb-2": true,
                                  active: customverticalTab === "1",
                                })}
                                onClick={() => {
                                  customtoggleVertical("1");
                                }}
                                id="custom-v-pills-home-tab"
                              >
                                Generally
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                style={{ cursor: "pointer" }}
                                className={classnames({
                                  "mb-2": true,
                                  active: customverticalTab === "2",
                                })}
                                onClick={() => {
                                  customtoggleVertical("2");
                                }}
                                id="custom-v-pills-profile-tab"
                              >
                                Inventry
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                style={{ cursor: "pointer" }}
                                className={classnames({
                                  "mb-2": true,
                                  active: customverticalTab === "3",
                                })}
                                onClick={() => {
                                  customtoggleVertical("3");
                                }}
                                id="custom-v-pills-messages-tab"
                              >
                                Shipping
                              </NavLink>
                            </NavItem>

                            <NavItem>
                              <NavLink
                                style={{ cursor: "pointer" }}
                                className={classnames({
                                  "mb-2": true,
                                  active: customverticalTab === "4",
                                })}
                                onClick={() => {
                                  customtoggleVertical("4");
                                }}
                                id="custom-v-pills-messages-tab"
                              >
                                Linked Products
                              </NavLink>
                            </NavItem>

                            <NavItem>
                              <NavLink
                                style={{ cursor: "pointer" }}
                                className={classnames({
                                  "mb-2": true,
                                  active: customverticalTab === "5",
                                })}
                                onClick={() => {
                                  customtoggleVertical("5");
                                }}
                                id="custom-v-pills-messages-tab"
                              >
                                Attributes
                              </NavLink>
                            </NavItem>

                            <NavItem>
                              <NavLink
                                style={{ cursor: "pointer" }}
                                className={classnames({
                                  "mb-2": true,
                                  active: customverticalTab === "6",
                                })}
                                onClick={() => {
                                  customtoggleVertical("6");
                                }}
                                id="custom-v-pills-messages-tab"
                              >
                                Advanced
                              </NavLink>
                            </NavItem>
                          </Nav>
                        </Col>
                        <Col lg={9}>
                          <TabContent
                            activeTab={customverticalTab}
                            className="text-muted mt-3 mt-lg-0"
                          >
                            <TabPane tabId="1" id="custom-v-pills-home">
                              <div className="row">
                                <div className="col-12">
                                  <label className="pricing">Pricing</label>
                                </div>

                                <div className="col-4">
                                  <label className="general_labels">
                                    Regular Price(Rs)
                                  </label>
                                </div>
                                <div className="col-5 p-0">
                                  <input
                                    type="text"
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-sm"
                                  />
                                </div>

                                <div className="col-4 mt-3">
                                  <label className="general_labels">
                                    Sale Price(Rs)
                                  </label>
                                </div>
                                <div className="col-5 p-0 mt-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-sm"
                                  />
                                </div>
                                <div className="col-3 mt-3">
                                  <div className="form-check general_checkbox">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      onClick={() => setGeneral((t) => !t)}
                                    />
                                    <label className="form-check-label">
                                      Schedule
                                    </label>
                                  </div>
                                </div>

                                <div
                                  className="col-4 mt-3"
                                  style={{
                                    display: general ? "none" : "block",
                                  }}
                                >
                                  <label className="general_labels">
                                    Sales Price Dates
                                  </label>
                                </div>
                                <div
                                  className="col-5 p-0 mt-3"
                                  style={{
                                    display: general ? "none" : "block",
                                  }}
                                >
                                  <input
                                    type="Date"
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-sm"
                                  />
                                </div>

                                <div
                                  className="col-4 mt-3"
                                  style={{
                                    display: general ? "none" : "block",
                                  }}
                                ></div>
                                <div
                                  className="col-5 p-0 mt-3"
                                  style={{
                                    display: general ? "none" : "block",
                                  }}
                                >
                                  <input
                                    type="Date"
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-sm"
                                  />
                                </div>
                              </div>
                            </TabPane>

                            <TabPane tabId="2" id="custom-v-pills-profile">
                              <div className="row">
                                <div className="col-12">
                                  <label className="pricing">Inventry</label>
                                </div>

                                <div className="col-12">
                                  <label className="general_labels">SKU</label>
                                </div>
                                <div className="col-12">
                                  <input
                                    type="text"
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-sm"
                                  />
                                </div>

                                <div className="col-12 mt-2">
                                  <div className="form-check general_checkbox">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      onClick={() => setInventery((t) => !t)}
                                    />
                                    <label className="form-check-label">
                                      Enable Stock Management
                                    </label>
                                  </div>
                                </div>

                                <div
                                  className="col-12 mt-2"
                                  style={{
                                    display: inventery ? "none" : "block",
                                  }}
                                >
                                  <label className="general_labels">
                                    Stock Quantity
                                  </label>
                                </div>
                                <div
                                  className="col-12"
                                  style={{
                                    display: inventery ? "none" : "block",
                                  }}
                                >
                                  <input
                                    type="text"
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-sm"
                                  />
                                </div>

                                <div
                                  className="col-12 mt-2"
                                  style={{
                                    display: inventery ? "none" : "block",
                                  }}
                                >
                                  <label className="general_labels">
                                    Allow Backorders
                                  </label>
                                </div>
                                <div
                                  className="col-12"
                                  style={{
                                    display: inventery ? "none" : "block",
                                  }}
                                >
                                  <select
                                    className="form-select"
                                    aria-label="Default select example"
                                  >
                                    <option value="1">No Backorders</option>
                                    <option value="2">Allow Backorders</option>
                                  </select>
                                </div>

                                <div
                                  className="col-12 mt-2"
                                  style={{
                                    display: inventery ? "none" : "block",
                                  }}
                                >
                                  <label className="general_labels">
                                    Low Stock Threshold
                                  </label>
                                </div>
                                <div
                                  className="col-12"
                                  style={{
                                    display: inventery ? "none" : "block",
                                  }}
                                >
                                  <input
                                    type="text"
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-sm"
                                  />
                                </div>
                              </div>
                            </TabPane>

                            <TabPane tabId="3" id="custom-v-pills-messages">
                              <div className="row">
                                <div className="col-3">
                                  <label className="general_labels">
                                    Weight(kg)
                                  </label>
                                </div>
                                <div className="col-9">
                                  <input
                                    type="number"
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-sm"
                                  />
                                </div>

                                <div className="col-3 mt-3">
                                  <label className="general_labels">
                                    Dimensions (cm)
                                  </label>
                                </div>
                                <div className="col-3 mt-3">
                                  <input
                                    type="number"
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-sm"
                                  />
                                </div>
                                <div className="col-3 mt-3">
                                  <input
                                    type="number"
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-sm"
                                  />
                                </div>
                                <div className="col-3 mt-3">
                                  <input
                                    type="number"
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-sm"
                                  />
                                </div>
                              </div>
                            </TabPane>

                            <TabPane tabId="4" id="custom-v-pills-messages">
                              <div className="row">
                                <div className="col-3">
                                  <label className="general_labels">
                                    Upsells
                                  </label>
                                </div>
                                <div className="col-9">
                                  <input
                                    type="number"
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-sm"
                                  />
                                </div>

                                <div className="col-3 mt-3">
                                  <label className="general_labels">
                                    Cross Sells
                                  </label>
                                </div>
                                <div className="col-9 mt-3">
                                  <input
                                    type="number"
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-sm"
                                  />
                                </div>
                              </div>
                            </TabPane>

                            <TabPane tabId="5" id="custom-v-pills-messages">
                              <div className="row">
                                <div className="col-6">
                                  <select
                                    className="form-select mb-3"
                                    aria-label="Default select example"
                                  >
                                    <option value="1">
                                      Custom Product Attributes
                                    </option>
                                    <option value="2">Variable Product</option>
                                  </select>
                                </div>
                              </div>
                            </TabPane>

                            <TabPane tabId="6" id="custom-v-pills-messages">
                              <div className="row">
                                <div className="col-12">...</div>
                              </div>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </>
                    )}

                    {/* variable product tabs */}
                    {showhide === "2" && (
                      <>
                        <Col lg={3}>
                          <Nav
                            pills
                            className="nav nav-pills flex-column nav-pills-tab custom-verti-nav-pills text-center"
                          >
                            <NavItem>
                              <NavLink
                                style={{ cursor: "pointer" }}
                                className={classnames({
                                  "mb-2": true,
                                  active: customverticalTab === "7",
                                })}
                                onClick={() => {
                                  customtoggleVertical("7");
                                }}
                                id="custom-v-pills-home-tab"
                              >
                                Inventery
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                style={{ cursor: "pointer" }}
                                className={classnames({
                                  "mb-2": true,
                                  active: customverticalTab === "8",
                                })}
                                onClick={() => {
                                  customtoggleVertical("8");
                                }}
                                id="custom-v-pills-profile-tab"
                              >
                                Shipping
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                style={{ cursor: "pointer" }}
                                className={classnames({
                                  "mb-2": true,
                                  active: customverticalTab === "9",
                                })}
                                onClick={() => {
                                  customtoggleVertical("9");
                                }}
                                id="custom-v-pills-messages-tab"
                              >
                                Linked Products
                              </NavLink>
                            </NavItem>

                            <NavItem>
                              <NavLink
                                style={{ cursor: "pointer" }}
                                className={classnames({
                                  "mb-2": true,
                                  active: customverticalTab === "10",
                                })}
                                onClick={() => {
                                  customtoggleVertical("10");
                                }}
                                id="custom-v-pills-messages-tab"
                              >
                                Attributes
                              </NavLink>
                            </NavItem>

                            <NavItem>
                              <NavLink
                                style={{ cursor: "pointer" }}
                                className={classnames({
                                  "mb-2": true,
                                  active: customverticalTab === "11",
                                })}
                                onClick={() => {
                                  customtoggleVertical("11");
                                }}
                                id="custom-v-pills-messages-tab"
                              >
                                Variations
                              </NavLink>
                            </NavItem>

                            <NavItem>
                              <NavLink
                                style={{ cursor: "pointer" }}
                                className={classnames({
                                  "mb-2": true,
                                  active: customverticalTab === "12",
                                })}
                                onClick={() => {
                                  customtoggleVertical("12");
                                }}
                                id="custom-v-pills-messages-tab"
                              >
                                Advanced
                              </NavLink>
                            </NavItem>
                          </Nav>
                        </Col>
                        <Col lg={9}>
                          <TabContent
                            activeTab={customverticalTab}
                            className="text-muted mt-3 mt-lg-0"
                          >
                            <TabPane tabId="7" id="custom-v-pills-home">
                              <div className="row">
                                <div className="col-12">
                                  <label className="pricing">Inventry</label>
                                </div>

                                <div className="col-12">
                                  <label className="general_labels">SKU</label>
                                </div>
                                <div className="col-12">
                                  <input
                                    type="text"
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-sm"
                                  />
                                </div>

                                <div className="col-12 mt-2">
                                  <div className="form-check general_checkbox">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      onClick={() =>
                                        setSecondinventery((t) => !t)
                                      }
                                    />
                                    <label className="form-check-label">
                                      Enable Stock Management
                                    </label>
                                  </div>
                                </div>

                                <div
                                  className="col-12 mt-2"
                                  style={{
                                    display: secondinventery ? "none" : "block",
                                  }}
                                >
                                  <label className="general_labels">
                                    Stock Quantity
                                  </label>
                                </div>
                                <div
                                  className="col-12"
                                  style={{
                                    display: secondinventery ? "none" : "block",
                                  }}
                                >
                                  <input
                                    type="text"
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-sm"
                                  />
                                </div>

                                <div
                                  className="col-12 mt-2"
                                  style={{
                                    display: secondinventery ? "none" : "block",
                                  }}
                                >
                                  <label className="general_labels">
                                    Allow Backorders
                                  </label>
                                </div>
                                <div
                                  className="col-12"
                                  style={{
                                    display: secondinventery ? "none" : "block",
                                  }}
                                >
                                  <select
                                    className="form-select"
                                    aria-label="Default select example"
                                  >
                                    <option value="1">No Backorders</option>
                                    <option value="2">Allow Backorders</option>
                                  </select>
                                </div>

                                <div
                                  className="col-12 mt-2"
                                  style={{
                                    display: secondinventery ? "none" : "block",
                                  }}
                                >
                                  <label className="general_labels">
                                    Low Stock Threshold
                                  </label>
                                </div>
                                <div
                                  className="col-12"
                                  style={{
                                    display: secondinventery ? "none" : "block",
                                  }}
                                >
                                  <input
                                    type="text"
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-sm"
                                  />
                                </div>
                              </div>
                            </TabPane>

                            <TabPane tabId="8" id="custom-v-pills-profile">
                              <div className="row">
                                <div className="col-3">
                                  <label className="general_labels">
                                    Weight(kg)
                                  </label>
                                </div>
                                <div className="col-9">
                                  <input
                                    type="number"
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-sm"
                                  />
                                </div>

                                <div className="col-3 mt-3">
                                  <label className="general_labels">
                                    Dimensions (cm)
                                  </label>
                                </div>
                                <div className="col-3 mt-3">
                                  <input
                                    type="number"
                                    placeholder="Lenght"
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-sm"
                                  />
                                </div>
                                <div className="col-3 mt-3">
                                  <input
                                    type="number"
                                    placeholder="Weight"
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-sm"
                                  />
                                </div>
                                <div className="col-3 mt-3">
                                  <input
                                    type="number"
                                    placeholder="Height"
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-sm"
                                  />
                                </div>
                              </div>
                            </TabPane>

                            <TabPane tabId="9" id="custom-v-pills-messages">
                              <div className="row">
                                <div className="col-3">
                                  <label className="general_labels">
                                    Upsells
                                  </label>
                                </div>
                                <div className="col-9">
                                  <input
                                    type="number"
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-sm"
                                  />
                                </div>

                                <div className="col-3 mt-3">
                                  <label className="general_labels">
                                    Cross Sells
                                  </label>
                                </div>
                                <div className="col-9 mt-3">
                                  <input
                                    type="number"
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-sm"
                                  />
                                </div>
                              </div>
                            </TabPane>

                            <TabPane tabId="10" id="custom-v-pills-messages">
                              <div className="row">
                                <div className="col-6">
                                  <select
                                    className="form-select mb-3"
                                    aria-label="Default select example"
                                  >
                                    <option value="1">Select anyone</option>
                                    <option value="2">Color</option>
                                    <option value="3">Size</option>
                                  </select>
                                </div>

                                <div className="col-12">
                                  <label className="general_labels">
                                    Colors
                                  </label>
                                </div>
                                <div className="col-12">
                                  <Select
                                    value={selectedMulti2}
                                    isMulti={true}
                                    isClearable={true}
                                    onChange={(e) => {
                                      handleMulti2(e);
                                    }}
                                    options={SingleOptions}
                                  />
                                </div>

                                <div className="col-12 mt-2">
                                  <div className="form-check general_checkbox">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      onClick={() =>
                                        setSecondinventery((t) => !t)
                                      }
                                    />
                                    <label className="form-check-label">
                                      Used for Variations
                                    </label>
                                  </div>
                                </div>

                                <div className="col-12">
                                  <label className="general_labels">
                                    Sizes
                                  </label>
                                </div>
                                <div className="col-12">
                                  <Select
                                    value={selectedMultisize}
                                    isMulti={true}
                                    isClearable={true}
                                    onChange={(e) => {
                                      handleMultisize(e);
                                    }}
                                    options={SingleOptionssize}
                                  />
                                </div>

                                <div className="col-12 mt-2">
                                  <div className="form-check general_checkbox">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      onClick={() =>
                                        setSecondinventery((t) => !t)
                                      }
                                    />
                                    <label className="form-check-label">
                                      Used for Variations
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </TabPane>

                            <TabPane tabId="11" id="custom-v-pills-messages">
                              <div className="row">
                                <div className="col-6">
                                  <select
                                    className="form-select mb-3"
                                    aria-label="Default select example"
                                  >
                                    <option value="1">Add Variations</option>
                                    <option value="2">
                                      Creat New Variation
                                    </option>
                                  </select>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-12">
                                  {variationsState.map((item) => (
                                    <>
                                      {item.map((variant) => (
                                        <>
                                          {
                                            <CustomAccordion
                                              customaccordionHeader={
                                                <h2 className="accordion-header">
                                                  <button
                                                    className={classnames(
                                                      "accordion-button customer_aaccordion_header",
                                                      { collapsed: !col1 }
                                                    )}
                                                    type="button"
                                                  >
                                                    <span className="variant_1">
                                                      {variant.color}
                                                    </span>
                                                    <span className="variant_2">
                                                      {variant.size}
                                                    </span>
                                                  </button>
                                                </h2>
                                              }
                                              customaccordionBody={
                                                <div className="accordion-body">
                                                  <div className="row">
                                                    <div className="col-6">
                                                      <img
                                                        className="variation_img"
                                                        src={avatar1}
                                                        alt="img"
                                                      />
                                                      <div className="col-12 regular_price">
                                                        <label className="general_labels">
                                                          Regular Price (Rs)
                                                        </label>
                                                      </div>
                                                      <div className="col-12">
                                                        <input
                                                          type="text"
                                                          className="form-control form-control-sm"
                                                          aria-label="Sizing example input"
                                                          aria-describedby="inputGroup-sizing-sm"
                                                        />
                                                      </div>
                                                      <div className="col-12">
                                                        <label className="general_labels">
                                                          Stock Status
                                                        </label>
                                                      </div>
                                                    </div>

                                                    <div className="col-6">
                                                      <div className="col-12">
                                                        <label className="general_labels">
                                                          SKU
                                                        </label>
                                                      </div>
                                                      <div className="col-12">
                                                        <input
                                                          type="text"
                                                          className="form-control form-control-sm"
                                                          aria-label="Sizing example input"
                                                          aria-describedby="inputGroup-sizing-sm"
                                                        />
                                                      </div>

                                                      <div className="col-12 sale_price">
                                                        <label className="general_labels">
                                                          Sale Price (Rs)
                                                        </label>
                                                      </div>
                                                      <div className="col-12">
                                                        <input
                                                          type="text"
                                                          className="form-control form-control-sm"
                                                          aria-label="Sizing example input"
                                                          aria-describedby="inputGroup-sizing-sm"
                                                        />
                                                      </div>
                                                      <div className="col-12">
                                                        <div className="form-check general_checkbox">
                                                          <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            onClick={() =>
                                                              setStock(
                                                                (t) => !t
                                                              )
                                                            }
                                                          />
                                                          <label className="form-check-label">
                                                            Enable Stock
                                                            Management
                                                          </label>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="row mt-2 m-0">
                                                      <div
                                                        className="col-12 p-0"
                                                        style={{
                                                          display: stock
                                                            ? "none"
                                                            : "block",
                                                        }}
                                                      >
                                                        <select
                                                          className="form-select form-select-sm"
                                                          aria-label=".form-select-lg example"
                                                        >
                                                          <option>
                                                            Open this select
                                                            menu
                                                          </option>
                                                          <option defaultValue="1">
                                                            In Stock
                                                          </option>
                                                          <option defaultValue="2">
                                                            Out Stock
                                                          </option>
                                                          <option defaultValue="3">
                                                            Invalid
                                                          </option>
                                                        </select>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              }
                                            />
                                          }
                                        </>
                                      ))}
                                    </>
                                  ))}
                                </div>
                              </div>
                            </TabPane>

                            <TabPane tabId="12" id="custom-v-pills-messages">
                              <div className="row">
                                <div className="col-12">...</div>
                              </div>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </>
                    )}
                  </Row>
                </CardBody>
              </Card>

              {/* Description */}
              <Card>
                <CardBody>
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

              {/* short note */}
              <Card>
                <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="project-title-input">
                      Short Description
                    </Label>

                    <textarea
                      className="form-control"
                      placeholder="Comment here"
                      id=""
                    ></textarea>
                  </div>
                </CardBody>
              </Card>

              {/* create button */}
              <div className="text-start mb-4">
                <button type="submit" className="btn btn-success w-sm">
                  Create
                </button>
              </div>
            </Col>

            {/* second calumn */}
            <Col lg={4}>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">Status</h5>
                </div>
                <CardBody>
                  <div>
                    <select
                      className="form-select mb-3"
                      aria-label="Default select example"
                    >
                      <option>Select your Status </option>
                      <option value="1">Declined Payment</option>
                      <option value="2">Delivery Error</option>
                      <option value="3">Wrong Amount</option>
                    </select>
                  </div>
                </CardBody>
              </div>

              <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">Categories</h5>
                </div>
                <CardBody>
                  <div>
                    <Select
                      value={selectedMulti3}
                      isMulti={true}
                      onChange={() => {
                        handleMulti3();
                      }}
                      options={GroupOptions}
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                    />
                  </div>
                </CardBody>
              </div>

              <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">Tags</h5>
                </div>
                <CardBody>
                  <div>
                    <Select
                      value={selectedMulti3}
                      isMulti={true}
                      onChange={() => {
                        handleMulti3();
                      }}
                      options={GroupOptions}
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                    />
                  </div>
                </CardBody>
              </div>

              {/* single file uplodad */}
              <Card>
                <CardBody>
                  <div className="list-unstyled mb-2" id="file-previews">
                    {selectedFiles.map((f, i) => {
                      return (
                        <Card
                          className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                          key={i + "-file"}
                        >
                          <div className="p-2">
                            <Row className="align-items-center">
                              <Col className="col-auto">
                                <img
                                  data-dz-thumbnail=""
                                  height="80"
                                  className="rounded bg-light single_img"
                                  alt={f.name}
                                  src={f.preview}
                                />
                              </Col>
                              <Col>
                                <Link
                                  to="#"
                                  className="text-muted font-weight-bold"
                                >
                                  {f.name}
                                </Link>
                                <p className="mb-0">
                                  <strong>{f.formattedSize}</strong>
                                </p>
                              </Col>
                            </Row>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                  <Dropzone
                    onDrop={(acceptedFiles) => {
                      handleAcceptedFiles(acceptedFiles);
                    }}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <div className="dz-clickable custom_signle_file">
                        <div
                          className="dz-message needsclick"
                          {...getRootProps()}
                        >
                          <div className="mb-3">
                            <i className="display-4 text-muted ri-upload-cloud-2-fill single_file_icon" />
                          </div>
                        </div>
                      </div>
                    )}
                  </Dropzone>
                </CardBody>
              </Card>

              {/* multiple file upload */}
              <Card>
                <CardHeader>
                  <h4 className="card-title mb-0">Product Gallery Images</h4>
                </CardHeader>

                <CardBody>
                  <FilePond
                    files={files}
                    onupdatefiles={setFiles}
                    allowMultiple={true}
                    maxFiles={10}
                    name="files"
                    className="multiple_filepond_custom filepond-input-multiple"
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AddProduct;
