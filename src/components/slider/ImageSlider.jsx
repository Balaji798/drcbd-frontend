import React, { useState, useEffect, lazy } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import data from "../../data";
import "./Slider.css";
import { sliderData, products } from "./sliderData";
const ByCategory = lazy(async () => await import("./ByCategory"));
const ByPurpose = lazy(async () => await import("./ByPurpose"));

const ImageSlider = () => {
  const [people] = useState(data);
  const [slider] = useState(sliderData);
  const [index, setIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  useEffect(() => {
    const lastIndex = slider.length - 1;
    if (secondIndex < 0) {
      setSecondIndex(lastIndex);
    }
    if (secondIndex > lastIndex) {
      setSecondIndex(0);
    }
  }, [secondIndex, slider]);

  useEffect(() => {
    let slider = setInterval(() => {
      setSecondIndex(secondIndex + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [secondIndex]);

  return (
    <>
    <div
        className="video home-video"
      >
        <video autoPlay loop muted playsInline style={{marginTop:"-5rem"}}>
          <source
            src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/home-video.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <section className="section" style={{ paddingTop: "1em" }}>
        <div className="section-center-home">
          {slider.map((item, indexPeople) => {
            const { id, image } = item;
            let position = "nextSlide";
            if (indexPeople === secondIndex) {
              position = "activeSlide";
            }
            if (
              indexPeople === secondIndex - 1 ||
              (secondIndex === 0 && indexPeople === people.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article
                className={position}
                style={{ display: "flex", overflow: "hidden" }}
                key={id}
              >
                <img
                  src={image}
                  alt="/"
                  className="person-img"
                />
              </article>
            );
          })}
          <button
            className="prev"
            onClick={() => setSecondIndex(secondIndex - 1)}
          >
            <MdArrowBackIosNew style={{ fontSize: "50px", color: "#fff" }} />
          </button>
          <button
            className="next"
            onClick={() => setSecondIndex(secondIndex + 1)}
          >
            <MdArrowForwardIos style={{ fontSize: "50px", color: "#fff" }} />
          </button>
        </div>
      </section>
      <ByCategory/>
      <ByPurpose/>
      <div
        style={{
          paddingBottom: "1rem",
          flexDirection: "column",
        }}
        className="center best-seller"
      >
        <h1 style={{ padding: "2.5rem 0 1.5rem", fontWeight: "bold" }}>
          BEST SELLER
        </h1>
        
        <p
          style={{
            fontWeight: 500,
            lineHeight: "1.2rem",
            fontFamily: "Avenir",
            paddingBottom: "0.8rem",
          }}
        >
          CBD products have gained popularity due to their potential therapeutic
          benefits. While research is ongoing,
          <br /> CBD has shown promise in several areas, including:
        </p>
        <ul>
          <li>
            Pain Management: CBD may help alleviate chronic pain by interacting
            with receptors in the
            <br /> endocannabinoid system, reducing inflammation and influencing
            neurotransmitter activity.
          </li>
          <li style={{ paddingTop: "0.8rem" }}>
            Anxiety and Depression: Preliminary studies suggest that CBD may
            have an anxiolytic effect, potentially <br />
            reducing symptoms of anxiety and depression. However, further
            research is needed to establish its
            <br />
            efficacy.
          </li>
        </ul>
        <div
          className="best-seller-container"
          style={{ paddingTop: "2rem", maxWidth: "1270px", width: "100%" }}
        >
          {products.map((item, index) => (
            <Link to={`/product-detail/${item?.cat}/` + item.link} key={index}>
              <img
                src={item.url}
                style={{ width: "18rem", height: "18em", objectFit: "contain" }}
                alt="/"
              />
              <p
                style={{
                  width: "97%",
                  textAlign: "end",
                  textTransform: "uppercase",
                  fontSize: 14,
                  color: "#d0d0d0",
                }}
              >
                {item.name}
              </p>
            </Link>
          ))}
        </div>
              </div>
      <div
        style={{
          background: "#000",
          padding: "2em 0",
          color: "#fff",
        }}
      >
        <h1 style={{ textAlign: "center", padding: "0.5em 0" }}>
          AVAILABLE AT
        </h1>
        {/*<div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flex: "flexWrap",
            width: "100%",
          }}
        >
          <div className="cafe-container">
            <div style={{ background: "#fff" }} className="cafe-image">
              <div>
                <img
                  src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/vital-health-cafe/mix.png"
                
                  alt="/"
                />
              </div>
            </div>
            <div className="cafe-content">
              <a href="https://www.instagram.com/vitalhealthcafeofficial/">
                <img
                  src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/companies/LOGO+VITAL-02.png"
                  style={{ width: "15rem", objectFit: "contain" }}
                  alt="/"
                />
              </a>
              <h2>VITAL HEALTH CAFE</h2>
              <p style={{ padding: "0.3rem 0" }}>Vital Health Cafe</p>
              <p
                style={{
                  width: "100%",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  lineHeight: "1.3rem",
                  fontFamily: "Avenir",
                }}
              >
                Vital Health Café offer you wide range of food
                <br /> nutrients ranging from healthy food, beverages
                <br /> and CBD-infused drinks. Looking for more CBD
                <br /> products, visit us at “The Marche” Thonglor Soi 4,
                <br /> 1st floor.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <div className="blue-dev" />
          </div>
          </div>*/}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "1em",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <div
            className="blue-dev"
            />
          </div>
          <div className="second-cafe-container">
          <div className="cafe-content">
            <a href="https://www.facebook.com/realvitalmediclinic/">
              <img
                src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/companies/LOGO+VITAL-01.png"
                style={{
                  width: "18rem",
                  objectFit: "cover",
                  marginLeft: "0rem",
                }}
                alt="/"
              />
            </a>
            <h2>VITAL MEDI CLINIC</h2>
            <p style={{ padding: "0.3rem 0" }}>CBD products</p>
            <p
              style={{
                width: "100%",
                lineHeight: "1.3rem",
                fontSize: "0.8rem",
                fontWeight: 600,
                fontFamily: "Avenir",
              }}
            >
              Vital Medi Clinic is an Integrative Medical clinic which
              <br /> combines Preventive Medicine, Applied Thai Traditional
              <br /> Medicine (ATTM) and Traditional Chinese Medicine (TCM)
              <br /> altogether. We personalized treatment plans individually to
              <br /> reach practical and sustainable optimum health.
            </p>
          </div>
          <div className="second-cafe-image">
            <div
            >
              <img
                src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/vital-health-cafe/mix-clinic.png"
                style={{  }}
                alt="/"
              />
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
