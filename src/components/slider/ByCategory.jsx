import { Link } from "react-router-dom";
import { product } from "./sliderData";

// eslint-disable-next-line react/prop-types
const ByCategory = ({ language }) => {
  return (
    <div className="product" style={{ paddingTop: 0 }}>
      <div className="all-background">
        <div style={{ maxWidth: "1100px", width: "100%", paddingTop: "2rem" }}>
          <h1 style={{ textAlign: "center" }}>
            {language === "eng"
              ? "FIND YOUR CBD BY CATEGORY"
              : "ค้นหา CBD ของคุณตามหมวดหมู่"}
          </h1>
          <div className="product-container-home">
            {product.map((item, index) => (
              <Link
                to={`/cbd-by-category/${item.link}`}
                className="home-product-item home-product-top"
                style={{ backgroundImage: `url(${item.background})` }}
                key={index}
              >
                <Link>{language==="eng"?item.engTitle:item.thiTitle}</Link>
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
              {language === "eng"
                ? "SHOP ALL CBD PRODUCTS"
                : "เลือกซื้อผลิตภัณฑ์ CBD ทั้งหมด"}
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
              {language === "eng"
                ? "CBD, short for cannabidiol, has gained significant popularity in recent years as a natural remedy for various ailments. Derived from the cannabis plant, CBD is a non-intoxicating compound that offers potential therapeutic benefits without the psychoactive effects commonly associated with its counterpart, THC. As a result, CBD products have emerged as a diverse range of remedies and wellness options for individuals seeking alternative solutions. This article aims to provide an in-depth exploration of CBD products, including their origins, uses, types, and potential benefits."
                : "CBD ย่อมาจาก cannabidiol ได้รับความนิยมอย่างมากในช่วงไม่กี่ปีที่ผ่านมาในฐานะการรักษาโรคทางธรรมชาติสำหรับโรคต่างๆ CBD ที่ได้มาจากต้นกัญชาเป็นสารประกอบที่ไม่ทำให้มึนเมาซึ่งให้ประโยชน์ในการรักษาโดยไม่มีผลกระทบทางจิตที่มักเกี่ยวข้องกับสาร THC ที่คล้ายคลึงกัน เป็นผลให้ผลิตภัณฑ์ CBD กลายเป็นทางเลือกการรักษาและสุขภาพที่หลากหลายสำหรับบุคคลที่กำลังมองหาวิธีแก้ปัญหาทางเลือกอื่น บทความนี้มีจุดมุ่งหมายเพื่อให้ข้อมูลเชิงลึกเกี่ยวกับผลิตภัณฑ์ CBD รวมถึงต้นกำเนิด การใช้ ประเภท และคุณประโยชน์ที่อาจเกิดขึ้น"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ByCategory;
