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
        title: "Brand purpose",
        link: "/brand-purpose",
      },
      {
        title: "Our Companies",
        link: "/our-companies",
      },
      {
        title: "Our Team",
        link: "/our-leadership",
      },
      {
        title: "Join Our Esteemed",
        link: "/our-esteemed",
      },
    ],
  },
  {
    title: "CBD PRODUCTS",
    link: "",
    subMenu: [
      {
        title: "Cosmeceutical Products",
        link: "/products/cosmeceutical-products",
      },
      {
        title: "Herbal Tea",
        link: "/products/herbal-tea",
      },
      {
        title: "Dietary Supplement Products",
        link: "/products/dietary-supplement-products",
      },
      {
        title: "Cannabis Oil",
        link: "/products/cannabis-oil",
      },
      {
        title: "Thai Traditional Medicine",
        link: "/products/thai-traditional-medicine",
      },
      {
        title: "Pets Products",
        link: "/products/pets-products",
      },
      {
        title: "Kratom Supplement Products",
        link: "/products/kratom-supplement-products",
      },
    ],
  },
  {
    title: "DR.CBD UNIVERSITY",
    link: "",
    subMenu: [
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
