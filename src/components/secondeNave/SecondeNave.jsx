import React, { useState, useEffect } from "react";
import { navData } from "./navData";
import "./secondNave.css";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

const SecondeNave = ({ openNav, setOpenNav }) => {
  const [menusIndex, setMenusIndex] = useState(-1);
  return (
    <div
      className={`${openNav?"second-nave nav-active":'second-nave'}`}
      // style={{ transform: openNav ? "translateX(145%)" : "translateX(45%)" }}
    >
    {menusIndex>-1&&<div className="back-button" onClick={()=>setMenusIndex(-1)}> {'<'}Back</div>}
      {menusIndex<0?<ul>
        {navData.map((item, index) => (
          <li key={index}>
            {item.link?<Link to={item.link} onClick={()=>{setOpenNav(false)}}>{item.title}</Link>:<p>{item.title}</p>}
            <MdArrowForwardIos onClick={()=>{setMenusIndex(index)}}/>
          </li>
        ))}
      </ul>:(<ul>
        {navData[menusIndex]?.options.map((item,index)=>(
          <li key={index}>
          <Link to={item.link} onClick={()=>{setOpenNav(false)}}>{item.title}</Link>
          </li>
        ))}
        </ul>)}
      <div className="user-profile-lang">
      <Link to="/sign-in" style={{ marginLeft: "2px" }}>
        Sign In
      </Link>
      <p style={{ cursor: "pointer", marginLeft: "2px" }} onClick={() => {}}>
        {" "}
        My Orders
      </p>
    </div>
    </div>
  );
};

export default SecondeNave;
