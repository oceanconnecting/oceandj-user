/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { addToCart } from '@/lib/features/cart/cartSlice';
import { useAppDispatch } from '@/lib/hooks';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react'

export default function ProductDetails () {
  const { id } = useParams(); 
  const [product, setProduct] = useState({});
  const dispatch = useAppDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://admin-djstage.vercel.app/api/products/product-details/${id}`);
        setProduct(response.data.product);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Product Details</h1>
      <h1>Product ID : {product.id}</h1>
      <h1>Product Title : {product.title}</h1>
      <h1>Product Description : {product.description}</h1>
      <h1>Product Price : {product.price}</h1>
      <h1>Product Discount : {product.discount}</h1>
      <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
    </div>
  )
}
