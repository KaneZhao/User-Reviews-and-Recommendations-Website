import React from "react";
import BusinessDetails from "./components/business/BusinessDetails";


const businessData = {
  "_id": "mYSpR_SLPgUVymYOvTQd_Q",
  "business_id": "mYSpR_SLPgUVymYOvTQd_Q",
  "full_address": "1000 Clubhouse Dr\nBraddock, PA 15104",
  "hours": {
    "Sunday": { "close": "15:00", "open": "10:00" },
    "Friday": { "close": "20:00", "open": "11:00" },
    "Wednesday": { "close": "20:00", "open": "11:00" },
    "Thursday": { "close": "20:00", "open": "11:00" },
    "Saturday": { "close": "20:00", "open": "11:00" },
  },
  "open": true,
  "categories": ["Active Life", "Golf"],
  "city": "Braddock",
  "review_count": 3,
  "name": "Grand View Golf Club",
  "neighborhoods": [],
  "longitude": -79.8557821,
  "state": "PA",
  "stars": 5.0,
  "latitude": 40.4034049,
  "attributes": {
    "Parking": {
      "garage": false,
      "street": false,
      "validated": false,
      "lot": false,
      "valet": false
    },
    "Accepts Credit Cards": true,
    "Good for Kids": true,
    "Good For Groups": true,
    "Takes Reservations": true
  },
  "type": "business"
};

function App() {
  return (
    <div>
      <BusinessDetails business={businessData} />
    </div>
  );
}

export default App;
