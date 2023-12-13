import React from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const OurLeadership = () => {
  const location = useLocation();
  const data = [
    {
      image:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/our-leadership/7.jpg",
      name: "PORNCHAI PADMINDRA",
      designation: "CEO & FOUNDER",
    },
    {
      image:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/our-leadership/3.jpg",
      name: "TIYA PHAOSAWASDI",
      designation: "MANAGING DIRECTOR & FOUNDER",
    },
    {
      image:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/our-leadership/8.jpg",
      name: "SOMJITRA DHANASOBHON",
      designation: "DEPUTY MANAGING DIRECTOR",
    },
    // {
    //   image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/our-leadership/IMG_8904.jpg",
    //   name: "DR.SAKAN WARINHOMHOUN",
    //   designation: "Advisor to CEO",
    // },
    // {
    //   image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/our-leadership/4.jpg",
    //   name: "CHITAPHOL RATTANATHIKUN",
    //   designation: "Chief Operating Officer",
    // },
    // {
    //   image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/our-leadership/9.jpg",
    //   name: "SUCHAIRI SITTISOMBOON",
    //   designation: "Sales Director",
    // },
    // {
    //   image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/our-leadership/1.jpg",
    //   name: "KRIANGKRAI WILAILAK",
    //   designation: "Chief Marketing Officer",
    // },
    // {
    //   image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/our-leadership/10.jpg",
    //   name: "NOPPAVEE TANTISAVEE",
    //   designation: "Business Development & Strategy Director",
    // },
    // {
    //   image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/our-leadership/IMG_9670-2.jpg",
    //   name: "WANICHAYA PAKSARANUWAT",
    //   designation: "Chief Financial Officer",
    // },
    // {
    //   image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/our-leadership/2.jpg",
    //   name: "SAPPASIT UDOMBOONDEE",
    //   designation: "Human Resource Director",
    // },
    // {
    //   image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/our-leadership/5.jpg",
    //   name: "CHONTIDA JIRACHAISUDTIKUL",
    //   designation: "General Manager - Clinic",
    // },
    // {
    //   image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/our-leadership/6.jpg",
    //   name: "JIRATCHAYA THEPPHAITHUN",
    //   designation: "Legal Supervisor",
    // },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "3rem",
        background: "#000",
        color: "#fff",
      }}
    >
      <div style={{ maxWidth: "1100px", width: "100%" }}>
        <p
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: "35px",
            textTransform: "capitalize",
            paddingBottom: "3rem",
            fontWeight: "bold",
          }}
        >
          {location.pathname.slice(1).split("-").join(" ")}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "20rem",
                paddingTop: "10px",
                marginBottom: "3.5rem",
                height: "21rem",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              {/* <img
                src={item.image}
                alt={item}
                key={index}
                style={{ objectFit: "contain", width: "100%" }}
              /> */}
              <div
                style={{
                  height: "10%",
                  background: "#000",
                  width: "100%",
                  textAlign: "end",
                  paddingTop: "0.3rem",
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                    padding: "5px 0",
                  }}
                >
                  {item.name}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    padding: "5px 0",
                    color: "#c4c4c4",
                  }}
                >
                  {item.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom:"2rem"
        }}
      >
        <img
          src="./stafe.jpg"
          style={{ objectFit: "contain", width: "80%", paddingTop: "1rem" }}
          alt="/"
        />
      </div>
    </div>
  );
};

export default OurLeadership;
