import AdminMainPage from "./components/Admin/AdminMainPage";
import Usersmainpage from "./components/User/Usersmainpage";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { createContext, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export const AdminContext = createContext();

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Router>
        {/* <AdminContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
          <LoadScript googleMapsApiKey="AIzaSyC-d-7RR_MQ45QLQXKSzOxviR2l11kN3wk">
            <AdminMainPage />
          </LoadScript>
        </AdminContext.Provider> */}

        <Usersmainpage></Usersmainpage>
      </Router>
    </>
  );
}
export default App;
