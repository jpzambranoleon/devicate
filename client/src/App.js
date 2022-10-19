import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { Box } from "@mui/material";
import axios from "axios";

function App() {
  axios.defaults.baseURL = "http://localhost:5500/api";

  return (
    <div className="App">
      <Router>
        <Box></Box>
      </Router>
    </div>
  );
}

export default App;
