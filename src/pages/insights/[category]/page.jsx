"use client"
import React, { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

const NHI = () => {
  const data = ["https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/dr/news.png", "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/dr/health.png", "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/dr/innovation.png"];
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const itemsPerPage = 5;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(arr.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = arr.slice(startIndex, endIndex);

  const handleClick = (pageNumber) => {
    console.log("hi");
    setCurrentPage(pageNumber);
  };
  console.log(currentItems);
  return (
    <div>
      <img
        src={data[0]}
        alt="/"
        style={{ objectFit: "cover", width: "100%", height: "25em" }}
      />
      <div style={{ padding: "50px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p>Category</p>
            <select style={{ width: 150, height: 25 }}>
              <option>New</option>
            </select>
          </div>
          <div>
            <p>Year</p>
            <select style={{ width: 150, height: 25 }}>
              <option>New</option>
            </select>
          </div>
          <div>
            <p>Sort By</p>
            <select style={{ width: 150, height: 25 }}>
              <option>New</option>
            </select>
          </div>
          <div style={{ background: "#000", color: "#fff" }}>Apply</div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            paddingTop: 50,
          }}
        >
          {currentItems.map((item, index) => {
            if (index % 4 === 1 || index % 4 === 2) {
              return (
                <div
                  style={{
                    width: "59%",
                    height: 200,
                    background: "#e8eae1",
                    marginRight: 10,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                  key={index}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    {item}
                    <div
                      style={{
                        background: "#005652",
                        color: "#fff",
                        fontSize: 13,
                        padding: "5px 15px",
                      }}
                    >
                      JANUARY 14,2023
                    </div>
                  </div>
                  <div
                    style={{ width: "100%", height: 20, background: "#005652" }}
                  ></div>
                </div>
              );
            } else {
              return (
                <div
                  style={{
                    width: "39%",
                    height: 200,
                    background: "#e8eae1",
                    margin: "0 5px 5px 0",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                  key={index}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    {item}
                    <div
                      style={{
                        background: "#005652",
                        color: "#fff",
                        fontSize: 13,
                        padding: "5px 15px",
                      }}
                    >
                      JANUARY 14,2023
                    </div>
                  </div>
                  <div
                    style={{ width: "100%", height: 20, background: "#005652" }}
                  ></div>
                </div>
              );
            }
          })}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handleClick(index + 1)}
              style={{
                margin: "0 5px",
                border: "0.5px solid silver",
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                background:"#fff",
                color:"#000",
                borderRadius:3
              }}
            >
              {index + 1}
            </button>
          ))}
          <div
            style={{
              margin: "0 5px",
              border: "0.5px solid silver",
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              background:"#fff",
              borderRadius:3
            }}
          >
            <MdArrowForwardIos color="#000" size={25}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NHI;
