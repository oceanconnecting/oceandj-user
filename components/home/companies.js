import Image from 'next/image'
import React from 'react'

export const Companies = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">Trusted by world className companies, design teams & popular designers</h2>
        </div>

        <div className="px-6 grid items-center max-w-7xl grid-cols-3 mx-auto mt-5 md:mt-10 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
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

        <p className="mt-8 text-base text-center text-gray-500 md:mt-10 lg:mt-14">and, 1000+ more companies</p>
      </div>
    </section>
  )
}