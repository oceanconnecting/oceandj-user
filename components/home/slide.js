"use client";

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import DJ from "@/images/DJ.jpg";
import DJ2 from "@/images/DJ2.jpg";
import Opera from "@/images/Opera.png";
import React, { useState } from 'react';

export const Slide = () => {
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
      backgroundImage: DJ,
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
      backgroundImage: DJ2,
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
        text: "About Us",
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
        className={`grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 transition-opacity duration-300 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            {slide.title}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl">
            {slide.description}
          </p>
          <a
            href={slide.button1.href}
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
          >
            {slide.button1.text}
          </a>
          <a
            href={slide.button2.href}
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            {slide.button2.text}
          </a>
        </div>
        <div className="mt-0 col-span-5 flex">
          <Image width={400} height={400} src={slide.imageSrc} alt="mockup" className="object-cover w-96 h-96" />
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
      <svg viewBox="0 0 224 12" fill="currentColor" className="w-full -mb-1 text-white" preserveAspectRatio="none">
        <path d="M0,0 C48.8902582,3.13657013 86.2235915,5.7048552 112,5.7048552 C137.776408,5.7048552 175.109742,3.13657013 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
      </svg>
    </section>
  );
};
