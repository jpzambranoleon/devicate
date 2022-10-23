import { MenuTwoTone, SportsSoccer } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Skeleton,
  Toolbar,
  Typography,
} from "@mui/material";

const SetupBar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={{
            width: { xl: "76%", lg: "90%" },
            margin: { xl: "0 auto", lg: "0 auto" },
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <SportsSoccer fontSize="large" color="inherit" sx={{ mr: 1 }} />
            <Typography color="inherit" variant="h5" noWrap>
              Team Finder
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default SetupBar;
