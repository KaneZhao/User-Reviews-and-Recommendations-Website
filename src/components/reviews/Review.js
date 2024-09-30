import React from "react";
import Avatar from "@mui/material/Avatar";
import Rating from "../rating/Rating";
import "./Review.css";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import WavingHandIcon from "@mui/icons-material/WavingHand";

const Review = ({ review }) => {
  return (
    <div
      className="review-container"
      style={{ border: "1px solid #ddd", padding: "20px", margin: "10px" }}
    >
      <div className="review-flex">
        <div className="flex-left">
          <Avatar
            style={{ flex: "1" }}
            alt="Kane"
            src="/static/images/avatar/1.jpg"
          />
        </div>
        <div className="flex-right">
          <span>{review.user_name}</span>
        </div>
      </div>
      <div className="review-flex">
        <div className="flex-left">
          <Rating rating={review.stars} />
        </div>
        <div className="flex-right">
          <span>{review.date}</span>
        </div>
      </div>
      <p className="review_text">{review.text}</p>
      <div className="votes" style={{ marginTop: "10px" }}>
        <div className="vote-item">
          <TagFacesIcon />
          <span className="vote-text">Funny: {review.votes.funny}</span>
        </div>
        <div className="vote-item">
          <LightbulbIcon />
          <span className="vote-text">Useful: {review.votes.useful}</span>
        </div>
        <div className="vote-item">
          <WavingHandIcon />
          <span className="vote-text">Cool: {review.votes.cool}</span>
        </div>
      </div>
    </div>
  );
};

export default Review;
