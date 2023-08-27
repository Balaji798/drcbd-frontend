import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const naveData = [
  {
    title: "CBD CATEGORY",
    subMenu1: {
      title: "CBD CATEGORY",
      link: "/cbd-by-category",
      options: [
        {
          title: "CBD OIL",
          link: "/product-detail/:productName",
        },
        {
          title: "CBD SOFTGEL",
          link: "/product-detail/:productName",
        },
        {
          title: "CBD FACIAL CARE",
          link: "/product-detail/:productName",
        },
        {
          title: "CBD BODY CARE",
          link: "/product-detail/:productName",
        },
        {
          title: "CBD FOR PET",
          link: "/product-detail/:productName",
        },
        {
          title: "CBD FOR MUSCLE & JOINTS",
          link: "/product-detail/:productName",
        },
        {
          title: "BEVERAGE",
          link: "/product-detail/:productName",
        },
        {
          title: "HOME USE",
          link: "/product-detail/:productName",
        },
        {
          title: "KRATOM",
          link: "/product-detail/:productName",
        },
      ],
    },
    subMenu2: {
      title: "OUR BRANDS",
      options: [
        {
          title: "EARTHLAB",
          link: "/product-detail/:productName",
        },
        {
          title: "CBD LAB",
          link: "/product-detail/:productName",
        },
        {
          title: "HEMPINESS",
          link: "/product-detail/:productName",
        },
        {
          title: "HAPPII",
          link: "/product-detail/:productName",
        },
        {
          title: "9CE",
          link: "/product-detail/:productName",
        },
        {
          title: "KOOZE",
          link: "/product-detail/:productName",
        },
        {
          title: "MITRA G",
          link: "/product-detail/:productName",
        },
      ],
    },
  },
  {
    title: "CBD BY PURPOSE",
    subMenu1: {
      title: "CBD BY PURPOSE",
      link: "/cbd-by-purpose",
      options: [
        {
          title: "SKINCARE",
          link: "",
        },
        {
          title: "SLEEP DISORDER",
          link: "",
        },
        {
          title: "IMMUNE",
          link: "",
        },
        {
          title: "MUSCLE & JOINT",
          link: "",
        },
        {
          title: "ENERGY",
          link: "",
        },
        {
          title: "NCD'S",
          link: "",
        },
        {
          title: "WEIGHT MANAGEMENT",
          link: "",
        },
        {
          title: "CANCER",
          link: "",
        },
        {
          title: "RELAXATION",
          link: "",
        },
        {
          title: "HORMONES",
          link: "",
        },
        {
          title: "OPIOID",
          link: "",
        },
      ],
    },
  },
  {
    title: "OUR SERVICES",
    subMenu1: {
      title: "OUR SERVICES",
      options: [
        {
          title: "EXTRACTION",
          link: "",
        },
        {
          title: "OEM/ODM",
          link: "",
        },
        {
          title: "CLINIC FRANCHISE",
          link: "",
        },
        {
          title: "VITAL MEDI CLINIC",
          link: "",
        },
        {
          title: "VITAL HEALTH CAFE",
          link: "",
        },
        {
          title: "DR.CBD CLINIC",
          link: "",
        },
      ],
    },
  },
  {
    title: "ABOUT",
    subMenu1: {
      title: "ABOUT",
      options: [
        {
          title: "BRAND PURPOSE",
          link: "/brand-purpose",
        },
        {
          title: "OUR LEADERSHIP",
          link: "/our-leadership",
        },
        {
          title: "JOIN OUR ESTEEMED",
          link: "/our-esteemed",
        },
      ],
    },
  },
  {
    title: "DR.CBD UNIVERSITY",
    subMenu1: {
      title: "DR.CBD UNIVERSITY",
      options: [
        {
          title: "HEALTH",
          link: "/insights/health",
        },

        {
          title: "MEDICAL",
          link: "/insights/medical",
        },
        {
          title: "RESEARCH",
          link: "/insights/research",
        },
        {
          title: "NEWS",
          link: "/insights/news",
        },
        {
          title: "PRESS RELEASE",
          link: "/insights/press-release",
        },
      ],
    },
  },
  {
    title: "CONTACT",
    subMenu1: {
      title: "CONTACT",
      link:"/contact",
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
      <div class="navbar">
        {naveData.map((item, index) => (
          <div className="dropdown" key={index}>
            <Link to="#">{item.title}</Link>
            <div
              className="dropdown-content"
              //style={{}}
            >
              <div
                style={{ width: "auto", paddingRight: "10px", display: "flex" }}
              >
                <div>
                  <Link
                    to={item.subMenu1.link}
                    style={{ padding: "10px 15px", fontSize: 16 }}
                  >
                    {item.subMenu1.title}
                  </Link>
                  {item?.subMenu1?.options?.map((sub, i) => (
                    <div
                      style={{ display: "flex", alignItems: "center" }}
                      className="dropdown-item"
                      key={i}
                    >
                      {sub.icon}
                      <Link
                        to={sub.link}
                        style={{ cursor: "pointer", fontSize: 16 }}
                      >
                        {sub.title}
                      </Link>
                    </div>
                  ))}
                </div>
                <div>
                  <Link style={{ padding: "10px 15px", fontSize: 22 }}>
                    {item?.subMenu2?.title}
                  </Link>
                  {item?.subMenu2?.options?.map((sub, i) => (
                    <div
                      style={{ display: "flex", alignItems: "center" }}
                      className="dropdown-item"
                      key={i}
                    >
                      {sub.icon}
                      <Link to="#" style={{ cursor: "pointer", fontSize: 16 }}>
                        {sub.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <img
                src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/dr/contact.png"
                style={{ width: "50%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
