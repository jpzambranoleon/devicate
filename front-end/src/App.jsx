import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import "./App.css";
import Navbar from "./components/Navbar";
import "./styles/styles.scss";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
        <Home />
      </div>
    </Router>
  );
}

export default App;
