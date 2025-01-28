import { useState, useEffect } from "react";
//import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { people } from "../../data";
import "./Slider.css";
import { sliderData, products, mobileBanner } from "./sliderData";
import { useLanguage } from "../../util/LanguageContext";
import vital from "../../assets/LOGO+VITAL-01.png";
import mixClinic from "../../assets/mix-clinic.png";
import ByCategory from "./ByCategory";
import ByPurpose from "./ByPurpose";

const ImageSlider = () => {
  const { language } = useLanguage();
  const [index, setIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Mobile check

  useEffect(() => {
    const updateSize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const activeSliderData = isMobile ? mobileBanner : sliderData;

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
    const lastIndex = sliderData.length - 1;
    if (secondIndex < 0) {
      setSecondIndex(lastIndex);
    }
    if (secondIndex > lastIndex) {
      setSecondIndex(0);
    }
  }, [secondIndex, activeSliderData]);

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
      <section className="section">
        <div className="section-center-home">
          {activeSliderData.map((item, indexPeople) => {
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
                <a
                  href="https://shopee.co.th/9ceofficial?categoryId=100630&entryPoint=ShopByPDP&itemId=22479301919"
                  style={{ width: "100%" }}
                >
                  <img
                    src={image}
                    alt="/"
                    className="person-img"
                    loading="lazy"
                  />
                </a>
              </article>
            );
          })}
        </div>
      </section>
      <ByCategory language={language} />
      <ByPurpose language={language} />
      <div
        style={{
          paddingBottom: "1rem",
          flexDirection: "column",
        }}
        className="center best-seller"
      >
        <h1 style={{ padding: "2.5rem 0 1.5rem", fontWeight: "bold" }}>
          {language === "eng" ? "BEST SELLER" : "สินค้าขายดี"}
        </h1>
        <div
          className="best-seller-container"
          style={{ paddingTop: "2rem", maxWidth: "1270px", width: "100%" }}
        >
          {products.map((item, index) => (
            <Link to={`/product-detail/${item?.cat}/` + item.link} key={index}>
              <div
                style={{
                  width: "18rem",
                  height: "19em",
                  backgroundImage: `url(${item.url})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                  padding: '0 10px 20px 0'
                }}
                alt="/"
                loading="lazy"
              >
                {" "}
                <p
                  style={{
                    width: "97%",
                    textAlign: "end",
                    textTransform: "uppercase",
                    fontSize: 16,
                    color: "#d0d0d0",
                  }}
                >
                  {item.name}
                </p>
              </div>
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
          {language === "eng" ? "AVAILABLE AT" : "ปรึกษาแพทย์ได้ที่"}
        </h1>
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
            <div className="blue-dev" />
          </div>
          <div className="second-cafe-container">
            <div className="cafe-content">
              <a href="https://www.facebook.com/realvitalmediclinic/">
                <img
                  src={vital}
                  style={{
                    width: "18rem",
                    objectFit: "cover",
                    marginLeft: "0rem",
                  }}
                  alt={vital}
                  loading="lazy"
                />
              </a>
              <h2>VITAL MEDI CLINIC</h2>
              <p style={{ padding: "0.3rem 0" }}>
                CBD {language === "eng" ? "products" : "สินค้า"}
              </p>
              {language === "eng" ? (
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
                  <br /> altogether. We personalized treatment plans
                  individually to
                  <br /> reach practical and sustainable optimum health.
                </p>
              ) : (
                <p>
                  Vital Medi Clinic เป็นคลินิกการแพทย์เชิงบูรณาการที่
                  ผสมผสานการแพทย์แผนไทยประยุกต์ การแพทย์ (ATTM)
                  และการแพทย์แผนจีน (TCM) โดยสิ้นเชิง
                  เราวางแผนการรักษาเป็นรายบุคคลเพื่อ
                  เข้าถึงสุขภาพที่เหมาะสมในทางปฏิบัติและยั่งยืน
                </p>
              )}
            </div>
            <div className="second-cafe-image">
              <div>
                <img src={mixClinic} style={{}} alt="/" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
