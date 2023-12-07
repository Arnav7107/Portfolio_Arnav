import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [load, upadateLoad] = useState(true);
  // const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    window.scrollTo(0, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* <Preloader load={load} /> */}
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        {/* <p>test</p> */}
        <Navbar />
        {/* <ScrollToTop /> */}
        {/* <PacmanGhosts /> */}
        <Home />
        {/* <Routes>
          <Route path="/" element={<Home />} />
        </Routes> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
