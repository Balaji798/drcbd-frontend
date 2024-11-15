import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogData = [
    {
      title: "Earth Lab CBD De Leep Softgel",
      secondTitle: "MCT OIL PLUS PERILLASEED OIL AND CBD EXTRACT FROM HEMP",
      para: "Your Ticket to Deep, Restorative Sleep",
      image: "../blog/deelp.png",
      link:"/blog/earth-lab-cbd-dellep-softgel"
    },
    {
      title: "9CE SKINCARE PRODUCT",
      para: "Your Pocket-Sized Skincare Essentials for Radiant, Flawless Skin",
      image: "../blog/9ce.png",
      link:"/blog/9ce"
    },
    {
      title: "Earth Lab CBD Whitening Mask",
      para: "The Ultimate Solution for Sensitive, Acne-Prone Skin",
      image: "../blog/whiteMask.png",
      link:"/blog/earth-lab-cbd-whitening-mask"
    },
    {
      title: "Earth Lab CBD Ampoule Serum",
      para: "The Secret Wepon for Sensitive, Acne-Prone Skin",
      image: "../blog/ampoule.png",
      link:"/blog/earth-lab-cbd-ampoule-serum"
    },
    {
      title: "Earth Lab CBD Green ANgel Plus",
      para: "A Soothing Solution for Psoriasis and Seborrheic Dermatitis",
      image: "../blog/greenAngel.png",
      link:"/blog/earth-lab-cbd-green-angel"
    },
  ];
  return (
    <div
      className="center"
      style={{
        paddingTop: "1rem",
      }}
    >
      <img
        src="../blog/blog.jpg"
        alt="/"
        style={{ width: "100%", objectFit: "contain" }}
      />
      <div style={{ width: "100%" }}>
        {blogData.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: index % 2 === 0 ? "#f5f5f5" : "#fff",
              padding: "20px",
            }}
            className="center"
          >
            <div style={{ maxWidth: "750px", width: "100%" }}>
              <h1 style={{ fontWeight: 600 }}>{item.title}</h1>
              <h2 style={{ fontWeight: 600 }}>{item?.secondTitle}</h2>
              <h2 style={{ color: "#8b8b8b" }}>{item.para}</h2>
            </div>
            <img
              src={item.image}
              alt="/"
              style={{ maxWidth: "650px", objectFit: "contain" }}
              className="blog-img"
            />
            <div
              className="flex"
              style={{
                maxWidth: "750px",
                width: "100%",
                justifyContent: "flex-end",
              }}
            >
              <Link
                to={item.link}
                style={{
                  backgroundColor: "#004d4a",
                  color: "#fff",
                  border: "none",
                  fontSize: "22px",
                  padding: "2.5px 5px",
                  cursor: "pointer",
                  
                }}
              >
                SEE MORE {">"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
