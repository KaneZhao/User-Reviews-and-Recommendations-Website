import React from "react";
import { Typography, Link } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import "./SideCard.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CommuteIcon from "@mui/icons-material/Commute";

const SideCard = () => {
  return (
    <div>
      <Card sx={{ marginTop: 4 }}>
        <CardContent>
          <div className="card-content">
            <div className="card-icon">
              <ArrowOutwardIcon
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  // Redirect to the website
                  window.location.href = "https://www.yelp.com/";
                }}
              />
            </div>
            <div className="card-text">
              {/* <span className="card-span">(08) 8231 8535</span> */}
              <Link
                href={"https://www.yelp.com/"}
                underline="hover"
                sx={{ color: "black" }}
              >
                <h3>breadandbone.com.au</h3>
              </Link>
            </div>
          </div>

          {/* Divider between Title and Subtitle */}
          <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
          <div className="card-content">
            <div className="card-icon">
              <ContactPhoneIcon
                sx={{ cursor: "pointer" }}
                onClick={() => alert("Call the business")}
              />
            </div>
            <div className="card-text">
              <span className="card-span">(08) 8231 8535</span>
            </div>
          </div>

          {/* Divider between Subtitle and Description */}
          <Divider sx={{ marginTop: 1, marginBottom: 1 }} />

          <div className="card-text">
            <span className="card-span">Get Directions</span>
          </div>
          <div className="card-content">
            <div className="card-icon">
              <CommuteIcon
                sx={{ cursor: "pointer" }}
                onClick={() => alert("Call the business")}
              />
            </div>
            <div className="card-text">
              <span className="card-span">
                15 Peel St Adelaide South Australia 5000 Australia
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card variant="outlined" sx={{ marginTop: 4 }}>
        <CardContent>
          <div className="card-content">
            <div className="card-icon">
              <ArrowOutwardIcon
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  // Redirect to the website
                  window.location.href = "https://www.yelp.com/";
                }}
              />
            </div>
            <div className="card-text">
              {/* <span className="card-span">(08) 8231 8535</span> */}
              <Link
                href={"https://www.yelp.com/"}
                underline="hover"
                sx={{ color: "black" }}
              >
                <h3>breadandbone.com.au</h3>
              </Link>
            </div>
          </div>

          {/* Divider between Title and Subtitle */}
          <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
          <div className="card-content">
            <div className="card-icon">
              <ContactPhoneIcon
                sx={{ cursor: "pointer" }}
                onClick={() => alert("Call the business")}
              />
            </div>
            <div className="card-text">
              <span className="card-span">(08) 8231 8535</span>
            </div>
          </div>

          {/* Divider between Subtitle and Description */}
          <Divider sx={{ marginTop: 1, marginBottom: 1 }} />

          <div className="card-text">
            <span className="card-span">Get Directions</span>
          </div>
          <div className="card-content">
            <div className="card-icon">
              <CommuteIcon
                sx={{ cursor: "pointer" }}
                onClick={() => alert("Call the business")}
              />
            </div>
            <div className="card-text">
              <span className="card-span">
                15 Peel St Adelaide South Australia 5000 Australia
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SideCard;
