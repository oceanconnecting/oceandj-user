"use client";

import { useState } from "react";
import { Heart, Eye } from "lucide-react";

const products = [
  {
    id: 1,
    image:
      "https://admin-djstage.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdj-stage.appspot.com%2Fo%2Ftypes%252Fe-guitar_20241021162812.png%3Falt%3Dmedia%26token%3D806dceee-c59a-4b51-a406-5a402d96017f&w=128&q=75",
    discount: "Up to 10% off",
    title: "Microsoft Xbox Series",
    price: "$499",
  },
  {
    id: 2,
    image:
      "https://admin-djstage.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdj-stage.appspot.com%2Fo%2Ftypes%252Fdrums_20241021163026.png%3Falt%3Dmedia%26token%3D3c862ccf-19fe-4538-b037-f93ef7f4fc37&w=128&q=75",
    discount: "Up to 15% off",
    title: "Yamaha Electric Piano",
    price: "$599",
  },
  {
    id: 3,
    image:
      "https://admin-djstage.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdj-stage.appspot.com%2Fo%2Ftypes%252Foriginal-removebg-preview_20241022092649.png%3Falt%3Dmedia%26token%3D4e940b4c-d708-45eb-a377-34189143cf8b&w=128&q=75",
    discount: "Up to 15% off",
    title: "Yamaha Electric Piano",
    price: "$599",
  },
  {
    id: 4,
    image:
      "https://admin-djstage.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdj-stage.appspot.com%2Fo%2Ftypes%252Fe-guitar_20241021162812.png%3Falt%3Dmedia%26token%3D806dceee-c59a-4b51-a406-5a402d96017f&w=128&q=75",
    discount: "Up to 15% off",
    title: "Yamaha Electric Piano",
    price: "$599",
  },
  {
    id: 5,
    image:
      "https://admin-djstage.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdj-stage.appspot.com%2Fo%2Ftypes%252Foriginal-removebg-preview_20241022092649.png%3Falt%3Dmedia%26token%3D4e940b4c-d708-45eb-a377-34189143cf8b&w=128&q=75",
    discount: "Up to 15% off",
    title: "Yamaha Electric Piano",
    price: "$599",
  },
  {
    id: 6,
    image:
      "https://admin-djstage.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdj-stage.appspot.com%2Fo%2Ftypes%252Fdrums_20241021163026.png%3Falt%3Dmedia%26token%3D3c862ccf-19fe-4538-b037-f93ef7f4fc37&w=128&q=75",
    discount: "Up to 15% off",
    title: "Yamaha Electric Piano",
    price: "$599",
  },
  {
    id: 7,
    image:
      "https://admin-djstage.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdj-stage.appspot.com%2Fo%2Ftypes%252Fe-guitar_20241021162812.png%3Falt%3Dmedia%26token%3D806dceee-c59a-4b51-a406-5a402d96017f&w=128&q=75",
    discount: "Up to 15% off",
    title: "Yamaha Electric Piano",
    price: "$599",
  },
];


function SidebarFilter() {
  const [filters, setFilters] = useState({
    categories: [],
    properties: [],
  });

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setFilters((prevState) => ({
      ...prevState,
      categories: prevState.categories.includes(value)
        ? prevState.categories.filter((item) => item !== value)
        : [...prevState.categories, value],
    }));
  };

  const handlePropertyChange = (e) => {
    const value = e.target.value;
    setFilters((prevState) => ({
      ...prevState,
      properties: prevState.properties.includes(value)
        ? prevState.properties.filter((item) => item !== value)
        : [...prevState.properties, value],
    }));
  };

  return (
    <div className="w-full p-4 border border-gray-200 rounded-md">
      <button className="text-gray-600 font-semibold mb-4">Hide Filters</button>

      <div className="mb-6">
        <h4 className="font-semibold mb-2">Categories</h4>
        <div className="flex flex-col space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              value="Admin Templates"
              onChange={handleCategoryChange}
              className="form-checkbox"
            />
            <span>Admin Templates</span>
            <span className="ml-auto text-gray-500">32</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              value="Email Templates"
              onChange={handleCategoryChange}
              className="form-checkbox"
              disabled
            />
            <span>Email Templates</span>
            <span className="ml-auto text-gray-500">0</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              value="Site Templates"
              onChange={handleCategoryChange}
              className="form-checkbox"
            />
            <span>Site Templates</span>
            <span className="ml-auto text-gray-500">162</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              value="Landing Page Templates"
              onChange={handleCategoryChange}
              className="form-checkbox"
            />
            <span>Landing Page Templates</span>
            <span className="ml-auto text-gray-500">148</span>
          </label>
        </div>
      </div>

      {/* Properties Section */}
      <div className="mb-6">
        <h4 className="font-semibold mb-2">Properties</h4>
        <div className="flex flex-col space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              value="Responsive"
              onChange={handlePropertyChange}
              className="form-checkbox"
            />
            <span>Responsive</span>
            <span className="ml-auto text-gray-500">193</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              value="Retina Ready"
              onChange={handlePropertyChange}
              className="form-checkbox"
            />
            <span>Retina Ready</span>
            <span className="ml-auto text-gray-500">173</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              value="PSD Files Included"
              onChange={handlePropertyChange}
              className="form-checkbox"
            />
            <span>PSD Files Included</span>
            <span className="ml-auto text-gray-500">1</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              value="SKETCH Files Included"
              onChange={handlePropertyChange}
              className="form-checkbox"
            />
            <span>SKETCH Files Included</span>
            <span className="ml-auto text-gray-500">3</span>
          </label>
        </div>
      </div>
    </div>
  );
}


export default function Search() {
  return (
    <div className="w-full container mx-auto grid grid-cols-4">
      <div className="col-span-1">
        <SidebarFilter />
      </div>
      <div className="col-span-3 w-full container mx-auto grid grid-cols-4 gap-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="h-52 w-full">
              <a href="#">
                <img
                  className="mx-auto h-full"
                  src={product.image}
                  alt={product.title}
                />
              </a>
            </div>
            <div className="pt-6">
              <div className="mb-4 flex items-center justify-between gap-4">
                <span className="me-2 rounded bg-cyan-500 px-2.5 py-0.5 text-xs font-medium text-white">
                  {product.discount}
                </span>
                <div className="flex items-center justify-end gap-1">
                  <button
                    type="button"
                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only"> Quick look </span>
                    <Eye className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only"> Add to Favorites </span>
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-semibold leading-tight text-gray-900 hover:underline"
              >
                {product.title}
              </a>
              <div className="mt-2 flex items-center justify-between gap-4">
                <p className="text-2xl font-bold leading-tight text-gray-900">
                  {product.price}
                </p>

                <button
                  type="button"
                  className="inline-flex items-center rounded-full bg-black px-5 py-2.5 font-medium text-white text-xs"
                >
                  <svg
                    className="-ms-2 me-2 h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    />
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
