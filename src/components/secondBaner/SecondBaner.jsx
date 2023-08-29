import React from "react";
import "./secondBanner.css";
import { iconsData } from "./iconsData";
import { IoIosArrowDown } from "react-icons/io";

const SecondBanner = () => {
  const data = [
    {
      title: "VITAL MEDI CLINIC",
      para: "NAVEJ: Medical Cannabis Department 6, 3rd floor, Ratchada-Ramindra Road, Nuanchan, Bueng Kum, Bangkok 10230",
      tel: "TEL: +66 9 9191 4926",
      image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/companies/2.png",
    },
    {
      title: "VITAL HEALTH CAFE",
      para: "NAVEJ: Medical Cannabis Department 6, 3rd floor, Ratchada-Ramindra Road, Nuanchan, Bueng Kum, Bangkok 10230",
      tel: "TEL: +66 9 9191 4926",
      image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/companies/5.png",
    },
    {
      title: "VITAL HEALTH CAFE",
      para: "NAVEJ: Medical Cannabis Department 6, 3rd floor, Ratchada-Ramindra Road, Nuanchan, Bueng Kum, Bangkok 10230",
      tel: "TEL: +66 9 9191 4926",
      image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/companies/3.png",
    },
    {
      title: "VITAL HEALTH CAFE",
      para: "NAVEJ: Medical Cannabis Department 6, 3rd floor, Ratchada-Ramindra Road, Nuanchan, Bueng Kum, Bangkok 10230",
      tel: "TEL: +66 9 9191 4926",
      image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/companies/1.png",
    },
    {
      title: "VITAL HEALTH CAFE",
      para: "NAVEJ: Medical Cannabis Department 6, 3rd floor, Ratchada-Ramindra Road, Nuanchan, Bueng Kum, Bangkok 10230",
      tel: "TEL: +66 9 9191 4926",
      image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/companies/1.png",
    },
    {
      title: "VITAL HEALTH CAFE",
      para: "NAVEJ: Medical Cannabis Department 6, 3rd floor, Ratchada-Ramindra Road, Nuanchan, Bueng Kum, Bangkok 10230",
      tel: "TEL: +66 9 9191 4926",
      image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/companies/4.png",
    },
  ];

  return (
    <>
      <div className="secondBanner">
        <div
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "1200px",
            width: "100%",
            justifyContent: "space-between",
            padding: "2rem 0 0",
          }}
        >
          <div
            style={{
              width: "49.6%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/available/LINE_ALBUM.jpg"
              style={{ objectFit: "cover", width: "100%" }}
            />
            <h2 style={{ textAlign: "center", padding: "1rem 0" }}>
              TOP DEPARTMENT STORES
            </h2>
            <p
              style={{
                textAlign: "center",
                lineHeight: "2rem",
                fontWeight: 500,
                width: "80%",
              }}
            >
              CBD products have gained popularity due to their potential
              therapeutic benefits. While research is ongoing, CBD has shown
              promise in several areas, including:
            </p>
          </div>
          <div
            style={{
              width: "49.6%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/available/IMG_8944.jpg"
              style={{ objectFit: "cover", width: "100%", height: "24.7em" }}
            />
            <h2 style={{ textAlign: "center", padding: "1rem 0" }}>FASCINO</h2>
            <p
              style={{
                textAlign: "center",
                lineHeight: "2rem",
                fontWeight: 500,
                width: "80%",
              }}
            >
              CBD products have gained popularity due to their potential
              therapeutic benefits. While research is ongoing, CBD has shown
              promise in several areas, including:
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            height: "32em",
            width: "100%",
            justifyContent: "space-between",
            marginTop: "1em",
            background: "#000",
            color: "#fff",
            padding: "1em 0",
          }}
        >
          <div style={{ width: "49.7%", textAlign: "center" }}>
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
          <div style={{ width: "49.7%", textAlign: "center" }}>
            <h1 style={{ fontSize: "2.5rem", padding: "1rem 0" }}>
              MODERNTRADE
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ width: "49.2%" }}>
                <img
                  src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/available/IMG_9020.jpg"
                  style={{ objectFit: "cover", width: "100%", height: "15em" }}
                />
                <h3 style={{ padding: "1rem 0" }}>BEAUTRIUM</h3>
                <p style={{ lineHeight: "1.8rem" }}>
                  {" "}
                  CBD products have gained popularity due to their potential
                  therapeutic benefits. While research is ongoing, CBD has shown
                  promise in
                </p>
              </div>
              <div style={{ width: "48%",marginRight:"1rem" }}>
                <img
                  src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/available/IMG_9128.jpg"
                  style={{ objectFit: "cover", width: "100%", height: "15em" }}
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
        <div
          style={{
            display: "flex",
            height: "8em",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <h1
            style={{
              padding: "0.5em 1em",
              fontSize: "2.5em",
              borderRight: "1px solid",
            }}
          >
            ONLINE SHOP
          </h1>
          <h2 style={{ padding: "0.5em 1em" }}>LINE SHOPPING</h2>
          <img src="./online/a.png" style={{ width: "8em" }} />
          <img src="./online/ad.png" style={{ width: "8em" }} />
          <img src="./online/Untitled-1.png" style={{ width: "8em" }} />
          <img src="./online/h.png" style={{ width: "8em" }} />
          <img src="./online/va.png" style={{ width: "8em" }} />
        </div>
        <div className="banner">
          <div>
            <h1 style={{ fontSize: "45px" }}>
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
            <p
              style={{
                width: "34.8%",
                lineHeight: "30px",
                fontWeight: 300,
                fontFamily: "'Hind Siliguri', sans-seri",
                fontSize: 20,
              }}
            >
              CBD Oil is extracted from an IES (Isolate Extraction Systems)
              machine, using Supercritical CO2 extraction technology. A
              World-class/ certified standard from the USA. CBD Oil has
              properties that help relax and reduce anxiety. improve sleep
              quality and fall asleep easier. No hangover feeling when you wake
              up. Better brain function and ready for a new day
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
            />
          </div>
        </div>
        <div className="banner-second">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              width: "100%",
              padding: " 0em 0 2em 0",
            }}
          >
            <div style={{ width: "40%" }}>
              {iconsData[0].map((item, index) => (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    padding: "10px 0",
                  }}
                >
                  <img
                    src={item.icon}
                    style={{ objectFit: "contain", width: 80, height: 80 }}
                  />
                  <p style={{ color: "#005652", fontSize: 20, width: "40%" }}>
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
            <div style={{ width: "45%", paddingTop: "15em" }}>
              {iconsData[1].map((item, index) => (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    padding: "20px 0 20px 0em",
                  }}
                  key={index}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "60%",
                    }}
                  >
                    <img
                      src={item.icon}
                      style={{ objectFit: "contain", width: 80, height: 80 }}
                    />
                    <p style={{ color: "#005652", fontSize: 18 }}>
                      {item.title}
                    </p>
                  </div>
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
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            maxWidth: "1100px",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          {data.map((item, index) => (
            <div
              style={{
                width: "17em",
                background: "#fff",
                borderRight: index == 2 || index == 5 ? 0 : "1px solid #000",
                borderBottom:
                  index == 2 || index == 0 || index == 1 ? "1px solid #000" : 0,
                padding: "1em",
                margin:"0.1rem",
                color: "#000",
              }}
              key={index}
            >
              <img
                src={item.image}
                style={{ width: "15rem", objectFit: "contain", height: "5em" }}
              />
              <h2 style={{ padding: "5px 0" }}>{item.title}</h2>
              <p style={{ padding: "5px 0" }}>{item.para}</p>
              <h3 style={{ padding: "5px 0" }}>{item.tel}</h3>
              <IoIosArrowDown />
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
            right: "11.3rem",
            marginBottom: "-8em",
          }}
        />
      </div>
      <div style={{ display: "flex" }}></div>
    </>
  );
};

export default SecondBanner;
