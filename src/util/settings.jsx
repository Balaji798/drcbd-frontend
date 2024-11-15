/* eslint-disable react/prop-types */
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const PreviousBtn = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <div className="prev" style={{ cursor: 'pointer' }}>
          <MdArrowBackIosNew style={{ fontSize: "75px", color: "#28504d" }} />
        </div>
      </div>
    );
  };
  const NextBtn = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <div className="next" style={{ cursor: 'pointer' }}>
          <MdArrowForwardIos style={{ fontSize: "75px", color: "#28504d" }} />
        </div>
      </div>
    );
  };

export   const settings = {
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