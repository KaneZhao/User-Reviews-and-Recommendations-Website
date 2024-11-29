import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BusinessDetails from "./components/business/BusinessDetails";
import Header from "./components/header/Header";
import Layout from "./components/Layout";
import Review from "./components/reviews/Review";
import User from "./components/users/User";
// import EmblaCarousel from "./components/carousel/EmblaCarousel";

const businessData = {
  _id: "mYSpR_SLPgUVymYOvTQd_Q",
  business_id: "mYSpR_SLPgUVymYOvTQd_Q",
  full_address: "1000 Clubhouse Dr\nBraddock, PA 15104",
  hours: {
    Sunday: { close: "15:00", open: "10:00" },
    Friday: { close: "20:00", open: "11:00" },
    Wednesday: { close: "20:00", open: "11:00" },
    Thursday: { close: "20:00", open: "11:00" },
    Saturday: { close: "20:00", open: "11:00" },
  },
  open: true,
  categories: ["Active Life", "Golf"],
  city: "Braddock",
  review_count: 3,
  name: "Grand View Golf Club",
  neighborhoods: [],
  longitude: -79.8557821,
  state: "PA",
  stars: 3.5,
  latitude: 40.4034049,
  attributes: {
    Parking: {
      garage: false,
      street: false,
      validated: false,
      lot: false,
      valet: false,
    },
    "Accepts Credit Cards": true,
    "Good for Kids": true,
    "Good For Groups": true,
    "Takes Reservations": true,
    "Free Wi-Fi": true,
    "Outdoor Seating": false,
  },
  type: "business",
};

const reviewData = {
  _id: "JM56AUMHMUVYBLwzUntvSw",
  votes: {
    funny: 0,
    useful: 1,
    cool: 0,
  },
  user_id: "swCmjyIYrUjvSFY8Z2nK4A",
  review_id: "JM56AUMHMUVYBLwzUntvSw",
  stars: 1,
  date: "2010-07-29",
  text: "This is a pizza joint near the strip. They slide flyers under hotel room doors at the casinos. We bit and ordered a medium pizza with 3 toppings, soda, etc. It was late and we were hungry. the pizza arrived about an hour later. What we got was a small cheese in a medium pizza box. No, I didn't check, and I paid for what we ordered. It was probably an oops but this could be a flim flam shop as evidenced by the medium box with a weenie cheese pizza hiding inside. the pizza was decent, not memorable especially, but about the same as any other Las vegas delivery Za. But buyer beware...",
  type: "review",
  business_id: "3OPWaOkumRzSdWGsbMgrEA",
  user_name: "Kane Zhao",
};

const reviewList = [
  {
    _id: "JM56AUMHMUVYBLwzUntvSw",
    votes: {
      funny: 0,
      useful: 1,
      cool: 0,
    },
    user_id: "swCmjyIYrUjvSFY8Z2nK4A",
    review_id: "JM56AUMHMUVYBLwzUntvSw",
    stars: 3,
    date: "2010-07-29",
    text: "This is a pizza joint near the strip. They slide flyers under hotel room doors at the casinos. We bit and ordered a medium pizza with 3 toppings, soda, etc. It was late and we were hungry. the pizza arrived about an hour later. What we got was a small cheese in a medium pizza box. No, I didn't check, and I paid for what we ordered. It was probably an oops but this could be a flim flam shop as evidenced by the medium box with a weenie cheese pizza hiding inside. the pizza was decent, not memorable especially, but about the same as any other Las vegas delivery Za. But buyer beware...",
    type: "review",
    business_id: "3OPWaOkumRzSdWGsbMgrEA",
    user_name: "Kane Zhao",
  },
  {
    _id: "123",
    votes: {
      funny: 0,
      useful: 1,
      cool: 0,
    },
    user_id: "swCmjyIYrUjvSFY8Z2nK4A",
    review_id: "123",
    stars: 5,
    date: "2023-07-29",
    text: "Test test!",
    type: "review",
    business_id: "3OPWaOkumRzSdWGsbMgrEA",
    user_name: "Kane Zhao",
  },
  {
    _id: "453",
    votes: {
      funny: 0,
      useful: 1,
      cool: 0,
    },
    user_id: "swCmjyIYrUjvSFY8Z2nK4A",
    review_id: "123",
    stars: 5,
    date: "2023-05-29",
    text: "Test test test!",
    type: "review",
    business_id: "3OPWaOkumRzSdWGsbMgrEA",
    user_name: "Kane Zhao",
  },
  {
    _id: "11111",
    votes: {
      funny: 0,
      useful: 1,
      cool: 0,
    },
    user_id: "swCmjyIYrUjvSFY8Z2nK4A",
    review_id: "11111",
    stars: 1,
    date: "2023-05-29",
    text: "Test test test!",
    type: "review",
    business_id: "3OPWaOkumRzSdWGsbMgrEA",
    user_name: "Kane Zhao",
  },
  {
    _id: "2222",
    votes: {
      funny: 0,
      useful: 1,
      cool: 0,
    },
    user_id: "swCmjyIYrUjvSFY8Z2nK4A",
    review_id: "2222",
    stars: 2,
    date: "2023-05-29",
    text: "Test test test!",
    type: "review",
    business_id: "3OPWaOkumRzSdWGsbMgrEA",
    user_name: "Kane Zhao",
  },
  {
    _id: "3333",
    votes: {
      funny: 0,
      useful: 1,
      cool: 0,
    },
    user_id: "swCmjyIYrUjvSFY8Z2nK4A",
    review_id: "3333",
    stars: 4,
    date: "2023-05-29",
    text: "Test test test!",
    type: "review",
    business_id: "3OPWaOkumRzSdWGsbMgrEA",
    user_name: "Kane Zhao",
  },
];
const userData = {
  _id: "HDQixQ-WZEV0LVPJlIGQeQ",
  yelping_since: "2004-10",
  votes: {
    funny: 48,
    useful: 51,
    cool: 19,
  },
  review_count: 48,
  name: "Yishan",
  user_id: "HDQixQ-WZEV0LVPJlIGQeQ",
  friends: [
    "18kPq7GPye-YQ3LyKyAZPw",
    "rpOyqD_893cqmDAtJLbdog",
    "SIBCL7HBkrP4llolm4SC2A",
    "Ym2-9Rdeb_PPher2F6qksQ",
    "hlyE3S6w-949MA-u8TXsjA",
    "q5d_utYyBxTLGrQRh0Z92g",
    "OK7VszKZegysGp7vn0TlIQ",
    "YzYh_vU3igTrD_P5UY5gkg",
    "44c_jjIAwhWH7hg3cGZQyw",
    "vdANJJC2ad6V0rud4P5w8Q",
    "NQC9qsuTV9LFSj7eI6G9AQ",
    "s3Q-cTIW2rjY3s2viFJa-g",
    "_wfddB2WyV2lXdX7gDHbdg",
    "IPN2XSMDxfqn5G4leezTDw",
  ],
  fans: 8,
  average_stars: 3.83,
  type: "user",
  compliments: {
    cute: 2,
    funny: 1,
    plain: 1,
    writer: 1,
    note: 1,
    more: 1,
    cool: 1,
  },
  elite: [],
};

const OPTIONS = { loop: true };
// const SLIDE_COUNT = 3;
const SLIDES = [
  "https://s3-media0.fl.yelpcdn.com/educatorphoto/T3U8OES-w0Pat6ijyqf8pg/o.jpg", // Image 2 URL
  "https://s3-media0.fl.yelpcdn.com/educatorphoto/G0VqnNYvHYpeG1HqrOVE3g/o.jpg", // Image 3 URL
  "https://s3-media0.fl.yelpcdn.com/educatorphoto/GTlezQc8dVGQxb_l0KhTYQ/o.jpg", // Image 4 URL
];

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/business"
              element={
                <BusinessDetails business={businessData} review={reviewList} />
              }
            />
            <Route path="/review" element={<Review review={reviewData} />} />
            <Route path="/user" element={<User user={userData} />} />
          </Route>
        </Routes>
      </Router>
      {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
    </div>
  );
}

export default App;
