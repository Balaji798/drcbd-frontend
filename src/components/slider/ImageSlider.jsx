import React, { useState, useEffect } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import data from "../../data";
import { sliderData } from "./sliderData";
import "./Slider.css";

const ImageSlider = () => {
  const affiliates = [
    {
      title: "SKINCARE BEAUTY",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-01.jpg",
    },
    {
      title: "SKINCARE IRRITATION",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-02.jpg",
    },
    {
      title: "SLEEP DISORDER",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-03.jpg",
    },
    {
      title: "IMMUNE",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-04.jpg",
    },
    {
      title: "MUSCLE & JOINT",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-05.jpg",
    },
    {
      title: "ENERGY",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-06.jpg",
    },
    {
      title: "NCD'S",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-07.jpg",
    },
    {
      title: "WEIGHT MANAGEMENT",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-08.jpg",
    },
    {
      title: "RELAXATION",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-09.jpg",
    },
    {
      title: "CANCER",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-10.jpg",
    },
    {
      title: "HORMONES",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-11.jpg",
    },
    {
      title: "OPIOID",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/CBD-PURPOSE/DRCBD-12.jpg",
    },
  ];
  const product = [
    {
      title: "CBD OIL",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/category/oli.jpg",
    },
    {
      title: "CBD SOFTGEL",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/category/soft-gel.jpg",
    },
    {
      title: "CBD FACIAL CARE",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/category/serumizer.jpg",
    },
    {
      title: "BEVERAGE",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/category/PACKSHOT-2317.jpg",
    },
    {
      title: "CBD BODY CARE",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/category/shower.jpg",
    },
    {
      title: "CBD FOR PET",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/category/cat.png",
    },
    {
      title: "CBD FOR MUSCLE & JOINTS",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/category/massage.jpg",
    },
    {
      title: "HOME USE",
      background:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/category/deep.jpg",
    },
  ];

  const products = [
    "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/bestSeller/1.jpg",
    "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/bestSeller/2.jpg",
    "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/bestSeller/3.jpg",
    "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/bestSeller/4.jpg",
  ];

  const healthCafe = [
    "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/vital-health-cafe/nodtiezpix.jpg",
    "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/vital-health-cafe/nodtiezpix.jpg",
    "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/vital-health-cafe/nodtiezpix.jpg",
    "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/vital-health-cafe/nodtiezpix.jpg",
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
      <div className="banner-black"></div>
      <section className="section" style={{ paddingTop: "1em" }}>
        <div className="section-center" style={{ height: "30em" }}>
          {slider.map((item, indexPeople) => {
            const { id, image } = item;
            console.log(image);
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
                  style={{ width: "100%", objectFit: "cover", height: "100%" }}
                />
                {/* {image[1] !== "" && (
                  <img
                    src={image[1]}
                    alt={name}
                    className="person-img"
                    style={{ width: "50%" }}
                  />
                )} */}
              </article>
            );
          })}
          <button
            className="prev"
            style={{ marginLeft: "60px" }}
            onClick={() => setSecondIndex(secondIndex - 1)}
          >
            <MdArrowBackIosNew style={{ fontSize: "50px", color: "#fff" }} />
          </button>
          <button
            className="next"
            style={{ right: "50px" }}
            onClick={() => setSecondIndex(secondIndex + 1)}
          >
            <MdArrowForwardIos style={{ fontSize: "50px", color: "#fff" }} />
          </button>
        </div>
      </section>
      <div className="product">
        <div className="all-background">
          <div style={{ maxWidth: "1300px", width: "100%" }}>
            <h1 style={{ textAlign: "center" }}>FIND YOUR CBD BY CATEGORY</h1>
            <div className="product-container">
              {product.map((item, index) => (
                <div
                  className="home-product-item"
                  style={{ backgroundImage: `url(${item.background})` }}
                  key={index}
                >
                  <h4>{item.title}</h4>
                </div>
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
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              maxWidth: "90%",
              justifyContent: "space-between",
            }}
          >
            <div className="product-container">
              {affiliates.map((item, index) => (
                <div
                  className="product-item"
                  style={{
                    backgroundImage: `url(${item.background})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <h4>{item.title}</h4>
                </div>
              ))}
            </div>
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
          textAlign: "center",
          paddingBottom: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ padding: "2.5rem 0", fontWeight: "bold" }}>
          BEST SELLER PRODUCTS
        </h1>
        <p style={{ width: "70%", fontWeight: 600, lineHeight: "1.8rem" }}>
          CBD products have gained popularity due to their potential therapeutic
          benefits. While research is ongoing, CBD has shown promise in several
          areas, including: Pain Management: CBD may help alleviate chronic pain
          by interacting with receptors in the endocannabinoid system, reducing
          inflammation and influencing neurotransmitter activity. Anxiety and
          Depression: Preliminary studies suggest that CBD may have an
          anxiolytic effect, potentially reducing symptoms of anxiety and
          depression. However, further research is needed to establish its
          efficacy.
        </p>
        <div className="product-container" style={{ paddingTop: "2rem",maxWidth:"1300px",width:"100%" }}>
          {products.map((item, index) => (
            <img
              src={item}
              style={{ width: "18.5rem", height: "20em", objectFit: "contain" }}
              key={index}
            />
          ))}
        </div>
      </div>
      <div
        style={{
          background: "#000",
          padding: "2em 0",
          color: "#fff",
          height: "68em",
        }}
      >
        <h1 style={{ textAlign: "center", padding: "0.5em 0" }}>
          AVAILABLE AT
        </h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "45%", background: "#fff", height: "27em" }}>
            <div
              style={{
                position: "absolute",
                left: "6rem",
                display: "flex",
                paddingTop: "1.5em",
              }}
            >
              <img
                src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/vital-health-cafe/IMG_5118.jpg"
                style={{ width: "25em", objectFit: "cover", height: "24em" }}
              />
              <div style={{ display: "flex", flexWrap: "wrap", width: "20em" }}>
                {healthCafe.map((item, index) => (
                  <img src={item} style={{ width: "9.5em", height: "12em" }} />
                ))}
              </div>
            </div>
          </div>
          <div style={{ width: "32%", marginLeft: "0rem" }}>
            <img
              src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/companies/5.png"
              style={{ width: "70%", objectFit: "contain", height: "10rem" }}
            />
            <h2>VITAL HEALTH CAFE</h2>
            <p style={{ padding: "0.3rem 0" }}>CBD products</p>
            <p style={{ width: "100%"}}>
              CBD products have gained popularity due to their potential
              therapeutic benefits. While research is ongoing, CBD has shown
              promise in several areas, including: Pain Management: CBD may help
              alleviate chronic pain by interacting with receptors in the
              endocannabinoid system, reducing inflammation and influencing
              neurotransmitter activity. Anxiety and Depression: Preliminary
              studies suggest that CBD may have an anxiolytic effect,
              potentially reducing symptoms of anxiety and depression. However,
              further research is needed to establish its efficacy.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{ background: "#42b2be", width: "2.5em", height: "10em" }}
            />
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
              style={{ background: "#42b2be", width: "3.5em", height: "10em" }}
            />
          </div>
          <div style={{ width: "35%", marginLeft: "-4rem" }}>
            <img
              src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/companies/2.png"
              style={{
                width: "95%",
                objectFit: "cover",
                height: "10rem",
                marginLeft: "-7rem",
              }}
            />
            <h2>VITAL MEDI CLINIC</h2>
            <p style={{ padding: "0.3rem 0" }}>CBD products</p>
            <p
              style={{
                width: "100%",
                lineHeight: "1.3rem",
              }}
            >
              CBD products have gained popularity due to their potential
              therapeutic benefits. While research is ongoing, CBD has shown
              promise in several areas, including: Pain Management: CBD may help
              alleviate chronic pain by interacting with receptors in the
              endocannabinoid system, reducing inflammation and influencing
              neurotransmitter activity. Anxiety and Depression: Preliminary
              studies suggest that CBD may have an anxiolytic effect,
              potentially reducing symptoms of anxiety and depression. However,
              further research is needed to establish its efficacy.
            </p>
          </div>
          <div style={{ width: "45%", background: "#fff", height: "27em" }}>
            <div
              style={{
                position: "absolute",
                right: "5%",
                display: "flex",
                paddingTop: "1.5em",
              }}
            >
              <img
                src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/vital-health-cafe/IMG_5118.jpg"
                style={{ width: "25em", objectFit: "cover", height: "24em" }}
              />
              <div style={{ display: "flex", flexWrap: "wrap", width: "20em" }}>
                {healthCafe.map((item, index) => (
                  <img src={item} style={{ width: "9.5em", height: "12em" }}  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
