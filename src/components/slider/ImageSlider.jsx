import React, { useState, useEffect } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import data from "../../data";
import { sliderData } from "./sliderData";
import "./Slider.css";

const ImageSlider = () => {
  const affiliates = [
    // {
    //   title: "SKINCARE BEAUTY",
    //   background:
    //     "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-01.jpg",
    //     link:'#'
    // },
    {
      title: "SKINCARE",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-02.jpg",
        link:'SKINCARE'
    },
    {
      title: "SLEEP DISORDER",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-03.jpg",
        link:'SLEEP'
    },
    {
      title: "IMMUNE",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-04.jpg",
        link:'immunity'
    },
    {
      title: "MUSCLE & JOINT",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-05.jpg",
        link:'MUSCLES-&-JOINTS'
    },
    {
      title: "ENERGY",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-06.jpg",
        link:'ENERGY'
    },
    {
      title: "ANXIETY",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-07.jpg",
        link:"ANXIETY"
    },
    {
      title: "WEIGHT MANAGEMENT",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-08.jpg",
        link:'WEIGHT-MANAGEMENT'
    },
    {
      title: "AROMATHERAPY",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-09.jpg",
        link:'AROMATHERAPY'
    },
    {
      title: "CANCER",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-10.jpg",
        link:'CANCER'
    },
    {
      title: "HORMONES",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-11.jpg",
        link:'HORMONES'
    },
    // {
    //   title: "OPIOID",
    //   background:
    //     "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-12.jpg",
    //     link:'#'
    // },
  ];
  const product = [
    {
      title: "CBD OIL",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/category/2.jpg",
        link:"CBD-OIL"
    },
    {
      title: "CBD SUPPLEMENTS",
      background: "./black.jpg",
      link:"CBD-SUPPLEMENTS"
    },

    {
      title: "CBD SKIN & CARE",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/category/2-04.jpg",
        link:"CBD-FACE"
    },
    {
      title: "BEVERAGE",
      background: "./light-green.jpg",
      link:"CBD-BEVERAGE"
    },
    {
      title: "CBD BODY CARE",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/category/2-03.jpg",
        link:"CBD-BODY"
    },
    {
      title: "CBD FOR PETS",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/category/2-05.jpg",
        link:"CBD-FOR-PETS"
    },
    // {
    //   title: "CBD FOR MUSCLE & JOINTS",
    //   background:
    //     "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/category/1.jpg",
    //     link:"#"
    // },
    // {
    //   title: "HOME USE",
    //   background:
    //     "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/category/2-01.jpg",
    //     link:"#"
    // },
    {
      title: "AROMATHERAPY",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-09.jpg",
        link:'AROMATHERAPY'
    },
  ];

  const products = [
    {
      url: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/products/1701968935468.jpg",
      name: "Earth Lab CBD De' Leep Softgel",
      cat: 'CBD-SUPPLEMENTS',
      link: "EARTH LAB CBD DE'LEEP",
    },
    {
      url: "./earth.png",
      name: "Earth Lab CBD Whitening Mask",
      cat: 'CBD-FACE',
      link: "EARTHLAB CBD WHITENING MASK",
    },
    {
      url: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/products/1694014891114.jpg",
      name: "CBD I-MUN",
      cat: 'CBD-SUPPLEMENTS',
      link: "CBD I-MUN",
    },
    {
      url: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/products/CBD_Collagen-WBG1.png",
      name: "CBD Collagen peptide",
      cat:'CBD-BEVERAGE',
      link: "EARTHLAB CBD COLLAGEN PEPTIDE",
    },
  ];

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
            // console.log(image);
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
      <div className="product">
        <div className="all-background">
          <div
            style={{ maxWidth: "1100px", width: "100%", paddingTop: "2rem" }}
          >
            <h1 style={{ textAlign: "center" }}>FIND YOUR CBD BY CATEGORY</h1>
            <div className="product-container-home">
              {product.map((item, index) => (
                <Link
                to={`/cbd-by-category/${item.link}`}
                  className="home-product-item home-product-top"
                  style={{ backgroundImage: `url(${item.background})` }}
                  key={index}
                >
                  <Link>
                    {item.title}
                  </Link>
                </Link>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link
                to="/cbd-by-category"
                style={{
                  textAlign: "center",
                  color: "#2d3d41",
                  fontSize: "35px",
                  borderBottom: "2px solid",
                }}
              >
                SHOP ALL CBD PRODUCTS
              </Link>
              <p
                style={{
                  fontSize: 16,
                  padding: "1em 0 2em",
                  textAlign: "center",
                  fontWeight: "500",
                  lineHeight: "1.5em",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                CBD, short for cannabidiol, has gained significant popularity in
                recent years as a natural remedy for various ailments. Derived
                from the cannabis plant, CBD is a non-intoxicating compound that
                offers potential therapeutic benefits without the psychoactive
                effects commonly associated with its counterpart, THC. As a
                result, CBD products have emerged as a diverse range of remedies
                and wellness options for individuals seeking alternative
                solutions. This article aims to provide an in-depth exploration
                of CBD products, including their origins, uses, types, and
                potential benefits.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="product" style={{ background: "#000" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // maxWidth: "1300px",
            width: "100%",
          }}
        >
          <h1
            style={{ color: "#fff", paddingTop: "1.5em", textAlign: "center" }}
          >
            FIND YOUR CBD BY PURPOSE
          </h1>
          <div className="product-container-home">
            {affiliates.map((item, index) => (
              <Link
               to={`/cbd-by-purpose/${item?.link}`}
                className="home-product-item"
                style={{
                  backgroundImage: `url(${item.background})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  marginBottom: "0.3em",
                }}
                key={index}
              >
                <Link >
                  {item.title}
                </Link>
              </Link>
            ))}
          </div>
          <Link
            style={{
              fontWeight: "bold",
              margin: "20px 50px",
              padding: "10px",
              color: "#fff",
              textDecoration: "none",
              textAlign: "center",
              borderBottom: "1.5px solid #fff",
            }}
            to="/cbd-by-purpose"
          >
            SHOP ALL CBD PRODUCT
          </Link>
        </div>
      </div>

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
        <div
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
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "5em",
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
