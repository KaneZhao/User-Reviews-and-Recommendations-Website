import React from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";

const RestaurantPage = () => {
  return (
    <Grid container spacing={2}>
      {/* Left side: Main content that scrolls */}
      <Grid item xs={12} md={8}>
        <Box sx={{ height: "200vh", padding: 2 }}>
          {" "}
          {/* Making it tall to demonstrate scrolling */}
          <Typography variant="h4">Restaurant Menu and Reviews</Typography>
          <Typography variant="body1" paragraph>
            {/* Some long text to enable scrolling */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque ac felis eget nunc facilisis sagittis non non erat. Ut
            tincidunt dictum ex, at egestas enim luctus ac. Cras egestas
            condimentum urna, vitae tempus nulla rutrum at. Aenean lobortis
            felis id neque ultricies, at tincidunt magna tincidunt. Donec sit
            amet orci quam. Suspendisse potenti. Nam efficitur lorem ut volutpat
            fringilla.
            {/* Add more content as needed */}
          </Typography>
        </Box>
      </Grid>

      {/* Right side: Fixed restaurant information */}
      <Grid item xs={12} md={4}>
        <Box sx={{ position: "sticky", top: 20 }}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Restaurant Information</Typography>
            <Typography variant="body1">Location: 123 Main Street</Typography>
            <Typography variant="body1">
              Opening Hours: 10 AM - 10 PM
            </Typography>
            <Typography variant="body1">Cuisine: Italian</Typography>
            <Typography variant="body1">Contact: (123) 456-7890</Typography>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default RestaurantPage;
