"use client";

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

export const Slider = () => {
  const slides = [
    {
      title: "Payments tool for software companies",
      description:
        "From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.",
      button1: {
        text: "Get started",
        href: "#",
      },
      button2: {
        text: "Speak to Sales",
        href: "#",
      },
      imageSrc: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png",
    },
    {
      title: "Optimize your financial operations",
      description:
        "Manage invoices, track expenses, and stay compliant with a centralized platform tailored to your needs.",
      button1: {
        text: "Learn more",
        href: "#",
      },
      button2: {
        text: "Contact Us",
        href: "#",
      },
      imageSrc: "https://toppng.com/uploads/preview/electric-guitar-11530937008gqwe1aygab.png",
    },
    {
      title: "Optimize your financial w2w2w2w",
      description:
        "Manage invoices, track expenses, and stay compliant with a centralized platform tailored to your needs.",
      button1: {
        text: "Learn more",
        href: "#",
      },
      button2: {
        text: "dededed Us",
        href: "#",
      },
      imageSrc: "https://toppng.com/uploads/preview/electric-guitar-11530937008gqwe1aygab.png",
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

  const slide = slides[currentSlide];

  return (
    <section className="bg-cyan-600 relative">
      {/* Slider */}
      <div className={`grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 transition-opacity duration-300 ${isFading ? "opacity-0" : "opacity-100"}`}>
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            {slide.title}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {slide.description}
          </p>
          <a
            href={slide.button1.href}
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            {slide.button1.text}
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href={slide.button2.href}
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            {slide.button2.text}
          </a>
        </div>
        <div className="mt-0 col-span-5 flex">
          <Image width={400} height={400} src={slide.imageSrc} alt="mockup" className='object-cover w-96 h-96' />
        </div>
      </div>
      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-1 text-black rounded-full hover:bg-gray-300"
      >
        <ChevronLeft className="w-9 h-9" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-1 text-black rounded-full hover:bg-gray-300"
      >
        <ChevronRight className="w-9 h-9" />
      </button>
      {/* Fade-in animation */}
      <svg viewBox="0 0 224 12" fill="currentColor" className="w-full -mb-1 text-white" preserveAspectRatio="none" >
        <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
      </svg>
    </section>
  );
};
