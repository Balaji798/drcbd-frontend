import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const naveData = [
  {
    title: "CBD CATEGORY",
    subMenu1: {
      title: "CBD CATEGORY",
      options: [
        {
          title: "CBD OIL",
          link: "",
        },
        {
          title: "CBD SOFTGEL",
          link: "",
        },
        {
          title: "CBD FACIAL CARE",
          link: "",
        },
        {
          title: "CBD BODY CARE",
          link: "",
        },
        {
          title: "CBD FOR PET",
          link: "",
        },
        {
          title: "CBD FOR MUSCLE & JOINTS",
          link: "",
        },
        {
          title: "BEVERAGE",
          link: "",
        },
        {
          title: "HOME USE",
          link: "",
        },
        {
          title: "KRATOM",
          link: "",
        },
      ],
    },
    subMenu2: {
      title: "OUR BRANDS",
      options: [
        {
          title: "EARTHLAB",
          link: "",
        },
        {
          title: "CBD LAB",
          link: "",
        },
        {
          title: "HEMPINESS",
          link: "",
        },
        {
          title: "HAPPII",
          link: "",
        },
        {
          title: "9CE",
          link: "",
        },
        {
          title: "KOOZE",
          link: "",
        },
        {
          title: "MITRA G",
          link: "",
        },
      ],
    },
  },
  {
    title: "CBD BY PURPOSE",
    subMenu1: {
      title: "CBD BY PURPOSE",
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
          link: "",
        },
        {
          title: "OUR LEADERSHIP",
          link: "",
        },
        {
          title: "JOIN OUR ESTEEMED",
          link: "",
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
          link: "",
        },

        {
          title: "MEDICAL",
          link: "",
        },
        {
          title: "RESEARCH",
          link: "",
        },
        {
          title: "NEWS",
          link: "",
        },
        {
          title: "PRESS RELEASE",
          link: "",
        },
      ],
    },
  },
  {
    title: "CONTACT",
    subMenu1: {
      title: "CONTACT",
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
                  <a style={{ padding: "10px 15px", fontSize: 16 }}>
                    {item.subMenu1.title}
                  </a>
                  {item?.subMenu1?.options?.map((sub, i) => (
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
              <img src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/dr/contact.png" style={{ width: "50%" }} />
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
