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
import RightBar from "./components/RightBar";
import LeftBar from "./components/LeftBar";

function App() {
  axios.defaults.baseURL = "http://localhost:5500/api";

  const { authorized } = useContext(InfoContext);

  return (
    <div className="App">
      <Box bgcolor={"background.default"} color="text.primary">
        {authorized ? (
          <Router>
            <Navbar />
            <Container>
              <Grid sx={{ pt: { md: 3, sm: 2 } }} container spacing={3}>
                <Grid item sm={3}>
                  <LeftBar />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                  </Routes>
                </Grid>
                <Grid>
                  <RightBar />
                </Grid>
              </Grid>
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
      </Box>
    </div>
  );
}

export default App;
