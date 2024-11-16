import { BsFacebook } from "react-icons/bs";
import { SlSocialInstagram } from "react-icons/sl";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";

export const footerData = [
  {
    engTitle: "CBD BY CATEGORY",
    thiTitle:"CBD ตามหมวดหมู่",
      link: "/cbd-by-category",
      subMenu: [
        {
          engTitle: "CBD OIL",
          thiTitle: "CBD น้ำมัน",
          link: "/cbd-by-category/CBD-OIL",
        },
        {
          engTitle: "CBD SUPPLEMENTS",
          thiTitle: "CBD อาหารเสริม",
          link: "/cbd-by-category/CBD-SUPPLEMENTS",
        },
        {
          engTitle: "CBD FACE",
          thiTitle: "CBD ใบหน้า",
          link: "/cbd-by-category/CBD-FACE",
        },
        {
          engTitle: "CBD BODY",
          thiTitle: "CBD ร่างกาย",
          link: "/cbd-by-category/cbd-BODY",
        },

        {
          engTitle: "CBD BEVERAGE",
          thiTitle: "CBD เครื่องดื่ม",
          link: "/cbd-by-category/CBD-BEVERAGE",
        },
        {
          engTitle: "AROMATHERAPY",
          thiTitle: "อโรมาเธอราพี",
          link: "/cbd-by-category/AROMATHERAPY",
        },
        // {
        //   title: "HOME USE",
        //   link: "/cbd-by-category/home-use",
        // },
        {
          engTitle: "CBD FOR PETS",
          thiTitle: "CBD สำหรับสัตว์เลี้ยง",
          link: "/cbd-by-category/CBD-FOR-PETS",
        },
      ],
  },
  {
    engTitle: "CBD PRODUCTS",
    thiTitle:"CBD ตามวัตถุประสงค์",
    link: "/cbd-by-purpose",
    subMenu: [
      {
        engTitle: "SLEEP",
        thiTitle: "นอน",
        link: "/cbd-by-purpose/SLEEP",
      },
      {
        engTitle: "IMMUNE",
        thiTitle: "มีภูมิคุ้มกัน",
        link: "/cbd-by-purpose/immunity",
      },
      {
        engTitle: "ENERGY",
        thiTitle: "พลังงาน",
        link: "/cbd-by-purpose/ENERGY",
      },
      {
        engTitle: "ANXIETY",
        thiTitle: "ความวิตกกังวล",
        link: "/cbd-by-purpose/ANXIETY",
      },
      {
        engTitle: "MUSCLES & JOINT",
        thiTitle: "กล้ามเนื้อและข้อต่อ",
        link: "/cbd-by-purpose/MUSCLES-&-JOINTS",
      },
      {
        engTitle: "CANCER",
        thiTitle: "มะเร็ง",
        link: "/cbd-by-purpose/CANCER",
      },
      // {
      //   title: "PALLIATIVE CARE",
      //   link: "/cbd-by-purpose/PALLIATIVE-CARE",
      // },
      {
        engTitle: "SKINCARE",
        thiTitle: "ผลิตภัณฑ์ดูแลผิว",
        link: "/cbd-by-purpose/SKINCARE",
      },
      // {
      //   title: "NCD'S(NON-COMMUNICABLE DISEASES)",
      //   link: "/cbd-by-purpose/NCD'S",
      // },
      {
        engTitle: "AROMATHERAPY",
        thiTitle: "อโรมาเธอราพี",
        link: "/cbd-by-purpose/AROMATHERAPY",
      },
      {
        engTitle: "HORMONES",
        thiTitle: "ฮอร์โมน",
        link: "/cbd-by-purpose/HORMONES",
      },
      // {
      //   title: "OPIOID",
      //   link: "/cbd-by-purpose/OPIOID",
      // },
      {
        engTitle: "WEIGHT MANAGEMENT",
        thiTitle: "การจัดการน้ำหนัก",
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
