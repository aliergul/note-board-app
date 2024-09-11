import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import "../styles/main.css";
import Login from "../pages/Login/Login";
import Tags from "../pages/Tags/Tags";
import SignUp from "../pages/SignUp/SignUp";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 p-6 bg-custom-bg overflow-y-auto">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/tags" element={<Tags />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
