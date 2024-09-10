import React from "react";
import './BusinessDetails.css';

const BusinessDetails = ({ business }) => {
  const { name, full_address, hours, open, categories, city, state, stars, review_count, attributes } = business;

  return (
    <div className="business-container">
      <div className="business-header">
        <h1 className="business-name">{name}</h1>
        <div className="business-rating">
          <span className="stars">{'★'.repeat(stars)}</span>
          <span className="review-count">{review_count} reviews</span>
        </div>
      </div>

      <div className="business-info">
        <div className="address-hours">
          <p className="address"><strong>Address:</strong> {full_address.replace('\n', ', ')}</p>
          <p className="location"><strong>Location:</strong> {city}, {state}</p>
          <h3>Hours</h3>
          <ul>
            {Object.entries(hours).map(([day, time]) => (
              <li key={day}>
                <strong>{day}:</strong> {time.open} - {time.close}
              </li>
            ))}
          </ul>
        </div>

        <div className="business-attributes">
          <h3>Attributes</h3>
          <ul>
            <li><strong>Parking:</strong> {Object.entries(attributes.Parking).map(([type, available]) => `${type}: ${available ? "Yes" : "No"}`).join(", ")}</li>
            <li><strong>Accepts Credit Cards:</strong> {attributes["Accepts Credit Cards"] ? "Yes" : "No"}</li>
            <li><strong>Good for Kids:</strong> {attributes["Good for Kids"] ? "Yes" : "No"}</li>
            <li><strong>Good for Groups:</strong> {attributes["Good For Groups"] ? "Yes" : "No"}</li>
            <li><strong>Takes Reservations:</strong> {attributes["Takes Reservations"] ? "Yes" : "No"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
