import { BsFacebook } from "react-icons/bs";
import { SlSocialInstagram } from "react-icons/sl";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";

export const footerData = [
  {
    title: "CBD BY CATEGORY",
      link: "/cbd-by-category",
      subMenu: [
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
  {
    title: "CBD PRODUCTS",
    link: "/cbd-by-purpose",
    subMenu: [
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
