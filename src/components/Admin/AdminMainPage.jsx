import React from 'react'
import SideBar from './SideBar';
import Footer from './Footer';
import Usernotification from './Usernotification';
import Createduser from './Createduser';
import Devicetypecreate from './Devicetypecreate';
import Ocrpage from './Ocrpage';
import Thermal from './Thermal';

const AdminMainPage = () => {
  return (
    <div>
      <SideBar/>
      <Thermal/>
      <Footer/>
    </div>
  )
}

export default AdminMainPage;