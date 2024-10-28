"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import Link from "next/link";

export const Types = () => {
  const [types, setTypes] = useState([]);
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        }
      }
    ]
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://admin-djstage.vercel.app/api/types/list-types");
        setTypes(response.data.types);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className='space-y-10 px-6 sm:px-8 lg:px-10 py-10 md:pt-12 lg:pt-16 sm:pb-32'>
      <div className="mx-auto md:max-w-4xl lg:max-w-7xl">
        <div className='flex items-end justify-between pb-6'>
          <div className='flex flex-col space-y-3'>
            <h2 className='max-w-sm text-3xl md:text-4xl text-start text-black font-bold leading-[1.1]'>
              Featured Types
            </h2>
            <h3 className='leading-normal text-muted-foreground text-sm md:text-base sm:leading-7'>
              Find the best skateboarding gears from stores around the world
            </h3>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full bg-cyan-700" onClick={previous}>
                <ChevronLeft className="w-6 h-6 text-white"/>
              </button>
              <button className="p-2 rounded-full bg-cyan-700" onClick={next}>
                <ChevronRight className="w-6 h-6 text-white"/>
              </button>
            </div>
          </div>
        </div>
        <Slider ref={slider => { sliderRef = slider }} {...settings}>
          {types.slice(0, 8).map((type) => (
            <div key={type.id} className="sm:px-2">
              <div className="flex items-center justify-between gap-x-6 border hover:shadow rounded-xl p-4">
                <Image
                  width={100}
                  height={100}
                  src={type.image} 
                  alt={type.title} 
                  className="h-20 w-20 md:h-28 md:w-28" 
                />
                <div className="pr-4">
                  <h3 className="text-base font-bold text-gray-800">{type.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex items-center justify-end mt-4">
          <Link href='/types' className='text-sm flex gap-1 text-gray-500 hover:translate-x-1 hover:text-black transition-all' >
            Shop the collection <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
