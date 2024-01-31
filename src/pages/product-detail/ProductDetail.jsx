import React, { useState, useEffect, useRef } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { FaInstagram, FaFacebookF, FaTiktok, FaTwitter } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VerticalCarousel from "../../components/verticalslider/VerticalSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductSlider from "../../components/productSlider/ProductSlider";
import data from "../../data";
import "./productDetail.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productIcon } from "./product-icon";
import ApiService from "../../services/ApiService";
import { useSelector } from "react-redux";
import { getCart } from "../../state/actions/cartAction";

const ProductDetail = () => {
  const scrollContainerRef = useRef();
  const targetRef = useRef(null);
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const { productName } = useParams();
  const navigate = useNavigate();
  const [sameCategoryProduct, setSmeCategoryProduct] = useState([]);
  const { state } = useLocation();
  const scrollToTarget = () => {
    // Scroll to the target element
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const productByName = product.filter((item) => {
    return (
      item.name?.toLowerCase().trim() === productName?.toLowerCase().trim()
    );
  });
  const [icons, setIcons] = useState(
    productIcon.filter((item) => {
      if (
        productName?.toLowerCase()?.split("-").join(" ") ===
        item.title.toLowerCase()
      ) {
        return item;
      }
    })
  );

  const [open, setOpen] = useState(false);

  if (open) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  //const [product, setProduct] = useState([]);
  const [position, setPosition] = useState(0);
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState("");

  useEffect(() => {
    getProductByName();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo(0, 0);
    }
  }, []);

  const getProductByName = async () => {
    try {
      setPrice(Number(productByName[0]?.price)?.toFixed(2));
    } catch (err) {
      console.log(err.message);
    }
  };

  const about = [
    {
      title: "FDA NO. ",
      para: productByName[0]?.fda,
    },
    {
      title: "Dosage From",
      para: productByName[0]?.dosage,
    },
    {
      title: "Active Ingredients",
      para: productByName[0]?.ingredient,
    },
    {
      title: "Product details",
      para: productByName[0]?.productFor,
    },
    {
      title: "Suitable for",
      para: productByName[0]?.suitableFor,
    },
    {
      title: "Direction",
      para: productByName[0]?.use,
    },
    {
      title: "Storage & Condition",
      para: productByName[0]?.storageContraindication,
    },
    {
      title: "Contraindication",
      para: productByName[0]?.contraindication,
    },
    {
      title: "Warning and Precaution",
      para: productByName[0]?.warningPrecaution,
    },
    // {
    //   title: "Quantity",
    //   para: "50% ML",
    // },
  ];
  const concatData = [
    {
      title: "instagram",
      icon: <FaInstagram color="#fff" />,
      link: "https://www.instagramcom/drcbdinnovation/",
    },
    {
      title: "Facebook",
      icon: <FaFacebookF color="#fff" />,
      link: "https://www.facebook.com/drcbdinnovation/",
    },
    {
      title: "Line",
      icon: <img src="../line-logo.png" alt="/" style={{}} />,
      link: "https://lin.ee/KhI4rwQ",
    },
    {
      title: "Tiktok",
      icon: <FaTiktok color="#fff" />,
      link: "https://www.tiktok.com/@drcbd.innovation",
    },
    {
      title: "Twitter",
      icon: <FaTwitter color="#fff" />,
      link: "https://twitter.com/drcbdgroup",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const getProduct = async () => {
      const res = await ApiService.getAllProduct();
      const categoryProduct = res.data.filter((item) => {
        if (
          item.categoryName.includes(
            state?.catName1?.split("-").join(" ").toLowerCase()
          )
        ) {
          return item;
        } else if (
          item?.purposeName?.includes(
            state?.catName1?.split("-").join(" ").toLowerCase()
          )
        ) {
          return item;
        }
      });
      setSmeCategoryProduct(categoryProduct);
    };
    getProduct();
  }, []);
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
      const requestBody = { qty, price, productId: productByName[0]?._id };
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
          //https://drcbd-backend.onrender.com
          requestBody,
          config
        );
        if (res.data !== "Item Add Successfully") {
          setOpen(true);
        }
        await getCart(dispatch);
        toast("Item Added To Cart");
        return;
      } else {
        alert("You are not login login first");
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  const buy = async() => {
    try {
      const requestBody = { qty, price, productId: productByName[0]?._id };
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
          //https://drcbd-backend.onrender.com
          requestBody,
          config
        );
        if (res.data !== "Item Add Successfully") {
          setOpen(true);
        }
        await getCart(dispatch);
        navigate(`/cart/?productId=${product._id}`);
        return;
      } else {
        alert("You are not login login first");
      }
    } catch (err) {
      console.log(err.message);
    }
 

    // if (user) setOpen(!open);
  };

  const PreviousBtn = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="prev" style={{ left: -45 }}>
          <MdArrowBackIosNew style={{ fontSize: "75px", color: "#28504d" }} />
        </button>
      </div>
    );
  };
  const NextBtn = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="next" style={{ right: -60 }}>
          <MdArrowForwardIos style={{ fontSize: "75px", color: "#28504d" }} />
        </button>
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    //autoplay: true,
    speed: 500,
    slidesToShow: 3,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div ref={scrollContainerRef}>
      <div>
        <ToastContainer />
      </div>
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
        {!productByName[0]?.bannerImg ? (
          <img
            src="../info-product-banner.jpg"
            className="banner-image"
            alt="/"
          />
        ) : productByName[0]?.bannerImg.length < 2 ? (
          <img
            src={productByName[0]?.bannerImg[0]}
            className="banner-image"
            alt="/"
          />
        ) : (
          <section className="section" style={{ maxHeight: "25rem" }}>
            <div className="section-center">
              {productByName[0]?.bannerImg?.map((item, indexPeople) => {
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
                  <article
                    className={position}
                    key={indexPeople}
                    style={{ maxHeight: "25rem" }}
                  >
                    <img
                      src={item}
                      alt={item}
                      style={{ maxHeight: "25rem" }}
                      className="person-img"
                    />
                  </article>
                );
              })}
              <button
                className="prev"
                onClick={() => {
                  if (productByName[0]?.bannerImg?.length > 1) {
                    setActiveIndex(activeIndex - 1);
                  }
                }}
              >
                <MdArrowBackIosNew
                  style={{ fontSize: "50px", color: "#fff" }}
                />
              </button>
              <button
                className="next"
                onClick={() => {
                  if (productByName[0]?.bannerImg?.length > 1)
                    setActiveIndex(activeIndex + 1);
                }}
              >
                <MdArrowForwardIos
                  style={{ fontSize: "50px", color: "#fff" }}
                />
              </button>
            </div>
          </section>
        )}
        <div className="productDetail" ref={targetRef} id="targetElement">
          <div className="imageContainer">
            {productByName[0]?.images && (
              <div style={{}} className="center">
                <img
                  src={productByName[0]?.images[position]}
                  style={{}}
                  alt={productByName[0]?.images[position]}
                />
              </div>
            )}
            {productByName[0]?.images.length > 1 && (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {productByName[0]?.images.map((i, index) => (
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
            )}
          </div>
          <div className="description">
            <h2
              style={{
                fontSize: "38px",
                paddingBottom: "10px",
                textDecoration: productByName[0]?.fdaProduct && "underline",
              }}
            >
              {productByName[0]?.name}
            </h2>
            <p
              style={{
                lineHeight: 1.3,
                borderBottom: "1px solid grey",
                paddingBottom: "1em",
                fontWeight: 26,
              }}
            >
              {productByName[0]?.des}
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
                  cursor:"pointer"
                }}
                onClick={()=>{
                  setQty(1);
                  setPrice(Number(productByName[0].price).toFixed(2));
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
                  cursor:"pointer"
                }}
                onClick={()=>{
                  setQty(10);
                  setPrice(Number(productByName[0].price * 10)?.toFixed(2))}}
              >
                10 Pieces
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
                    setPrice((productByName[0].price * (qty + 1)).toFixed(2));
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
                      setPrice((productByName[0].price * (qty - 1)).toFixed(2));
                    }
                  }}
                >
                  -
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "18rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            >
              <h2
                style={{
                  padding: "5px",
                  background: "#005652",
                  textAlign: "center",
                }}
              >
                Coupon
              </h2>{" "}
              <input
                style={{
                  border: "2px solid #005652",
                  borderRadius: 0,
                  paddingLeft: 5,
                }}
              />
              <div
                style={{ padding: "5px", fontSize: 25, background: "#005652" }}
              >
                Apply
              </div>
            </div>
            <h2
              style={{
                fontSize: "25px",
                paddingBottom: "10px",
                textAlign: "end",
              }}
            >
              Price :-
              <span
                style={{
                  color: "grey",
                  textDecoration: "line-through",
                  paddingLeft: 10,
                }}
              >
              {Number(productByName[0]?.actualPrice) > 0
                ? "฿" + Number(productByName[0]?.actualPrice).toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                : ""}
            </span>{" "}
            ฿{Number(price) >= 1000
              ? Number(price).toLocaleString("en-US")
              : price.toLocaleString("en-US")}
            </h2>
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
              className="orderButton"
            >
              <button onClick={buy}>BUY NOW</button>
              <button
                style={{
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
          </div>
        </div>
        <div className="center">
          <div style={{}} className="product-detail-container">
            <h5 style={{ paddingTop: 15, fontSize: 25 }}>
              Product Description / Indications
            </h5>
            {about.map((item, index) => (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  padding: "0.3em 0",
                  flexWrap: "wrap",
                }}
                className="description-container"
              >
                <p className="description-container-title">
                  {item.title} {":"}
                </p>

                {Array.isArray(item.para) && item?.para?.length>0 ? (
                  <div className="description-container-title2">
                    { item?.para?.map((des, i) => (
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
                  <p className="description-container-title2">{item.para}</p>
                )}
              </div>
            ))}
            <div
              style={{ display: "flex", flexWrap: "wrap", maxWidth: "700px" }}
            >
              {icons[0]?.icons?.map((item, index) => (
                <div key={index} style={{ marginLeft: "0.3rem" }}>
                  <img
                    src={item}
                    style={{ width: "8rem", objectFit: "cover" }}
                    alt="/"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: " 10px 1rem 10px 0",
          }}
        >
          <button
            style={{
              fontSize: 18,
              width: 200,
              padding: "5px 0",
              cursor: "pointer",
            }}
            onClick={scrollToTarget}
          >
            ADD TO CART{" "}
            <MdOutlineAddShoppingCart
              style={{ paddingLeft: 5, fontSize: "35px" }}
            />{" "}
          </button>{" "}
        </div>
        <div className="social-media-container">
          {concatData.map((item, index) => (
            <a href={item.link} className="social-media">
              <div className="social-icon">{item.icon}</div>
              <p style={{ color: "#0b4640", paddingLeft: "0.5rem" }}>
                Share On
                {item.title}
              </p>
            </a>
          ))}
        </div>
        <div className="video">
          <video autoPlay loop muted playsInline>
            <source src={productByName[0]?.videoLink} type="video/mp4" />
          </video>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: " 10px 1rem 10px 0",
          }}
        >
          <button
            style={{
              fontSize: 18,
              width: 200,
              padding: "5px 0",
              cursor: "pointer",
            }}
            onClick={scrollToTarget}
          >
            ADD TO CART{" "}
            <MdOutlineAddShoppingCart
              style={{ paddingLeft: 5, fontSize: "35px" }}
            />{" "}
          </button>{" "}
        </div>
        <VerticalCarousel productId={productByName[0]?._id} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: " 10px 1rem 10px 0",
        }}
      >
        <button
          style={{
            fontSize: 18,
            width: 200,
            padding: "5px 0",
            cursor: "pointer",
          }}
          onClick={scrollToTarget}
        >
          ADD TO CART{" "}
          <MdOutlineAddShoppingCart
            style={{ paddingLeft: 5, fontSize: "35px" }}
          />{" "}
        </button>{" "}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            maxWidth: "1300px",
            width: "100%",
            padding: "1rem 0 1rem 3rem",
          }}
        >
          See More
        </h2>
        <div
          style={{ padding: "0 3em 2em", maxWidth: "1300px", width: "100%" }}
        >
          {sameCategoryProduct?.length > 3 ? (
            <Slider {...settings}>
              {sameCategoryProduct?.map((image, i) => (
                <ProductSlider image={image} i={i} />
              ))}
            </Slider>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent:
                  sameCategoryProduct.length > 2 && "space-between",
                alignItems: "center",
              }}
            >
              {sameCategoryProduct?.map((image, i) => (
                <ProductSlider image={image} i={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
