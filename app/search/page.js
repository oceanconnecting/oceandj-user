"use client";

import { useState, useEffect } from "react";
import Image from "next/image"
import Link from "next/link";
import axios from "axios";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { ChevronDown, Filter, Grid, Plus } from 'lucide-react'

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

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="bg-white">
      <div className="flex">
        <div className="flex-1">
          {/* Main content */}
          <main className="mx-auto max-w-7xl px-4">
            <div className="flex items-baseline justify-between border-b border-gary-400 pb-6 pt-8">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>
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

                <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                  <Grid className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">View grid</span>
                </button>

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
                    <form className="mt-4 border-t border-gray-200">
                      <h3 className="sr-only">Categories</h3>

                      {filters.map((section) => (
                        <Accordion type="single" collapsible key={section.id}>
                          <AccordionItem value={section.id}>
                            <AccordionTrigger className="font-medium text-gray-900">
                              {section.name}
                            </AccordionTrigger>
                            <AccordionContent className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      defaultValue={option.value}
                                      defaultChecked={option.checked}
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      type="checkbox"
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label htmlFor={`filter-mobile-${section.id}-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-gray-500">
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
            <div className='flex pt-4'>
              {/* Desktop filter sidebar */}
              <aside className="hidden lg:block w-72  pr-6 py-4">
                <h2 className="text-lg font-bold text-gray-900">Filters</h2>
                <form className="mt-4">
                  <h3 className="sr-only">Categories</h3>
                  {filters.map((section) => (
                    <Accordion type="single" collapsible key={section.id}>
                      <AccordionItem value={section.id}>
                        <AccordionTrigger className="font-medium text-gray-900">
                          {section.name}
                        </AccordionTrigger>
                        <AccordionContent className="pt-6">
                          <div className="space-y-6">
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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="md:col-span-3 w-full container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 pl-0 lg:pl-5 py-5">
      {products.map((product) => (
        <div key={product.id} className="rounded-lg border border-gray-300 bg-white p-5 shadow-sm">
          <div className="h-56 w-full border-b border-gray-300">
            <Image
              width={200}
              height={200}
              className="mx-auto h-full"
              src={product.images[0]}
              alt={product.name}
            />
          </div>
          <div className="pt-5">
            <Link href={`/product-details/${product.id}`} className="text-lg font-semibold leading-tight text-gray-900 hover:underline">
              {product.title}
            </Link>
            <div className="mt-3 flex items-center justify-between gap-3">
              <p className="text-2xl font-bold">
                <span>${product.price}</span>
              </p>
              <button
                type="button"
                className="border border-black inline-flex items-center gap-x-1 rounded-full bg-black hover:bg-white p-2 text-sm font-medium text-white hover:text-black"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}