import Product from "@/images/preview.jpg";
import Image from "next/image";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { Heart } from "lucide-react";
import { X } from "lucide-react";

export default function Checkout() {
  return (
    <section className="bg-white py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Shopping Cart</h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm  md:p-6">
                <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                  <a href="#" className="shrink-0 md:order-1">
                    <Image width={200} height={100} className="h-20 w-20" src={Product} alt="imac image" />
                  </a>

                  <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
                  <div className="flex items-center justify-between md:order-3 md:justify-end">
                    <div className="flex items-center">
                      <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-100">
                        <Plus className="w-3 h-3"/>
                      </button>
                      <input type="text" id="counter-input" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0" placeholder="" value="2" required />
                      <button type="button" id="increment-button" data-input-counter-increment="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-100">
                        <Minus className="w-3 h-3"/>
                      </button>
                    </div>
                    <div className="text-end md:order-4 md:w-32">
                      <p className="text-base font-bold text-gray-900">$1,499</p>
                    </div>
                  </div>

                  <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                    <p className="text-base font-medium text-gray-900">The J&D L80 Electric Guitar, Transparent Black</p>

                    <div className="flex items-center gap-5">
                      <button type="button" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline">
                        <Heart className="w-4 h-4 mr-1"/>
                        Add to Favorites
                      </button>

                      <button type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline">
                        <X className="w-4 h-4 mr-1"/>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}
