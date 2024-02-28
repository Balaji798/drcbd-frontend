import React, { useState, useEffect } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { ImStarFull } from "react-icons/im";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import "./verticalSlider.css";
import axios from "axios";
import Rating from "../Rating";
import { TbStar } from "react-icons/tb";

const VerticalSlider = ({ productId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [displayedReviews, setDisplayedReviews] = useState([]);
  const [userReviews, setUserReviews] = useState([]);
  const reviewStar = [1, 2, 3, 4, 5];
  const [feed, setFeed] = useState({
    name: "",
    email: "",
    review: "",
    rating: "",
    productId: productId,
  });
  useEffect(() => {
    getFeed();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handelSubmit = async () => {
    try {
      if(feed.rating === '' && feed.review === ''){
        alert('Review and rating required ')
        return
      }
      const user = localStorage.getItem("token");
      if (user) {
        const config = {
          headers: {
            Authorization: `Bearer ${user}`,
            "Content-Type": "application/json", // Set the content type to JSON
          },
        };
         await axios.post(
          "https://drcbd-backend-zgqu.onrender.com/review/add-review",
          //https://52.77.244.89:8080
          feed,
          config
        );
        setFeed({
          review: "",
          rating: "",
          productId: productId,
        });
        
        getFeed();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getFeed = async () => {
    const productReviews = await axios.post(
      "https://drcbd-backend-zgqu.onrender.com/review/get-reviews-by-productId",
      //https://52.77.244.89:8080
      { productId: productId }
    );
    setUserReviews(productReviews.data);
    setDisplayedReviews(productReviews.data.slice(0, 3));
  };
  const shiftAmount = 1; // Shift one step at a time
  const handleButtonClick = (direction) => {
    // const shift = direction === "forward" ? shiftAmount : -shiftAmount;
    // const nextIndex = (currentIndex + shift + reviews.length) % reviews.length;
    // setCurrentIndex(nextIndex);
    // const shiftedReviews = reviews.map(
    //   (_, index) => reviews[(nextIndex + index) % reviews.length]
    // );
    // setDisplayedReviews(shiftedReviews.slice(0, 3));
    const shift = direction === "forward" ? shiftAmount : -shiftAmount;
    const nextIndex =
      (currentIndex + shift + userReviews.length) % userReviews.length;

    // Ensure nextIndex is within the bounds of the userReviews array
    if (nextIndex >= 0 && nextIndex < userReviews.length) {
      setCurrentIndex(nextIndex);
      const shiftedReviews = userReviews.map(
        (_, index) => reviews[(nextIndex + index) % reviews.length]
      );
      setDisplayedReviews(shiftedReviews.slice(0, 3));
    }
  };
  const calculateAgeDescription = (givenDate) => {
    const date = new Date(givenDate);
    const currentDate = new Date();
    const difference = currentDate - date;
    const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
    const weeksDifference = Math.floor(daysDifference / 7);
    const monthsDifference = Math.floor(daysDifference / 30);

    if (daysDifference === 0) {
      return "Today";
    } else if (daysDifference === 1) {
      return "Yesterday";
    } else if (weeksDifference === 1) {
      return "1 week ago";
    } else if (weeksDifference > 1 && weeksDifference < 4) {
      return `${weeksDifference} weeks ago`;
    } else if (monthsDifference === 1) {
      return "1 month ago";
    } else if (monthsDifference > 1) {
      return `${monthsDifference} months ago`;
    } else {
      return "More than a month ago";
    }
  };

  const calculateAverageRating = (reviews) => {
    let totalRating = 0;
    let totalReviews = 0;

    for (const review of reviews) {
      totalRating += review.rating;
      totalReviews++;
    }
    return totalRating / totalReviews > 0
      ? Math.round((totalRating / totalReviews) * 10) / 10
      : 0;
  };
  return (
    <div className="review-container center" style={{ background: "#ededed" }}>
      <div
        style={{ maxWidth: "1200px", width: "100%", padding: "2rem 1rem 0" }}
      >
        <h1 style={{ fontFamily: "'Wix Madefor Text', sans-serif" }}>
          Reviews
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: 5,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                padding: "0.5rem 3rem",
                clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
                width: "18rem",
                background: "#0b4640",
                color: "#fff",
              }}
            >
              <h1 style={{ fontSize: "30px" }}>
                {calculateAverageRating(userReviews)}
              </h1>
            </div>
            <div
              style={{
                filter: "drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))",
                position: "absolute",
                marginLeft: "7rem",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  padding: "0.3rem 3rem",
                  width: "15rem",
                  clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
                }}
              >
                <div
                  style={{
                    width: "90%",
                    color: "#fdba09",
                    paddingTop: 3,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {userReviews.length > 0 ? (
                    <Rating userReviews={userReviews} />
                  ) : (
                    [1, 2, 3, 4, 5].map((_, index) => (
                      <TbStar key={index} size={25} />
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>{userReviews.length} Reviews count</p>
      </div>
      <div
        className="review-container"
        style={{
          maxWidth: "1200px",
          width: "100%",
          paddingBottom: "2rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="reviews">
          <div className="vertical-slider">
            {displayedReviews.length > 2 && (
              <SlArrowUp
                onClick={() => handleButtonClick("forward")}
                style={{
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: "55px",
                }}
              />
            )}
            <div style={{ width: "100%" }}>
              {displayedReviews.map((item, index) => (
                <div className="review" key={index}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "6rem",
                    }}
                  >
                    <BsPersonCircle color="#3cbb90" size={45} />
                    <p>{item?.userName}</p>
                    <p style={{ fontSize: 11 }}>Verified</p>
                    <div style={{ color: "yellow", paddingBottom: 3 }}>
                      {Array.from(
                        { length: item?.rating },
                        (_, index) => index + 1
                      ).map((ret, i) => {
                        return <ImStarFull key={i} />;
                      })}
                    </div>
                  </div>
                  <p
                    style={{
                      paddingLeft: 5,
                      width: "70%",
                      wordWrap: "break-word",
                    }}
                  >
                    {item?.review}
                  </p>
                  <p style={{ fontSize: 10, alignSelf: "flex-end" }}>
                    {calculateAgeDescription(item?.createdAt)}
                  </p>
                </div>
              ))}
            </div>

            {displayedReviews.length > 2 && (
              <SlArrowDown
                onClick={() => handleButtonClick("backward")}
                style={{
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: "55px",
                }}
              />
            )}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "90%",
            }}
          >
            <a style={{ textAlign: "end" }} href="#">
              {" "}
              See More {">>"}
            </a>
          </div>
        </div>
        <div className="add-review">
          <h2>Add Review</h2>
          <p style={{ padding: "0.5rem 0" }}>Your Rating</p>
          <div
            style={{
              paddingLeft: 5,
              height: 50,
            }}
          >
            <div style={{ paddingBottom: 3 }}>
              {reviewStar.map((item) => (
                <ImStarFull
                  style={{
                    fontSize: 35,
                    color: reviews?.includes(item) ? "#fdba09" : "#fff",
                    marginRight: "0.5rem",
                  }}
                  onClick={() => {
                    setReviews(
                      Array.from({ length: item }, (_, index) => index + 1)
                    );
                    setFeed({ ...feed, rating: item });
                  }}
                />
              ))}
            </div>
          </div>
          <p style={{ padding: "0.5rem 0" }}>Your Review</p>
          <textarea
            style={{
              width: "100%",
              height: "12rem",
              padding: "0.2rem 0.5rem",
            }}
            onChange={(e) => setFeed({ ...feed, review: e.target.value })}
          />

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              width: "100%",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                alignSelf: "flex-end",
                background: "#fff",
                width: "5rem",
                color: "#0b4640",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 20,
                padding: "0.5rem 0",
                cursor: "pointer",
              }}
              onClick={handelSubmit}
            >
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalSlider;
