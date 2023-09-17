import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import ProductSlider from "./productSlider/ProductSlider";

const SeeMore = ({ sameCategoryProduct, categoryName }) => {

  const product = sameCategoryProduct?.filter((item) => {
    if (
      item.category2.toLowerCase() ===
      categoryName?.split("-").join(" ").toLowerCase()
    ) {
      return item;
    } else if (
      item?.category3?.toLowerCase() ===
      categoryName?.split("-").join(" ").toLowerCase()
    ) {
      return item;
    }
  });
  const PreviousBtn = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="prev" style={{ left: -45 }}>
          <MdArrowBackIosNew style={{ fontSize: "75px", color: "#28504d" }} />
        </button>
      </div>
    );
  };
  const NextBtn = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="next" style={{ right: -60 }}>
          <MdArrowForwardIos style={{ fontSize: "75px", color: "#28504d" }} />
        </button>
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    //autoplay: true,
    speed: 500,
    slidesToShow: 4,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div style={{ padding: "0 3em 2em", display: "flex" }}>
      {product?.length > 3 ? (
        <Slider {...settings}>
          {product?.map((image, i) => (
            <ProductSlider image={image} i={i} />
          ))}
        </Slider>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: product.length > 2 && "space-between",
            alignItems: "center",
          }}
        >
          {product?.map((image, i) => (
            <ProductSlider image={image} i={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SeeMore;
