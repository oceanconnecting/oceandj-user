import React from 'react'
import { Truck, Package, ShieldCheck, History } from 'lucide-react'

export const Features = () => {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-screen-xl px-4 pb-6 md:pb-8 lg:pb-10 pt-6 md:pt-4 lg:pt-2">
        {/* Title */}
        {/* <h2 className="items-center text-center text-3xl font-bold md:text-5xl">
          Make every step user-centric
        </h2>
        <p className="mx-auto mb-8 mt-4 max-w-lg text-center text-sm text-gray-500 sm:text-base md:mb-12">
          Lorem ipsum dolor sit amet consectetur adipiscing elit ut
          aliquam,purus sit amet luctus magna fringilla urna
        </p> */}
        {/* List */}
        <ul className="grid gap-4 grid-cols-2 md:grid-cols-4 pt-2">
          <li className="flex flex-col items-center gap-2 md:gap-3 lg:gap-4 p-3 border md:px-10 border-gray-300 rounded-xl">
            <History className='w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14' />
            <p className="text-sm md:text-base lg:text-lg text-center font-semibold">Free Support 24/7</p>
          </li>
          <li className="flex flex-col items-center gap-2 md:gap-3 lg:gap-4 p-3 border md:px-10 border-gray-300 rounded-xl">
            <Truck className='w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14' />
            <p className="text-sm md:text-base lg:text-lg text-center font-semibold">Free shipping over 1000DH</p>
          </li>
          <li className="flex flex-col items-center gap-2 md:gap-3 lg:gap-4 p-3 border md:px-10 border-gray-300 rounded-xl">
            <ShieldCheck className='w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14' />
            <p className="text-sm md:text-base lg:text-lg text-center font-semibold">Up to 5 years warranty</p>
          </li>
          <li className="flex flex-col items-center gap-2 md:gap-3 lg:gap-4 p-3 border md:px-10 border-gray-300 rounded-xl">
            <Package className='w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14' />
            <p className="text-sm md:text-base lg:text-lg text-center font-semibold">Free exchange up to 7 Days</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
