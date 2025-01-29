import { Link } from "react-router-dom";
import { product } from "./sliderData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
const ByCategory = ({ language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const slideInterval = useRef(null);
  const autoPlayTime = 3000; // 3 seconds autoplay

  // Duplicate products for infinite looping
  const extendedProducts = [...product, ...product];

  // Function to update items per view based on screen width
  const updateItemsPerView = () => {
    if (window.innerWidth >= 1024) {
      setItemsPerView(4); // Desktop
    } else if (window.innerWidth >= 768) {
      setItemsPerView(3); // Tablet
    } else {
      setItemsPerView(2); // Mobile
    }
  };

  // Update on screen resize
  useEffect(() => {
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // Move to next item (Infinite Loop)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % product.length);
  };

  // Move to previous item (Infinite Loop)
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? product.length - 1 : prevIndex - 1
    );
  };

  // Auto-play effect
  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, autoPlayTime);
    return () => clearInterval(slideInterval.current);
  }, []);
  return (
    <div className="product" style={{ paddingTop: 0 }}>
      <div className="all-background">
        <div style={{ maxWidth: "1200px", width: "100%", paddingTop: "2rem" }}>
          <h1 style={{ textAlign: "center" }}>
            {language === "eng"
              ? "FIND YOUR CBD BY CATEGORY"
              : "ค้นหา CBD ผลิตภัณฑ์ CBD"}
          </h1>
          <div className="byCategory-slider-container">
            {/* Back Button */}
            <div
              className="byCategory-slider-btn byCategory-prev"
              onClick={prevSlide}
            >
              <IoIosArrowBack size={50} />
            </div>

            {/* Slider Wrapper */}
            <div className="byCategory-slider-wrapper">
              <div
                className="byCategory-slider-content"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / itemsPerView)
                  }%)`,
                }}
              >
                {extendedProducts.map((item, index) => (
                  <Link
                    to={`/cbd-by-category/${item.link}`}
                    className="byCategory-home-product-item"
                    key={index}
                    style={{
                      backgroundImage: `url(${item.background})`,
                    }}
                  >
                    <span className="byCategory-product-title">
                      {language === "eng" ? item.engTitle : item.thiTitle}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <div
              className="byCategory-slider-btn byCategory-next"
              onClick={nextSlide}
            >
              <IoIosArrowForward size={50} />
            </div>
          </div>
          <div className="byCategory-dots">
          <div className="dotes-container">
          {product.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
          </div>
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
              {language === "eng"
                ? "SHOP ALL CBD PRODUCTS"
                : "เลือกซื้อผลิตภัณฑ์ CBD ทั้งหมด"}
            </Link>
            <p
              style={{
                fontSize: 16,
                padding: "1em 0 1em",
                textAlign: "center",
                fontWeight: "500",
                lineHeight: "1.5em",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              {language === "eng"
                ? "CBD, short for cannabidiol, has gained significant popularity in recent years as a natural remedy for various ailments. Derived from the cannabis plant, CBD is a non-intoxicating compound that offers potential therapeutic benefits without the psychoactive effects commonly associated with its counterpart, THC. As a result, CBD products have emerged as a diverse range of remedies and wellness options for individuals seeking alternative solutions. This article aims to provide an in-depth exploration of CBD products, including their origins, uses, types, and potential benefits."
                : "CBD หรือ Cannabidiol เป็นสารประกอบจากพืชกัญชงที่ได้รับความนิยมอย่างกว้างขวางในช่วงไม่กี่ปีที่ผ่านมา โดยถือเป็นทางเลือกการรักษาแบบธรรมชาติที่มีศักยภาพสำหรับอาการและโรคต่าง ๆ CBD มีคุณสมบัติที่โดดเด่น เนื่องจากเป็นสารที่ไม่ก่อให้เกิดอาการมึนเมา พร้อมทั้งให้ประโยชน์ทางการรักษาโดยปราศจากผลกระทบทางจิตประสาทซึ่งมักเกี่ยวข้องกับสาร THC ที่มีความคล้ายคลึงกัน"}
            </p>
            {language === "thi" && (
              <p
                style={{
                  fontSize: 16,
                  padding: "0em 0 2em",
                  textAlign: "center",
                  fontWeight: "500",
                  lineHeight: "1.5em",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
              ด้วยเหตุนี้ ผลิตภัณฑ์ CBD จึงได้รับความนิยมอย่างรวดเร็วในฐานะทางเลือกที่หลากหลายสำหรับการดูแลสุขภาพและการรักษาแบบองค์รวม เหมาะสำหรับผู้ที่มองหาวิธีแก้ปัญหาที่แตกต่าง ผลิตภัณฑ์ CBD จาก Earthlab คำนึงถึงความสะอาด ได้รับมาตรฐาน และปลอดภัย เพื่อประโยชน์จากการใช้ CBD อย่างเหมาะสม
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ByCategory;
