import Content from "./Content/Content";
import Navbars from "./Navbars/Navbars";
import React from 'react'
import { useState ,useEffect } from "react";
import axios from "axios";


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

  //update lat lng for user accounts
  const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    const updateCoordinates = (lat, lng) => {
      setLatitude(lat);
      setLongitude(lng);
  };
  //  API call For Accounts Of User

const [useraccount , SetUseraccount]=useState({ items: [] });

const accountFetch=async()=>{
try {
const response= await axios.get(`http://4.188.244.11/account_view/7787998637/`);
SetUseraccount(response.data);

} catch (error) {
console.log(error);
}

}
useEffect(()=>{
accountFetch();
},[]);

  useEffect(() => {
        if (useraccount.items && useraccount.items.length > 0) {
            setLatitude(useraccount.items[0][2]);
            setLongitude(useraccount.items[0][3]);
        }
    }, [useraccount]);

  return (
 <>
 <Navbars handleToggle={handleToggle} useraccount={useraccount} updateCoordinates={updateCoordinates}/>
 <Content toggleStates={toggleStates} latitude={latitude} longitude={longitude}  />
 </>
  )
}

export default Usersmainpage;