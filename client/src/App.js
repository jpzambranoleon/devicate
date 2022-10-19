import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { Box, Container, Grid } from "@mui/material";
import axios from "axios";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import { useContext } from "react";
import { InfoContext } from "./utility/InfoProvider";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";

function App() {
  axios.defaults.baseURL = "http://localhost:5500/api";

  const { authorized } = useContext(InfoContext);

  return (
    <div className="App">
      {authorized ? (
        <Router>
          <Navbar />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Container>
        </Router>
      ) : (
        <Router>
          <Routes>
            <Route path="*" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
