import React, { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import ProductSlider from "../../components/productSlider/ProductSlider";
import ApiService from "../../services/ApiService";

const fiterData = {
  title: "CBD CATEGORY",
  options: [
    {
      title: "CBD OIL",
      link: "/by-category/CBD-OIL",
    },
    {
      title: "CBD SOFTGEL",
      link: "/by-category/CBD-SOFTGEL",
    },
    {
      title: "CBD FACIAL CARE",
      link: "/by-category/CBD-FACIAL-CARE",
    },
    {
      title: "CBD BODY CARE",
      link: "/by-category/CBD-BODY-CARE",
    },
    {
      title: "CBD FOR PET",
      link: "/by-category/CBD-FOR-PET",
    },
    {
      title: "MUSCLE & JOINT",
      link: "/by-category/MUSCLE-&-JOINT",
    },
    {
      title: "BEVERAGE",
      link: "/by-category/BEVERAGE",
    },
    {
      title: "HOME USE",
      link: "/by-category/home-use",
    },
  ],
};
// {
//   title: "CBD BY PURPOSE",
//   options: [
//     "SKINCARE",
//     "SLEEP DISORDER",
//     "IMMUNE",
//     "MUSCLE & JOINT",
//     "ENERGY",
//     "NCD'S",
//     "WEIGHT MANAGEMENT",
//     "CANCER",
//     "RELAXATION",
//     "HORMONES",
//     "OPIOID",
//   ],
// },

const ByCategory = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const [data, setData] = useState([]);
  const { categoryName } = useParams();
  const [seekbarValue, setSeekbarValue] = useState(50);

  const [cName, setCname] = useState("");
  useEffect(() => {
    getAllProduct();
  }, [categoryName]);

  const getAllProduct = async () => {
    try {
      setCname(categoryName.split("-").join(" "));
      const res = await ApiService.getAllProduct();
      const categoryProduct = res.data.filter((item) => {
        if (
          item.category2.toLowerCase() ===
          categoryName.split("-").join(" ").toLowerCase()
        ) {
          return item;
        } else if (
          item?.category3?.toLowerCase() ===
          categoryName.split("-").join(" ").toLowerCase()
        ) {
          return item;
        }
      });

      setData(categoryProduct);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handelChang = async (catName) => {
    try {
    } catch (err) {}
  };
  // Event handler for seekbar value change
  const handleSeekbarChange = (event) => {
    const newValue = event.target.value;
    setSeekbarValue(newValue);
    // You can perform additional actions with the new value here
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 0",
      }}
    >
      <div style={{ display: "flex", padding: "2rem 0" }}>
        <div style={{ color: "#005652" }}>
          <h4>{fiterData?.title}</h4>
          <ul style={{ listStyle: "none", padding: "1.5rem 0 2rem 0" }}>
            {fiterData?.options.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setCname(item.title);
                  handelChang(item.title);
                }}
              >
                <Link
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingBottom: "1rem",
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                  to={item.link}
                >
                  <div
                    style={{
                      width: "1rem",
                      height: "1rem",
                      borderRadius: "1rem",
                      border: "1px solid",
                      marginRight: "0.3rem",
                      padding: "0.2rem",
                    }}
                  >
                    <div
                      style={{
                        width: "0.5rem",
                        height: "0.5rem",
                        borderRadius: "0.5rem",
                        background:
                          cName === item.title &&
                          "#005652",
                      }}
                    />
                  </div>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p>฿10</p>
            <input
              type="range"
              min="10"
              max="5000"
              step="1"
              value={seekbarValue}
              onChange={handleSeekbarChange}
            />
            <p>฿{seekbarValue}</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 2rem 0 ",
          }}
        >
          <h2
            style={{
              textTransform: "uppercase",
              maxWidth: "1150px",
              width: "100%",
              paddingBottom: "1rem",
              color: "#005652",
            }}
          >
            {cName}
          </h2>
          <div
            style={{
              maxWidth: "1150px",
              minWidth:"1150px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {data.length === 0 ? (
              <h1>Products Not Available</h1>
            ) : (
              data.map((item, i) => (
                <ProductSlider image={item} key={i} marginB="yes" />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ByCategory;
