import React, { useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const naveData = [
  {
    title: "CBD CATEGORY",
    subMenu1: {
      title: "CBD CATEGORY",
      link: "/cbd-by-category",
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
        // {
        //   title: "KRATOM",
        //   link: "/by-category/SKINCARE",
        // },
      ],
    },
    subMenu2: {
      title: "CBD BY PURPOSE",
      link: "/cbd-by-purpose",
      options: [
        {
          title: "SLEEP",
          link: "/"
          //"/by-purpose/SLEEP-DISORDER",
        },
        {
          title: "IMMUNE",
          link: "/"//"/by-purpose/IMMUNE",
        },
        {
          title: "ENERGY",
          link: "/"//"/by-purpose/ENERGY",
        },
        {
          title:"ANXIETY",
          link:"/"//"/by-purpose/ANXIETY"
        },
        {
          title: "MUSCLE & JOINT",
          link: "/"//"/by-purpose/MUSCLE-&-JOINT",
        },
        {
          title: "CANCER",
          link: "/"//"/by-purpose/CANCER",
        },
        {
          title:"PALLIATIVE CARE",
          link:"/"//"/by-purpose/PALLIATIVE-CARE"
        },
        {
          title: "SKINCARE",
          link: "/"//"/by-purpose/SKINCARE-BEAUTY",
        },
        {
          title: "NCD'S(NON-COMMUNICABLE DISEASES)",
          link: "/"//"/by-purpose/NCD'S",
        },
        {
          title: "RELAXATION",
          link: "/"//"/by-purpose/RELAXATION",
        },
        {
          title: "HORMONES",
          link: "/"//"/by-purpose/HORMONES",
        },
        {
          title: "OPIOID",
          link: "/"//"/by-purpose/OPIOID",
        },
        {
          title: "WEIGHT MANAGEMENT",
          link: "/"//"/by-purpose/WEIGHT-MANAGEMENT",
        },
      ],
    },
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
  //         //"/by-purpose/SLEEP-DISORDER",
  //       },
  //       {
  //         title: "IMMUNE",
  //         link: "/"//"/by-purpose/IMMUNE",
  //       },
  //       {
  //         title: "ENERGY",
  //         link: "/"//"/by-purpose/ENERGY",
  //       },
  //       {
  //         title:"ANXIETY",
  //         link:"/"//"/by-purpose/ANXIETY"
  //       },
  //       {
  //         title: "MUSCLE & JOINT",
  //         link: "/"//"/by-purpose/MUSCLE-&-JOINT",
  //       },
  //       {
  //         title: "CANCER",
  //         link: "/"//"/by-purpose/CANCER",
  //       },
  //       {
  //         title:"PALLIATIVE CARE",
  //         link:"/"//"/by-purpose/PALLIATIVE-CARE"
  //       },
  //       {
  //         title: "SKINCARE",
  //         link: "/"//"/by-purpose/SKINCARE-BEAUTY",
  //       },
  //       {
  //         title: "NCD'S(NON-COMMUNICABLE DISEASES)",
  //         link: "/"//"/by-purpose/NCD'S",
  //       },
  //       {
  //         title: "RELAXATION",
  //         link: "/"//"/by-purpose/RELAXATION",
  //       },
  //       {
  //         title: "HORMONES",
  //         link: "/"//"/by-purpose/HORMONES",
  //       },
  //       {
  //         title: "OPIOID",
  //         link: "/"//"/by-purpose/OPIOID",
  //       },
  //       {
  //         title: "WEIGHT MANAGEMENT",
  //         link: "/"//"/by-purpose/WEIGHT-MANAGEMENT",
  //       },
  //     ],
  //   },
  // },
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
        // {
        //   title: "CLINIC FRANCHISE",
        //   link: "",
        // },
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
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const user = localStorage.getItem("token");

  if (open) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <nav>
    <div className="navContainer">

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
                      style={{ cursor: "pointer", fontSize: 16 }}
                    >
                      {sub.title}
                    </Link>
                  </div>
                ))}
              </div>
              <div>
                <Link style={{
                  padding: "10px 15px",
                  fontSize: 16,
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                }}>
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
              alt="/"
            />
          </div>
        </div>
      ))}
    </div>
    </div>
      
    </nav>
  );
};

export default Navbar;
