import { Link } from "react-router-dom";
import blog from "../../assets/blog/deelp.png";
import cbd from "../../assets/blog/cbd-cream.png";
import whiteMask from "../../assets/blog/whiteMask.png";
import ampoule from "../../assets/blog/ampoule.png";
import greenAngel from "../../assets/blog/greenAngel.png";
import blogs from "../../assets/blog/blog.jpg";
import ampoule_bri from "../../assets/blog/ampoule-bri.png";
import sleeping from "../../assets/blog/sleeping-cream.png";
import sunsCream from "../../assets/blog/suns-creem.png";
import dellep from "../../assets/blog/deelp-1.png";

const Blog = () => {
  const blogData = [
    {
      title: "Earth Lab CBD De Leep Softgel",
      para: "Your Ticket to Deep, Restorative Sleep",
      image: dellep,
      link:"/blog/earth-lab-cbd-dellep-softgel"
    },
    {
      title: "MCT Oil Perilla Seed",
      para: "Your Ticket to Deep, Restorative Sleep",
      image: blog,
      link:"/blog/earth-lab-cbd-dellep-softgel"
    },
    {
      title: "9CE CBD CREAM",
      para: "Your Pocket-Sized Skincare Essentials for Radiant, Flawless Skin",
      image: cbd,
      link:"/blog/9ce"
    },
    {
      title: "9CE CBD SUNSCREEM",
      para: "Your Pocket-Sized Skincare Essentials for Radiant, Flawless Skin",
      image: sunsCream,
      link:"/blog/9ce"
    },
    {
      title: "9CE CBD DEEP sleeping Cream",
      para: "Your Pocket-Sized Skincare Essentials for Radiant, Flawless Skin",
      image: sleeping,
      link:"/blog/9ce"
    },
    {
      title: "9CE CBD Brightening Ampoule",
      para: "Your Pocket-Sized Skincare Essentials for Radiant, Flawless Skin",
      image: ampoule_bri,
      link:"/blog/9ce"
    },
    {
      title: "Earth Lab CBD Whitening Mask",
      para: "The Ultimate Solution for Sensitive, Acne-Prone Skin",
      image: whiteMask,
      link:"/blog/earth-lab-cbd-whitening-mask"
    },
    {
      title: "Earth Lab CBD Ampoule Serum",
      para: "The Secret Weapon for Sensitive, Acne-Prone Skin",
      image: ampoule,
      link:"/blog/earth-lab-cbd-ampoule-serum"
    },
    {
      title: "Earth Lab CBD Green ANgel Plus",
      para: "A Soothing Solution for Psoriasis and Seborrheic Dermatitis",
      image: greenAngel,
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
        src={blogs}
        alt="/"
        style={{ width: "100%", objectFit: "contain" }}
        loading="lazy"
      />
      <div style={{ width: "100%" }}>
        {blogData.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: index % 2 === 0 ? "#f5f5f5" : "#fff",
              padding: "20px",
              textTransform: 'uppercase'
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
              loading="lazy"
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
