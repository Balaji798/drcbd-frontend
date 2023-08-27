import React from "react";
import { BsFacebook } from "react-icons/bs";
import { SlSocialInstagram } from "react-icons/sl";
import { AiOutlineGlobal } from "react-icons/ai";
import "./esteemed.css";

const OurEsteemed = () => {
  const esteemed = [
    {
      image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/esteemed-img/dd.png",
      title: "EXTRACTION SERVICE FROM CANNABIS AND HEMP",
      para: "DR.CBD offer Extraction service from Cannabis and Hemp with a team of experts, international standard laboratory and cutting edge extraction technology.",
      option: [
        "Crude Oil",
        "CBD Full/Broad/Isolate Spectrum",
        "CBD Distillate",
        "CBD Nano Emulsion",
      ],
    },
    {
      image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/esteemed-img/product.png",
      title: "OEM",
      para: 'Start a business under your own brand. We provide manufacture and branding service. Basically a "One Stop Service" for OEM, ODM, COA',
      option: [
        "own you products anf formular from our experts.",
        "World-class production technology",
        "Logo, packaging and banners design serves",
        "FDA registration service and export certification documents",
        "Advice on building a brand Consultation on all marketing channels",
      ],
    },
    {
      image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/esteemed-img/DSC_9306.png",
      title: "CLINIC FRANCHISE",
      para: "Consider tapping into the holistic healthcare business? Become a part of Dr.CBD Clinic, and consult with us to start up a business with a team of experts. We will help you, from the structural planning and strategy, market analysis to the various other health channels and networks.",
    },
    {
      image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/esteemed-img/business.png",
      title: "AFFILIATE PROGRAM",
      para: "Be our partner in expanding the business of marijuana, hemp and kratom.No requirements for delivery. Sign up for free and enjoy the flexibility of working online wherever you are.",
    },
    {
      image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/esteemed-img/successful.png",
      title: "DISTRIBUTOR",
      para: "We welcome partnership whether it's through consignment, agent/distributors or drop shipping without having to stock or deliver products yourself. We welcome partners both domestic and international, to join us in this exiting phase of growth. Our products have all been Thai FDA-approved",
    },
  ];
  const socialMedia = [
    {
      title: "@drcbdinnovation",
      link: "/brand-purpose",
      icon: <BsFacebook size={35} />,
    },
    {
      title: "www.drcbdgroup.com",
      link: "/our-leadership",
      icon: <AiOutlineGlobal size={35} />,
    },
    {
      title: "@drcbdinnovation",
      link: "/our-companies",
      icon: <SlSocialInstagram size={35} />,
    },
    {
      title: "+66 65 141 6999",
      link: "/join-our-esteemed",
      icon: (
        <img
          src="../free-phone.png"
          style={{ objectFit: "cover", height: "30px" }}
        />
      ),
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="esteemed">
        <p
          style={{
            color: "#005652",
            fontSize: "40px",
            position: "absolute",
            left: "5em",
            top: "7em",
          }}
        >
          JOIN OUR
        </p>
        <p
          style={{
            color: "#005652",
            fontSize: "40px",
            position: "absolute",
            left: "5em",
            top: "8.5em",
          }}
        >
          ESTEEMED COMPANY
        </p>
      </div>
      {esteemed.map((item, index) => (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: index % 2 != 0 ? "#e8eae1" : "#fff",
          }}
        >
          <div
            style={{
              maxWidth: "60em",
              display: "flex",
              alignItems: "center",
              flexDirection: index % 2 != 0 ? "row-reverse" : "row",
              borderBottom: "5px solid #005652",
            }}
          >
            <div>
              <p style={{ fontSize: "25px", width: "73%", padding: "1em 0" }}>
                {item.title}
              </p>
              <p
                style={{
                  fontSize: "15px",
                  width: "60%",
                  paddingBottom: "1em",
                  lineHeight: "1.2em",
                }}
              >
                {item.para}
              </p>
              {item.option?.map((opt, i) => (
                <div key={i} style={{ paddingLeft: "10px" }}>
                  <p>{opt}</p>
                </div>
              ))}
            </div>
            <img
              src={item.image}
              style={{ width: "60%", height: "25em", objectFit: "contain" }}
            />
          </div>
        </div>
      ))}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background:"#000",
          padding:"5rem 0"
        }}
      >
        <div
          style={{
            background: "#005652",
            maxWidth: "60em",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "1em 2em",
            color: "#fff",
          }}
        >
          <div style={{ width: "60%" }}>
            <p
              style={{
                fontSize: "35px",
              }}
            >
              Contact Us
            </p>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {socialMedia.map((item, index) => (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "50%",
                    padding: "1.5em 0",
                  }}
                >
                  {item.icon}
                  <p
                    style={{
                      fontSize: "24px",
                      marginLeft: "10px",
                      fontFamily: "'Roboto Condensed', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p
              style={{
                background: "#187a7f",
                color: "#fff",
                textAlign: "center",
                marginBottom: "5px",
                fontSize: "30px",
                borderRadius: "5px",
              }}
            >
              SCAN ME
            </p>
            <div
              style={{
                padding: "10px",
                background: "#fff",
                borderRadius: "5px",
              }}
            >
              <img
                src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/esteemed-img/scan.png"
                style={{
                  width: "100%",
                  height: "10em",
                  objectFit: "contain",
                  background: "#fff",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEsteemed;
