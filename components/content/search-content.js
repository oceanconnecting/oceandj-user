"use client";

import { useState, useEffect } from "react";
import Image from "next/image"
import Link from "next/link";
import axios from "axios";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { ChevronDown, Filter } from 'lucide-react'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]

const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: true },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SearchContent() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="bg-white">
      <div className="flex">
        <div className="flex-1">
          {/* Main content */}
          <main className="mx-auto max-w-7xl px-4 flex pt-4">
            {/* Desktop filter sidebar */}
            <aside className="hidden lg:block w-96  pr-6 py-4">
              <h2 className="text-lg font-bold text-gray-900">Filters</h2>
              <form className="mt-2">
                <h3 className="sr-only">Categories</h3>
                {filters.map((section) => (
                  <Accordion type="single" collapsible key={section.id}>
                    <AccordionItem value={section.id}>
                      <AccordionTrigger className="font-medium text-gray-900">
                        {section.name}
                      </AccordionTrigger>
                      <AccordionContent className="">
                        <div className="space-y-2">
                          {section.options.map((option, optionIdx) => (
                            <div key={option.value} className="flex items-center">
                              <input
                                defaultValue={option.value}
                                defaultChecked={option.checked}
                                id={`filter-desktop-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label htmlFor={`filter-desktop-${section.id}-${optionIdx}`} className="ml-3 text-gray-500">
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))}
              </form>
            </aside>
            <div className="pl-0 lg:pl-4 py-5 space-y-5">
              <div className="flex items-baseline justify-between ">
                <h1 className="text-sm tracking-tight text-gray-600">Showing 1 – 40 of 267 results</h1>
                <div className="flex items-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                        Sort
                        <ChevronDown className="h-5 w-5 ml-1 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mt-2 w-40 origin-top-right bg-white shadow-2xl ring-1 ring-black ring-opacity-5">
                      {sortOptions.map((option) => (
                        <DropdownMenuItem as="a" href={option.href} key={option.name} className={classNames(
                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          {option.name}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* Mobile filter sheet */}
                  <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                    <SheetTrigger asChild>
                      <button onClick={() => setMobileFiltersOpen(true)} className="lg:hidden -m-2 ml-4 p-2 text-gray-400 hover:text-gray-500">
                        <Filter className="h-5 w-5" aria-hidden="true" />
                        <span className="sr-only">Filters</span>
                      </button>
                    </SheetTrigger>
                    <SheetContent side="left" className="flex flex-col h-full w-full max-w-xs overflow-y-auto bg-white py-4 shadow-xl">
                      <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                      </SheetHeader>

                      {/* Filters for mobile */}
                      <form className="">
                        <h3 className="sr-only">Categories</h3>

                        {filters.map((section) => (
                  <Accordion type="single" collapsible key={section.id}>
                    <AccordionItem value={section.id}>
                      <AccordionTrigger className="font-medium text-gray-900">
                        {section.name}
                      </AccordionTrigger>
                      <AccordionContent className="">
                        <div className="space-y-2">
                          {section.options.map((option, optionIdx) => (
                            <div key={option.value} className="flex items-center">
                              <input
                                defaultValue={option.value}
                                defaultChecked={option.checked}
                                id={`filter-desktop-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label htmlFor={`filter-desktop-${section.id}-${optionIdx}`} className="ml-3 text-gray-500">
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))}
                      </form>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
              {/* Remaining layout and product grid here */}
              <Search />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

function Search() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://admin-djstage.vercel.app/api/products/list-products");
        setProducts(response.data.products);
        console.log(response.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => {
        const discountedPrice = (product.price * (1 - product.discount / 100)).toFixed(2);
        return (
          <div key={product.id} className="group relative flex flex-col border px-5 py-3">
            {product.discount > 0 && (
              <div className="absolute z-20 top-2 right-2 bg-[#F5C872] text-black text-xs font-semibold px-2 py-1 rounded">
                {product.discount}% OFF
              </div>
            )}
            <div className="aspect-square relative mb-4 overflow-hidden">
              {product.images ? (
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-contain duration-500 hover:scale-125"
                  width={250}
                  height={250}
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
            </div>
            <div className="space-y-2">
              <div className="text-xs text-muted-foreground">{product.category.title}</div>
              <Link href={`/product-details/${product.title}`} className="hover:underline line-clamp-1 font-semibold">{product.title}</Link>              
              <div className="flex items-baseline gap-2">
                <span className="font-bold">${discountedPrice}</span>
                {product.discount > 0 && (
                  <span className="text-sm text-muted-foreground line-through text-red-600">
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}