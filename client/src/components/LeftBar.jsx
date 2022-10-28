import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  CardActionArea,
  CardHeader,
  Avatar,
  Switch,
  FormGroup,
  FormControlLabel,
  styled,
  Skeleton,
} from "@mui/material";
import {
  Apps,
  Bookmark,
  Explore,
  Home,
  LaptopChromebook,
  Message,
  Person,
  Settings,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import CreatePostButton from "./CreatePostButton";
import { useContext, useEffect, useState } from "react";
import { InfoContext } from "../utility/InfoProvider";
import axios from "axios";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const LeftBar = ({ mode, setMode }) => {
  const { authorized } = useContext(InfoContext);
  const userId = localStorage.getItem("user");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER_IMAGES;

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
    <Box
      component="div"
      aria-label="Leftbar"
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed" sx={{ minWidth: 270 }}>
        <Paper sx={{ mb: 2 }}>
          <CardActionArea>
            <CardHeader
              avatar={
                loading ? (
                  <Skeleton
                    animation="wave"
                    variant="circular"
                    width={40}
                    height={40}
                  />
                ) : (
                  <Avatar
                    src={
                      !user.profilePic
                        ? "/broken-image.jpg"
                        : PF + user.profilePic
                    }
                  />
                )
              }
              title={
                loading ? (
                  <Skeleton animation="wave" height={15} />
                ) : (
                  user.firstName + " " + user.lastName
                )
              }
              subheader={
                loading ? (
                  <Skeleton animation="wave" height={15} width="40%" />
                ) : (
                  "@" + user.username
                )
              }
            />
          </CardActionArea>
        </Paper>
        <Paper flex={1} sx={{ mb: 2 }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/">
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to={`/${user.username}`}>
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#explore">
                <ListItemIcon>
                  <Explore />
                </ListItemIcon>
                <ListItemText primary="Explore" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#messages">
                <ListItemIcon>
                  <Message />
                </ListItemIcon>
                <ListItemText primary="Messages" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#courses">
                <ListItemIcon>
                  <LaptopChromebook />
                </ListItemIcon>
                <ListItemText primary="Courses" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#projects">
                <ListItemIcon>
                  <Apps />
                </ListItemIcon>
                <ListItemText primary="Projects" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#bookmarks">
                <ListItemIcon>
                  <Bookmark />
                </ListItemIcon>
                <ListItemText primary="Bookmarks" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#settings">
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <FormGroup>
                <FormControlLabel
                  control={
                    <MaterialUISwitch
                      onChange={(e) =>
                        setMode(mode === "light" ? "dark" : "light")
                      }
                      sx={{ ml: 2, mr: 0.5 }}
                    />
                  }
                  label="Theme"
                />
              </FormGroup>
            </ListItem>
          </List>
        </Paper>
        <CreatePostButton />
      </Box>
    </Box>
  );
};

export default LeftBar;
