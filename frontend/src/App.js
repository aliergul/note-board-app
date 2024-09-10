import { BrowserRouter as Router } from "react-router-dom";
import "../src/styles/main.css";
import Layout from "./layout/Layout";

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
