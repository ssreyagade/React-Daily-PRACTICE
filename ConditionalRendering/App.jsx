import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Packages from "./components/Packages";
import Contact from "./components/Contact";
import InvalidRoute from "./components/InvalidRoute"; // ✅ correct import

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<InvalidRoute />} />{" "}
        {/* ✅ correct component */}
      </Routes>
    </Router>
  );
}

export default App;
