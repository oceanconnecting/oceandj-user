import React from 'react'
import { ProductsCard } from './products-card'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const BestSellers = () => {
  return (
    <section className="px-4 pb-6 md:pb-8 lg:pb-10 pt-16 md:pt-20 lg:pt-22">
      <div className="mx-auto max-w-screen-xl">
        <div className='flex items-end justify-between pb-6'>
          <div className='flex flex-col space-y-3'>
            <h2 className='max-w-sm text-3xl md:text-4xl text-start text-black font-bold leading-[1.1]'>
              Featured Types
            </h2>
            <h3 className='leading-normal text-muted-foreground text-sm md:text-base sm:leading-7'>
              Find the best skateboarding gears from stores around the world
            </h3>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <button className="py-1.5 px-4 rounded-full bg-cyan-700 text-white">
                All
              </button>
              <button className="py-1.5 px-4 rounded-full bg-cyan-700 text-white">
                One
              </button>
            </div>
          </div>
        </div>
        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="h-56 w-full">
              <a href="#">
                <img className="mx-auto h-full" src="http://localhost:3000/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdj-stage.appspot.com%2Fo%2Ftypes%252Fsax_alto_Supreme_verso_verni_20241025112427.webp%3Falt%3Dmedia%26token%3Dc417b2ce-6e27-4282-b4e3-3bd27a687479&w=128&q=75" alt="" />
              </a>
            </div>

            <div className="pt-6">
              <div className="mb-4 flex items-center justify-end gap-4">
                <div className="flex items-center justify-end gap-1">
                  <button type="button" data-tooltip-target="tooltip-quick-look-5" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                    <span className="sr-only"> Quick look </span>
                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                      <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </button>
                  <div id="tooltip-quick-look-5" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300" data-popper-placement="top">
                    Quick look
                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                  </div>

                  <button type="button" data-tooltip-target="tooltip-add-to-favorites-5" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                    <span className="sr-only"> Add to Favorites </span>
                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
                    </svg>
                  </button>
                  <div id="tooltip-add-to-favorites-5" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300" data-popper-placement="top">
                    Add to favorites
                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                  </div>
                </div>
              </div>

              <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline">Microsoft Xbox Series X 1TB Gaming Console</a>

              <div className="mt-4 flex items-center justify-between gap-4">
                <p className="text-2xl font-extrabold leading-tight text-gray-900">$499</p>

                <button type="button" className="inline-flex items-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300">
                  <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="h-56 w-full">
              <a href="#">
                <img className="mx-auto h-full" src="http://localhost:3000/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdj-stage.appspot.com%2Fo%2Ftypes%252Fsax_alto_Supreme_verso_verni_20241025112427.webp%3Falt%3Dmedia%26token%3Dc417b2ce-6e27-4282-b4e3-3bd27a687479&w=128&q=75" alt="" />
              </a>
            </div>

            <div className="pt-6">
              <div className="mb-4 flex items-center justify-end gap-4">
                <div className="flex items-center justify-end gap-1">
                  <button type="button" data-tooltip-target="tooltip-quick-look-5" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                    <span className="sr-only"> Quick look </span>
                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                      <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </button>
                  <div id="tooltip-quick-look-5" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300" data-popper-placement="top">
                    Quick look
                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                  </div>

                  <button type="button" data-tooltip-target="tooltip-add-to-favorites-5" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                    <span className="sr-only"> Add to Favorites </span>
                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
                    </svg>
                  </button>
                  <div id="tooltip-add-to-favorites-5" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300" data-popper-placement="top">
                    Add to favorites
                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                  </div>
                </div>
              </div>

              <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline">Microsoft Xbox Series X 1TB Gaming Console</a>

              <div className="mt-4 flex items-center justify-between gap-4">
                <p className="text-2xl font-extrabold leading-tight text-gray-900">$499</p>

                <button type="button" className="inline-flex items-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300">
                  <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="h-56 w-full">
              <a href="#">
                <img className="mx-auto h-full" src="http://localhost:3000/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdj-stage.appspot.com%2Fo%2Ftypes%252Fsax_alto_Supreme_verso_verni_20241025112427.webp%3Falt%3Dmedia%26token%3Dc417b2ce-6e27-4282-b4e3-3bd27a687479&w=128&q=75" alt="" />
              </a>
            </div>

            <div className="pt-6">
              <div className="mb-4 flex items-center justify-end gap-4">
                <div className="flex items-center justify-end gap-1">
                  <button type="button" data-tooltip-target="tooltip-quick-look-5" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                    <span className="sr-only"> Quick look </span>
                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                      <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </button>
                  <div id="tooltip-quick-look-5" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300" data-popper-placement="top">
                    Quick look
                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                  </div>

                  <button type="button" data-tooltip-target="tooltip-add-to-favorites-5" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                    <span className="sr-only"> Add to Favorites </span>
                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
                    </svg>
                  </button>
                  <div id="tooltip-add-to-favorites-5" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300" data-popper-placement="top">
                    Add to favorites
                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                  </div>
                </div>
              </div>

              <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline">Microsoft Xbox Series X 1TB Gaming Console</a>

              <div className="mt-4 flex items-center justify-between gap-4">
                <p className="text-2xl font-extrabold leading-tight text-gray-900">$499</p>

                <button type="button" className="inline-flex items-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300">
                  <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="h-56 w-full">
              <a href="#">
                <img className="mx-auto h-full" src="http://localhost:3000/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdj-stage.appspot.com%2Fo%2Ftypes%252Fsax_alto_Supreme_verso_verni_20241025112427.webp%3Falt%3Dmedia%26token%3Dc417b2ce-6e27-4282-b4e3-3bd27a687479&w=128&q=75" alt="" />
              </a>
            </div>

            <div className="pt-6">
              <div className="mb-4 flex items-center justify-end gap-4">
                <div className="flex items-center justify-end gap-1">
                  <button type="button" data-tooltip-target="tooltip-quick-look-5" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                    <span className="sr-only"> Quick look </span>
                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                      <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </button>
                  <div id="tooltip-quick-look-5" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300" data-popper-placement="top">
                    Quick look
                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                  </div>

                  <button type="button" data-tooltip-target="tooltip-add-to-favorites-5" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                    <span className="sr-only"> Add to Favorites </span>
                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
                    </svg>
                  </button>
                  <div id="tooltip-add-to-favorites-5" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300" data-popper-placement="top">
                    Add to favorites
                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                  </div>
                </div>
              </div>

              <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline">Microsoft Xbox Series X 1TB Gaming Console</a>

              <div className="mt-4 flex items-center justify-between gap-4">
                <p className="text-2xl font-extrabold leading-tight text-gray-900">$499</p>

                <button type="button" className="inline-flex items-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300">
                  <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end mt-4">
          <Link href='/types' className='text-sm flex gap-1 text-gray-500 hover:translate-x-1 hover:text-black transition-all' >
            Shop the collection <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
