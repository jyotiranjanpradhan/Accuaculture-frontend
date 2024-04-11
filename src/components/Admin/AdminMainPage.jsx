import { Routes, Route } from "react-router-dom";
import SideBar from "./Sidebar/SideBar";
import Footer from "./footer/Footer";
import Usernotification from "./Usernotification";
import Createduser from './Createduser';
import Devicetypecreate from './Devicetypecreate';
import Ocr from './Ocr';
import Thermal from './Thermal';

const AdminMainPage = () => {
  return (
    <div>
      <SideBar />
      <Routes>
      <Route path="/" element={<Usernotification />} />
        <Route path="/devicetypecreate" element={<Devicetypecreate />} />
        <Route path="/createduser" element={<Createduser/>}/>
        < Route  path="/ocr" element={<Ocr/>}/>
        <Route path="/thermal" element={<Thermal/>}/>
      </Routes>
      <Footer />
      
    </div>
  );
};

export default AdminMainPage;

