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

function App() {
  axios.defaults.baseURL = "http://localhost:5500/api";

  const { authorized } = useContext(InfoContext);

  return (
    <div className="App">
      {authorized ? (
        <Router>
          <Container></Container>
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
