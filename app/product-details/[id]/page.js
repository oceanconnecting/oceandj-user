/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { addToCart } from '@/lib/features/cart/cartSlice';
import { useAppDispatch } from '@/lib/hooks';
import axios from 'axios';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react'

export default function ProductDetails() {
  const { id } = useParams(); 
  const [product, setProduct] = useState({});
  const [selectedImage, setSelectedImage] = useState('');
  const dispatch = useAppDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://admin-djstage.vercel.app/api/products/product-details/${id}`);
        setProduct(response.data.product);
        setSelectedImage(response.data.product.images[0]); // Set the first image as default
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const discountedPrice = product.price * (1 - product.discount / 100);

  return (
    <div className="w-full md:my-10 flex flex-col lg:flex-row items-center justify-evenly max-w-7xl mx-auto gap-x-10">
      <div class="px-4 grid gap-4 max-w-3xl">
        <div className='flex items-center justify-center'>
          <img src={selectedImage} alt="Selected product" className="w-[20rem] h-[20rem] md:w-[26rem] md:h-[26rem] object-contain rounded-lg" />
        </div>
        <div class="grid grid-cols-5 gap-4">
          {product.images?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              onClick={() => setSelectedImage(image)}
              className={`w-16 h-16 object-contain cursor-pointer rounded-lg transition-transform duration-300 ${
                selectedImage === image ? "scale-105 border-2 border-yellow-500" : ""
              }`}
            />
          ))}
        </div>
      </div>
      <div className="mt-6 lg:mt-0 md:max-w-2xl w-full flex flex-col px-4 pb-8 lg:p-0">
        <span className="uppercase text-yellow-500 text-sm font-bold tracking-widest">sneaker company</span>
        <h1 className="text-3xl lg:text-5xl font-bold transition-colors mt-4 lg:mt-7">{product.title}</h1>
        <p className="text-grayish_blue-500 dark:text-grayish_blue-400 transition-colors mt-5 lg:mt-11">
          {product.description}
        </p>
        <div className="mt-7 flex justify-between items-center lg:flex-col lg:items-start">
          <div className="flex items-center gap-3 transition-colors">
            <strong className="text-3xl">${discountedPrice.toFixed(2)}</strong>
            <span className="bg-yellow-100 rounded px-2 text-base text-yellow-500 font-bold dark:bg-yellow-700 dark:text-yellow-200 transition-colors">%{product.discount}</span>
          </div>
          <del className="text-lg text-red-500 transition-colors">
            ${product.price}
          </del>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-4 mt-9">
          <div className="px-4 py-3 w-full lg:w-40 rounded-full flex items-center justify-between text-yellow-500 bg-gray-100 transition-colors">
            <button className="">
              <Minus className='w-4 h-4'/>
            </button>
            <span className="font-bold">3</span>
            <button className="">
              <Plus className='w-4 h-4'/>
            </button>
          </div>
          <button
            onClick={() => handleAddToCart(product)}
            className="px-8 py-3 inline-flex items-center justify-center gap-4 rounded-full bg-black active:scale-105 transition-all text-white shadow-button"
          >
            <ShoppingCart className='w-4 h-4'/>
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  )
}
