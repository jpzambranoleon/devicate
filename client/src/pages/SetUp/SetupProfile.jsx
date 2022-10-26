import { Delete, PhotoCamera } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Modal,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { InfoContext } from "../../utility/InfoProvider";
import { Link } from "react-router-dom";

const SetupProfile = () => {
  const { setStatus, authorizedUser } = useContext(InfoContext);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    bio: "",
    location: "",
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
      <Box sx={{ bgcolor: "background.paper" }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" color="primary">
              Profile
            </Typography>
            <Button component={Link} to="/" sx={{ mt: 1, mb: 1 }}>
              Skip
            </Button>
          </Box>
          <Divider />
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6}>
              <Typography
                gutterBottom
                variant="h4"
                align="center"
                color="primary"
              >
                Upload Photo
              </Typography>
              <Avatar
                src={!file ? "/broken-image.jpg" : URL.createObjectURL(file)}
                sx={{
                  width: 200,
                  height: 200,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Stack direction="row" spacing={2}>
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
                  {file === null ? null : (
                    <Button
                      variant="outlined"
                      startIcon={<Delete />}
                      size="small"
                      color="error"
                      onClick={() => setFile(null)}
                    >
                      Delete
                    </Button>
                  )}
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                gutterBottom
                variant="h4"
                color="primary"
                align="center"
              >
                User Information
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h7" fontWeight={600}>
                    First Name
                  </Typography>
                  <TextField
                    id="firstName"
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        firstName: e.target.value,
                      }))
                    }
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h7" fontWeight={600}>
                    Last Name
                  </Typography>
                  <TextField
                    id="lastName"
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        lastName: e.target.value,
                      }))
                    }
                    fullWidth
                    size="small"
                  />
                </Grid>
              </Grid>
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
              <Button variant="contained">Submit</Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </main>
  );
};

export default SetupProfile;
