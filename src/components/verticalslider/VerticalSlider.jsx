import React, { useState, useEffect } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { ImStarFull, ImStarHalf } from "react-icons/im";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import "./verticalSlider.css";
import axios from "axios";

const VerticalSlider = ({ reviews,displayedReviews, setDisplayedReviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
    const nextIndex = (currentIndex + shift + reviews.length) % reviews.length;

    // Ensure nextIndex is within the bounds of the reviews array
    if (nextIndex >= 0 && nextIndex < reviews.length) {
      setCurrentIndex(nextIndex);
      const shiftedReviews = reviews.map(
        (_, index) => reviews[(nextIndex + index) % reviews.length]
      );
      setDisplayedReviews(shiftedReviews.slice(0, 3));
    }
  };
  return (
    <div className="vertical-slider">
      <SlArrowUp
        onClick={() => handleButtonClick("forward")}
        style={{ cursor: "pointer", alignSelf: "center", fontSize: "55px" }}
      />
      <div style={{ width: "100%" }}>
        {displayedReviews.map((item, index) => (
          <div
            style={{
              background: "#e6e6da",
              marginBottom: 10,
              padding: 20,
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
            }}
            key={index}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsPersonCircle color="#3cbb90" size={45} />
              <p>{item.userName}</p>
              <p style={{ fontSize: 11 }}>Verified</p>
              <div style={{ color: "yellow", paddingBottom: 3 }}>
                {/* <ImStarFull />
                <ImStarFull />
                <ImStarFull />
                <ImStarFull />
                <ImStarHalf /> */}
                {Array.from(
                  { length: item.rating },
                  (_, index) => index + 1
                ).map((ret, i) => {
                  return <ImStarFull key={i} />;
                })}
              </div>
            </div>
            <div style={{ paddingLeft: 5 }}>{item.review}</div>
            <p style={{ fontSize: 10, alignSelf: "flex-end" }}>
              Posted 7 month's ago
            </p>
          </div>
        ))}
      </div>

      <SlArrowDown
        onClick={() => handleButtonClick("backward")}
        style={{ cursor: "pointer", alignSelf: "center", fontSize: "55px" }}
      />
    </div>
  );
};

export default VerticalSlider;
