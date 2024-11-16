import { useEffect, useState } from "react";
import { settings } from "../../util/settings";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../../components/card/Card";
import { useLanguage } from "../../util/LanguageContext";
import ProductSlider from "../../components/productSlider/ProductSlider"

const CBDByCategory = () => {
  const { language } = useLanguage();
  const { product } = useSelector((state) => state.product);
  const [productsByCategory, setProductByCategory] = useState({});

  const groupedData = {};

  useEffect(() => {
    const fetchData = async () => {
      const uniquePurposes = Array.from(
        new Set(product.flatMap((item) => item.eng.categoryName))
      );
      uniquePurposes.forEach((purpose) => {
        groupedData[purpose] = product.filter((item) =>
          item.eng.categoryName.includes(purpose)
        );
      });
      setProductByCategory(groupedData);
    };

    fetchData();
  }, [product]);

  const productsArray = Object.entries(productsByCategory);


  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "3rem 0px 2rem",
      }}
    >
      {product?.loading === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "1100px",
            width: "100%",
          }}
        >
          {[1, 2, 3].map((_,i) => (
            <Card key={i}/>
          ))}
        </div>
      ) : (
        productsArray?.map((item, index) => (
          <div
            style={{ padding: "15px 0", maxWidth: "1100px", width: "100%" }}
            key={index}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                flexWrap: "wrap",
                width: "100%",
                justifyContent: "space-between",
                padding: "0 1rem",
              }}
            >
              <h2
                style={{
                  paddingBottom: "15px",
                  color: "#005652",
                  textTransform: "capitalize",
                }}
              >
                {item[0]}
              </h2>
              <Link
                style={{
                  padding: "20px 0",
                  textDecoration: "none",
                  fontSize: "20px",
                }}
                to={`/cbd-by-category/${item[0]}`}
              >
                See All
              </Link>
            </div>
            <div
              style={{
                padding: "0 3em 2em",
                maxWidth: "1300px",
                width: "100%",
              }}
            >
              {item[1]?.length <= 3 && window.innerWidth >= 798 ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: item[1].length > 2 && "space-between",
                    alignItems: "center",
                  }}
                >
                  {item[1]?.map((image, i) => (
                    <ProductSlider
                      image={image}
                      i={i}
                      marginB="yes"
                      categoryName={item[0].split("/")[0]}
                      languageType={language}
                      key={i}
                    />
                  ))}
                </div>
              ) : (
                <Slider {...settings}>
                  {item[1].map((image, i) => (
                    <ProductSlider image={image} i={i} marginB="yes"
                  categoryName={item[0]}
                  languageType={language}
                  key={i}
                  />
                  ))}
                </Slider>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CBDByCategory;
