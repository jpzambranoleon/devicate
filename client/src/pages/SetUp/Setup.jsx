import { PhotoCamera } from "@mui/icons-material";
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
} from "@mui/material";
import { useState } from "react";
import { useContext } from "react";
import { InfoContext } from "../../utility/InfoProvider";
import SetupBar from "./components/SetupBar";

export default function Setup() {
  const { setStatus, authorizedUser } = useContext(InfoContext);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
  });

  return (
    <main>
      <SetupBar />
      <Box sx={{ bgcolor: "background.paper", pt: 8, pb: 6 }}>
        <Container maxWidth="sm">
          <Box component={Paper}>
            <Typography>Set UP</Typography>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <Avatar></Avatar>
            <IconButton component="label">
              <input
                hidden
                accept=".png, .jpg, .jpeg"
                type="file"
                name="image"
                id="image"
              />
              <PhotoCamera />
            </IconButton>
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
            </Box>
            <Button variant="contained" fullWidth size="small">
              Submit
            </Button>
          </Box>
        </Container>
      </Box>
    </main>
  );
}
