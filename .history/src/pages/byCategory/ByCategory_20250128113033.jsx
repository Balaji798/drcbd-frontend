import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { getAllProduct } from "../../services/ApiService";
import "./byCategory.css";
import Card from "../../components/card/Card";
import { fiterData } from "./categoryNameData.js";
import { useLanguage } from "../../util/LanguageContext.jsx";
import ProductSlider from "../../components/productSlider/ProductSlider"

const ByCategory = () => {
  const { language } = useLanguage();
  const { pathname } = useLocation();
  const { categoryName } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await getAllProduct();
          const categoryProduct = res?.filter((item) => {
            const lowerCaseCategoryName = categoryName
              .split("-")
              .join(" ")
              .toLowerCase();
            const isCategoryMatch =
              item.eng.categoryName.includes(lowerCaseCategoryName) &&
              pathname.split("/")[1] === "cbd-by-category";
            const isPurposeMatch =
              item.eng.purposeName?.includes(lowerCaseCategoryName) &&
              pathname.split("/")[1] === "cbd-by-purpose";
            return isCategoryMatch || isPurposeMatch;
          });
          setData(categoryProduct);
      } catch (err) {
        alert(err.message);
      }
    };
    getAllProducts();
  }, [categoryName, pathname]);
  return (
    <div className="filter-container center">
      <div className="content-container">
        <div style={{ color: "#005652" }}>
          <div className="filter">
            <h3>
              {
                language==="eng"?fiterData[pathname.split("/")[1] === "by-category" ? 0 : 1]
                  ?.engTitle:fiterData[pathname.split("/")[1] === "by-category" ? 0 : 1]
                  ?.thiTitle
              }
            </h3>
            <ul style={{ listStyle: "none" }}>
              {fiterData[
                pathname.split("/")[1] === "cbd-by-category" ? 0 : 1
              ]?.options.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setData([]);
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
                            categoryName === item.link.split("/")[2]
                              ? "#005652"
                              : "#fff",
                        }}
                      />
                    </div>
                    <p>{language==="eng"?item.engTitle:item.thiTitle}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="by-category-product">
          <h2
            style={{
              textTransform: "uppercase",
              maxWidth: "1150px",
              width: "100%",
              paddingBottom: "1rem",
              color: "#005652",
            }}
          >
            {categoryName}
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
            {data?.length === 0
              ? [1, 2, 3].map((item) => (
                  <div key={item}>
                    <Card />
                  </div>
                ))
              : data?.map((item, i) => (
                  <ProductSlider
                    image={item}
                    key={i}
                    marginB="yes"
                    categoryName={categoryName}
                    languageType={language}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ByCategory;
