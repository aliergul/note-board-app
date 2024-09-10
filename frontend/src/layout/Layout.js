import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home/Home";
import "../styles/main.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Login from "../pages/Login/Login";
import Tags from "../pages/Tags/Tags";
//import Footer from "./components/Footer/Footer";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        {location.pathname !== "/login" && (
          <div className="flex flex-col justify-between w-56 p-4 bg-white">
            <Sidebar />
          </div>
        )}
        <div className="flex-1 p-6 bg-color1 overflow-y-auto">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/tags" element={<Tags />} />
          </Routes>
          {/* <div className="w-full bg-palette_light text-center py-4">
          <Footer />
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
