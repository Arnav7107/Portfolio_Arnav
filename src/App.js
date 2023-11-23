import React, { useState, useEffect } from "react";
import Preloader from "../src/Components/Pre"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home/Home";
import Projects from "./Components/Project/Projects";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PacmanGhosts from "./Components/PacmanGhosts";

import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const [load, upadateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        {/* <PacmanGhosts /> */}
        <Routes>
          <Route path="/"  element={<Home />} />
          {/* <Route path="/" element={<Projects />} /> */}
        </Routes>
        <Footer />
        

      </div>
    </Router>
  );
}

export default App;
