"use client"
import React from 'react';
import { useNavigate } from "react-router-dom";
import {userParams} from "react-router-dom"

const Product = () => {
  const { productName } = useParams();

  console.log(pathName)
  return (
    <div>Product</div>
  )
}

export default Product
