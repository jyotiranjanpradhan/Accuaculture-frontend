import { Routes, Route } from "react-router-dom";
import SideBar from "./Sidebar/SideBar";
import Footer from "./footer/Footer";
import Usernotification from "./Usernotification";
import Createduser from '../Admin/createduser/Createduser';
import Devicetypecreate from './devicetype/Devicetypecreate';
import Ocr from './Ocr';
import Thermal from './Thermal';
import UserAccounts from "./createduser/UserAccounts";
import UseraccountDevices from "./createduser/UseraccountDevices";
import NgxDynamic from "./createduser/NgxDynamic";
import Deviceassignctrl from "./devicetype/Deviceassignctrl";


const AdminMainPage = () => {
  return (
    <div >
  
      <SideBar />
      <Routes>
      <Route path="/" element={<Usernotification/>} />

        <Route path="/createduser" element={<Createduser/>}/>
        <Route path="/createduser/useraccounts/:mob" element={<UserAccounts/>}/>
        <Route path="/createduser/useraccounts/UseraccountDevices/:accountid" element={<UseraccountDevices/>}/>
        <Route path="/createduser/useraccounts/UseraccountDevices/ngxdynamics" element={<NgxDynamic/>}/>
        <Route path="/devicetypecreate" element={<Devicetypecreate />} />
        <Route path="/devicetypecreate/deviceassignctrls/:devicename/:version" element={<Deviceassignctrl/>} />
        <Route path="/createduser/useraccounts/UseraccountDevices/ngxdynamics/:accountid/:deviceType/:deviceId" element={<NgxDynamic/>} />
        < Route  path="/ocr" element={<Ocr/>}/>
        <Route path="/thermal" element={<Thermal/>}/>
        
      </Routes>
      <Footer />
      
      
    </div>
  );
};

export default AdminMainPage;

