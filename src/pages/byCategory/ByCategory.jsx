import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import ProductSlider from "../../components/productSlider/ProductSlider";
import ApiService from "../../services/ApiService";

const fiterData = [
  {
    title: "CBD CATEGORY",
    options: [
      "CBD OIL",
      "CBD SOFTGEL",
      "CBD FACIAL CARE",
      "CBD BODY CARE",
      "CBD FOR PET",
      "CBD FOR MUSCLE & JOINTS",
      "BEVERAGE",
      "HOME USE",
      "KRATOM",
    ],
  },
  {
    title: "CBD BY PURPOSE",
    options: [
      "SKINCARE",
      "SLEEP DISORDER",
      "IMMUNE",
      "MUSCLE & JOINT",
      "ENERGY",
      "NCD'S",
      "WEIGHT MANAGEMENT",
      "CANCER",
      "RELAXATION",
      "HORMONES",
      "OPIOID",
    ],
  },
];
const ByCategory = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const [data, setData] = useState([]);
  const [meanCat, setMeanCat] = useState("");
  const { categoryName } = useParams();
  const [seekbarValue, setSeekbarValue] = useState(50);

  const [cName, setCname] = useState(categoryName.split("-").join(" "));
  useEffect(() => {
    getAllProduct();
    pathname.split("/")[1] === "by-category" ? setMeanCat(0) : setMeanCat(1);
    setCname(categoryName.split("-").join(" "));
  }, [cName, pathname]);

  const getAllProduct = async () => {
    try {
      const res = await ApiService.getAllProduct();
      const categoryProduct = res.data.filter((item) => {
        if (
          item.category2.toLowerCase() ===
          cName.split("-").join(" ").toLowerCase()
        ) {
          return item;
        } else if (
          item?.category3?.toLowerCase() ===
          cName.split("-").join(" ").toLowerCase()
        ) {
          return item;
        }
      });
      setData(categoryProduct);
    } catch (err) {
      console.log(err.message);
    }
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
        <div>
          <h4>{fiterData[meanCat]?.title}</h4>
          <ul style={{ listStyle: "none", padding: "1.5rem 0 2rem 0" }}>
            {fiterData[meanCat]?.options.map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingBottom: "1rem",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setCname(item);
                }}
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
                      background: cName === item && "#000",
                    }}
                  />
                </div>
                {item}
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
