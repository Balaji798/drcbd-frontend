/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import productImage from "../../assets/internationl-shipping.jpg"
import { useNavigate } from "react-router-dom";
import "./style.css";

const ProductSlider = ({ image, i, marginB, categoryName, languageType }) => {
  const navigate = useNavigate();
  return (
    <div
      className="slider-item"
      key={i}
      style={{ marginBottom: "1rem", zIndex: 0 }}
      onClick={() => {
        navigate(
          `/product-detail/${categoryName}/` + image?.eng?.name,
          {
            state: { catName1: categoryName },
          }
        );
        window.location.reload();
      }}
    >
      {image.images && <img src={image?.eng?.name === "International Shipping"? productImage: image.images[0]} alt="/" loading="lazy"/>}
      <div
        style={{
          textAlign: "center",
          color: "#000",
          width: "100%",
        }}
      >
        <h3 style={{ color: "#000" }}>
          {languageType === "eng"
            ? image?.eng?.name.toString()
            : image?.thi?.name.toString()}
        </h3>
      </div>
    </div>
  );
};

export default ProductSlider;
