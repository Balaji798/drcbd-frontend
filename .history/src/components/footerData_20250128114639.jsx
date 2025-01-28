import { BsFacebook } from "react-icons/bs";
import { SlSocialInstagram } from "react-icons/sl";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";

export const footerData = [
  {
    engTitle: "CBD BY CATEGORY",
    thiTitle:"ผลิตภัณฑ์ CBD",
      link: "/cbd-by-category",
      subMenu: [
        {
          engTitle: "CBD OIL",
          thiTitle: "น้ำมัน ซีบีดี",
          link: "/cbd-by-category/CBD OIL",
        },
        {
          engTitle: "CBD SUPPLEMENTS",
          thiTitle: "อาหารเสริม",
          link: "/cbd-by-category/CBD SUPPLEMENTS",
        },
        {
          engTitle: "CBD SLEEP",
          thiTitle: "ผลิตภัณฑ์เพื่อการนอนหลับ",
          link: "/cbd-by-category/CBD SLEEP"
        },
        {
          engTitle: "CBD FACE",
          thiTitle: "บํารุงผิวหน้า",
          link: "/cbd-by-category/CBD FACE",
        },
        {
          engTitle: "CBD BODY",
          thiTitle: "บํารุงผิวกาย",
          link: "/cbd-by-category/CBD BODY",
        },
        {
          engTitle: "CBD BEVERAGE",
          thiTitle: "เสริมภูมิคุ้มกัน",
          link: "/cbd-by-category/CBD BEVERAGE",
        },
        {
          engTitle: "HAIR CARE",
          thiTitle: "ผลิตภัณฑ์ดูแลเส้นผม",
          link: "/cbd-by-category/HAIR CARE",
        },
        {
          engTitle: "CBD FOR PETS",
          thiTitle: "ผลิตภัณฑ์ตามวัตถุประสงค์",
          link: "/cbd-by-category/CBD FOR PETS",
        },
      ],
  },
  {
    engTitle: "CBD BY PURPOSE",
    thiTitle:"ผลิตภัณฑ์ตามวัตถุประสงค์",
    link: "/cbd-by-purpose",
    subMenu: [
      {
        engTitle: "SLEEP DISORDER & ANXIETY",
        thiTitle: "ผลิตภัณฑ์ช่วยการนอนหลับ & คลายเครียด",
        link: "/cbd-by-purpose/SLEEP DISORDER & ANXIETY",
      },
      {
        engTitle: "HAIR CARE",
        thiTitle: "ผลิตภัณฑ์ดูแลเส้นผม",
        link: "/cbd-by-purpose/HAIR CARE",
      },
      {
        engTitle: "FACE CARE",
        thiTitle: "ผลิตภัณฑ์ดูแลผิวหน้า",
        link: "/cbd-by-purpose/FACE CARE",
      },
      {
        engTitle: "SUPPLEMENTS",
        thiTitle: "ผลิตภัณฑ์อาหารเสริม",
        link: "/cbd-by-purpose/SUPPLEMENTS",
      },
      {
        engTitle: "JOINT & MUSCLES",
        thiTitle: "บำรุงกระดูกและกล้ามเนื้อ",
        link: "/cbd-by-purpose/MUSCLES & JOINTS",
      },
      {
        engTitle: "WEIGHT MANAGEMENT",
        thiTitle: "ผลิตภัณฑ์ควบคุมน้ำหนัก",
        link: "/cbd-by-purpose/WEIGHT MANAGEMENT",
      },
      {
        engTitle: "HORMONES",
        thiTitle: "ผลิตภัณฑ์เสริมภูมิคุ้มกัน",
        link: "/cbd-by-purpose/HORMONES",
      },
      {
        engTitle: "CBD FOR PETS",
        thiTitle: "ผลิตภัณฑ์สำหรับ",
        link: "/cbd-by-purpose/CBD FOR PETS",
      },
    ],
  },
  {
    engTitle: "ABOUT",
    thiTitle: "เกี่ยวกับ",
    link: "",
    subMenu: [
      {
        engTitle: "BRAND PURPOSE",
        thiTitle:"วัตถุประสงค์ของแบรนด์",
        link: "/brand-purpose",
      },
      {
        engTitle: "OUR TEAM",
        thiTitle:"ทีมงานของเรา",
        link: "/our-leadership",
      },
      {
        engTitle: "JOIN US",
        thiTitle:"เข้าร่วมกับเรา",
        link: "/our-esteemed",
      },
    ],
  },
  {
    engTitle: "CONTACT",
    thiTitle: "ติดต่อ",
    link: "/contact",
    subMenu: [
      {
        engTitle: "@drcbdinnovation",
        thiTitle:"@drcbdinnovation",
        link: "/brand-purpose",
        icon: <BsFacebook size={25} color="#000"/>,
      },
      {
        engTitle: "@drcbdinnovation",
        thiTitle:"@drcbdinnovation",
        link: "/our-companies",
        icon: <SlSocialInstagram size={25} color="#000"/>,
      },
      {
        engTitle: "www.drcbdgroup.com",
        thiTitle:"www.drcbdgroup.com",
        link: "/our-leadership",
        icon: <AiOutlineGlobal size={25} color="#000"/>,
      },
      {
        engTitle: "+66 65 141 6999",
        thiTitle:"+66 65 141 6999",
        link: "/join-our-esteemed",
        icon: (
          <FaPhone size={25} color="#000"/>
        ),
      },
    ],
  },
];
