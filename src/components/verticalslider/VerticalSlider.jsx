import React, { useState, useEffect } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { ImStarFull, ImStarHalf } from "react-icons/im";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import "./verticalSlider.css";

const VerticalSlider = () => {
  const initialArray = [
    // Sample review data
    { name: "Mr. Weed1", verified: true, rating: 4.5, content: "Good Product" },
    { name: "Mr. Weed2", verified: true, rating: 4.5, content: "Good Product" },
    { name: "Mr. Weed3", verified: true, rating: 4.5, content: "Good Product" },
    { name: "Mr. Weed4", verified: true, rating: 4.5, content: "Good Product" },
    { name: "Mr. Weed5", verified: true, rating: 4.5, content: "Good Product" },
    { name: "Mr. Weed6", verified: true, rating: 4.5, content: "Good Product" },
    { name: "Mr. Weed7", verified: true, rating: 4.5, content: "Good Product" },
    { name: "Mr. Weed8", verified: true, rating: 4.5, content: "Good Product" },
    { name: "Mr. Weed9", verified: true, rating: 4.5, content: "Good Product" },
    {
      name: "Mr. Weed10",
      verified: true,
      rating: 4.5,
      content: "Good Product",
    },
  ];

  const [displayedReviews, setDisplayedReviews] = useState(
    initialArray.slice(0, 3)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const shiftAmount = 1; // Shift one step at a time

  const handleButtonClick = (direction) => {
    const shift = direction === "forward" ? shiftAmount : -shiftAmount;
    const nextIndex =
      (currentIndex + shift + initialArray.length) % initialArray.length;
    setCurrentIndex(nextIndex);
    const shiftedReviews = initialArray.map(
      (_, index) => initialArray[(nextIndex + index) % initialArray.length]
    );
    setDisplayedReviews(shiftedReviews.slice(0, 3));
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
              <p>{item.name}</p>
              <p style={{ fontSize: 11 }}>Verified</p>
              <div style={{ color: "yellow", paddingBottom: 3 }}>
                <ImStarFull />
                <ImStarFull />
                <ImStarFull />
                <ImStarFull />
                <ImStarHalf />
              </div>
            </div>
            <div style={{ paddingLeft: 5 }}>{item.content}</div>
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
