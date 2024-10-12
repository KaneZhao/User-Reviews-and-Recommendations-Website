import React from "react";
import "./BusinessDetails.css";
import BusinessMap from "./BusinessMap";
import AttributeIcons from "./attributes/AttributeIcons";
import Grid from "@mui/material/Grid2";
// import { Box, Typography, Paper } from "@mui/material";
import SideCard from "./sidecard/SideCard";
import Rating from "../rating/Rating";
import Review from "../reviews/Review";
import RatingCard from "../rating/RatingCard";

const BusinessDetails = ({ business, review }) => {
  const {
    name,
    full_address,
    hours,
    city,
    state,
    stars,
    review_count,
    attributes,
    latitude,
    longitude,
  } = business;

  return (
    <div className="business-container">
      {/* Name Section */}
      <div className="business-name-section">
        <div className="name-and-rating">
          <h1 className="business-name">{name}</h1>
          <div className="business-rating">
            <Rating rating={stars} />
            {/* <span className="stars">{"★".repeat(stars)}</span> */}
            <div className="business-rating">
              <span className="review-count">{stars} </span>
              <span className="review-count">
                ({review_count} {review_count > 1 ? "reviews" : "review"})
              </span>
            </div>
          </div>
        </div>
      </div>

      <Grid container spacing={2}>
        {/* Attributes Section */}
        <Grid size={8}>
          <div className="business-attributes-section business-border">
            <h2>Amenities and More</h2>
            <AttributeIcons attributes={attributes} />
          </div>

          {/* Hours Section */}
          <div className="business-border">
            <div className="business-title">
              <h2>Location &amp; Hours</h2>
            </div>
            <div className="business-row">
              <div className="business-hours-section">
                <ul>
                  {Object.entries(hours).map(([day, time]) => (
                    <li key={day}>
                      <strong>{day}:</strong> {time.open} - {time.close}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="business-location">
                <BusinessMap
                  position={[latitude, longitude]}
                  full_address={full_address}
                  city={city}
                  state={state}
                />
              </div>
            </div>
          </div>
          <RatingCard
            reviewList={review}
            stars={stars}
            review_count={review_count}
          />
          <ul>
            {review.map((item) => (
              <Review review={item} />
            ))}
          </ul>
        </Grid>

        <Grid size={4} className="side-card">
          <SideCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default BusinessDetails;
