import React from 'react'
import Drum from '@/images/Drums.png'
import Image from 'next/image'
import Link from 'next/link'

export const Deal = () => {
  return (
    <section className='bg-black'>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-14 py-8 md:py-12 lg:py-16">
        {/* Component */}
        <div className="grid items-center gap-6 md:gap-8 lg:gap-20 lg:grid-cols-2">
          <div className="mx-auto">
            <Image
              src={Drum}
              alt=""
              className="mx-auto inline-block h-full w-full max-w-md lg:max-w-2xl object-cover"
            />
          </div>
          <div className='text-center lg:text-start'>
            <h1 className="text-white mb-4 text-base font-bold md:text-lg">Deal of the week</h1>
            <h1 className="text-white mb-4 text-xl font-bold md:text-2xl lg:text-3xl">ALESIS TURBO MESH 8PCS DRUM KIT</h1>
            <p className="mx-auto lg:mx-0 mb-4 max-w-lg text-xs text-gray-200 md:text-sm md:mb-6 lg:mb-8">
              Discover the Alesis Turbo Mesh 8pcs Electric Drum Kit at Melodica Music Store, 
              now available at its lowest price ever! Ideal for both home and studio use 
              Boasting 10 Premium Drum Kits from BFD and expandable outputs for additional 
              kits, it&apos;s perfect for any musical style.
            </p>
            <Link href="/" className="inline-block mx-auto items-center rounded-full bg-white px-6 md:px-7 lg:px-8 py-2.5 text-center text-sm font-medium text-black">
              Buy now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
