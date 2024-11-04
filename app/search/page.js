"use client";

import { useState, useEffect } from "react";
import { Heart, Eye, ShoppingCart, Plus } from "lucide-react";
import Image from "next/image"
import Link from "next/link";
import HHH from "@/images/hhh.png"
import axios from "axios";

function SidebarFilter() {
  const [filters, setFilters] = useState({
    categories: [],
    properties: [],
  });

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setFilters((prevState) => ({
      ...prevState,
      categories: prevState.categories.includes(value)
        ? prevState.categories.filter((item) => item !== value)
        : [...prevState.categories, value],
    }));
  };

  const handlePropertyChange = (e) => {
    const value = e.target.value;
    setFilters((prevState) => ({
      ...prevState,
      properties: prevState.properties.includes(value)
        ? prevState.properties.filter((item) => item !== value)
        : [...prevState.properties, value],
    }));
  };

  return (
    <div className="mb-4 max-w-none md:max-w-lg md:border-r pr-8">
      <form name="wf-form-Filter-2" method="get" className="flex-col gap-6">
        {/* Filters title */}
        <div className="mb-6 flex items-center justify-between py-4 [border-bottom:1px_solid_rgb(217,_217,_217)]">
          <h5 className="text-xl font-bold">Filters</h5>
          <a href="#" className="text-sm">
            <p>Clear all</p>
          </a>
        </div>
        {/* Search input */}
        <input type="text" className="mb-10 block h-9 min-h-[44px] w-full rounded-md border border-solid border-[#cccccc] bg-[#f2f2f7] bg-[16px_center] bg-no-repeat py-3 pl-11 pr-4 text-sm font-bold text-[#333333] [background-size:18px] [border-bottom:1px_solid_rgb(215,_215,_221)]" placeholder="Search" style={{backgroundImage: 'url("https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a3a33cd5dc368f46daaa_MagnifyingGlass.svg")'}} />
        {/* Categories */}
        <div className="flex flex-col gap-6">
          <p className="font-semibold">Categories</p>
          <div className="flex flex-wrap items-center gap-2">
            <a href="#" className="flex gap-3 rounded-md bg-[#f2f2f7] p-3 font-semibold">
              <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a3a33cd5dc368f46daab_design.svg" alt="" className="inline-block" />
              <p>Design</p>
            </a>
            <a href="#" className="flex gap-3 rounded-md bg-[#f2f2f7] p-3 font-semibold">
              <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a3a33cd5dc368f46daae_illustration.svg" alt="" className="inline-block" />
              <p>Illustrations</p>
            </a>
            <a href="#" className="flex gap-3 rounded-md bg-[#f2f2f7] p-3 font-semibold">
              <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a3a33cd5dc368f46daad_icons.svg" alt="" className="inline-block" />
              <p>Icons</p>
            </a>
            <a href="#" className="flex gap-3 rounded-md bg-[#f2f2f7] p-3 font-semibold">
              <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a3a33cd5dc368f46daaf_plugins.svg" alt="" className="inline-block" />
              <p>Plugins</p>
            </a>
            <a href="#" className="flex gap-3 rounded-md bg-[#f2f2f7] p-3 font-semibold">
              <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a3a33cd5dc368f46daac_color%20palette.svg" alt="" className="inline-block" />
              <p>Color Palette</p>
            </a>
          </div>
        </div>
        {/* Divider */}
        <div className="mb-6 mt-6 h-px w-full bg-[#d9d9d9]"></div>
        {/* Rating */}
        <div className="flex flex-col gap-6">
          <p className="font-semibold">Rating</p>
          <div className="flex flex-wrap gap-2 lg:justify-between">
            <div className="flex h-9 w-14 cursor-pointer items-center justify-center rounded-md border border-solid border-[#cccccc] bg-[#f2f2f7] text-sm font-semibold">
              <span>1</span>
            </div>
            <div className="flex h-9 w-14 cursor-pointer items-center justify-center rounded-md border border-solid border-[#cccccc] bg-black text-sm font-semibold text-white">
              <span>2</span>
            </div>
            <div className="flex h-9 w-14 cursor-pointer items-center justify-center rounded-md border border-solid border-[#cccccc] bg-[#f2f2f7] text-sm font-semibold">
              <span>3</span>
            </div>
            <div className="flex h-9 w-14 cursor-pointer items-center justify-center rounded-md border border-solid border-[#cccccc] bg-[#f2f2f7] text-sm font-semibold">
              <span>4</span>
            </div>
            <div className="flex h-9 w-14 cursor-pointer items-center justify-center rounded-md border border-solid border-[#cccccc] bg-[#f2f2f7] text-sm font-semibold">
              <span>5</span>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="mb-6 mt-6 h-px w-full bg-[#d9d9d9]"></div>
        {/* FIlter One */}
        <div className="flex flex-col gap-6">
          <div className="flex cursor-pointer items-center justify-between py-4 [border-top:1px_solid_rgba(0,_0,_0,_0)] md:py-0">
            <p className="font-semibold">FIlter One</p>
            <a href="#" className="inline-block text-sm text-black">
              <p>Clear</p>
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <label className="flex items-center text-sm font-medium">
              <div className="mr-3 h-5 w-5 cursor-pointer rounded-sm border border-solid bg-[#f2f2f7]"></div>
              <span className="inline-block cursor-pointer" htmlFor="Filter-One-Option-1">Option One</span>
            </label>
            <label className="flex items-center text-sm font-medium">
              <div className="mr-3 h-5 w-5 cursor-pointer rounded-sm border border-solid bg-[#f2f2f7]"></div>
              <span className="inline-block cursor-pointer" htmlFor="Filter-One-Option-1">Option Two</span>
            </label>
            <label className="flex items-center text-sm font-medium">
              <div className="mr-3 h-5 w-5 cursor-pointer rounded-sm border border-solid bg-[#f2f2f7]"></div>
              <span className="inline-block cursor-pointer" htmlFor="Filter-One-Option-1">Option Three</span>
            </label>
            <label className="flex items-center text-sm font-medium">
              <div className="mr-3 h-5 w-5 cursor-pointer rounded-sm border border-solid bg-[#f2f2f7]"></div>
              <span className="inline-block cursor-pointer" htmlFor="Filter-One-Option-1">Option Four</span>
            </label>
            <label className="flex items-center text-sm font-medium">
              <div className="mr-3 h-5 w-5 cursor-pointer rounded-sm border border-solid bg-[#f2f2f7]"></div>
              <span className="inline-block cursor-pointer" htmlFor="Filter-One-Option-1">Option Five</span>
            </label>
          </div>
        </div>
        {/* Divider */}
        <div className="mb-6 mt-6 h-px w-full bg-[#d9d9d9]"></div>
        {/* FIlter Two */}
        <div className="flex flex-col gap-6">
          <div className="flex cursor-pointer items-center justify-between py-4 [border-top:1px_solid_rgba(0,_0,_0,_0)] md:py-0">
            <p className="font-semibold">FIlter Two</p>
            <a href="#" className="inline-block text-sm text-black">
              <p>Clear</p>
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <label className="flex items-center font-medium">
              <div className="mr-3 mt-1 h-5 w-5 rounded-full border border-solid border-[#cccccc] bg-[#f2f2f7]"></div>
              <span className="inline-block cursor-pointer" htmlFor="Filter-One-Option-1">All</span>
            </label>
            <label className="flex items-center font-medium">
              <div className="mr-3 mt-1 h-5 w-5 rounded-full border border-solid border-[#cccccc] bg-[#f2f2f7]"></div>
              <span className="inline-block cursor-pointer" htmlFor="Filter-One-Option-1">Option One</span>
            </label>
            <label className="flex items-center font-medium">
              <div className="mr-3 mt-1 h-5 w-5 rounded-full border border-solid border-[#cccccc] bg-[#f2f2f7]"></div>
              <span className="inline-block cursor-pointer" htmlFor="Filter-One-Option-1">Option Two</span>
            </label>
            <label className="flex items-center font-medium">
              <div className="mr-3 mt-1 h-5 w-5 rounded-full border border-solid border-[#cccccc] bg-[#f2f2f7]"></div>
              <span className="inline-block cursor-pointer" htmlFor="Filter-One-Option-1">Option Three</span>
            </label>
            <label className="flex items-center font-medium">
              <div className="mr-3 mt-1 h-5 w-5 rounded-full border border-solid border-[#cccccc] bg-[#f2f2f7]"></div>
              <span className="inline-block cursor-pointer" htmlFor="Filter-One-Option-1">Option Four</span>
            </label>
            <label className="flex items-center font-medium">
              <div className="mr-3 mt-1 h-5 w-5 rounded-full border border-solid border-[#cccccc] bg-[#f2f2f7]"></div>
              <span className="inline-block cursor-pointer" htmlFor="Filter-One-Option-1">Option Five</span>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}


export default function Search() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://admin-djstage.vercel.app/api/products/list-products");
        setProducts(response.data.products);
        console.log(response.data.products);
        console.log(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full container mx-auto max-w-[90rem] grid grid-cols-1 md:grid-cols-4 gap-4 px-4 border-t mt-10">
      <div className="md:col-span-1">
        <SidebarFilter />
      </div>
      <div className="mt-4 md:col-span-3 w-full container mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="">
            <div className="rounded-lg border border-gray-300 bg-white p-5 shadow-sm">
              <div className="h-56 w-full border-b border-gray-300">
                <Link href="/">
                  <Image width={200} height={200} className="mx-auto h-full" src={product.images[0]} alt={product.name} />
                </Link>
              </div>
              <div className="pt-5">
                <Link href="/" className="text-lg font-semibold leading-tight text-gray-900 hover:underline">
                  {product.title}
                </Link>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <p className="text-2xl font-bold">
                    <span>${product.price}</span>
                    <span className="text-base text-red-400 pl-2">${product.price}</span>
                  </p>
                  <button type="button" className="border border-black inline-flex items-center gap-x-1 rounded-full bg-black hover:bg-white p-2 text-sm font-medium text-white hover:text-black">
                    <Plus className="w-5 h-5"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
