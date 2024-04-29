import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
//import { MdArrowForwardIos } from "react-icons/md";

const naveData = [
  {
    image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/home4.jpeg",
    title: "CBD BY CATEGORY",
    subMenu1: {
      title: "CBD BY CATEGORY",
      link: "/cbd-by-category",
      options: [
        {
          title: "CBD OIL",
          link: "/cbd-by-category/CBD-OIL",
        },
        {
          title: "CBD SUPPLEMENTS",
          link: "/cbd-by-category/CBD-SUPPLEMENTS",
        },
        {
          title: "CBD FACE",
          link: "/cbd-by-category/CBD-FACE",
        },
        {
          title: "CBD BODY",
          link: "/cbd-by-category/cbd-body",
        },

        {
          title: "CBD BEVERAGE",
          link: "/cbd-by-category/CBD-BEVERAGE",
        },
        {
          title: "AROMATHERAPY",
          link: "/cbd-by-category/AROMATHERAPY",
        },
        // {
        //   title: "HOME USE",
        //   link: "/cbd-by-category/home-use",
        // },
        {
          title: "CBD FOR PETS",
          link: "/cbd-by-category/CBD-FOR-PETS",
        },
        // {
        //   title: "EXTRACTS & CONCENTRATES",
        //   link: "/",
        //   //cbd-by-category/SKINCARE
        // },
        // {
        //   title: "GIFT SETS & PROMOTIONS",
        //   link: "/",
        // },
      ],
    },
    
  },
  {  
    
    title: "CBD BY PURPOSE",
    image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/home4.jpeg",
    subMenu1: {
      title: "CBD BY PURPOSE",
      link: "/cbd-by-purpose",
    options: [
      {
        title: "SLEEP",
        link: "/cbd-by-purpose/SLEEP",
      },
      {
        title: "IMMUNE",
        link: "/cbd-by-purpose/immunity",
      },
      {
        title: "ENERGY",
        link: "/cbd-by-purpose/ENERGY",
      },
      {
        title: "ANXIETY",
        link: "/cbd-by-purpose/ANXIETY",
      },
      {
        title: "MUSCLES & JOINT",
        link: "/cbd-by-purpose/MUSCLES-&-JOINTS",
      },
      {
        title: "CANCER",
        link: "/cbd-by-purpose/CANCER",
      },
      // {
      //   title: "PALLIATIVE CARE",
      //   link: "/cbd-by-purpose/PALLIATIVE-CARE",
      // },
      {
        title: "SKINCARE",
        link: "/cbd-by-purpose/SKINCARE",
      },
      // {
      //   title: "NCD'S(NON-COMMUNICABLE DISEASES)",
      //   link: "/cbd-by-purpose/NCD'S",
      // },
      {
        title: "AROMATHERAPY",
        link: "/cbd-by-purpose/AROMATHERAPY",
      },
      {
        title: "HORMONES",
        link: "/cbd-by-purpose/HORMONES",
      },
      // {
      //   title: "OPIOID",
      //   link: "/cbd-by-purpose/OPIOID",
      // },
      {
        title: "WEIGHT MANAGEMENT",
        link: "/cbd-by-purpose/WEIGHT-MANAGEMENT",
      },
      // {
      //   title: "GIFT SETS & PROMOTIONS",
      //   link: "/", //"/cbd-by-purpose/WEIGHT-MANAGEMENT",
      // },
      // {
      //   title: "CBD CONCENTRATION & EXTRACTS",
      //   link: "/", //"/cbd-by-purpose/WEIGHT-MANAGEMENT",
      // },
    ],
  }
  },
  // {
  //   title: "CBD BY PURPOSE",
  //   subMenu1: {
  //     title: "CBD BY PURPOSE",
  //     link: "/cbd-by-purpose",
  //     options: [
  //       {
  //         title: "SLEEP",
  //         link: "/"
  //         //"/cbd-by-purpose/SLEEP-DISORDER",
  //       },
  //       {
  //         title: "IMMUNE",
  //         link: "/"//"/cbd-by-purpose/IMMUNE",
  //       },
  //       {
  //         title: "ENERGY",
  //         link: "/"//"/cbd-by-purpose/ENERGY",
  //       },
  //       {
  //         title:"ANXIETY",
  //         link:"/"//"/cbd-by-purpose/ANXIETY"
  //       },
  //       {
  //         title: "MUSCLE & JOINT",
  //         link: "/"//"/cbd-by-purpose/MUSCLE-&-JOINT",
  //       },
  //       {
  //         title: "CANCER",
  //         link: "/"//"/cbd-by-purpose/CANCER",
  //       },
  //       {
  //         title:"PALLIATIVE CARE",
  //         link:"/"//"/cbd-by-purpose/PALLIATIVE-CARE"
  //       },
  //       {
  //         title: "SKINCARE",
  //         link: "/"//"/cbd-by-purpose/SKINCARE-BEAUTY",
  //       },
  //       {
  //         title: "NCD'S(NON-COMMUNICABLE DISEASES)",
  //         link: "/"//"/cbd-by-purpose/NCD'S",
  //       },
  //       {
  //         title: "RELAXATION",
  //         link: "/"//"/cbd-by-purpose/RELAXATION",
  //       },
  //       {
  //         title: "HORMONES",
  //         link: "/"//"/cbd-by-purpose/HORMONES",
  //       },
  //       {
  //         title: "OPIOID",
  //         link: "/"//"/cbd-by-purpose/OPIOID",
  //       },
  //       {
  //         title: "WEIGHT MANAGEMENT",
  //         link: "/"//"/cbd-by-purpose/WEIGHT-MANAGEMENT",
  //       },
  //     ],
  //   },
  // },
  // {
  //   image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/home2.jpeg",
  //   title: "OUR SERVICES",
  //   subMenu1: {
  //     title: "OUR SERVICES",
  //     options: [
  //       {
  //         title: "EXTRACTION",
  //         link: "",
  //       },
  //       {
  //         title: "OEM/ODM",
  //         link: "",
  //       },
  //       // {
  //       //   title: "CLINIC FRANCHISE",
  //       //   link: "",
  //       // },
  //       {
  //         title: "VITAL MEDI CLINIC",
  //         link: "",
  //       },
  //       {
  //         title: "VITAL HEALTH CAFE",
  //         link: "",
  //       },
  //       {
  //         title: "DR.CBD CLINIC",
  //         link: "",
  //       },
  //     ],
  //   },
  // },
  {
    image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/home1.jpeg",
    title: "ABOUT",
    subMenu1: {
      title: "ABOUT",
      options: [
        {
          title: "BRAND PURPOSE",
          link: "/brand-purpose",
        },
        {
          title: "OUR TEAM",
          link: "/our-leadership",
        },
        {
          title: "JOIN US",
          link: "/our-esteemed",
        },
      ],
    },
  },
  // {
  //   image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/home5.jpeg",
  //   title: "DR.CBD UNIVERSITY",
  //   subMenu1: {
  //     title: "DR.CBD UNIVERSITY",
  //     options: [
  //       {
  //         title: "HEALTH",
  //         link: "/insights/health",
  //       },

  //       {
  //         title: "MEDICAL",
  //         link: "/insights/medical",
  //       },
  //       {
  //         title: "RESEARCH",
  //         link: "/insights/research",
  //       },
  //       {
  //         title: "NEWS",
  //         link: "/insights/news",
  //       },
  //       {
  //         title: "PRESS RELEASE",
  //         link: "/insights/press-release",
  //       },
  //     ],
  //   },
  // },
  {
    image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/home3.jpeg",
    title: "CONTACT",
    subMenu1: {
      title: "CONTACT",
      link: "/contact",
      options: [
        {
          title: "www.drcbdgroup.com",
          link: "",
        },
        {
          title: "info@brcbdgroup.com",
          link: "",
        },
        {
          title: "+66 65 141 6999",
          link: "",
        },
        {
          title: "@drcbdinnovation",
          link: "",
        },
        {
          title: "@drcbdinnovation",
          link: "",
        },
        {
          title: "@DrCBDOfficalChannel",
          link: "",
        },
      ],
    },
  },
];

const Navbar = () => {
  return (
    <nav>
      <div className="navContainer">
        <div className="navbar">
          {naveData.map((item, index) => (
            <div className="dropdown" key={index}>
              <p className="different">
                <span>{item.title}</span>
              </p>
              <div
                className="dropdown-content"
                //style={{}}
              >
                <div
                  style={{
                    width: "auto",
                    paddingRight: "10px",
                    display: "flex",
                  }}
                >
                  <div>
                    <Link
                      to={item.subMenu1.link}
                      style={{
                        padding: "10px 15px",
                        fontSize: 16,
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 800,
                      }}
                    >
                      {item.subMenu1.title}
                    </Link>
                    {item?.subMenu1?.options?.map((sub, i) => (
                      <div
                        style={{ display: "flex", alignItems: "center" }}
                        className="dropdown-item"
                        key={i}
                        onClick={() => {
                          window.location.reload();
                        }}
                      >
                        {sub.icon}
                        <Link
                          to={sub.link}
                          style={{ cursor: "pointer"}}
                          className="sub-menu"
                        >
                          {sub.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div>
                    <Link
                      style={{
                        padding: "10px 15px",
                        fontSize: 16,
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 800,
                      }}
                      to={item?.subMenu2?.link}
                    >
                      {item?.subMenu2?.title}
                    </Link>
                    {item?.subMenu2?.options?.map((sub, i) => (
                      <div
                        style={{ display: "flex", alignItems: "center" }}
                        className="dropdown-item"
                        key={i}
                      >
                        {sub.icon}
                        <Link
                          to={sub.link}
                          style={{ cursor: "pointer" }}
                          className="sub-menu"
                        >
                          {sub.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                <img src={item.image} style={{ width: "50%" }} alt="/" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
