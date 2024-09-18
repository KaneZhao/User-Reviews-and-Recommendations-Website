import React from "react";
import "./BusinessDetails.css";
import { FaCheck } from "react-icons/fa";
import MyMap from "./MyMap";

const BusinessDetails = ({ business }) => {
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

  function Rating({ rating }) {
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
  }

  return (
    <div className="business-container">
      {/* Name Section */}
      <div className="business-name-section">
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

      {/* Attributes Section */}
      <div className="business-attributes-section">
        <h3>Attributes</h3>
        <ul>
          {/* <li>
            <strong>Parking:</strong>{" "}
            {Object.entries(attributes.Parking)
              .map(
                ([type, available]) => `${type}: ${available ? "Yes" : "No"}`
              )
              .join(", ")}
          </li> */}
          <li>
            <FaCheck />{" "}
            <span
              className={
                attributes["Accepts Credit Cards"]
                  ? "business-attributes-yes"
                  : "business-attributes-no"
              }
            >
              Accepts Credit Cards
            </span>
          </li>
          <li>
            <svg width="24" height="24" class="icon_svg">
              <path d="M7 22H3.516a1 1 0 0 1-.965-.737l-1.5-5.52a1 1 0 0 1 1.93-.525L4.28 20H7a1 1 0 0 1 0 2Zm13.516 0H17a1 1 0 1 1 0-2h2.751l1.3-4.782a1 1 0 0 1 1.93.525l-1.5 5.52a1 1 0 0 1-.965.737Zm1.975-13.985L12.477 2.126a1.001 1.001 0 0 0-1.015.001L1.477 8.016a1.001 1.001 0 0 0-.493.861v2.03a.999.999 0 0 0 .465.845 7.202 7.202 0 0 0 3.859 1.114 7.143 7.143 0 0 0 3.36-.833 7.093 7.093 0 0 0 2.348.748V16H7a1 1 0 1 0 0 2h4.016v3.012a1 1 0 0 0 2 0V18H17a1 1 0 0 0 0-2h-3.984v-3.23a7.076 7.076 0 0 0 2.292-.738 7.21 7.21 0 0 0 7.212-.28.999.999 0 0 0 .464-.845v-2.03a1 1 0 0 0-.493-.862Zm-1.507 2.31a5.206 5.206 0 0 1-5.09-.262.823.823 0 0 0-.09-.051.998.998 0 0 0-1.044.025 5.113 5.113 0 0 1-5.546 0 1.122 1.122 0 0 0-1.14.025 5.21 5.21 0 0 1-5.09.262v-.876l8.987-5.3 9.013 5.301v.875Z"></path>
            </svg>
            <strong>Good for Kids:</strong>{" "}
            {attributes["Good for Kids"] ? "Yes" : "No"}
          </li>
          <li>
            <strong>Good for Groups:</strong>{" "}
            {attributes["Good For Groups"] ? "Yes" : "No"}
          </li>
          <li>
            <strong>Takes Reservations:</strong>{" "}
            {attributes["Takes Reservations"] ? "Yes" : "No"}
          </li>
        </ul>
      </div>

      {/* Hours Section */}
      <div className="business-row">
        <div className="business-hours-section">
          <h3>Hours</h3>
          <ul>
            {Object.entries(hours).map(([day, time]) => (
              <li key={day}>
                <strong>{day}:</strong> {time.open} - {time.close}
              </li>
            ))}
          </ul>
        </div>
        <div className="business-location">
          <p className="address">
            <strong>Address:</strong> {full_address.replace("\n", ", ")}
          </p>
          <p className="location">
            <strong>Location:</strong> {city}, {state}
          </p>
          <MyMap position={[latitude, longitude]} />
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
