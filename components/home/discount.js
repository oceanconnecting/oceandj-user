import Image from 'next/image'
import React from 'react'
import Image1 from '@/images/djimage.jpg'
import Image2 from '@/images/pianoimage.jpg'
import Image3 from '@/images/guitar.jpg'

export const Discount = () => {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10 py-8 md:py-12 lg:py-16">
        {/* Title */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 pb-2">Shop by brand</h2>
        </div>
        <h3 className='text-center leading-normal text-muted-foreground text-sm md:text-base sm:leading-7 pb-6'>
          +200 Brands
        </h3>
        {/* Content */}
        <div className="mx-auto grid justify-items-stretch gap-4 md:grid-cols-2 lg:gap-6">
          {/* Item */}
          <a href="#" className="relative flex h-[300px] items-end [grid-area:1/1/3/2] md:h-auto">
            <Image
              width={400}
              height={400}
              src={Image1}
              alt=""
              className="inline-block h-full w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
              <p className="text-sm font-medium sm:text-xl">Project Name</p>
              <p className="text-sm sm:text-base">Microsoft</p>
            </div>
          </a>
          {/* Item */}
          <a href="#" className="relative flex h-[300px] items-end">
            <Image
              width={400}
              height={400}
              src={Image2}
              alt=""
              className="inline-block h-full w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
              <p className="text-sm font-medium sm:text-xl">Project Name</p>
              <p className="text-sm sm:text-base">Paypal</p>
            </div>
          </a>
          {/* Item */}
          <a href="#" className="relative flex h-[300px] items-end">
            <Image
              width={400}
              height={400}
              src={Image3}
              alt=""
              className="inline-block h-full w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
              <p className="text-sm font-medium sm:text-xl">Project Name</p>
              <p className="text-sm sm:text-base">Airbnb</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
