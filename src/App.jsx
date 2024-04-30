import AdminMainPage from "./components/Admin/AdminMainPage";
import Usersmainpage from "./components/User/Usersmainpage";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { createContext, useState } from "react";


export const AdminContext = createContext();

function App(){
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  return(
    <>
   
   <Router>
   <AdminContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>

<AdminMainPage/>
</AdminContext.Provider>

{/* <Usersmainpage></Usersmainpage> */}
</Router>
    
    </>
    
  );
}
export default App;