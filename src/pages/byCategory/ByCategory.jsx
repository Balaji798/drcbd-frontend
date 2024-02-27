import React, { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import ProductSlider from "../../components/productSlider/ProductSlider";
import ApiService from "../../services/ApiService";
import "./byCategory.css"
import Card from "../../components/card/Card";
import {fiterData} from "./categoryNameData.js"


const ByCategory = () => {
  const { pathname } = useLocation();
  const { categoryName } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAllProduct = async () => {
      try {
        const res = await ApiService.getAllProduct();
        const categoryProduct = res.data.filter((item) => {
          const lowerCaseCategoryName = categoryName.split('-').join(' ').toLowerCase();
          const isCategoryMatch = item.categoryName.includes(lowerCaseCategoryName) && pathname.split('/')[1] === 'cbd-by-category';
          const isPurposeMatch = item.purposeName?.includes(lowerCaseCategoryName) && pathname.split('/')[1] === 'cbd-by-purpose';
          return isCategoryMatch || isPurposeMatch;
        });
        setData(categoryProduct);
      } catch (err) {
        console.log(err.message);
      }
    };
    getAllProduct();
  }, [categoryName, pathname]);

  
console.log(fiterData[0]?.options[0]?.link.split('/')[2])
  return (
    <div className="filter-container center">
      <div className="content-container">
        <div style={{ color: '#005652' }}>
          <div className="filter">
            <h3>{fiterData[pathname.split('/')[1] === 'by-category' ? 0 : 1]?.title}</h3>
            <ul style={{ listStyle: 'none' }}>
              {fiterData[pathname.split('/')[1] === 'cbd-by-category' ? 0 : 1]?.options.map((item, index) => (
                <li key={index} onClick={()=>{setData([])}}>
                  <Link
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      paddingBottom: '1rem',
                      cursor: 'pointer',
                      fontWeight: 600,
                    }}
                    to={item.link}
                  >
                    <div
                      style={{
                        width: '1rem',
                        height: '1rem',
                        borderRadius: '1rem',
                        border: '1px solid',
                        marginRight: '0.3rem',
                        padding: '0.2rem',
                      }}
                    >
                      <div
                        style={{
                          width: '0.5rem',
                          height: '0.5rem',
                          borderRadius: '0.5rem',
                          background: categoryName === item.link.split('/')[2] ? '#005652' : '#fff',
                        }}
                      />
                    </div>
                    <p>{item.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="by-category-product">
          <h2
            style={{
              textTransform: 'uppercase',
              maxWidth: '1150px',
              width: '100%',
              paddingBottom: '1rem',
              color: '#005652',
            }}
          >
            {categoryName}
          </h2>
          <div
            style={{
              maxWidth: '1150px',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {data.length === 0 ? (
              [1,2,3].map((item)=>(<div key={item}><Card /></div>))
            ) : (
              data.map((item, i) => <ProductSlider image={item} key={i} marginB="yes" categoryName={categoryName} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ByCategory;
