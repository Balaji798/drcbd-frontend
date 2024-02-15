import { BsFacebook } from "react-icons/bs";
import { SlSocialInstagram } from "react-icons/sl";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";

export const footerData = [
  {
    title: "ABOUT",
    link: "",
    subMenu: [
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
  {
    title: "CBD BY CATEGORY",
      link: "/cbd-by-category",
      subMenu: [
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
          link: "/by-category/cbd-body",
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
        //   title: "EXTRACTS & CONCENTRATES",
        //   link: "/",
        //   //by-category/SKINCARE
        // },
        // {
        //   title: "GIFT SETS & PROMOTIONS",
        //   link: "/",
        // },
      ],
  },
  {
    title: "CBD PRODUCTS",
    link: "/cbd-by-purpose",
    subMenu: [
      {
        title: "SLEEP",
        link: "/by-purpose/SLEEP",
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
        title: "ANXIETY",
        link: "/by-purpose/ANXIETY",
      },
      {
        title: "MUSCLES & JOINT",
        link: "/by-purpose/MUSCLES-&-JOINTS",
      },
      {
        title: "CANCER",
        link: "/by-purpose/CANCER",
      },
      // {
      //   title: "PALLIATIVE CARE",
      //   link: "/by-purpose/PALLIATIVE-CARE",
      // },
      {
        title: "SKINCARE",
        link: "/by-purpose/SKINCARE",
      },
      // {
      //   title: "NCD'S(NON-COMMUNICABLE DISEASES)",
      //   link: "/by-purpose/NCD'S",
      // },
      {
        title: "AROMATHERAPY",
        link: "/by-purpose/AROMATHERAPY",
      },
      {
        title: "HORMONES",
        link: "/by-purpose/HORMONES",
      },
      // {
      //   title: "OPIOID",
      //   link: "/by-purpose/OPIOID",
      // },
      {
        title: "WEIGHT MANAGEMENT",
        link: "/by-purpose/WEIGHT-MANAGEMENT",
      },
    ],
  },
  // {
  //   title: "DR.CBD UNIVERSITY",
  //   link: "",
  //   subMenu: [
  //     {
  //       title: "HEALTH",
  //       link: "/insights/health",
  //     },

  //     {
  //       title: "MEDICAL",
  //       link: "/insights/medical",
  //     },
  //     {
  //       title: "RESEARCH",
  //       link: "/insights/research",
  //     },
  //     {
  //       title: "NEWS",
  //       link: "/insights/news",
  //     },
  //     {
  //       title: "PRESS RELEASE",
  //       link: "/insights/press-release",
  //     },
  //   ],
  // },
  {
    title: "CONTACT",
    link: "/contact",
    subMenu: [
      {
        title: "@drcbdinnovation",
        link: "/brand-purpose",
        icon: <BsFacebook size={25} color="#000"/>,
      },
      {
        title: "@drcbdinnovation",
        link: "/our-companies",
        icon: <SlSocialInstagram size={25} color="#000"/>,
      },
      {
        title: "www.drcbdgroup.com",
        link: "/our-leadership",
        icon: <AiOutlineGlobal size={25} color="#000"/>,
      },
      {
        title: "+66 65 141 6999",
        link: "/join-our-esteemed",
        icon: (
          <FaPhone size={25} color="#000"/>
        ),
      },
    ],
  },
];
