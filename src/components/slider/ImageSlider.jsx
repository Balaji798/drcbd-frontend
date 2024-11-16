import { useState, useEffect, lazy } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import {people} from "../../data";
import "./Slider.css";
import { sliderData, products } from "./sliderData";
import { useLanguage } from "../../util/LanguageContext";
import vital from "../../assets/LOGO+VITAL-01.png";
import mixClinic from "../../assets/mix-clinic.png"
const ByCategory = lazy(async () => await import("./ByCategory"));
const ByPurpose = lazy(async () => await import("./ByPurpose"));

const ImageSlider = () => {
  const { language } = useLanguage();
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
    const lastIndex = sliderData.length - 1;
    if (secondIndex < 0) {
      setSecondIndex(lastIndex);
    }
    if (secondIndex > lastIndex) {
      setSecondIndex(0);
    }
  }, [secondIndex, sliderData]);

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
      <section className="section" style={{ paddingTop: "1em" }}>
        <div className="section-center-home">
          {sliderData.map((item, indexPeople) => {
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
                <a href="https://shopee.co.th/9ceofficial?categoryId=100630&entryPoint=ShopByPDP&itemId=22479301919" style={{width:"100%"}}>
                  <img src={image} alt="/" className="person-img" />
                </a>
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
      <ByCategory language={language}/>
      <ByPurpose language={language}/>
      <div
        style={{
          paddingBottom: "1rem",
          flexDirection: "column",
        }}
        className="center best-seller"
      >
        <h1 style={{ padding: "2.5rem 0 1.5rem", fontWeight: "bold" }}>
          {language==="eng"?'BEST SELLER':'ขายดี'}
        </h1>

        <p
          style={{
            fontWeight: 500,
            lineHeight: "1.2rem",
            fontFamily: "Avenir",
            paddingBottom: "0.8rem",
          }}
        >
          {language==="eng"?'CBD products have gained popularity due to their potential therapeutic benefits. While research is ongoing,':'ผลิตภัณฑ์ CBD ได้รับความนิยมเนื่องจากมีประโยชน์ในการรักษา ในขณะที่การวิจัยกำลังดำเนินอยู่'}
          <br /> {language==="eng"?'CBD has shown promise in several areas, including:':'CBD แสดงให้เห็นแนวโน้มในหลายด้าน ได้แก่:'}
        </p>
        <ul>
          <li>
            {language==="eng"?'Pain Management: CBD may help alleviate chronic pain by interacting with receptors in the':'การจัดการความเจ็บปวด: CBD อาจช่วยบรรเทาอาการปวดเรื้อรังได้โดยการโต้ตอบ โดยมีตัวรับอยู่ใน'}
            <br /> {language==="eng"?'endocannabinoid system, reducing inflammation and influencing neurotransmitter activity.':'ระบบเอนโดแคนนาบินอยด์ ลดการอักเสบ และส่งผลต่อการทำงานของสารสื่อประสาท'}
          </li>
          <li style={{ paddingTop: "0.8rem" }}>
            {language==="eng"?'Anxiety and Depression: Preliminary studies suggest that CBD may have an anxiolytic effect, potentially':'ความวิตกกังวลและภาวะซึมเศร้า: การศึกษาเบื้องต้นชี้ให้เห็นว่า CBD อาจมีผลในการลดความวิตกกังวล'} <br />
            {language==="eng"?'reducing symptoms of anxiety and depression. However, further research is needed to establish its':'ลดอาการวิตกกังวลและซึมเศร้า อย่างไรก็ตาม จำเป็นต้องมีการวิจัยเพิ่มเติมเพื่อสร้างมันขึ้นมา'}
            <br />
            {language==="eng"?'efficacy.':"ประสิทธิภาพ"}
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
          {language==="eng"?'AVAILABLE AT':'สามารถดูได้ที่'}
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
                />
              </a>
              <h2>VITAL MEDI CLINIC</h2>
              <p style={{ padding: "0.3rem 0" }}>CBD {language==="eng"?"products":"สินค้า"}</p>
              {language==="eng"?<p
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
                <br /> altogether. We personalized treatment plans individually
                to
                <br /> reach practical and sustainable optimum health.
              </p>:<p>
              Vital Medi Clinic เป็นคลินิกการแพทย์เชิงบูรณาการที่
              ผสมผสานการแพทย์แผนไทยประยุกต์
              การแพทย์ (ATTM) และการแพทย์แผนจีน (TCM)
              โดยสิ้นเชิง เราวางแผนการรักษาเป็นรายบุคคลเพื่อ
              เข้าถึงสุขภาพที่เหมาะสมในทางปฏิบัติและยั่งยืน</p>}
            </div>
            <div className="second-cafe-image">
              <div>
                <img
                  src={mixClinic}
                  style={{}}
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
