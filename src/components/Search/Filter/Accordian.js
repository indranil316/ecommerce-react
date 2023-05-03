import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Accordion(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const {name, options} = props;

  return (
    <>
      <input type="checkbox" id="size-accordion" className="hidden" />
      <label
        htmlFor="size-accordion"
        className="flex items-center justify-between py-2 text-xl font-medium text-gray-700 cursor-pointer"
        onClick={handleToggle}
      >
        <span>{name}</span>
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className="ml-2 transition-all transform"
        />
      </label>
      <div
        className={`overflow-hidden transition-all max-h-0 ${
          isOpen ? "max-h-full" : ""
        }`}
      >
        <div className="grid grid-cols-5 gap-4 p-4">
          {options.map((value, index) => (
            <button
              key={index}
              className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-md"
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Accordion;
