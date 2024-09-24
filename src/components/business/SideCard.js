import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Word of the Day
      </Typography>
      <Divider />
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Divider />
      <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

const SideCard = () => {
  return (
    <Box sx={{ position: "sticky", top: 20 }}>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography
          variant="h6"
          style={{
            "border-radius": "8px",
            "box-shadow": "0 2px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          Restaurant Information
        </Typography>
        <Typography variant="body1">Location: 123 Main Street</Typography>
        <Typography variant="body1">Opening Hours: 10 AM - 10 PM</Typography>
        <Typography variant="body1">Cuisine: Italian</Typography>
        <Typography variant="body1">Contact: (123) 456-7890</Typography>
      </Paper>
      <Card
        variant="outlined"
        style={{
          "border-radius": "8px",
          "box-shadow": "0 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {card}
      </Card>
    </Box>
  );
};

export default SideCard;
