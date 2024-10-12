import React from "react";
import "./RatingCard.css";
import Grid from "@mui/material/Grid2";
import Rating from "./Rating";

const RatingCard = ({ reviewList, stars, review_count }) => {
  const starsList = reviewList.map((review) => review.stars);

  const starsCount = starsList.reduce(
    (acc, stars) => {
      acc[stars] = (acc[stars] || 0) + 1;
      return acc;
    },
    { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
  );

  const maxStar = Object.entries(starsCount).reduce(
    (max, current) => {
      const [star, count] = current;
      return count > max.count ? { star: Number(star), count } : max;
    },
    { star: null, count: -1 }
  );

  const normalizedStarsCount = Object.keys(starsCount).reduce((acc, star) => {
    acc[star] = ((starsCount[star] / maxStar["count"]) * 100).toFixed(2); // Convert to percentage and round to 2 decimals
    return acc;
  }, {});

  const backgroundColorMap = {
    1: "rgb(255, 204, 75)",
    2: "rgb(255, 173, 72)",
    3: "rgb(255, 135, 66)",
    4: "rgb(255, 100, 61)",
    5: "rgb(251, 80, 60)",
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={4}>
          <p class="overall-rating" data-font-weight="bold">
            Overall rating
          </p>
          <Rating rating={stars} />
          <p>
            {review_count} {review_count > 1 ? "reviews" : "review"}
          </p>
        </Grid>
        <Grid size={8}>
          <div>
            {Object.entries(normalizedStarsCount)
              .reverse()
              .map(([star, percentage]) => (
                <Grid container spacing={2}>
                  <Grid size={2}>
                    <div>
                      {star} {star > 1 ? "stars" : "star"}
                    </div>
                  </Grid>
                  <Grid size={8}>
                    <div className="rating-row">
                      <div
                        key={star}
                        className="rating-line"
                        style={{
                          width: `${percentage}%`,
                          backgroundColor: backgroundColorMap[star],
                        }}
                      ></div>
                    </div>
                  </Grid>
                </Grid>
              ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default RatingCard;
