import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Header from "../header/Header";
import Layout from "../Layout";
import Review from "../reviews/Review";
import User from "../users/User";
import BusinessDetails from "../business/BusinessDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: false, delay: 3000 }),
  ]);
  const [isPlaying, setIsPlaying] = useState(false);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onButtonAutoplayClick = useCallback(
    (callback) => {
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;

      const resetOrStop =
        autoplay.options.stopOnInteraction === false
          ? autoplay.reset
          : autoplay.stop;

      resetOrStop();
      callback();
    },
    [emblaApi]
  );

  const toggleAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
    playOrStop();
  }, [emblaApi]);

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    setIsPlaying(autoplay.isPlaying());
    emblaApi
      .on("autoplay:play", () => setIsPlaying(true))
      .on("autoplay:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(autoplay.isPlaying()));
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {/* <div className="embla__header">
            <Router>
              <Header />
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route
                    path="/business"
                    element={
                      <BusinessDetails
                        business={businessData}
                        review={reviewList}
                      />
                    }
                  />
                  <Route
                    path="/review"
                    element={<Review review={reviewData} />}
                  />
                  <Route path="/user" element={<User user={userData} />} />
                </Route>
              </Routes>
            </Router>
          </div> */}
          <div className="embla__header">This is the header!</div>
          {slides.map((src, index) => (
            <div className="embla__slide" key={index}>
              {/* <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="embla__slide__img"
              /> */}
              <div
                className="embla__slide__background"
                style={{ backgroundImage: `url(${src})` }}
              >
                <div className="embla__slide__content">
                  <h1 className="embla__slide__header">Header {index + 1}</h1>
                  <p className="embla__slide__description">
                    This is a description for slide {index + 1}.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>

        <button className="embla__play" onClick={toggleAutoplay} type="button">
          {isPlaying ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default EmblaCarousel;
