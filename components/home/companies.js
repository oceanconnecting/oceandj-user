import Image from 'next/image'
import React from 'react'

export const Companies = () => {
  return (
    <section className="py-8 bg-white md:py-12 lg:py-16">
      <div className="px-4 mx-auto max-w-screen-xl md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 pb-2">Shop by brand</h2>
        </div>
        <h3 className='text-center leading-normal text-muted-foreground text-sm md:text-base sm:leading-7'>
          +200 Brands
        </h3>

        <div className="grid items-center w-full grid-cols-3 mx-auto mt-4 md:mt-6 lg:mt-8 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
          <div className='px-6 py-4 border border-gray-400 rounded-lg'>
            <Image width={120} height={60} className="object-contain w-full h-6 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png" alt="" />
          </div>

          <div className='px-6 py-4 border border-gray-400 rounded-lg'>
            <Image width={120} height={60} className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-2.png" alt="" />
          </div>

          <div className='px-6 py-4 border border-gray-400 rounded-lg'>
            <Image width={120} height={60} className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-3.png" alt="" />
          </div>

          <div className='px-6 py-4 border border-gray-400 rounded-lg'>
            <Image width={120} height={60} className="object-contain w-full mx-auto h-7" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-4.png" alt="" />
          </div>

          <div className='px-6 py-4 border border-gray-400 rounded-lg'>
            <Image width={120} height={60} className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-5.png" alt="" />
          </div>

          <div className='px-6 py-4 border border-gray-400 rounded-lg'>
            <Image width={120} height={60} className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-6.png" alt="" />
          </div>

          <div className='px-6 py-4 border border-gray-400 rounded-lg'>
            <Image width={120} height={60} className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-7.png" alt="" />
          </div>

          <div className='px-6 py-4 border border-gray-400 rounded-lg'>
            <Image width={120} height={60} className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-8.png" alt="" />
          </div>

          <div className='px-6 py-4 border border-gray-400 rounded-lg'>
            <Image width={120} height={60} className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-9.png" alt="" />
          </div>

          <div className='px-6 py-4 border border-gray-400 rounded-lg'>
            <Image width={120} height={60} className="object-contain w-full mx-auto h-7" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-10.png" alt="" />
          </div>

          <div className='px-6 py-4 border border-gray-400 rounded-lg'>
            <Image width={120} height={60} className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-11.png" alt="" />
          </div>

          <div className='px-6 py-4 border border-gray-400 rounded-lg'>
            <Image width={120} height={60} className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-12.png" alt="" />
          </div>
        </div>

        <p className="mt-4 text-sm md:text-base text-center text-gray-500 md:mt-6 lg:mt-8">and, 1000+ more companies</p>
      </div>
    </section>
  )
}