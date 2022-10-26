import { Box, Container, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Box sx={{ bgcolor: "background.paper" }}>
        <Container>
          <Typography>Home Page</Typography>
        </Container>
      </Box>
    </main>
  );
}
