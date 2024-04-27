import Content from "./Content/Content";
import Navbars from "./Navbars/Navbars";
import React from 'react'
import { useState } from "react";

const Usersmainpage = () => {
  const [toggleStates, setToggleStates] = useState({
    Current: false,
    Voltage: false,
    pH: false,
    ORP: false,
    DO: false,
    TDS: false,
    // Add more metrics as needed
  });

  const handleToggle = (metric) => {
    setToggleStates((prevState) => ({
      ...prevState,
      [metric]: !prevState[metric],
    }));
  };

  return (
 <>
 <Navbars handleToggle={handleToggle} />
 <Content toggleStates={toggleStates} />
 </>
  )
}

export default Usersmainpage;