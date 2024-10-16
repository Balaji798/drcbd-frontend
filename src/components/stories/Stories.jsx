import React from "react";
import "./stories.css";
import Accordion from "../accordion/Accordion";

const Stories = () => {
  const onButtonClick1 = () => {
    const pdfUrl = "./Company Profile-ENG-FP.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Company Profile-ENG-FP.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
const onButtonClick2 = () => {
  const pdfUrl = "./product catalog ENG_2023_smallest_20_07_23.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "product catalog ENG_2023_smallest_20_07_23.pdf"; // specify the filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
  // const storiesData = [
  //   {
  //     title: "ABOUT",
  //     image:
  //       "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/dr/stores/DR.CBD-282.jpg",
  //   },
  //   {
  //     title: "NEWS",
  //     image:
  //       "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/dr/stores/DSC01745.jpg",
  //   },
  //   {
  //     title: "INSIGHTS",
  //     image:
  //       "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/dr/stores/edit02.jpg",
  //   },
  // ];
  const howItStarted = [
    {
      image:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/how-it-starts/scientist.jpg",
      year: "2019",
      title: "Exploration Year",
      para: "We started scientific work, research & development",
    },
    {
      image:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/how-it-starts/woman-scientist.jpg",
      year: "2020",
      title: "Exploration Year",
      para: "We found real benefits from hemp & cannabis extracts",
    },
    {
      image:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/how-it-starts/s1-group.jpg",
      year: "2021-2022",
      title: "Developed & Innovated",
      para: 'We have innovated, formulated and developed medical products from from hemp, cannabis, kratom and other Thai herbs Fro the well-being of the people and to ..."Save Lives & Heal People"',
    },
  ];

  const followData = [
    { image: "./logo2-01.png", name: "drcbdinnovation" },
    {
      image:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/companies/3.png",
      name: "drkratombio",
    },
    {
      image:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/companies/EARTH-LAB.png",
      name: "earthlab.th",
    },
    {
      image:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/companies/2.png",
      name: "vitalmediclinicofficial",
    },
    // {
    //   image:
    //     "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/companies/5.png",
    //   name: "vitalhealtheathcafeofficial",
    // },
    {
      image:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/companies/4.png",
      name: "drpetcbd",
    },
    {
      image:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/companies/1.png",
      name: "drcbdclinic",
    },
  ];

  // const newsData = [
  //   {
  //     image:
  //       "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/news/DR.CBD-282.jpg",
  //     name: "Grand Opening Stores",
  //   },
  //   {
  //     image:
  //       "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/news/IMG_1466.JPG",
  //     name: "Grand Opening Stores",
  //   },
  //   {
  //     image:
  //       "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/news/nodtiezpix.jpg",
  //     name: "Grand Opening Stores",
  //   },
  // ];
  return (
    <>
      <div className="stories">
        <div className="stories-background">
          <div
            className="stories-container"
            style={{ display: "flex", justifyContent: "space-between",flexWrap:"wrap" }}
          >
            <div className="stories-container-childe2"
            >
              {howItStarted.map((item, index) => (
                <div
                  style={{ display: "flex", paddingBottom: "0.5rem" }}
                  key={index}
                >
                  <img
                    src={item.image}
                    style={{
                      width: "8rem",
                      objectFit: "cover",
                      height: "8rem",
                    }}
                    alt="/"
                  />
                  <div style={{ paddingLeft: "0.5rem" }}>
                    <p>.{item.year}</p>
                    <h3>{item.title}</h3>
                    <p style={{ fontSize: "0.8rem" }}>{item.para}</p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="stories-container-childe3"
            />
            <div
              className="stories-container-childe1"
            >
              <div>
                <h1 style={{ fontSize: "2.6rem", paddingBottom: "3.4rem" }}>
                  HOW IT STARTS
                </h1>
                <p style={{ fontWeight: 500 }}>
                  mission CBD products have gained popularity due to their
                  potential therapeutic benefits. While research is ongoing, CBD
                  has shown promise in several areas, including:
                  <br />
                  {""}
                  <br />
                  vision Pain Management: CBD may help alleviate chronic pain by
                  interacting with receptors in the endocannabinoid system,
                  reducing inflammation and influencing neurotransmitter
                  activity.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  
                  alignItems: "center",
                  color: "#fff",
                }}
              >
              { /* <div className="stories-button">Affiliate</div>*/}
                <div className="stories-button" style={{marginRight:"1rem"}}>About Us</div>
                <div className="stories-button">CBD Products</div>
              </div>
            </div>
          </div>
          <div
            className="stories-container profile-company"
            style={{ display: "flex", justifyContent: "space-between",flexWrap:"wrap" }}
          >
            <div
              className="company1"
            >
              <h1 style={{ fontSize: "3rem", paddingBottom: "2rem" }}>
                COMPANY PROFILE
              </h1>
              <button className="stories-button-blue-gr" onClick={onButtonClick1}>
                Download Company Profile
              </button>
            </div>
            <div style={{ textAlign: "center" }}>
              <h1 style={{ fontSize: "3rem", paddingBottom: "2rem" }}>
                PRODUCT CATALOG
              </h1>
              <button className="stories-button-blue-gr" onClick={onButtonClick2}>
                Download Product Catalog
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
            background: "#012b2a",
            textAlign: "center",
            padding: "2rem 0",
          }}
        >
          <h1
            style={{ fontSize: "3rem", paddingBottom: "2rem", color: "#fff" }}
          >
            FOLLOW US
          </h1>
          <div
            className="composes-logo"
          >
            {followData.map((item, index) => (
              <div>
                <div>
                  <img src={item.image} style={{ width: "100%" }} alt="/"/>
                </div>
                <p>
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
{ /*       <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
            flexWrap:"wrap",
            background: "#000",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
              flexWrap:"wrap",
              maxWidth: 1200,
              color: "#fff",
              padding: "3rem 0",
            }}
          >
            <div>
              <h1>NEWS</h1>
              <a
                href="#"
                style={{
                  color: "#fff",
                  fontSize: "1.2rem",
                  textDecoration: "underline",
                }}
              >
                Read more
              </a>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent:"center",
                flexWrap:"wrap",
                
              }}
            >
              {newsData.map((item, index) => (
                <div
                  style={{
                    paddingRight: "0.5rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={item.image}
                    style={{
                      width: "13.5rem",
                      objectFit: "cover",
                      height: "10rem",
                    }}
                    alt="/"
                  />
                  <p
                    style={{
                      color: "#fff",
                      padding: "0.5rem 0",
                    }}
                  >
                    {item.name}
                  </p>
                  <div
                    style={{
                      width: "7rem",
                      height: 3,
                      borderRadius: 5,
                      background: "#fff",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
                  </div>*/}
{/*        <div className="subscribe">
          <h1>
            SIGN UP AND GET <br />
            20% DISCOUNT
          </h1>
          <div className="subscribe-form">
            <h1>Email Address</h1>
            <input />
            <div className="subscribe-button">Subscribe</div>
          </div>
                  </div>*/}
      </div>
    </>
  );
};

export default Stories;


// <div
// style={{
//   display: "flex",
//   alignItems: "center",
//   width: "100%",
//   justifyContent: "space-between",
//   paddingTop: "2rem",
// }}
// >
// <div style={{ width: "47.5%", background: "#263f44", height: 3 }} />
// <h1 style={{ color: "#263f44" }}>FAQS</h1>
// <div style={{ width: "47.5%", background: "#263f44", height: 3 }} />
// </div>
// <div
// className="stories-container"
// style={{
//   display: "flex",
//   justifyContent: "center",
//   color: "#2b3d3f",
// }}
// >
// <div>
//   <div
//     style={{
//       background: "#e3e3e3",
//       padding: "1rem 0.5rem",
//       marginBottom: "0.1rem",
//       fontWeight: "bold",
//       borderLeft: "2px solid",
//     }}
//   >
//     About CBD
//   </div>
//   <div
//     style={{
//       background: "#e3e3e3",
//       padding: "1rem 0.5rem",
//       marginBottom: "0.1rem",
//       fontWeight: "bold",
//     }}
//   >
//     How to use CBD
//   </div>
//   <div
//     style={{
//       background: "#e3e3e3",
//       padding: "1rem 0.5rem",
//       marginBottom: "0.1rem",
//       fontWeight: "bold",
//     }}
//   >
//     Traveling Thailand with CBD
//   </div>
// </div>
// <div>
//   <Accordion />
// </div>
// </div>