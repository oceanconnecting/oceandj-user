import React from 'react'
import { Truck, Package, ShieldCheck, History } from 'lucide-react'

export const Features = () => {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-4 py-8 md:py-4 lg:py-0">
        {/* Title */}
        {/* <h2 className="items-center text-center text-3xl font-bold md:text-5xl">
          Make every step user-centric
        </h2>
        <p className="mx-auto mb-8 mt-4 max-w-lg text-center text-sm text-gray-500 sm:text-base md:mb-12">
          Lorem ipsum dolor sit amet consectetur adipiscing elit ut
          aliquam,purus sit amet luctus magna fringilla urna
        </p> */}
        {/* List */}
        <ul className="grid gap-5 grid-cols-2 md:grid-cols-4 md:gap-0">
          <li className="flex flex-col items-center gap-6 p-3 md:border-r md:px-10 md:py-4 md:border-gray-300">
            <History className='w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14' />
            <p className="text-sm md:text-base lg:text-lg text-center font-semibold">Free Support 24/7</p>
          </li>
          <li className="flex flex-col items-center gap-6 p-3 md:border-r md:px-10 md:py-4 md:border-gray-300">
            <Truck className='w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14' />
            <p className="text-sm md:text-base lg:text-lg text-center font-semibold">Free shipping over 1000DH</p>
          </li>
          <li className="flex flex-col items-center gap-6 p-3 md:border-r md:px-10 md:py-4 md:border-gray-300">
            <ShieldCheck className='w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14' />
            <p className="text-sm md:text-base lg:text-lg text-center font-semibold">Up to 5 years warranty</p>
          </li>
          <li className="flex flex-col items-center gap-6 p-3 md:px-10 md:py-4">
            <Package className='w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14' />
            <p className="text-sm md:text-base lg:text-lg text-center font-semibold">Free exchange up to 7 Days</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
