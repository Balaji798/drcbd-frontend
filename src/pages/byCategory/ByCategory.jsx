import React, { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import ProductSlider from "../../components/productSlider/ProductSlider";
import ApiService from "../../services/ApiService";

const fiterData = [
  {
    title: "CBD CATEGORY",
    options: [
      {
        title: "CBD OIL",
        link: "/by-category/CBD-OIL",
      },
      {
        title: "CBD SUPPLEMENTS",
        link: "/by-category/CBD-SUPPLEMENTS",
      },
      {
        title: "CBD FACE",
        link: "/by-category/CBD-FACE",
      },
      {
        title: "CBD BODY",
        link: "/by-category/CBD-CARE",
      },

      {
        title: "CBD BEVERAGE",
        link: "/by-category/CBD-BEVERAGE",
      },
      {
        title: "AROMATHERAPY",
        link: "/by-category/AROMATHERAPY",
      },
      // {
      //   title: "HOME USE",
      //   link: "/by-category/home-use",
      // },
      {
        title: "CBD FOR PETS",
        link: "/by-category/CBD-FOR-PETS",
      },
    ],
  },
  {
    title: "CBD BY PURPOSE",
    options: [
      {
        title: "SLEEP",
        link: "/by-purpose/SLEEP-DISORDER",
      },
      {
        title: "IMMUNE",
        link: "/by-purpose/immunity",
      },
      {
        title: "ENERGY",
        link: "/by-purpose/ENERGY",
      },
      {
        title:"ANXIETY",
        link:"/by-purpose/ANXIETY"
      },
      {
        title: "MUSCLES & JOINTS",
        link: "/by-purpose/MUSCLES-&-JOINTS",
      },
      {
        title: "CANCER",
        link: "/by-purpose/CANCER",
      },
      {
        title:"PALLIATIVE CARE",
        link:"/by-purpose/PALLIATIVE-CARE"
      },
      {
        title: "SKINCARE",
        link: "/by-purpose/SKINCARE",
      },
      {
        title: "NCD'S(NON-COMMUNICABLE DISEASES)",
        link: "/by-purpose/NCD'S",
      },
      {
        title: "AROMATHERAPY",
        link: "/by-purpose/RELAXATION",
      },
      {
        title: "HORMONES",
        link: "/by-purpose/HORMONES",
      },
      {
        title: "OPIOID",
        link: "/by-purpose/OPIOID",
      },
      {
        title: "WEIGHT MANAGEMENT",
        link: "/by-purpose/WEIGHT-MANAGEMENT",
      },
    ],
  },
];

const ByCategory = () => {
  const { pathname } = useLocation();
  //console.log(pathname.split("/")[1]);
  const [data, setData] = useState([]);
  const { categoryName } = useParams();
  const [seekbarValue, setSeekbarValue] = useState(50);

  const [cName, setCname] = useState("");
  useEffect(() => {
    getAllProduct();
  }, [categoryName]);
console.log(categoryName.split("-").join(" ").toLowerCase())
  const getAllProduct = async () => {
    try {
      setCname(categoryName.split("-").join(" "));
      const res = await ApiService.getAllProduct();
      const categoryProduct = res.data.filter((item) => {
        if (
          item.categoryName.includes(categoryName.split("-").join(" ").toLowerCase()) &&
          "by-category" === pathname.split("/")[1]
        ) {
          return item;
        } else 
        if (
          item?.purposeName?.includes(categoryName.split("-").join(" ").toLowerCase()) &&
          "by-purpose" === pathname.split("/")[1]
        ) {
          console.log(item)
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
      <div
        style={{
          display: "flex",
          padding: "2rem 0",
          maxWidth: "1300px",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#005652",
          }}
        >
          <div
            style={{
              boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
              padding: "10px",
              borderRadius: "5px",
              width: "15rem",
            }}
          >
            <h3>
              {
                fiterData["by-category" === pathname.split("/")[1] ? 0 : 1]
                  ?.title
              }
            </h3>
            <ul style={{ listStyle: "none", padding: "1.5rem 0 2rem 0" }}>
              {fiterData[
                "by-category" === pathname.split("/")[1] ? 0 : 1
              ]?.options.map((item, index) => (
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
                          background: cName === item.title && "#005652",
                        }}
                      />
                    </div>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              padding: "10px",
              boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
              marginTop: "1rem",
              borderRadius: "5px",
              width: "15rem",
            }}
          >
            <input
              type="range"
              min="10"
              max="5000"
              step="1"
              value={seekbarValue}
              onChange={handleSeekbarChange}
              style={{ width: "100%" }}
            />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: 5,
              }}
            >
              <p>฿10</p>
              <p>฿{seekbarValue}</p>
            </div>
            <button style={{ width: "100%", fontSize: 16 }}>Filter</button>
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
              minWidth: "1150px",
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
