import { Box, Container, Grid, Typography } from "@mui/material";
import LeftBar from "../../components/LeftBar";
import Navbar from "../../components/Navbar";
import RightBar from "../../components/RightBar";

export default function Home() {
  return (
    <main>
      <Box sx={{ bgcolor: "background.paper" }}>
        <Navbar />
        <Container sx={{ mt: 2 }}>
          <Grid container spacing={3}>
            <Grid item sm={3}>
              <LeftBar />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Typography>Feed</Typography>
            </Grid>
            <Grid item sm={3}>
              <RightBar />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
