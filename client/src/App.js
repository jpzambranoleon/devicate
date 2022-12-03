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
import Setup from "./pages/SetUp/Setup";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import RightBar from "./components/RightBar";
import LeftBar from "./components/LeftBar";
import SetupProfile from "./pages/SetUp/SetupProfile";
import Profile from "./pages/Profile/Profile";

function App() {
  axios.defaults.baseURL = "http://localhost:5500/api";

  const { authorized } = useContext(InfoContext);
  // do more stuff

  return (
    <div className="App">
      <Box bgcolor={"background.default"} color="text.primary">
        {authorized ? (
          <Router>
            <Routes>
              <Route path="/:id/setup" element={<Setup />} />
              <Route path="/:id/setup/profile" element={<SetupProfile />} />
              <Route path="/" element={<Home />} />
              <Route path="/:username" element={<Profile />} />
            </Routes>
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
      </Box>
    </div>
  );
}

export default App;
