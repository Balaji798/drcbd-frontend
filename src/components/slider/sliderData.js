import image1 from "../../assets/555-01.jpg"
import image2 from "../../assets/555-02.jpg"
import image3 from "../../assets/555-03.jpg"
import image4 from "../../assets/555-04.jpg"
import image5 from "../../assets/555-05.jpg";
import anxiety from "../../assets/by-category/ANXIETY.jpg";
import aromatherapy from "../../assets/by-category/AROMATHERAPY.jpg";
import cancer from "../../assets/by-category/CANCER.jpg";
import energy from "../../assets/by-category/ENERGY.jpg";
import hormones from "../../assets/by-category/HORMONES.jpg";
import immunity from "../../assets/by-category/immunity.jpg";
import muscles from "../../assets/by-category/MUSCLES-&-JOINTS.jpg";
import skincare from "../../assets/by-category/skincare.jpg";
import sleep from "../../assets/by-category/SLEEP.jpg";
import weight from "../../assets/by-category/WEIGHT-MANAGEMENT.jpg";
import green from "../../assets/by-purpose/light-green.jpg";
import black from "../../assets/by-purpose/black.jpg";
import face from "../../assets/by-purpose/face.jpg";
import oil from "../../assets/by-purpose/oil.jpg";
import pets from "../../assets/by-purpose/pets.jpg";
import body from "../../assets/by-purpose/body.jpg";
import earth from "../../assets/by-purpose/earth.png";
import SUPPLEMENTS from "../../assets/by-purpose/SUPPLEMENTS.jpg";
import I_mun from "../../assets/by-purpose/i-mun.jpg";
import peptide from "../../assets/by-purpose/peptide.png"

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
  {
    id: 5,
    image: image5
  },
];

export const affiliates = [
  {
    engTitle: "SKINCARE",
    thiTitle:"ผลิตภัณฑ์ดูแลผิว",
    background: skincare,
      link:'SKINCARE'
  },
  {
    engTitle: "SLEEP DISORDER",
    thiTitle:"โรคการนอนหลับ",
    background: sleep,
      link:'SLEEP'
  },
  {
    engTitle: "IMMUNE",
    thiTitle:"มีภูมิคุ้มกัน",
    background: immunity,
      link:'immunity'
  },
  {
    engTitle: "MUSCLE & JOINT",
    thiTitle:"กล้ามเนื้อและข้อต่อ",
    background: muscles,
      link:'MUSCLES-&-JOINTS'
  },
  {
    engTitle: "ENERGY",
    thiTitle:"พลังงาน",
    background: energy,
      link:'ENERGY'
  },
  {
    engTitle: "ANXIETY",
    thiTitle:"ความวิตกกังวล",
    background: anxiety,
      link:"ANXIETY"
  },
  {
    engTitle: "WEIGHT MANAGEMENT",
    thiTitle:"การจัดการน้ำหนัก",
    background: weight,
      link:'WEIGHT-MANAGEMENT'
  },
  {
    engTitle: "AROMATHERAPY",
    thiTitle:"อโรมาเธอราพี",
    background: aromatherapy,
      link:'AROMATHERAPY'
  },
  {
    engTitle: "CANCER",
    thiTitle:"มะเร็ง",
    background: cancer,
      link:'CANCER'
  },
  {
    engTitle: "HORMONES",
    thiTitle:"ฮอร์โมน",
    background: hormones,
      link:'HORMONES'
  },
];
export const product = [
  {
    engTitle: "CBD OIL",
    thiTitle:"CBD น้ำมัน",
    background: oil,
      link:"CBD-OIL"
  },
  {
    engTitle: "CBD SUPPLEMENTS",
    thiTitle:"CBD อาหารเสริม",
    background: black,
    link:"CBD-SUPPLEMENTS"
  },

  {
    engTitle: "CBD SKIN & CARE",
    thiTitle:"CBD ผิวหนังและการดูแล",
    background: face,
      link:"CBD-FACE"
  },
  {
    engTitle: "BEVERAGE",
    thiTitle:"CBD เครื่องดื่ม",
    background: green,
    link:"CBD-BEVERAGE"
  },
  {
    engTitle: "CBD BODY CARE",
    thiTitle:"CBD ดูแลร่างกาย",
    background: body,
      link:"CBD-BODY"
  },
  {
    engTitle: "CBD FOR PETS",
    thiTitle:"CBD สำหรับสัตว์เลี้ยง",
    background: pets,
      link:"CBD-FOR-PETS"
  },
  {
    title: "AROMATHERAPY",
    thiTitle:"อโรมาเธอราพี",
    background: aromatherapy,
      link:'AROMATHERAPY'
  },
];

export const products = [
  {
    url: SUPPLEMENTS,
    name: "Earth Lab CBD De' Leep Softgel",
    cat: 'CBD-SUPPLEMENTS',
    link: "EARTH LAB CBD DE'LEEP",
  },
  {
    url: earth,
    name: "Earth Lab CBD Whitening Mask",
    cat: 'CBD-FACE',
    link: "EARTHLAB CBD WHITENING MASK",
  },
  {
    url: I_mun,
    name: "CBD I-MUN",
    cat: 'CBD-SUPPLEMENTS',
    link: "CBD I-MUN",
  },
  {
    url: peptide,
    name: "CBD Collagen peptide",
    cat:'CBD-BEVERAGE',
    link: "EARTHLAB CBD COLLAGEN PEPTIDE",
  },
];