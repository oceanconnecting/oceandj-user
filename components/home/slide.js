/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import DJ from "@/images/DJ.jpg";
import DJ2 from "@/images/DJ2.jpg";
import Opera from "@/images/Opera.png";
import React, { useState, useEffect } from 'react';

export const Slide = () => {
  const slides = [
    {
      title: "Get Extra 20% Off",
      description:
        "On all guitars",
      button: {
        text: "Buy now",
        href: "#",
      },
      imageSrc: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png",
      backgroundImage: DJ,
    },
    {
      title: "Get Extra 20% Off",
      description:
        "On all guitars",
      button: {
        text: "Buy now",
        href: "#",
      },
      imageSrc: "https://toppng.com/uploads/preview/electric-guitar-11530937008gqwe1aygab.png",
      backgroundImage: DJ2,
    },
    {
      title: "Get Extra 20% Off",
      description:
        "On all guitars",
      button: {
        text: "Buy now",
        href: "#",
      },
      imageSrc: "https://toppng.com/uploads/preview/electric-guitar-11530937008gqwe1aygab.png",
      backgroundImage: Opera,
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);
  
  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      setIsFading(false);
    }, 300);
  };
  
  const handlePrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
      setIsFading(false);
    }, 300);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
  
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(${slide.backgroundImage.src})`,
      }}
    >
      {/* Slider */}
      <div
        className={`grid max-w-screen-xl px-4 py-6 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12 transition-opacity duration-300 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="mr-auto place-self-center lg:col-span-7">
          <p className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            {slide.title}
          </p>
          <h1 className="max-w-2xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-3xl xl:text-4xl text-white">
            {slide.description}
          </h1>
          <a
            href={slide.button.href}
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-full bg-gray-100"
          >
            {slide.button.text}
          </a>
        </div>
        <div className="mt-0 col-span-5 flex">
          <Image width={400} height={400} src={slide.imageSrc} alt="mockup" className="object-cover w-96 h-96" />
        </div>
      </div>
      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        className="absolute lg:top-64 top-1/2 left-4 transform -translate-y-1/2 p-1 text-white hover:text-black rounded-full hover:bg-white"
      >
        <ChevronLeft className="w-9 h-9" />
      </button>
      <button
        onClick={handleNext}
        className="absolute lg:top-64 top-1/2 right-4 transform -translate-y-1/2 p-1 text-white hover:text-black rounded-full hover:bg-white"
      >
        <ChevronRight className="w-9 h-9" />
      </button>

      {/* Fade-in animation */}
      <svg viewBox="0 0 224 12" fill="currentColor" className="w-full -mb-1 text-white" preserveAspectRatio="none">
        <path d="M0,0 C48.8902582,3.13657013 86.2235915,5.7048552 112,5.7048552 C137.776408,5.7048552 175.109742,3.13657013 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
      </svg>
    </section>
  );
};
