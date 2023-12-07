import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const ProductSlider = ({ image, i, marginB }) => {
  return (
    <div
      className="slider-item"
      key={i}
      style={{ marginBottom: "1rem", zIndex: 0 }}
    >
      {image.images && <img src={image.images[0]} alt="/" />}
      <div
        style={{
          textAlign: "center",
          color: "#000",
          width: "100%",
        }}
      >
        <p
          style={{
            textAlign: "center",
            padding: "5px 0",
          }}
        >
          {image.productFor[0]}
        </p>
        <Link to={`/product-detail/` + image.name} style={{color:"#000"}}>
          {image.name.toString()}
        </Link>
      </div>

      {/* <Link to="/product-detail">View Product</Link> */}
    </div>
  );
};

export default ProductSlider;
