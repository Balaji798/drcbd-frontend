import "./navbar.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../../util/LanguageContext";

const naveData = [
  {
    //image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/home4.jpeg",
    engTitle: "CBD BY CATEGORY",
    thiTitle: "CBD ตามหมวดหมู่",
    subMenu1: {
      engTitle: "CBD BY CATEGORY",
      thiTitle: "CBD ตามหมวดหมู่",
      link: "/cbd-by-category",
      options: [
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
        {
          engTitle: "CBD FOR PETS",
          thiTitle: "CBD สำหรับสัตว์เลี้ยง",
          link: "/cbd-by-category/CBD-FOR-PETS",
        },
      ],
    },
  },
  {
    engTitle: "CBD BY PURPOSE",
    thiTitle: "CBD ตามวัตถุประสงค์",
    //image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/home4.jpeg",
    subMenu1: {
      engTitle: "CBD BY PURPOSE",
      thiTitle: "CBD ตามวัตถุประสงค์",
      link: "/cbd-by-purpose",
      options: [
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
  },
  {
    //image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/home1.jpeg",
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
    //image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/home1.jpeg",
    engTitle: "BLOG",
    thiTitle: "เกี่ยวกับ",
    subMenu1: {
      engTitle: "BLOG",
      thiTitle: "เกี่ยวกับ",
      link:"/blog",
      options: [
        {
          engTitle: "EARTH LAB CBD WHITENING MASK",
          thiTitle:"วัตถุประสงค์ของแบรนด์",
          link: "/blog/earth-lab-cbd-whitening-mask",
        },
        {
          engTitle: "EARTH LAB CBD GREEN ANGEL PLUS 50g",
          thiTitle:"ทีมงานของเรา",
          link: "/blog/earth-lab-cbd-green-angel",
        },
        {
          engTitle: "EARTH LAB CBD AMPOULE SERUM 30ml",
          thiTitle:"ทีมงานของเรา",
          link: "/blog/earth-lab-cbd-ampoule-serum",
        },
        {
          engTitle: "EARTH LAB CBD DE'LEEP SOFTGEL 30cap",
          thiTitle:"เข้าร่วมกับเรา",
          link: "/blog/earth-lab-cbd-dellep-softgel",
        },
        {
          engTitle:"MCT OIl PERILLA SEED",
          thiTitle:"MCT OIl PERILLA SEED",
          link:"/blog/mct-oil-perilla-seed"
        },
        {
          engTitle: "9CE CBD CREAM",
          thiTitle:"เข้าร่วมกับเรา",
          link: "/blog/9ce-cream",
        },
        {
          engTitle:"9CE CBD Sunscreem",
          thiTitle:"",
          link:"/blog/9ce-sunscreem"
        },
        {
          engTitle:"9CE CBD Deep Sleeping Cream",
          thiTitle:"",
          link:"/blog/9ce-deep-sleeping-cream"
        },
        {
          engTitle:"9CE CBD Brightening Ampoule",
          thiTitle:"",
          link:"/blog/9ce-brightening-ampoule"
        }
      ],
    },
  },
  {
    //image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/home3.jpeg",
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
          engTitle: "@DrCBDOfficalChannel",
          thiTitle: "@DrCBDOfficalChannel",
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

                    // {item?.subMenu2?.options?.map((sub, i) => (
                    //   <div
                    //     style={{ display: "flex", alignItems: "center" }}
                    //     className="dropdown-item"
                    //     key={i}
                    //   >
                    //     {sub.icon}
                    //     <Link
                    //       to={sub.link}
                    //       style={{ cursor: "pointer" }}
                    //       className="sub-menu"
                    //     >
                    //       {sub.title}
                    //     </Link>
                    //   </div>
                    // ))}