"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Slider from "react-slick";
import Image from "next/image";
import HHH from "@/images/hhh.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        zIndex: 10,
        marginRight: "26px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(250,204,21, 1)",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        cursor: "pointer",
        paddingLeft: "4px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.2s ease",
      }}
      onClick={onClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        marginLeft: "26px",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(250,204,21, 1)",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        cursor: "pointer",
        paddingRight: "4px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.2s ease",
      }}
      onClick={onClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </div>
  );
}

export const BestSellers = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
    ]
  };
  
  const products = [
    {
      id: 1,
      title: "Sax Alto Supreme Verso Verni",
      image: HHH,
      price: 299.99,
      discount: 10,
      brand: "Yamaha",
      category: "Wind Instruments"
    },
    {
      id: 2,
      title: "Sax Tenor Supreme Verso Verni",
      image: HHH,
      price: 399.99,
      discount: 15,
      brand: "Yamaha",
      category: "Wind Instruments"
    },
    {
      id: 3,
      title: "Electric Guitar Fender Stratocaster",
      image: HHH,
      price: 699.99,
      discount: 20,
      brand: "Fender",
      category: "String Instruments"
    },
    {
      id: 4,
      title: "Digital Piano Yamaha P-125",
      image: HHH,
      price: 499.99,
      discount: 5,
      brand: "Yamaha",
      category: "Keyboard Instruments"
    },
    {
      id: 5,
      title: "Drum Set Pearl Export",
      image: HHH,
      price: 899.99,
      discount: 25,
      brand: "Pearl",
      category: "Percussion Instruments"
    },
    {
      id: 6,
      title: "Flute Gemeinhardt 3OB",
      image: HHH,
      price: 249.99,
      discount: 0,
      brand: "Gemeinhardt",
      category: "Wind Instruments"
    },
    {
      id: 7,
      title: "Violin Yamaha V3 Series",
      image: HHH,
      price: 199.99,
      discount: 10,
      brand: "Yamaha",
      category: "String Instruments"
    },
    {
      id: 8,
      title: "Trumpet Bach TR300H2",
      image: HHH,
      price: 349.99,
      discount: 15,
      brand: "Bach",
      category: "Brass Instruments"
    },
    {
      id: 9,
      title: "Acoustic Guitar Gibson J-45",
      image: HHH,
      price: 1099.99,
      discount: 10,
      brand: "Gibson",
      category: "String Instruments"
    },
    {
      id: 10,
      title: "Keyboard Roland FA-08",
      image: HHH,
      price: 1199.99,
      discount: 20,
      brand: "Roland",
      category: "Keyboard Instruments"
    }
  ];

  return (
    <section className="px-4 py-10 md:py-12 lg:py-14">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex items-end justify-between pb-6">
          <div className="flex flex-col space-y-3">
            <h2 className="max-w-sm text-2xl md:text-3xl lg:text-4xl text-start text-black font-bold leading-[1.1]">
              Featured Types
            </h2>
            <h3 className="leading-normal text-muted-foreground text-sm md:text-base sm:leading-7">
              Find the best skateboarding gears from stores around the world
            </h3>
          </div>
        </div>
        <div className="mb-4 md:mb-8 space-x-4">
          <Slider {...settings} className="flex items-center gap-4">
            {products.map((product) => {
              const discountedPrice = (product.price * (1 - product.discount / 100)).toFixed(2);
              return (
                <div key={product.id} className="group relative flex flex-col border px-5 py-3 mr-4">
                  {product.discount > 0 && (
                    <div className="absolute top-2 right-2 bg-[#F5C872] text-black text-xs font-semibold px-2 py-1 rounded">
                      {product.discount}% OFF
                    </div>
                  )}
                  <div className="aspect-square relative mb-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain"
                      width={250}
                      height={250}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-sm text-muted-foreground">{product.category}</div>
                    <div className="font-semibold">{product.brand}</div>
                    <div className="text-sm line-clamp-1">{product.title}</div>
                    
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold">$ {discountedPrice}</span>
                      {product.discount > 0 && (
                        <span className="text-sm text-muted-foreground line-through text-red-600">
                          $ {product.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="flex items-center justify-end">
          <Link href="/types" className="text-sm flex gap-1 text-gray-500 hover:translate-x-1 hover:text-black transition-all">
            Shop the collection <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}