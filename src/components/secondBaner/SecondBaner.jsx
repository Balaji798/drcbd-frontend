import { useState } from "react";
import "./secondBanner.css";
import { findUsData, iconsData } from "./iconsData";
import companies2 from "../../assets/companies/2.png";
import companies3 from "../../assets/companies/3.png";
import companies4 from "../../assets/companies/4.png";
// import cj from "../../assets/companies/image-5201.jpg";
// import BEAUTRIUM from "../../assets/companies/IMG_9020.jpg";
// import EVEANDBOY from "../../assets/companies/IMG_9128.jpg";
import productoil from "../../assets/companies/product-oil.jpg";
import shopee from "../../assets/online/a.png";
import lazada from "../../assets/online/ad.png";
import konvy from "../../assets/online/h.png";
import { IoIosArrowDown } from "react-icons/io";
import { useLanguage } from "../../util/LanguageContext";

const SecondBanner = () => {
  const { language } = useLanguage();
  const [open, setOpen] = useState(null);
  const toggle = (string) => {
    if (open === string) {
      return setOpen(null);
    }
    setOpen(string);
  };
  const data = [
    {
      title: "Vital Medi Clinic",
      para: "4th Floor, The Marche Thong Lo Road, Khlong Tan Nuea, Wattana, Bangkok 10110",
      email: "Email:vitalmediclinic@drcbdgroup.com",
      tel: "Phone: +66 9 4263 9964",
      image: companies2,
      mapLink:
        "https://maps.google.com/maps?q=Medical Cannabis Department 6, 3rd floor, Ratchada-Ramindra Road, Nuanchan, Bueng Kum, Bangkok 10230&t=&z=8&ie=UTF8&iwloc=&output=embed",
    },
    {
      title: "Dr. Kratom Bio",
      para: "255 Bangna Trat 3 (Soi Bua-Kued), Bangna-Nuea, Bangkok 10260 Thailand",
      email: "Email: info@drcbdgroup.com",
      tel: "Phone: +66 6 5141 6999",
      image: companies3,
      mapLink:
        "https://maps.google.com/maps?q=Medical Cannabis Department 6, 3rd floor, Ratchada-Ramindra Road, Nuanchan, Bueng Kum, Bangkok 10230&t=&z=8&ie=UTF8&iwloc=&output=embed",
    },
    // {
    //   title: "Dr. CBD Clinic: Huahin",
    //   para: "218/1-4 Hua Hin Subdistrict, Hua Hin District, Prachuap Khiri Khan Province 77110",
    //   email: "Email: drcbdclinic_official@drcbdgroup.com",
    //   tel: "Phone: +66 8 4191 4926",
    //   image: companies1,
    //   mapLink:
    //     "https://maps.google.com/maps?q=Medical Cannabis Department 6, 3rd floor, Ratchada-Ramindra Road, Nuanchan, Bueng Kum, Bangkok 10230&t=&z=8&ie=UTF8&iwloc=&output=embed",
    // },
    {
      title: "Dr. PET CBD",
      para: "255 Bangna Trat 3 (Soi Bua-Kued), Bangna-Nuea, Bangkok 10260 Thailand",
      email: "Email: info@drcbdgroup.com",
      tel: "Phone: +66 6 5141 6999",
      image: companies4,
      mapLink:
        "https://maps.google.com/maps?q=Medical Cannabis Department 6, 3rd floor, Ratchada-Ramindra Road, Nuanchan, Bueng Kum, Bangkok 10230&t=&z=8&ie=UTF8&iwloc=&output=embed",
    },
  ];

  return (
    <>
      <div className="secondBanner">
        <div
          style={{
            backgroundColor: "#000",
            width: "100%",
            color: "#fff",
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ textAlign: "center", padding: "2rem 0" }}>
            {language === "eng" ? "WHERE TO FIND US" : "จะหาเราได้ที่ไหน"}
          </h1>
          <div className="second-banner-container">
              {findUsData.map((item) => (
                <img
                  src={item}
                  style={{
                    objectFit: "cover",
                    maxWidth: "200px",
                    width: "100%",
                  }}
                  alt="/"
                  loading="lazy"
                  key={item}
                />
              ))}
          </div>
        </div>
        {/*<div className="second-banner-container2">
          <div style={{ width: "30%" }}>
            <h1 style={{ fontSize: "2.5rem", padding: "1rem 0" }}>
              CONVENIENCE
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 0.5rem",
              }}
            >
              <div style={{ width: "100%" }}>
                <img
                  src={cj}
                  style={{ objectFit: "cover", width: "100%", height: "15em" }}
                  alt={cj}
                  loading="lazy"
                />
                <h3 style={{ padding: "1rem 0" }}>CJ</h3>
                <p style={{ lineHeight: "1.8rem" }}>
                  {language === "eng"
                    ? "CBD products have gained popularity due to their potential therapeutic benefits. While research is ongoing, CBD has shown promise in"
                    : " ผลิตภัณฑ์ CBD ได้รับความนิยมเนื่องจากมีประโยชน์ในการรักษา ในขณะที่การวิจัยกำลังดำเนินอยู่ CBD ก็แสดงให้เห็นสัญญาณที่ดี"}
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "70%" }}>
            <h1 style={{ fontSize: "2.5rem", padding: "1rem 0" }}>
              MODERN TRADE
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 0.5rem",
              }}
            >
              <div style={{ width: "49.2%" }}>
                <img
                  src={BEAUTRIUM}
                  style={{ objectFit: "cover", width: "100%", height: "15em" }}
                  alt={BEAUTRIUM}
                  loading="lazy"
                />
                <h3 style={{ padding: "1rem 0" }}>BEAUTRIUM</h3>
                <p style={{ lineHeight: "1.8rem" }}>
                  {language === "eng"
                    ? "CBD products have gained popularity due to their potential therapeutic benefits. While research is ongoing, CBD has shown promise in"
                    : "ผลิตภัณฑ์ CBD ได้รับความนิยมเนื่องจากมีประโยชน์ในการรักษา ในขณะที่การวิจัยกำลังดำเนินอยู่ CBD ก็แสดงให้เห็นสัญญาณที่ดี"}
                </p>
              </div>
              <div style={{ width: "49.2%" }}>
                <img
                  src={EVEANDBOY}
                  style={{ objectFit: "cover", width: "100%", height: "15em" }}
                  alt={EVEANDBOY}
                  loading="lazy"
                />
                <h3 style={{ padding: "1rem 0" }}>EVEANDBOY</h3>
                <p style={{ lineHeight: "1.8rem" }}>
                  {language === "eng"
                    ? "CBD products have gained popularity due to their potential therapeutic benefits. While research is ongoing, CBD has shown promise in"
                    : "ผลิตภัณฑ์ CBD ได้รับความนิยมเนื่องจากมีประโยชน์ในการรักษา ในขณะที่การวิจัยกำลังดำเนินอยู่ CBD ก็แสดงให้เห็นสัญญาณที่ดี"}
                </p>
              </div>
            </div>
          </div>
        </div>*/}
        <div className="shop-olin">
          <h1
            style={{
              padding: "0.5em 1em",
              fontSize: "2.5em",
              borderRight: "1px solid",
            }}
          >
            ONLINE SHOP
          </h1>
          <a
            href="https://shop.line.me/@dr.cbd?utm_source=Seller_feature&utm_medium=Storefront-Shopend&utm_keyword=e7d3af3f8879479220333034dd470a4b1701930355066
          "
            style={{
              padding: "0.5em 1em",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            LINE SHOPPING
          </a>
          <a href="https://shopee.co.th/earthlab">
            <img src={shopee} style={{ width: "8em" }} alt="/" loading="lazy" />
          </a>
          <a href="https://www.lazada.co.th/shop/earth-lab?path=index.htm&lang=en&pageTypeId=1">
            <img src={lazada} style={{ width: "8em" }} alt="/" loading="lazy" />
          </a>
          {/*<img src="./online/Untitled-1.png" style={{ width: "8em" }} alt="/" />*/}
          <a href="https://www.konvy.com/brand/drcbd/">
            <img src={konvy} style={{ width: "8em" }} alt="/" loading="lazy" />
          </a>
          {/*<img src="./online/va.png" style={{ width: "8em" }} alt="/" />*/}
        </div>
        <div className="banner">
          <div className="banner-first">
            <h1>
              {language === "eng"
                ? "WHY OUR CBD OIL"
                : "ทำไมต้องเป็นน้ำมัน CBD ของเรา"}
              <br />
              {language === "eng" ? "IS DIFFERENT?" : "แตกต่างไหม?"}
            </h1>
            <div
              style={{
                width: 100,
                height: 3,
                background: "#fff",
                margin: "10px 0",
              }}
            />
            <p>
              {language === "eng"
                ? "CBD oil is extracted from an IES (Isolate Extraction System) machine, using supercritical CO2 extraction technology, the global certified standard of extraction from the USA. This ensures that the properties of the oil are thoroughly extracted for better efficacy. CBD contain properties that help you relax to reduce anxiety, improve the easing into sleep and the sleep quality and depth without the ‘hangover feel’ when you awake."
                : 'น้ำมัน CBD สกัดจากเครื่อง IES (Isolate Extraction System) โดยใช้เทคโนโลยีการสกัดแบบ Supercritical CO2 ซึ่งเป็นมาตรฐานการสกัดระดับโลกที่ได้รับการรับรองจากสหรัฐอเมริกา ช่วยให้มั่นใจได้ว่าคุณสมบัติของน้ำมันได้รับการสกัดอย่างทั่วถึงเพื่อประสิทธิภาพที่ดีขึ้น CBD มีคุณสมบัติที่ช่วยให้คุณผ่อนคลายเพื่อลดความวิตกกังวล ปรับปรุงการผ่อนคลายในการนอนหลับ คุณภาพการนอนหลับและความลึกโดยไม่เกิด "อาการเมาค้าง" เมื่อคุณตื่น'}
            </p>
          </div>
          <div className="pointer">
            <img
              src={productoil}
              style={{
                objectFit: "cover",
                marginRight: "10em",
                width: "100%",
                height: "100%",
              }}
              alt={productoil}
              loading="lazy"
            />
          </div>
        </div>
        <div className="banner-second">
          <div className="banner-second-parent">
            <div style={{ width: "40%" }} className="childe1">
              {iconsData[0].map((item, index) => (
                <div key={index}>
                  <img src={item.icon} style={{}} alt="/" loading="lazy" />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
            <div className="childe1 childe2">
              {iconsData[1].map((item, index) => (
                <div key={index}>
                  <img src={item.icon} alt="/" loading="lazy" />
                  <p style={{}}>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="blue-div"></div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            position: "absolute",
            bottom: 0,
          }}
        >
          <div className="blue-div-second" />
          <div
            style={{
              width: "100%",
              borderBottom: "40px solid #005652",
              float: "right",
            }}
          />
        </div>
      </div>
      <div className="back">
        <h1>OUR COMPANIES</h1>
        <div style={{}} className="back-childe">
          {data.map((item, index) => (
            <div
              style={{
                width: "18.5em",
                background: "#fff",
                // borderBottom:
                //   index === 2 || index === 0 || index === 1 ? "1px solid #000" : 0,
                padding: "1em",
                color: "#000",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                overflow: "hidden",
              }}
              key={index}
            >
              <img
                src={item.image}
                style={{ width: "15rem", objectFit: "contain", height: "5em" }}
                alt="/"
                loading="lazy"
              />
              <h2 style={{ padding: "5px 0" }}>{item.title}</h2>
              <p style={{ padding: "5px 0" }}>{item.para}</p>
              <h5
                style={{
                  padding: "5px 0",
                  fontFamily: "Avenir",
                  width: "100%",
                }}
              >
                {item.email}
              </h5>
              <h5
                style={{
                  padding: "5px 0",
                  fontFamily: "Avenir",
                }}
              >
                {item.tel}
              </h5>
              <div>
                <IoIosArrowDown
                  className={index === open ? "arrowDown" : "arrowUp"}
                  size={40}
                  onClick={() => toggle(index)}
                />
              </div>

              <div className="wrapper">
                <div className="accordion">
                  <div className="item" style={{ border: 0 }}>
                    <div
                      className={index === open ? "show content" : "content"}
                      style={{ marginLeft: "-0.8rem" }}
                    >
                      <iframe
                        width="30%"
                        height="100%"
                        id="gmap_canvas"
                        src={item.mapLink}
                        frameBorder="0"
                        scrolling="Yes"
                        marginHeight="0"
                        marginWidth="0"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "95%",
                  height: 2,
                  background: "#000",
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex" }}></div>
    </>
  );
};

export default SecondBanner;
