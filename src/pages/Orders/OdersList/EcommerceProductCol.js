import React from "react";

const Rating = (cell) => {
  return (
    <React.Fragment>
      <span>
        <span className="badge bg-light text-body fs-12 fw-medium">
          <i className="mdi mdi-star text-warning me-1"></i>
          {cell.value}
        </span>
      </span>
    </React.Fragment>
  );
};

const Published = (cell) => {
  return (
    <React.Fragment>
      <span>
        {cell.value[0]}
        <small className="text-muted ms-1">{cell.value[1]}</small>
      </span>
    </React.Fragment>
  );
};

const Price = (cell) => {
  return <React.Fragment>{"$ " + cell.value + ".00"}</React.Fragment>;
};

const PaymentMethod = (cell) => {
  return <React.Fragment>{"$ " + cell.value + ".00"}</React.Fragment>;
};

const Id = (cell) => {
  return <React.Fragment>{"$ " + cell.value + ".00"}</React.Fragment>;
};

const Contact = (cell) => {
  return <React.Fragment>{"$ " + cell.value + ".00"}</React.Fragment>;
};

export { Rating, Published, Price, PaymentMethod, Id, Contact };
