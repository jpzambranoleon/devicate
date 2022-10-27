import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  CardMedia,
  IconButton,
  Modal,
  Skeleton,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useRef } from "react";
import { useContext } from "react";
import { useState } from "react";
import { InfoContext } from "../utility/InfoProvider";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const CreatePostButton = () => {
  const { setStatus } = useContext(InfoContext);
  const userId = localStorage.getItem("user");
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [file, setFile] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER_IMAGES;

  const [formData, setFormData] = useState({
    userId: "",
    desc: "",
  });

  useEffect(() => {
    setLoading(true);
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${userId}`);
      setUser(res.data);
      setLoading(false);
    };
    fetchUser();
  }, [userId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(file);

    formData.userId = userId;

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("image", file);
      formData.img = fileName;

      axios.post("/upload", data);
    }
    axios
      .post("/posts/submit", formData)
      .then((res) => {
        setStatus({
          open: true,
          message: res.data.message,
          severity: "success",
        });
        window.location.reload();
      })
      .catch((err) => {
        let message = err.response ? err.response.data.message : err.message;
        setStatus({ open: true, message: message, severity: "error" });
      });
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" fullWidth size="large">
        Create Post
      </Button>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color="text.primary"
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" align="center">
            Create Post
          </Typography>
          <UserBox>
            {loading ? (
              <Skeleton variant="circular" width={30} height={30} />
            ) : (
              <Avatar
                src={
                  !user.profilePic ? "/broken-image.jpg" : PF + user.profilePic
                }
                sx={{ width: 30, height: 30 }}
              />
            )}
            <Typography fontWeight={500} variant="span">
              {user.firstName + " " + user.lastName}
            </Typography>
          </UserBox>
          <TextField
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, desc: e.target.value }))
            }
            id="desc"
            multiline
            fullWidth
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          {file && (
            <CardMedia
              component="img"
              image={URL.createObjectURL(file)}
              alt=""
            />
          )}
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <IconButton aria-label="add emoji" color="primary">
              <EmojiEmotions color="primary" />
            </IconButton>
            <IconButton
              aria-label="add image"
              color="secondary"
              component="label"
            >
              <input
                hidden
                accept=".png, .jpg, .jpeg"
                type="file"
                name="img"
                id="img"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <Image color="secondary" />
            </IconButton>
            <IconButton aria-label="add video" color="success">
              <VideoCameraBack color="success" />
            </IconButton>
            <IconButton aria-label="add person" color="error">
              <PersonAdd color="error" />
            </IconButton>
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="contained primary button group"
          >
            <Button onClick={handleSubmit}>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </div>
  );
};

export default CreatePostButton;
