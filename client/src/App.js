import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Pages/Home/Home";
import ServiceAuditInterne from "./Pages/Services/ServiceAuditInterne/ServiceAuditInterne";

import Navbar from './Components/Navbar/Navbar'

import "./App.css";
import Layout from "./Components/Layout";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProUni-Audit-Interne-Services" element={<Layout><ServiceAuditInterne /></Layout>} />
      </Routes>
    </div>
  );
}

export default App;
