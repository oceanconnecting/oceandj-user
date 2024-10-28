"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Link from "next/link";

export default function Types() {
  const [types, setTypes] = useState([]);

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
              Types
            </h2>
            <h3 className='leading-normal text-muted-foreground text-sm md:text-base sm:leading-7'>
              Find the best skateboarding gears from stores around the world
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {types.map((type) => (
            <div key={type.id} className="flex items-center justify-between gap-x-6 border hover:shadow rounded-xl p-3">
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
          ))}
        </div>
      </div>
    </section>
  );
}
