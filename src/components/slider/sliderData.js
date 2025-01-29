import image1 from "../../assets/banners/Homepage Banner-01.webp"
import image2 from "../../assets/banners/Homepage Banner-02.webp"
import image3 from "../../assets/banners/Homepage Banner-03.webp"
import image4 from "../../assets/banners/Homepage Banner-04.webp"
import aromatherapy from "../../assets/by-category/hair-care.webp";
import cancer from "../../assets/by-purpose/pet product.webp";
import energy from "../../assets/by-purpose/muscle & joint.webp";
import hormones from "../../assets/by-purpose/hormone.webp";
import immunity from "../../assets/by-purpose/Skincare.webp";
import muscles from "../../assets/by-purpose/immune.webp";
import skincare from "../../assets/by-purpose/sleep-disorder.webp";
import sleep from "../../assets/by-purpose/hiar.webp";
import weight from "../../assets/by-purpose/weight manage.webp";
import green from "../../assets/by-category/supplement.webp";
import ampoule1 from "../../assets/by-category/cbd-Skincare.webp";
import oil from "../../assets/by-category/cbd-oil.webp";
import pets from "../../assets/by-category/cbd-pets.webp";
import body from "../../assets/by-category/cbd-body.webp";
import deleep from "../../assets/best-seller/best seller de leep.webp";
import deleep1 from "../../assets/by-category/de-leep.webp"
import earth from "../../assets/best-seller/best seller hair tonic.webp";
import ampoule from "../../assets/best-seller/best seller ampoule.webp";
import mask from "../../assets/best-seller/best seller mask.webp";
import mobile1 from "../../assets/banners/mobile/mobile-01.webp";
import mobile2 from "../../assets/banners/mobile/mobile-06.webp";
import mobile3 from "../../assets/banners/mobile/mobile-07.webp";
import mobile4 from "../../assets/banners/mobile/mobile-08.webp";

export const mobileBanner =[
  {
    id: 1,
    image: mobile1,
  },
  {
    id: 2,
    image: mobile2
  },
  {
    id: 3,
    image: mobile3
  },
  {
    id: 4,
    image: mobile4
  },
]
export const sliderData = [
  {
    id: 1,
    image: image1,
  },
  {
    id: 2,
    image: image2
  },
  {
    id: 3,
    image: image3
  },
  {
    id: 4,
    image: image4
  },
];

export const affiliates = [
  {
    engTitle: "SLEEP DISORDER & ANXIETY",
    thiTitle:"ผลิตภัณฑ์ช่วยการนอนหลับ & คลายเครียด",
    background: skincare,
      link:'SLEEP DISORDER & ANXIETY'
  },
  {
    engTitle: "HAIR CARE",
    thiTitle:"ผลิตภัณฑ์ดูแลเส้นผม",
    background: sleep,
      link:'HAIR CARE'
  },
  {
    engTitle: "FACE CARE",
    thiTitle:"ผลิตภัณฑ์ดูแลผิวหน้า",
    background: immunity,
      link:'FACE CARE'
  },
  {
    engTitle: "SUPPLEMENTS",
    thiTitle:"ผลิตภัณฑ์อาหารเสริม",
    background: muscles,
      link:'SUPPLEMENTS'
  },
  {
    engTitle: "JOINT & MUSCLE",
    thiTitle:"บำรุงกระดูกและกล้ามเนื้อ",
    background: energy,
      link:'MUSCLES & JOINTS'
  },
  {
    engTitle: "WEIGHT MANAGEMENT",
    thiTitle:"ผลิตภัณฑ์ควบคุมน้ำหนัก",
    background: weight,
      link:'WEIGHT MANAGEMENT'
  },
  {
    engTitle: "HORMONES",
    thiTitle:"ผลิตภัณฑ์เสริมภูมิคุ้มกัน",
    background: hormones,
      link:'HORMONES'
  },
  {
    engTitle: "CBD FOR PETS",
    thiTitle:"ผลิตภัณฑ์สำหรับสัตว์เลี้ยง",
    background: cancer,
      link:'CBD FOR PETS'
  },
];
export const product = [
  {
    engTitle: "CBD OIL",
    thiTitle:"น้ำมัน ซีบีดี",
    background: oil,
      link:"CBD OIL"
  },
  {
    engTitle: "CBD SUPPLEMENTS",
    thiTitle:"อาหารเสริม",
    background: deleep1,
    link:"CBD SUPPLEMENTS"
  },

  {
    engTitle: "CBD FACE",
    thiTitle:"บำรุงผิวหน้า",
    background: ampoule1,
      link:"CBD FACE"
  },
  {
    engTitle: "SUPPLEMENTS",
    thiTitle:"เสริมภูมคิุ้มกน",
    background: green,
    link:"CBD SUPPLEMENTS"
  },
  {
    engTitle: "CBD BODY",
    thiTitle:"บำรุงผิวกาย",
    background: body,
      link:"CBD BODY"
  },
  {
    engTitle: "HAIR CARE",
    thiTitle:"ผลิตภัณฑ์ดูแลเส้นผม",
    background: aromatherapy,
      link:'HAIR CARE'
  },
  {
    engTitle: "CBD FOR PETS",
    thiTitle:"ผลิตภัณฑ์สำหรับสัตว์เลี้ยง",
    background: pets,
      link:"CBD FOR PETS"
  },
];

export const products = [
  {
    url: deleep,
    name: "De' Leep",
    cat: 'CBD-SUPPLEMENTS',
    link: "EARTH LAB CBD DE'LEEP",
  },
  {
    url: earth,
    name: "HAIR TONIC",
    cat: 'HAIR-CARE',
    link: "HERBAL HAIR TONIC​",
  },
  {
    url: ampoule,
    name: "AMPOULE",
    cat: 'CBD-SUPPLEMENTS',
    link: "EARTHLAB CBD AMPOULE SERUM",
  },
  {
    url: mask,
    name: "CBD WHITENING MASK",
    cat:'CBD-BEVERAGE',
    link: "EARTHLAB CBD WHITENING MASK",
  },
];