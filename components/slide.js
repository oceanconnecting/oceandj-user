"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import ImageB1 from "@/images/ImageB1.jpg";
import ImageB2 from "@/images/ImageB2.jpg";
import ImageB3 from "@/images/ImageB3.jpg";
import ImageS1 from "@/images/ImageS1.jpg";
import ImageS2 from "@/images/ImageS2.jpg";
import ImageS3 from "@/images/ImageS3.jpg";

const slides = [
  { large: ImageB1, small: ImageS1 },
  { large: ImageB2, small: ImageS2 },
  { large: ImageB3, small: ImageS3 },
];

export function Slide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <React.Fragment key={index}>
            <div className="hidden md:block w-full h-full">
              <Image width={1920} height={400} src={slide.large} alt={`Slide ${index + 1}`} />
            </div>
            <div className="block md:hidden w-full h-full">
              <Image width={600} height={800} src={slide.small} alt={`Slide ${index + 1}`} />
            </div>
          </React.Fragment>
        ))}
      </Slider>
    </div>
  );
}