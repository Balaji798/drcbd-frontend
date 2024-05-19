import React, { useState } from "react";
import "./secondBanner.css";
import { iconsData } from "./iconsData";
import { IoIosArrowDown } from "react-icons/io";

const SecondBanner = () => {
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
      email:'Email:vitalmediclinic@drcbdgroup.com',
      tel: "Phone: +66 9 4263 9964",
      image:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/companies/2.png",
      mapLink:
        "https://maps.google.com/maps?q=Medical Cannabis Department 6, 3rd floor, Ratchada-Ramindra Road, Nuanchan, Bueng Kum, Bangkok 10230&t=&z=8&ie=UTF8&iwloc=&output=embed",
    },
    // {
    //   title: "Vital Health Cafe",
    //   para: "1st Floor, The Marche Thong Lo Road, Khlong Tan Nuea, Wattana, Bangkok 10110",
    //   email:'Email: info@drcbdgroup.com',
    //   tel: "Phone: +66 8 4192 6362",
    //   image:
    //     "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/companies/5.png",
    //   mapLink:
    //     "https://maps.google.com/maps?q=Medical Cannabis Department 6, 3rd floor, Ratchada-Ramindra Road, Nuanchan, Bueng Kum, Bangkok 10230&t=&z=8&ie=UTF8&iwloc=&output=embed",
    // },
    {
      title: "Dr. Kratom Bio",
      para: "255 Bangna Trat 3 (Soi Bua-Kued), Bangna-Nuea, Bangkok 10260 Thailand",
      email:'Email: info@drcbdgroup.com',
      tel: "Phone: +66 6 5141 6999",
      image:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/companies/3.png",
      mapLink:
        "https://maps.google.com/maps?q=Medical Cannabis Department 6, 3rd floor, Ratchada-Ramindra Road, Nuanchan, Bueng Kum, Bangkok 10230&t=&z=8&ie=UTF8&iwloc=&output=embed",
    },
    {
      title: "Dr. CBD Clinic: Huahin",
      para: "218/1-4 Hua Hin Subdistrict, Hua Hin District, Prachuap Khiri Khan Province 77110",
      email:'Email: drcbdclinic_official@drcbdgroup.com',
      tel: "Phone: +66 8 4191 4926",
      image:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/companies/1.png",
      mapLink:
        "https://maps.google.com/maps?q=Medical Cannabis Department 6, 3rd floor, Ratchada-Ramindra Road, Nuanchan, Bueng Kum, Bangkok 10230&t=&z=8&ie=UTF8&iwloc=&output=embed",
    },
    {
      title: "Dr. PET CBD",
      para: "255 Bangna Trat 3 (Soi Bua-Kued), Bangna-Nuea, Bangkok 10260 Thailand",
      email:'Email: info@drcbdgroup.com',
      tel: "Phone: +66 6 5141 6999",
      image:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/companies/4.png",
      mapLink:
        "https://maps.google.com/maps?q=Medical Cannabis Department 6, 3rd floor, Ratchada-Ramindra Road, Nuanchan, Bueng Kum, Bangkok 10230&t=&z=8&ie=UTF8&iwloc=&output=embed",
    },
  ];

  return (
    <>
      <div className="secondBanner">
        <div>
          <h2 style={{ textAlign: "center", padding: "2rem 0" }}>
            WHERE TO FIND US
          </h2>
          <div className="second-banner-container">
            <div>
              <img
                src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/available/LINE_ALBUM.jpg"
                style={{ objectFit: "cover", width: "100%" }}
                alt="/"
              />
              <h2 style={{ textAlign: "center", padding: "1rem 0" }}>
                TOP DEPARTMENT STORES
              </h2>
              <p
                style={{
                  textAlign: "center",
                  lineHeight: "2rem",
                  fontWeight: 500,
                }}
              >
                Our CBD Products are available at Tops Supermarket across
                Thailand.
              </p>
            </div>
            <div>
              <img
                src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/available/IMG_8944.jpg"
                style={{ objectFit: "cover", width: "100%", height: "24.7em" }}
                alt="/"
              />
              <h2 style={{ textAlign: "center", padding: "1rem 0" }}>
                FASCINO
              </h2>
              <p
                style={{
                  textAlign: "center",
                  lineHeight: "2rem",
                  fontWeight: 500,
                }}
              >
                Our CBD products are available at Fascino Drug Store across
                Bangkok.
              </p>
            </div>
          </div>
        </div>
        <div className="second-banner-container2">
          <div>
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
              <div style={{ width: "49.2%" }}>
                <img
                  src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/available/jl281.jpeg"
                  style={{ objectFit: "cover", width: "100%", height: "15em" }}
                  alt="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/available/jl281.jpeg"
                />
                <h3 style={{ padding: "1rem 0" }}>7/11</h3>
                <p style={{ lineHeight: "1.8rem" }}>
                  {" "}
                  CBD products have gained popularity due to their potential
                  therapeutic benefits. While research is ongoing, CBD has shown
                  promise in
                </p>
              </div>
              <div style={{ width: "49.2%" }}>
                <img
                  src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/available/image-5201.jpg"
                  style={{ objectFit: "cover", width: "100%", height: "15em" }}
                  alt="/"
                />
                <h3 style={{ padding: "1rem 0" }}>CJ</h3>
                <p style={{ lineHeight: "1.8rem" }}>
                  {" "}
                  CBD products have gained popularity due to their potential
                  therapeutic benefits. While research is ongoing, CBD has shown
                  promise in
                </p>
              </div>
            </div>
          </div>
          <div>
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
                  src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/available/IMG_9020.jpg"
                  style={{ objectFit: "cover", width: "100%", height: "15em" }}
                  alt="/"
                />
                <h3 style={{ padding: "1rem 0" }}>BEAUTRIUM</h3>
                <p style={{ lineHeight: "1.8rem" }}>
                  {" "}
                  CBD products have gained popularity due to their potential
                  therapeutic benefits. While research is ongoing, CBD has shown
                  promise in
                </p>
              </div>
              <div style={{ width: "49.2%" }}>
                <img
                  src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/available/IMG_9128.jpg"
                  style={{ objectFit: "cover", width: "100%", height: "15em" }}
                  alt="/"
                />
                <h3 style={{ padding: "1rem 0" }}>EVEANDBOY</h3>
                <p style={{ lineHeight: "1.8rem" }}>
                  {" "}
                  CBD products have gained popularity due to their potential
                  therapeutic benefits. While research is ongoing, CBD has shown
                  promise in
                </p>
              </div>
            </div>
          </div>
        </div>
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
            <img src="./online/a.png" style={{ width: "8em" }} alt="/" />
          </a>
          <a href="https://www.lazada.co.th/shop/earth-lab?path=index.htm&lang=en&pageTypeId=1">
            <img src="./online/ad.png" style={{ width: "8em" }} alt="/" />
          </a>
          {/*<img src="./online/Untitled-1.png" style={{ width: "8em" }} alt="/" />*/}
          <a href="https://www.konvy.com/brand/drcbd/">
            <img src="./online/h.png" style={{ width: "8em" }} alt="/" />
          </a>
          {/*<img src="./online/va.png" style={{ width: "8em" }} alt="/" />*/}
        </div>
        <div className="banner">
          <div className="banner-first">
            <h1>
              WHY OUR CBD OIL
              <br />
              IS DIFFERENT?
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
              CBD oil is extracted from an IES (Isolate Extraction System)
              machine, using supercritical CO2 extraction technology, the global
              certified standard of extraction from the USA. This ensures that
              the properties of the oil are thoroughly extracted for better
              efficacy. CBD contain properties that help you relax to reduce
              anxiety, improve the easing into sleep and the sleep quality and
              depth without the ‘hangover feel’ when you awake.
            </p>
          </div>
          <div className="pointer">
            <img
              src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/images/productoil-01.jpg"
              style={{
                objectFit: "cover",
                marginRight: "10em",
                width: "100%",
                height: "100%",
              }}
              alt="/"
            />
          </div>
        </div>
        <div className="banner-second">
          <div className="banner-second-parent">
            <div style={{ width: "40%" }} className="childe1">
              {iconsData[0].map((item, index) => (
                <div>
                  <img src={item.icon} style={{}} alt="/" />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
            <div className="childe1 childe2">
              {iconsData[1].map((item, index) => (
                <div key={index}>
                  <img src={item.icon} alt="/" />
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
              />
              <h2 style={{ padding: "5px 0" }}>{item.title}</h2>
              <p style={{ padding: "5px 0" }}>{item.para}</p>
              <h5
                style={{
                  padding: "5px 0",
                  fontFamily: "Avenir",
                  width:"100%"
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
        <div
          style={{
            maxWidth: "800px",
            width: "100%",
            background: "#00504c",
            height: "39.5em",
            position: "absolute",
            zIndex: 0,
            right: "15.3rem",
            marginBottom: "-14em",
          }}
        />
      </div>
      <div style={{ display: "flex" }}></div>
    </>
  );
};

export default SecondBanner;
