import React, { useState } from "react";

const CustomAccordion = ({ customaccordionHeader, customaccordionBody }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="acccordion">
      <div
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className="accordion__header"
      >
        {customaccordionHeader}
      </div>
      {isOpen && <div className="accordion__body">{customaccordionBody}</div>}
    </div>
  );
};

export default CustomAccordion;
