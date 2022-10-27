import {
  AddPhotoAlternate,
  GitHub,
  PersonAdd,
  PhotoCamera,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Typography,
  Paper,
  Avatar,
  TextField,
  Button,
  IconButton,
  CardMedia,
  Grid,
  Stack,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { InfoContext } from "../../utility/InfoProvider";
import SetupBar from "./components/SetupBar";
import SetupUser from "./SetupProfile";
import { Link } from "react-router-dom";
import Test from "./components/Test";

export default function Setup() {
  const { setStatus, authorizedUser } = useContext(InfoContext);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(file);

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("image", file);
      formData.profilePic = fileName;

      axios.post("/upload", data);
    }
    axios
      .put(`/users/update/${authorizedUser._id}`, {
        userId: authorizedUser,
        data: formData,
      })
      .then((res) => {
        setStatus({
          open: true,
          message: res.data.message,
          severity: "success",
        }).catch((err) => {
          let message = err.response ? err.response.data.message : err.message;
          setStatus({ open: true, message: message, severity: "error" });
        });
      });
  };

  return (
    <main>
      <Box sx={{ bgcolor: "background.paper", pt: 8, pb: 6 }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item sm={7} xs={12}>
              <Typography
                component="h1"
                variant="h4"
                color="primary"
                fontWeight="bold"
                gutterBottom
              >
                Tells us about yourself
              </Typography>
              <Typography variant="h5" color="text.secondary" gutterBottom>
                This will make it easier for other users to find you, and to get
                to know you better. Of course, this step is completely optional!
              </Typography>
              <Grid container spacing={2} align="center">
                <Grid item xs={12} sm={4}>
                  <Typography gutterBottom variant="h6">
                    Upload
                  </Typography>
                  <Avatar
                    sx={{ width: 60, height: 60, mb: 2, bgcolor: blue[700] }}
                  >
                    <AddPhotoAlternate fontSize="large" />
                  </Avatar>
                  <Typography
                    gutterBottom
                    variant="body1"
                    color="text.secondary"
                  >
                    Be personable
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography gutterBottom variant="h6">
                    Connect
                  </Typography>
                  <Avatar
                    sx={{ width: 60, height: 60, mb: 2, bgcolor: blue[700] }}
                  >
                    <PersonAdd fontSize="large" />
                  </Avatar>
                  <Typography
                    gutterBottom
                    variant="body1"
                    color="text.secondary"
                  >
                    Find and connect with others easier
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography gutterBottom variant="h6">
                    Share
                  </Typography>
                  <Avatar
                    sx={{ width: 60, height: 60, mb: 2, bgcolor: blue[700] }}
                  >
                    <GitHub fontSize="large" />
                  </Avatar>
                  <Typography
                    gutterBottom
                    variant="body1"
                    color="text.secondary"
                  >
                    Share your projects easily
                  </Typography>
                </Grid>
              </Grid>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  component={Link}
                  to={`/${authorizedUser._id}/setup/profile`}
                >
                  Continue
                </Button>
                <Button variant="outlined" component={Link} to="/">
                  Skip
                </Button>
              </Stack>
            </Grid>
            <Grid item sm={5} xs={12}>
              <Box sx={{ border: 1, borderRadius: 5, padding: 2 }}>
                <Box>
                  <Avatar
                    src={
                      !file ? "/broken-image.jpg" : URL.createObjectURL(file)
                    }
                    sx={{
                      width: 130,
                      height: 130,
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                  <Box>
                    <Button
                      variant="outlined"
                      startIcon={<PhotoCamera />}
                      component="label"
                      size="small"
                    >
                      <input
                        hidden
                        accept=".png, .jpg, .jpeg"
                        type="file"
                        name="image"
                        id="image"
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                      Upload
                    </Button>
                  </Box>
                </Box>
                <Box component="form">
                  <Typography variant="h7" fontWeight={600}>
                    Name
                  </Typography>
                  <TextField
                    id="name"
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    fullWidth
                    size="small"
                  />
                  <Typography variant="h7" fontWeight={600}>
                    Bio
                  </Typography>
                  <TextField
                    id="bio"
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, bio: e.target.value }))
                    }
                    fullWidth
                    multiline
                    rows={3}
                  />
                  <Typography variant="h7" fontWeight={600}>
                    Location
                  </Typography>
                  <TextField
                    id="location"
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        location: e.target.value,
                      }))
                    }
                    fullWidth
                    size="small"
                  />
                  <Button variant="contained" fullWidth size="small">
                    Submit
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
