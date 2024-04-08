import React, { lazy, useEffect, useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../../components/card/Card";
const ProductSlider =lazy(async () => await import("../../components/productSlider/ProductSlider"));

const ByPurpose = () => {
  const { product } = useSelector((state) => state.product);
  const [productsByCategory, setProductByCategory] = useState({});

  const groupedData = {};

  useEffect(() => {
    const fetchData = async () => {
      const uniquePurposes = Array.from(
        new Set(product.flatMap((item) => item.purposeName))
      );
      uniquePurposes.forEach((purpose) => {
        groupedData[purpose] = product.filter((item) =>
          item.purposeName.includes(purpose)
        );
      });
      setProductByCategory(groupedData);
    };

    fetchData();
  }, [product]);

  const productsArray = Object.entries(productsByCategory);
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
    slidesToShow: 3,
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
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "7rem 0px 2rem",
      }}
    >
      {product?.loading === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "1100px",
            width: "100%",
          }}
        >
          {[1, 2, 3].map(() => (
            <Card />
          ))}
        </div>
      ) : (
        productsArray?.map((item, index) => (
          <div
            style={{ padding: "15px 0", maxWidth: "1100px", width: "100%" }}
            key={index}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                flexWrap: "wrap",
                width: "100%",
                justifyContent: "space-between",
                padding:"0 1rem"
              }}
            >
              <h2 style={{ paddingBottom: "15px", color: "#005652",textTransform:"capitalize" }}>
                {item[0]}
              </h2>
              <Link
                style={{
                  padding: "20px 0",
                  textDecoration: "none",
                  fontSize: "20px",
                }}
                to={`/cbd-by-purpose/${item[0]}`}
              >
                See All
              </Link>
            </div>
            <div  style={{ padding: "0 3em 2em", maxWidth: "1300px", width: "100%" }}>
            {item[1]?.length <= 3 && window.innerWidth >= 798 ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: item[1].length > 2 && "space-between",
                  alignItems: "center",
                }}
              >
                {item[1]?.map((image, i) => (
                  <ProductSlider image={image} i={i} />
                ))}
              </div>
            ) : (
              <Slider {...settings}>
                {item[1].map((image, i) => (
                  <ProductSlider image={image} i={i} />
                ))}
              </Slider>
            )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ByPurpose;
