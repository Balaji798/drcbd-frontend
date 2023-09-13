 
import React, { useState, useEffect } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { ImStarFull, ImStarHalf } from "react-icons/im";
import {
  FaInstagram,
  FaFacebookF,
  FaLine,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import VerticalCarousel from "../../components/verticalslider/VerticalSlider";
import data from "../../data";
import "./productDetail.css";
import SeeMore from "../../components/SeeMore";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { productIcon } from "./product-icon";

const ProductDetail = () => {
  const { productName } = useParams();
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const [displayedReviews, setDisplayedReviews]=useState([])
  const [userReviews,setUserReviews]=useState([]);
  const [icons, setIcons] = useState(
    productIcon.filter((item) => {
      if (productName?.toLowerCase().split("-").join(" ") == item.title.toLowerCase()) {
        //console.log(productName?.toLowerCase().split("-").join(" ") , item.title.toLowerCase())
        return item;
      }
    })
  );
  const [feed, setFeed] = useState({
    name: "",
    email: "",
    review: "",
    rating: "",
    productId: "",
  });
  const [open, setOpen] = useState(false);

  if (open) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const [product, setProduct] = useState([]);
  const [position, setPosition] = useState(0);
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState("");

  useEffect(() => {
    getProductByName();
  }, []);

  const getProductByName = async () => {
    try {
    
      const res = await axios.post(
        "https://drcbd-backend.onrender.com/product/product_by_name",
        { name: productName }
      );
      //console.log(res.data);
      const productReviews = await axios.post("https://drcbd-backend.onrender.com/review/get-reviews-by-productId",
      { productId: res.data._id });
      setUserReviews(productReviews.data)
      setDisplayedReviews(productReviews.data.slice(0,3));
      setProduct(res.data);
      setFeed({ ...feed, productId: res.data._id });
      setPrice(res.data.price);
    } catch (err) {
      console.log(err.message);
    }
  };
  
  const about = [
    {
      title: "FDA NO. ",
      para: product.fda,
    },
    {
      title: "Dosage From",
      para: product.dosage,
    },
    {
      title: "Ingredient",
      para: product.ingredient,
    },
    {
      title: "Product details",
      para: product.productFor,
    },
    {
      title: "Suitable for",
      para: product.suitableFor,
    },
    {
      title: "How to Use",
      para: product.use,
    },
    {
      title: "Storage & Contraindication ",
      para: product.storageContraindication,
    },
    // {
    //   title: "Contraindication",
    //   para: "Do not take this supplement if you are pregnant, breastfeeding.",
    // },
    {
      title: "Waring and Precaution",
      para: product.warningPrecaution,
    },
    // {
    //   title: "Quantity",
    //   para: "50% ML",
    // },
  ];
  const concatData = [
    { title: "instagram", icon: <FaInstagram size={50} color="#fff" /> },
    { title: "Facebook", icon: <FaFacebookF size={50} color="#fff" /> },
    { title: "Line", icon: <FaLine size={50} /> },
    { title: "Tiktok", icon: <FaTiktok size={50} color="#fff" /> },
    { title: "Twitter", icon: <FaTwitter size={50} color="#fff" /> },
  ];
  const reviewStar = [1, 2, 3, 4, 5];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (activeIndex < 0) {
      setActiveIndex(lastIndex);
    }
    if (activeIndex > lastIndex) {
      setActiveIndex(0);
    }
  }, [activeIndex, data]);

  const addToCart = async () => {
    try {
      const requestBody = { qty, price, productId: product._id };
      const user = localStorage.getItem("token");
      if (user) {
        const config = {
          headers: {
            Authorization: `Bearer ${user}`,
            "Content-Type": "application/json", // Set the content type to JSON
          },
        };
        const res = await axios.post(
          "https://drcbd-backend.onrender.com/cart/add-to-card",
          requestBody,
          config
        );

        //console.log(res.data.status);
        if (!res.data.status) {
          setOpen(true);
        }
        // const res = await axios.post("/api/add-to-cart", requestBody);
      } else {
        alert("You are not login login first");
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  const buy = () => {
    navigate(`/cart/?productId=${product._id}`);
    // console.log(open);
    // if (user) setOpen(!open);
  };

  const handelSubmit = async () => {
    try {
      const user = localStorage.getItem("token");
      console.log(user)
      if (user) {
        const config = {
          headers: {
            Authorization: `Bearer ${user}`,
            "Content-Type": "application/json", // Set the content type to JSON
          },
        };
        const res = await axios.post(
          "https://drcbd-backend.onrender.com/review/add-review",
          feed,
          config
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
  //console.log(product);
  return (
    <>
      {open && (
        <div className="modal">
          <div onClick={() => setOpen(false)} className="overlay"></div>
          <div className="modal-content">
            <h2>You are not Sign Up Sign up First</h2>
            <Link
              href="/register"
              style={{
                background: "#fff",
                color: "#005652",
                textAlign: "center",
                margin: "15px 0",
                fontWeight: "bold",
                fontSize: "20px",
                width: "20rem",
              }}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
      <div>
       {!product?.bannerImg ?<img src="../info-product-banner.jpg" style={{width:"100%",maxHeight:"25rem",objectFit:"cover"}}/>: <section className="section">
          <div className="section-center">
            {product?.bannerImg?.map((item, indexPeople) => {
             
              let position = "nextSlide";
              if (indexPeople === activeIndex) {
                position = "activeSlide";
              }
              if (
                indexPeople === activeIndex - 1 ||
                (activeIndex === 0 && indexPeople === data.length - 1)
              ) {
                position = "lastSlide";
              }
              return (
                <article className={position} key={indexPeople}>
                  <img src={item} alt={item} className="person-img" />
                </article>
              );
            })}
            <button
              className="prev"
              onClick={() => {
                if(product?.bannerImg?.length>1){
                  setActiveIndex(activeIndex - 1)
                }
              }}
            >
              <MdArrowBackIosNew style={{ fontSize: "50px", color: "#fff" }} />
            </button>
            <button
              className="next"
              onClick={() =>{ if(product?.bannerImg?.length>1)setActiveIndex(activeIndex + 1)}}
            >
              <MdArrowForwardIos style={{ fontSize: "50px", color: "#fff" }} />
            </button>
          </div>
        </section>}
        <div className="productDetail">
          <div style={{ width: "45%", height: "90%" }}>
            {product?.images && (
              <div
                style={{
                  width: "100%",
                  zIndex: 1,
                  height: "500px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={product?.images[position]}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            )}
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {product?.images?.length>1&& product?.images?.map((i, index) => (
                <div
                  style={{
                    width: "150px",
                    height: "150px",
                    background: "#f3f3f3",
                  }}
                  key={index}
                  onClick={() => setPosition(index)}
                >
                  <img
                    src={i}
                    alt="/"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="description">
            <h2 style={{ fontSize: "38px", paddingBottom: "10px" }}>
              {product.name}
            </h2>
            <p
              style={{
                lineHeight: 1.3,
                borderBottom: "1px solid grey",
                paddingBottom: "1em",
              }}
            >
              {product.des}
            </p>

            <p>Sizes</p>
            <div
              style={{
                display: "flex",
                borderBottom: "1px solid grey",
                paddingBottom: "1em",
              }}
            >
              <p
                style={{
                  border: "1px solid grey",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  marginRight: "5px",
                  fontSize: 18,
                }}
              >
                1 Piece
              </p>
              <p
                style={{
                  border: "1px solid grey",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  fontSize: 18,
                }}
              >
                10 Piece
              </p>
            </div>
            <div
              style={{
                display: "flex",
                borderBottom: "1px solid grey",
                paddingBottom: "1em",
                alignItems: "center",
                paddingTop: "1em",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <p
                  style={{
                    border: "1px solid grey",
                    padding: "5px 10px",
                    fontSize: 18,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setQty(qty + 1);
                    setPrice(product.price * (qty + 1));
                  }}
                >
                  +
                </p>
                <p
                  style={{
                    border: "1px solid grey",
                    padding: "5px 10px",
                    fontSize: 18,
                    width: 50,
                    textAlign: "center",
                  }}
                >
                  {qty}
                </p>
                <p
                  style={{
                    border: "1px solid grey",
                    padding: "5px 10px",
                    fontSize: 18,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    if (qty > 1) {
                      setQty(qty - 1);
                      setPrice(product.price * (qty - 1));
                    }
                  }}
                >
                  -
                </p>
              </div>
              <button
                style={{
                  marginLeft: "2em",
                  fontSize: 18,
                  width: 200,
                  padding: "5px 0",
                  cursor: "pointer",
                }}
                onClick={addToCart}
              >
                ADD TO CART{" "}
                <MdOutlineAddShoppingCart
                  style={{ paddingLeft: 5, fontSize: "35px" }}
                />{" "}
              </button>{" "}
            </div>
            <h2
              style={{
                fontSize: "35px",
                paddingBottom: "10px",
                textAlign: "end",
              }}
            >
              Price : {price} ฿
            </h2>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button onClick={buy}>BUY NOW</button>
            </div>
            {/* <div
            style={{
              width: "46%",
              height: "3em",
              marginTop: "1em",
              background: "#f3f3f3",
              padding: "0.5em 1em",
            }}
          >
            <img
              src="../paypal.png"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div> */}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ maxWidth: "1200px", width: "100%", color: "#005652" }}>
            <h5 style={{ paddingTop: 15, fontSize: 25 }}>
              Product Description / Indications
            </h5>
            {about.map((item, index) => (
              <div
                style={{ width: "100%", display: "flex", padding: "0.3em 0" }}
              >
                <div
                  style={{
                    width: "35%",
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  <p style={{ textDecoration: "underline" }}>{item.title}</p>
                  <p style={{ marginRight: "1em" }}>:</p>
                </div>
                {Array.isArray(item.para) ? (
                  <div>
                    {item?.para?.map((des, i) => (
                      <p
                        style={{
                          width: "100%",
                          fontSize: "17px",
                          paddingBottom: 15,
                        }}
                        key={i}
                      >
                        -{des}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p style={{ width: "65%", fontSize: "17px" }}>{item.para}</p>
                )}
              </div>
            ))}
            <div style={{ display: "flex",flexWrap:"wrap",maxWidth:"700px" }}>
              {icons[0]?.icons?.map((item, index) => (
                <div key={index} style={{ marginLeft: "0.3rem" }}>
                  <img
                    src={item}
                    style={{ width: "8rem", objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1.5rem",
          }}
        >
          {concatData.map((item, index) => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderRight: "2px solid #0b4640",
                paddingRight: "1rem",
              }}
            >
              <div
                style={{
                  background: "#0b4640",
                  borderRadius: "50px",
                  padding: "1rem",
                }}
              >
                {item.icon}
              </div>
              <p style={{ color: "#0b4640" }}>
                Share On
                <br />
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <div>
          {/* <img src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/dr/video.png" style={{ width: "100%" }} /> */}
          <iframe width="100%" height="450" src={product.videoLink} title="Unveiling Dr. Pet CBD (2023) - A Better Way to Live a Happy Life" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
        </div>
        <div
          className="review-container"
          style={{ flexDirection: "column", background: "#ededed" }}
        >
          <div
            style={{ maxWidth: "1200px", width: "100%", paddingTop: "2rem" }}
          >
            <h1 style={{ fontFamily: "'Wix Madefor Text', sans-serif" }}>
              Reviews
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: 5,
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    padding: "0.5rem 3rem",
                    clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
                    width: "18rem",
                    background: "#0b4640",
                    color: "#fff",
                  }}
                >
                  <h1 style={{ fontSize: "30px" }}>4.5</h1>
                </div>
                <div
                  style={{
                    filter: "drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))",
                    position: "absolute",
                    marginLeft: "7rem",
                  }}
                >
                  <div
                    style={{
                      background: "#fff",
                      padding: "0.3rem 3rem",
                      width: "15rem",
                      clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
                    }}
                  >
                    <div
                      style={{
                        width: "90%",
                        color: "#fdba09",
                        paddingBottom: 3,
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <ImStarFull style={{ fontSize: 20 }} />
                      <ImStarFull style={{ fontSize: 20 }} />
                      <ImStarFull style={{ fontSize: 20 }} />
                      <ImStarFull style={{ fontSize: 20 }} />
                      <ImStarHalf style={{ fontSize: 20 }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p>{userReviews.length} Reviews count</p>
          </div>
          <div
            className="review-container"
            style={{ maxWidth: "1200px", width: "100%", paddingBottom: "2rem" }}
          >
            <div className="reviews">
              <VerticalCarousel reviews={userReviews} displayedReviews={displayedReviews} setDisplayedReviews={setDisplayedReviews}/>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "90%",
                }}
              >
                <a style={{ textAlign: "end" }}> See More {">>"}</a>
              </div>
            </div>
            <div
              style={{
                background: "#0b4640",
                color: "#fff",
                height: "100%",
                width: "50%",
                padding: "1rem",
              }}
            >
              <h2>Add Review</h2>
              <p style={{ padding: "0.5rem 0" }}>Your Rating</p>
              <div
                style={{
                  paddingLeft: 5,
                  height: 50,
                }}
              >
                <div style={{ paddingBottom: 3 }}>
                  {reviewStar.map((item) => (
                    <ImStarFull
                      style={{
                        fontSize: 35,
                        color: reviews?.includes(item) ? "#fdba09" : "#fff",
                        marginRight: "0.5rem",
                      }}
                      onClick={() => {
                        setReviews(
                          Array.from({ length: item }, (_, index) => index + 1)
                        );
                        setFeed({...feed,rating:item});
                      }}
                    />
                  ))}
                </div>
              </div>
              <p style={{ padding: "0.5rem 0" }}>Your Review</p>
              <textarea
                style={{
                  width: "100%",
                  height: "12rem",
                  padding: "0.2rem 0.5rem",
                }}
                onChange={(e) =>
                  setFeed({ ...feed, review: e.target.value })
                }
              />
              <label style={{ paddingRight: "5px" }}>Name</label>
              <input
                style={{
                  width: "40%",
                  fontSize: 20,
                  margin: "0.5rem 0",
                  padding: "0.2rem 0.5rem",
                }}
                onChange={(e) => setFeed({ ...feed, name: e.target.value })}
              />
              <label style={{ padding: "0 5px" }}>Email</label>
              <input
                style={{
                  width: "42.4%",
                  fontSize: 20,
                  margin: "0.5rem 0",
                  padding: "0.2rem 0.5rem",
                }}
                onChange={(e) => setFeed({ ...feed, email: e.target.value })}
              />
              <input
                type="checkbox"
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  margin: "0.5rem 0",
                }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  width: "100%",
                  justifyContent: "flex-end",
                }}
              >
                <div
                  style={{
                    alignSelf: "flex-end",
                    background: "#fff",
                    width: "5rem",
                    color: "#0b4640",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 20,
                    padding: "0.5rem 0",
                    cursor:"pointer"
                  }}
                  onClick={handelSubmit}
                >
                  Submit
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <SeeMore /> */}
      </div>
    </>
  );
};

export default ProductDetail;