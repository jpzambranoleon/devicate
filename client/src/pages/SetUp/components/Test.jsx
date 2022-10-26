import { Close, Delete, PhotoCamera } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Modal,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { InfoContext } from "../../../utility/InfoProvider";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Test = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { setStatus, authorizedUser } = useContext(InfoContext);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
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
    <div>
      <Box>
        <Button onClick={handleOpen}>open</Button>
        <StyledModal open={open}>
          <Box
            width={600}
            bgcolor={"background.default"}
            color="text.primary"
            borderRadius={2}
            sx={{
              border: "2px solid #000",
            }}
          >
            <Box
              sx={{
                padding: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" color="primary" align="left">
                Set Up
              </Typography>
              <IconButton
                onClick={handleClose}
                aria-label="exit modal"
                color="error"
              >
                <Close />
              </IconButton>
            </Box>
            <Divider />
            <Box p={2}>
              <Typography
                gutterBottom
                align="center"
                variant="h4"
                color="primary"
              >
                Profile Picture
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
              <Box sx={{ position: "absolute" }}>
                {file === null ? null : (
                  <IconButton
                    onClick={() => setFile(null)}
                    color="error"
                    sx={{ bottom: 200, left: 330 }}
                  >
                    <Delete fontSize="large" />
                  </IconButton>
                )}
              </Box>
              <Button
                variant="outlined"
                startIcon={<PhotoCamera />}
                component="label"
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
            <Divider />
            <Box p={1}>
              <Grid container justifyContent="flex-end">
                <Button>Next</Button>
              </Grid>
            </Box>
          </Box>
        </StyledModal>
      </Box>
    </div>
  );
};

export default Test;
