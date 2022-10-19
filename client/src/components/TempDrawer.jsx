import { Logout } from "@mui/icons-material";
import {
  Avatar,
  Box,
  ClickAwayListener,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Skeleton,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { InfoContext } from "../utility/InfoProvider";

const TempDrawer = ({ openDrawer, setOpenDrawer }) => {
  const { authorized } = useContext(InfoContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER_IMAGES_PERSON;
  const userId = localStorage.getItem("user");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  useEffect(() => {
    if (authorized) {
      setLoading(true);
      const fetchUser = async () => {
        const res = await axios.get(`/users?userId=${userId}`);
        setUser(res.data);
        setLoading(false);
      };
      fetchUser();
    }
  }, [authorized, userId]);

  return (
    <Drawer anchor="left" open={openDrawer} sx={{ display: { sm: "none" } }}>
      <ClickAwayListener onClickAway={handleDrawerClose}>
        <Box sx={{ width: 250, height: "100%" }}>
          <List>
            <ListItem>
              <Typography
                component="h3"
                variant="h5"
                color="primary"
                gutterBottom
              >
                Team Finder
              </Typography>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={handleDrawerClose}
                component={Link}
                to="/"
              >
                <ListItemText>
                  <Typography>Home</Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={handleDrawerClose}
                component={Link}
                to="/about"
              >
                <ListItemText>
                  <Typography>About</Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={handleDrawerClose}
                component={Link}
                to={authorized ? `/${user.username}` : "/login"}
              >
                <ListItemText>
                  <Typography>{authorized ? "Profile" : "Login"}</Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
          {!authorized ? null : (
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Box sx={{ ml: 1 }}>
                    {loading ? (
                      <Skeleton variant="circular" width={30} height={30} />
                    ) : (
                      <Avatar
                        sx={{ width: 30, height: 30 }}
                        src={
                          !user.profilePic
                            ? "/broken-image.jpg"
                            : PF + user.profilePic
                        }
                      />
                    )}
                  </Box>
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="body1" fontSize={12} fontWeight={600}>
                      {user.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {user.username}
                    </Typography>
                  </Box>
                </Box>
                <IconButton color="primary" onClick={handleLogout}>
                  <Logout />
                </IconButton>
              </Box>
            </Box>
          )}
        </Box>
      </ClickAwayListener>
    </Drawer>
  );
};

export default TempDrawer;
