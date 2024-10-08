import React from "react";

function Star({ filled }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        // fill="rgba(255,100,61,1)"
        fill={filled >= 0.5 ? "rgba(255,100,61,1)" : "rgba(200,201,202,0.48)"}
        opacity="1"
        d="M6.4 0H16V32H6.4C2.86538 32 0 29.1346 0 25.6V6.4C0 2.86538 2.86538 0 6.4 0Z"
      ></path>
      <path
        // fill="rgba(255,100,61,1)"
        fill={filled >= 1 ? "rgba(255,100,61,1)" : "rgba(200,201,202,0.48)"}
        opacity="1"
        d="M25.6 0C29.1346 0 32 2.86538 32 6.4V25.6C32 29.1346 29.1346 32 25.6 32H16V0H25.6Z"
      ></path>
      <path
        fill="rgba(255,255,255,1)"
        d="M16 21.3978L20.1518 23.5378C20.3804 23.6557 20.6409 23.697 20.8949 23.6555C21.5489 23.5488 21.9926 22.932 21.8859 22.2779L21.1336 17.668L24.4519 14.3807C24.6346 14.1997 24.7544 13.9647 24.7934 13.7104C24.894 13.0553 24.4445 12.4427 23.7895 12.3421L19.1727 11.6331L17.0717 7.4614C16.956 7.23163 16.7695 7.04513 16.5397 6.92941C15.9478 6.63131 15.2263 6.86949 14.9282 7.4614L12.8272 11.6331L8.21047 12.3421C7.95619 12.3812 7.72118 12.5009 7.54013 12.6837C7.0737 13.1545 7.07727 13.9143 7.54809 14.3807L10.8664 17.668L10.114 22.2779C10.0726 22.5318 10.1139 22.7923 10.2317 23.021C10.5354 23.6101 11.2591 23.8415 11.8482 23.5378L16 21.3978V21.3978Z"
      />
    </svg>
  );
}

const Rating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<Star key={i} filled={1} />); // Full star
    } else if (i - rating < 1) {
      stars.push(<Star key={i} filled={0.5} />); // Half star
    } else {
      stars.push(<Star key={i} filled={0} />); // Empty star
    }
  }

  return <div style={{ display: "flex" }}>{stars}</div>;
};

export default Rating;
