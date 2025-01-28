import { useState, useEffect, useRef } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaTwitter,
  FaLine,
} from "react-icons/fa";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { people } from "../../data";
import "./productDetail.css";
import "../../components/accordion/accordion.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProduct, addToItemCart } from "../../services/ApiService";
import { useSelector } from "react-redux";
import { getCart } from "../../state/actions/cartAction";
import { useLanguage } from "../../util/LanguageContext";
import { settings } from "../../util/settings";
import productImage from "../../assets/internationl-shipping.jpg";
import ProductSlider from "../../components/productSlider/ProductSlider";
import { detailData } from "./detailData";

const ProductDetail = () => {
  const { language } = useLanguage();
  const scrollContainerRef = useRef();
  const [expandedIndex, setExpandedIndex] = useState(null);
  const targetRef = useRef(null);
  const navigate = useNavigate();
  const [position, setPosition] = useState(0);
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const { productName, categoryName } = useParams();

  const [sameCategoryProduct, setSmeCategoryProduct] = useState([]);
  const productByName = product?.filter((item) => {
    return (
      item.eng.name?.toLowerCase().trim() === productName?.toLowerCase().trim()
    );
  });

  const [open, setOpen] = useState(false);

  if (open) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  useEffect(() => {
    const getProductByName = async () => {
      try {
        setPrice(Number(productByName[0]?.eng.price)?.toFixed(2));
      } catch (err) {
        alert(err.message);
      }
    };
    getProductByName();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo(0, 0);
    }
  }, []);

  const about = [
    {
      title: language === "eng" ? "FDA NO. " : "FDA เลขทะเบียนสินค้า",
      para: productByName[0]?.fda,
    },
    {
      title: language === "eng" ? "Dosage Form" : "ประเภทสินค้า",
      para:
        language === "eng"
          ? productByName[0]?.eng?.dosage
          : productByName[0]?.thi?.dosage,
    },
    {
      title: language === "eng" ? "Active Ingredients" : "ส่วนประกอบสินค้า",
      para:
        language === "eng"
          ? productByName[0]?.eng?.ingredient
          : productByName[0]?.thi?.ingredient,
    },
    {
      title: language === "eng" ? "Product detail" : "รายละเอียดผลิตภัณฑ์",
      para:
        language === "eng"
          ? productByName[0]?.eng?.productFor
          : productByName[0]?.thi?.productFor,
    },
  ];
  const accordionItems = [
    {
      title: language === "eng" ? "Suitable for" : "เหมาะสำหรับ",
      para:
        language === "eng"
          ? productByName[0]?.eng?.suitableFor
          : productByName[0]?.thi.suitableFor,
    },
    {
      title: language === "eng" ? "Direction" : "วิธีใช้",
      para:
        language === "eng"
          ? productByName[0]?.eng?.use
          : productByName[0]?.thi?.use,
    },
    {
      title: language === "eng" ? "Storage & Condition" : "การเก็บรักษา",
      para:
        language === "eng"
          ? productByName[0]?.eng?.storageContraindication
          : productByName[0]?.thi?.storageContraindication,
    },
    {
      title: language === "eng" ? "Contraindication" : "ข้อควรระวัง",
      para:
        language === "eng"
          ? productByName[0]?.eng?.contraindication
          : productByName[0]?.thi?.contraindication,
    },
    {
      title:
        language === "eng" ? "Warning & Precaution" : "คำเตือนและข้อควรระวัง",
      para:
        language === "eng"
          ? productByName[0]?.eng?.warningPrecaution
          : productByName[0]?.thi?.warningPrecaution,
    },
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
      icon: <FaLine color="#fff" />,
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
      const res = await getAllProduct();
      // eslint-disable-next-line array-callback-return
      const categoryProduct = res?.filter((item) => {
        const names =
          language === "eng"
            ? item?.eng?.categoryName
            : item?.thi?.categoryName;
        const purName =
          language === "eng" ? item?.eng?.purposeName : item?.thi?.purposeName;
        if (names.includes(categoryName.split("-").join(" ").toLowerCase())) {
          return item;
        } else if (
          purName?.includes(categoryName.split("-").join(" ").toLowerCase())
        ) {
          return item;
        }
      });
      setSmeCategoryProduct(categoryProduct);
    };
    getProduct();
  }, [categoryName]);
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (activeIndex < 0) {
      setActiveIndex(lastIndex);
    }
    if (activeIndex > lastIndex) {
      setActiveIndex(0);
    }
  }, [activeIndex]);

  const addToCart = async () => {
    try {
      const requestBody = { qty, price, productId: productByName[0]?._id };
      const res = await addToItemCart(requestBody);
      if (res !== "Item Add Successfully") {
        setOpen(true);
      }
      await getCart(dispatch);
      toast.success("Item added to cart", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    } catch (err) {
      if (err.status === 401) {
        setOpen(true);
      } else alert(err.message);
    }
  };

  const handelBlog = () => {
    const productName = productByName[0]?.eng?.name.trim();
    console.log(productName);
    switch (productName) {
      case "EARTHLAB CBD GREEN ANGEL HERBAL CREAM":
        navigate("/blog/earth-lab-cbd-green-angel");
        break;
      case "EARTHLAB CBD AMPOULE SERUM":
        navigate("/blog/earth-lab-cbd-ampoule-serum");
        break;
      case "EARTH LAB CBD DE'LEEP":
        navigate("/blog/earth-lab-cbd-dellep-softgel");
        break;
      case "9CE DD & SUNSCREEN":
        navigate("/blog/9ce-sunscreem");
        break;
      case "9CE CBD BRIGHTENING AMPOULE":
        navigate("/blog/9ce-brightening-ampoule");
        break;
      case "9CE CBD DEEP SLEEPING CREAM":
        navigate("/blog/9ce-deep-sleeping-cream");
        break;
      case "9CE CBD CREAM":
        navigate("/blog/9ce-cream");
        break;
      case "MCT OIL PLUS":
        navigate("/blog/mct-oil-perilla-seed");
        break;
      case "EARTHLAB CBD WHITENING MASK":
        navigate("/blog/earth-lab-cbd-whitening-mask");
        break;
      default:
        console.warn("No matching blog found for the product.");
    }
  };
  about.map((item) => {
    console.log(item.title, Array.isArray(item.para) && item?.para?.length > 0);
  });
  return (
    <div ref={scrollContainerRef}>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="light"
        />
      </div>
      {open && (
        <div className="modal">
          <div onClick={() => setOpen(false)} className="overlay"></div>
          <div className="modal-content">
            <h2>
              {language === "eng"
                ? "You are not Sign In, Sign In First"
                : "คุณไม่ได้ลงทะเบียน ลงทะเบียนก่อน"}
            </h2>
            <Link
              to="/sign-in"
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
              {language === "eng" ? "Sign In" : "ลงชื่อ"}
            </Link>
          </div>
        </div>
      )}
      <div>
        <div className="productDetail" ref={targetRef} id="targetElement">
          <div className="imageContainer">
            {productByName[0]?.images && (
              <div style={{}} className="center product-detail-image">
                <img
                  src={
                    productByName[0]?.eng?.name === "International Shipping"
                      ? productImage
                      : productByName[0]?.images[position]
                  }
                  style={{}}
                  alt={productByName[0]?.images[position]}
                  loading="lazy"
                />
              </div>
            )}
            {productByName[0]?.images.length > 1 && (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "1rem",
                }}
                className="multiple-image"
              >
                {productByName[0]?.images.map((i, index) => (
                  <div
                    style={{
                      width: "150px",
                      height: "150px",
                      background: "#f3f3f3",
                      marginRight: "0.5rem",
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
                      loading="lazy"
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
              {language === "eng"
                ? productByName[0]?.eng?.name
                : productByName[0]?.thi?.name}
            </h2>
            <p
              style={{
                lineHeight: 1.3,
                borderBottom: "1px solid grey",
                paddingBottom: "1em",
                fontWeight: 26,
                fontSize: 20
              }}
            >
              {language === "eng"
                ? productByName[0]?.eng?.des
                : productByName[0]?.thi?.des}
            </p>
            <div className="center">
              <div
                style={{ borderBottom: "0.5px solid" }}
                className="product-detail-container"
              >
                <h5 style={{ paddingTop: 15, fontSize: 25 }}>
                  {language === "eng"
                    ? "Product Description / Indications"
                    : "รายละเอียดสินค้า / ข้อบ่งชี้"}
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
                    key={index}
                  >
                    {Array.isArray(item.para) && item?.para?.length > 0 ? (
                      <p className="description-container-title">
                        {item.title} {":"}
                      </p>
                    ) : (
                      typeof item.para === 'string' && item.para !== ""? (
                        <p className="description-container-title">
                          {item.title} {":"}
                        </p>
                      ): ''
                    )}

                    {Array.isArray(item.para) && item?.para?.length > 0 ? (
                      <div className="description-container-title2">
                        {item?.para?.map((des, i) => (
                          <p
                            style={{
                              width: "100%",
                              fontSize: "17px",
                              paddingBottom: 15,
                            }}
                            key={i}
                          >
                             {des}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="description-container-title2">
                        {item.para}
                      </p>
                    )}
                  </div>
                ))}
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                  }}
                >
                  {" "}
                  {!expandedIndex && (
                    <h2
                      onClick={() => setExpandedIndex(!expandedIndex)}
                      style={{ cursor: "pointer" }}
                    >
                      {language === "eng" ? "See More" : "ดูเพิ่มเติม"}
                    </h2>
                  )}
                </div>

                <div
                  style={{ background: "transparent" }}
                  className={expandedIndex ? "show content" : "content"}
                >
                  {accordionItems.map((item, index) => (
                    <div
                    style={{
                      width: "100%",
                      display: "flex",
                      padding: "0.3em 0",
                      flexWrap: "wrap",
                    }}
                    className="description-container"
                    key={index}
                  >
                    {Array.isArray(item.para) && item?.para?.length > 0 ? (
                      <p className="description-container-title">
                        {item.title} {":"}
                      </p>
                    ) : typeof item.para === 'string' && item.para !== "" && <p className="description-container-title">
                    {item.title} {":"}
                  </p>}

                    {Array.isArray(item.para) && item?.para?.length > 0 ? (
                      <div className="description-container-title2">
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
                      <p className="description-container-title2">
                        {item.para}
                      </p>
                    )}
                  </div>
                  ))}
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                  }}
                >
                  {" "}
                  {expandedIndex && (
                    <h2
                      onClick={() => setExpandedIndex(!expandedIndex)}
                      style={{ cursor: "pointer" }}
                    >
                      {language === "eng" ? "See Less" : "ดูน้อยลง"}
                    </h2>
                  )}
                </div>
              </div>
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

            {/*<h2
              style={{
                textAlign: "end",
              }}
            >
              {language === "eng" ? "Price" : "ราคา"} :-
              <span
                style={{
                  color: "grey",
                  textDecoration: "line-through",
                  paddingLeft: "5px",
                }}
              >
                {Number(productByName[0]?.actualPrice) > 0 &&
                  "฿" +
                    Number(productByName[0]?.actualPrice).toLocaleString(
                      "en-US",
                      {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }
                    )}
              </span>
            </h2>
            <h2
              style={{
                padding: "0 10px",
                color: "red",
                fontSize: "20px",
                textAlign: "end",
              }}
            >
              -{productByName[0]?.eng?.discount}
            </h2>*/}
            <h2
              style={{
                fontSize: "25px",
                textAlign: "end",
                paddingBottom: "10px",
              }}
            >
              {language === "eng" ? "Price" : "ราคา"} :- ฿
              {Number(price) >= 1000
                ? Number(price).toLocaleString("en-US")
                : price.toLocaleString("en-US")}
            </h2>
            <div
              className="cart-button-container orderButton"
              style={{
                justifyContent: detailData.includes(productName)
                  ? "space-between"
                  : "flex-end",
              }}
            >
              {detailData.includes(productName) && (
                <button
                  style={{
                    padding: "5px 0",
                    cursor: "pointer",
                    fontSize: "20px",
                    maxWidth: "350px",
                    width: "100%",
                    marginBottom: "10px",
                  }}
                  onClick={handelBlog}
                >
                  {language === "eng"
                    ? "LEARN MORE ABOUT THE SCIENCE BEHIND"
                    : "เพิ่มลงในรถเข็น"}
                </button>
              )}
              <button
                style={{
                  padding: "5px 0",
                  cursor: "pointer",
                  marginBottom: "10px",
                }}
                onClick={addToCart}
              >
                {language === "eng" ? "ADD TO CART" : "เพิ่มลงในรถเข็น"}
                <MdOutlineAddShoppingCart
                  style={{ paddingLeft: 5, fontSize: "35px" }}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="social-media-container">
          {concatData.map((item, index) => (
            <a href={item.link} className="social-media" key={index}>
              <div className="social-icon">{item.icon}</div>
            </a>
          ))}
        </div>
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
                <ProductSlider
                  image={image}
                  i={i}
                  categoryName={categoryName}
                  key={i}
                  languageType={language}
                />
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
                <ProductSlider
                  image={image}
                  i={i}
                  categoryName={categoryName}
                  key={i}
                  languageType={language}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
