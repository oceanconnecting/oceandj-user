import React from 'react';
import Drum from '@/images/Drums.png';
import Image from 'next/image';
import Link from 'next/link';

export const Deal = () => {
  return (
    <div className="relative bg-black text-white overflow-hidden">

      <div className="px-4 py-8 lg:py-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-8 items-center">
        <div className="relative aspect-square flex items-center justify-center">
          <Image
            src={Drum}
            alt="Alesis Turbo Mesh 8pcs Electric Drum Kit"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-gray-400 text-sm md:text-base font-semibold">DEAL OF THE WEEK</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              ALESIS <span className="text-yellow-500">TURBO MESH</span>
              <br />
              8PCS DRUM KIT
            </h1>
          </div>

          <p className="text-gray-300 line-clamp-4">
            Discover the Alesis Turbo Mesh 8pcs Electric Drum Kit at Melodica Music Store,
            now available at its lowest price ever! Ideal for both home and studio use.
            now available at its lowest price ever! Ideal for both home and studio use.
            now available at its lowest price ever! Ideal for both home and studio use.
            now available at its lowest price ever! Ideal for both home and studio use.
          </p>

          <div className="space-y-4">
            <p className="text-red-500 font-bold text-xl">GET EXTRA 66% OFF</p>
            <p className="text-2xl md:text-4xl font-semibold text-yellow-500">
              $499<span className="ml-2 text-lg text-muted-foreground line-through text-white">$1299</span>
            </p>
          </div>

          <button className="bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-full font-semibold">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};
