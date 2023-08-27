import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const ProductSlider = ({ image, i }) => {
  return (
    <div className="slider-item" key={i}>
      {image.images && <img src={image.images[0]} alt="/" />}
      <div
        style={{
          textAlign: "center",
          // height: "40%",
          width: "100%",
        }}
      >
        <p
          style={{
            color: "#fff",
            textAlign: "center",
            padding: "5px 0",
          }}
        >
          {image.productFor[0]}
        </p>
        <Link to={`/product-detail/` + image.name.split(" ").join("-")}>
          {image.name.toString()}
        </Link>
      </div>

      {/* <Link to="/product-detail">View Product</Link> */}
    </div>
  );
};

export default ProductSlider;
