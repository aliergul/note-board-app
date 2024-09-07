import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "../src/styles/main.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Tags from "./pages/Tags/Tags";
//import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <div className="flex flex-1 overflow-hidden">
          <div className="flex flex-col justify-between w-56 p-4 bg-color4">
            <Sidebar />
          </div>
          <div className="flex-1 p-6 bg-color2 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Home />} />
              <Route path="/tags" element={<Tags />} />
            </Routes>
          </div>
        </div>
        {/* <div className="w-full bg-palette_light text-center py-4">
          <Footer />
        </div> */}
      </div>
    </Router>
  );
}

export default App;
