import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Frameworks from "./pages/Framework";
import ISO27001 from "./pages/Frameworks/ISO27001";
import COBIT from "./pages/Frameworks/COBIT";
import NIST from "./pages/Frameworks/NIST";
import PCIDSS from "./pages/Frameworks/PCI-DSS";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/framework" element={<Frameworks />} />
            <Route path="/frameworks/iso27001" element={<ISO27001 />} />
            <Route path="/frameworks/cobit" element={<COBIT />} />
            <Route path="/frameworks/nist" element={<NIST />} />
            <Route path="/frameworks/pci-dss" element={<PCIDSS />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
