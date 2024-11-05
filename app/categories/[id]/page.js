/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://admin-djstage.vercel.app/api/categories/list-categories?limit=20&typeId=${id}`);
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (id) fetchData();
  }, [id]);

  return (
    <section className='space-y-10 px-4 pb-6 md:pb-8 lg:pb-10 pt-6 md:pt-8 lg:pt-10'>
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
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {categories.map((category) => (
            <div key={category.id} className="">
              <Link href={`/products/${category.id}`} className="flex items-center justify-between gap-x-6 border hover:shadow rounded-xl px-3 md:px-4 lg:px-6 py-3">
                {category.image ? (
                  <Image
                    width={100}
                    height={100}
                    src={category.image} 
                    alt={category.title} 
                    className="h-10 w-10 md:h-12 md:w-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16" 
                  />
                ) : (
                  <div className="h-10 w-10 md:h-12 md:w-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-gray-200"></div>
                )}
                <div className="pr-4">
                  <h3 className="text-base font-bold text-gray-800">{category.title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
