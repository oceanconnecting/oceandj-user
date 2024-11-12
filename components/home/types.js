"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Types = () => {
  const [types, setTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://admin-djstage.vercel.app/api/types/list-types?limit=20");
        setTypes(response.data.types);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!types.length) {
    return <div>No types available.</div>;
  }

  return (
    <section className="space-y-10 px-4 py-8 md:py-10 lg:py-12">
      <div className="mx-auto md:max-w-4xl lg:max-w-7xl">
        <div className="flex items-end justify-between pb-6">
          <div className="flex flex-col space-y-3">
            <h2 className="max-w-sm text-3xl md:text-4xl text-start text-black font-bold leading-[1.1]">
              Featured Types
            </h2>
            <h3 className="leading-normal text-muted-foreground text-sm md:text-base sm:leading-7">
              Find the best skateboarding gears from stores around the world
            </h3>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full bg-yellow-500" onClick={previous}>
                <ChevronLeft className="w-6 h-6 text-white"/>
              </button>
              <button className="p-2 rounded-full bg-yellow-500" onClick={next}>
                <ChevronRight className="w-6 h-6 text-white"/>
              </button>
            </div>
          </div>
        </div>
          <Slider ref={slider => { sliderRef = slider }} {...settings}>
            {types.map((type) => (
              <div key={type.id} className="">
                <Link href={`/categories/${type.id}`} className="grid">
                  <div className="mx-auto w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 xl:w-36 xl:h-36 flex items-center justify-center rounded-full bg-slate-100 overflow-hidden">
                    <Image
                      width={100}
                      height={100}
                      src={type.image}
                      alt={type.title}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-base text-center font-bold text-gray-800">
                      {type.title}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
            
          </Slider>
      </div>
    </section>
  );
};
