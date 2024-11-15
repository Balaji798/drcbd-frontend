/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings } from "../util/settings";
import ProductSlider from "./productSlider/ProductSlider";

const SeeMore = ({ sameCategoryProduct, categoryName }) => {

  // eslint-disable-next-line react/prop-types
  const product = sameCategoryProduct?.filter((item) => {
    if (
      item.category2.toLowerCase() ===
      // eslint-disable-next-line react/prop-types
      categoryName?.split("-").join(" ").toLowerCase()
    ) {
      return item;
    } else if (
      item?.category3?.toLowerCase() ===
      categoryName?.split("-").join(" ").toLowerCase()
    ) {
      return item;
    }
  });

  return (
    <div style={{ padding: "0 3em 2em", display: "flex" }}>
      {product?.length > 3 ? (
        <Slider {...settings}>
          {product?.map((image, i) => (
            <ProductSlider image={image} i={i} key={i}/>
          ))}
        </Slider>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: product.length > 2 && "space-between",
            alignItems: "center",
          }}
        >
          {product?.map((image, i) => (
            <ProductSlider image={image} i={i} key={i}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default SeeMore;
