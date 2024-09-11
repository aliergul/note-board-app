import { Routes, Route } from "react-router-dom";
import HomeLayout from "../pages/Home/HomeLayout";
import "../styles/main.css";
import Login from "../pages/Login/Login";
import Tags from "../pages/Tags/Tags";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../pages/Dashboard/Dashboard";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 p-6 bg-custom-bg overflow-y-auto">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<HomeLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tags" element={<Tags />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
