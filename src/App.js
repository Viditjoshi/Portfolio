import React from "react";
import "./index.css";
import Home from "./router/Home.js";
import About from "./router/About.js";
import Project from "./router/Project.js";
import Contact from "./router/Contact.js";
import Footer from "./Component/Footer.js";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Component/Navbar.js";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
