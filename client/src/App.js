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

function App() {
  axios.defaults.baseURL = "http://localhost:5500/api";

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
