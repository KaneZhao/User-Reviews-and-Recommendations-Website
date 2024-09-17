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

  return (
    <div className="business-container">
      {/* Name Section */}
      <div className="business-name-section">
        <h1 className="business-name">{name}</h1>
        <div className="business-rating">
          <span className="stars">{"★".repeat(stars)}</span>
          <span className="review-count">{review_count} reviews</span>
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
