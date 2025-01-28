import "./navbar.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../../util/LanguageContext";

const naveData = [
  {
    engTitle: "CBD BY CATEGORY",
    thiTitle: "ผลิตภัณฑ์ CBD",
    subMenu1: {
      engTitle: "CBD BY CATEGORY",
      thiTitle: "ผลิตภัณฑ์ CBD",
      link: "/cbd-by-category",
      options: [
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
          link: "/cbd-by-category/CBD-FOR-PETS",
        },
      ],
    },
  },
  {
    engTitle: "CBD BY PURPOSE",
    thiTitle: "ผลิตภัณฑ์ตามวัตถุประสงค",
    subMenu1: {
      engTitle: "CBD BY PURPOSE",
      thiTitle: "ผลิตภัณฑ์ตามวัตถุประสงค",
      link: "/cbd-by-purpose",
      options: [
        {
          engTitle: "SLEEP DISORDER & ANXIETY",
          thiTitle: "ผลิตภัณฑ์ช่วยการนอนหลับ & คลายเครียด",
          link: "/cbd-by-purpose/SLEEP-DISORDER-&-ANXIETY",
        },
        {
          engTitle: "HAIR CARE",
          thiTitle: "ผลิตภัณฑ์ดูแลเส้นผม",
          link: "/cbd-by-purpose/HAIR-CARE",
        },
        {
          engTitle: "FACE CARE",
          thiTitle: "ผลิตภัณฑ์ดูแลผิวหน้า",
          link: "/cbd-by-purpose/FACE-CARE",
        },
        {
          engTitle: "SUPPLEMENTS",
          thiTitle: "ผลิตภัณฑ์อาหารเสริม",
          link: "/cbd-by-purpose/SUPPLEMENTS",
        },
        {
          engTitle: "JOINT & MUSCLES",
          thiTitle: "บำรุงกระดูกและกล้ามเนื้อ",
          link: "/cbd-by-purpose/MUSCLES-&-JOINTS",
        },
        {
          engTitle: "WEIGHT MANAGEMENT",
          thiTitle: "ผลิตภัณฑ์ควบคุมน้ำหนัก",
          link: "/cbd-by-purpose/WEIGHT-MANAGEMENT",
        },
        {
          engTitle: "HORMONES",
          thiTitle: "ผลิตภัณฑ์เสริมภูมิคุ้มกัน",
          link: "/cbd-by-purpose/HORMONES",
        },
        {
          engTitle: "CBD FOR PETS",
          thiTitle: "ผลิตภัณฑ์ตามวัตถุประสงค์",
          link: "/cbd-by-purpose/CBD-FOR-PETS",
        },
      ],
    },
  },
  {
    engTitle: "ABOUT",
    thiTitle: "เกี่ยวกับ",
    subMenu1: {
      engTitle: "ABOUT",
      thiTitle: "เกี่ยวกับ",
      options: [
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
  },
  {
    engTitle: "BLOG",
    thiTitle: "บทความ",
    subMenu1: {
      engTitle: "BLOG",
      thiTitle: "บทความ",
      link:"/blog",
      options: [
        {
          engTitle: "EARTH LAB CBD WHITENING MASK",
          thiTitle:"EARTH LAB CBD WHITENING MASK",
          link: "/blog/earth-lab-cbd-whitening-mask",
        },
        {
          engTitle: "EARTH LAB CBD GREEN ANGEL PLUS",
          thiTitle:"EARTH LAB CBD GREEN ANGEL PLUS",
          link: "/blog/earth-lab-cbd-green-angel",
        },
        {
          engTitle: "EARTH LAB CBD AMPOULE SERUM",
          thiTitle:"EARTH LAB CBD AMPOULE SERUM",
          link: "/blog/earth-lab-cbd-ampoule-serum",
        },
        {
          engTitle: "EARTH LAB CBD DE'LEEP SOFTGEL",
          thiTitle:"EARTH LAB CBD DE'LEEP SOFTGEL",
          link: "/blog/earth-lab-cbd-dellep-softgel",
        },
        {
          engTitle:"MCT OIl PERILLA SEED",
          thiTitle:"MCT OIl PERILLA SEED",
          link:"/blog/mct-oil-perilla-seed"
        },
        {
          engTitle: "9CE CBD CREAM",
          thiTitle:"9CE CBD CREAM",
          link: "/blog/9ce-cream",
        },
        {
          engTitle:"9CE CBD SUNSCREEM",
          thiTitle:"9CE CBD SUNSCREEM",
          link:"/blog/9ce-sunscreem"
        },
        {
          engTitle:"9CE CBD DEEP SLEEPING CREAM",
          thiTitle:"9CE CBD DEEP SLEEPING CREAM",
          link:"/blog/9ce-deep-sleeping-cream"
        },
        {
          engTitle:"9CE CBD BRIGHTENING AMPOULE",
          thiTitle:"9CE CBD BRIGHTENING AMPOULE",
          link:"/blog/9ce-brightening-ampoule"
        }
      ],
    },
  },
  {
    engTitle: "CONTACT",
    thiTitle: "ติดต่อ",
    subMenu1: {
      engTitle: "CONTACT",
      thiTitle: "ติดต่อ",
      link: "/contact",
      options: [
        {
          engTitle: "www.drcbdgroup.com",
          thiTitle: "www.drcbdgroup.com",
          link: "",
        },
        {
          engTitle: "info@brcbdgroup.com",
          thiTitle: "info@brcbdgroup.com",
          link: "",
        },
        {
          engTitle: "+66 65 141 6999",
          thiTitle: "+66 65 141 6999",
          link: "",
        },
        {
          engTitle: "@drcbdinnovation",
          thiTitle: "@drcbdinnovation",
          link: "",
        },
        {
          engTitle: "@drcbdofficalchannel",
          thiTitle: "@drcbdofficalchannel",
          link: "",
        },
      ],
    },
  },
];

const Navbar = () => {
  const { language } = useLanguage();

  return (
    <nav>
      <div className="navContainer">
        <div className="navbar">
          {naveData.map((item, index) => (
            <div className="dropdown" key={index}>
              <p className="different">
                <span>
                  {language === "eng" ? item.engTitle : item.thiTitle}
                </span>
              </p>
              <div
                className="dropdown-content"
                //style={{}}
              >
                <div
                  style={{
                    width: "auto",
                    paddingRight: "10px",
                    display: "flex",
                  }}
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
                      {language === "eng"
                        ? item.subMenu1.engTitle
                        : item.subMenu1.thiTitle}
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
                          style={{ cursor: "pointer" }}
                          className="sub-menu"
                        >
                          {language === "eng"?sub.engTitle:sub.thiTitle}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div>
                    <Link
                      style={{
                        padding: "10px 15px",
                        fontSize: 16,
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 800,
                      }}
                      to={item?.subMenu2?.link}
                    >
                      {item?.subMenu2?.title}
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;