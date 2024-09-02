import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import NavBar from "./components/Navbar";
import Home1 from "./components/Home/Home1";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";

import LoginSignup from "./components/LoginSignup";
import Profile from "./components/Profile";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import PrivateRoute from "./components/PrivateRoute";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthService from "./services/auth.service";
function App() {
  const [load, updateLoad] = useState(true);
  const [buttonText, setButtonText] = useState("Register");
  
  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
      
        <NavBar buttonText={buttonText} setButtonText={setButtonText} />
    
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/home" element={<Home1 />} />
          <Route path="/signin" element={<LoginSignup setButtonText={setButtonText} />} />
          <Route path="/project" element={<PrivateRoute element={Projects} />} />
          <Route path="/profile" element={<PrivateRoute element={Profile} />} />
          <Route path="/about" element={<About />} />
        
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
