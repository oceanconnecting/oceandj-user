"use client";

import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Search, ShoppingCart, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Logo from "@/images/Logo.jpeg";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://oceandj-dashbourd.vercel.app/api/types/list-types?limit=20"
        );
        setTypes(response.data.types || []);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load types.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [isLoading]);

  const totalQuantityFromStore = useAppSelector((state) => state.cart.totalQuantity);
  const [totalQuantity, setTotalQuantity] = useState(0);
  
  useEffect(() => {
    setTotalQuantity(totalQuantityFromStore); // Update only on the client
  }, [totalQuantityFromStore]);

  // Handle real-time search as user types
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchTerm.trim().length > 1) {
        setIsSearching(true);
        try {
          const response = await axios.get(
            `https://oceandj-dashbourd.vercel.app/api/products/list-products?search=${encodeURIComponent(
              searchTerm
            )}`
          );
          setSearchResults(response.data.products || []);
          setShowSearchResults(true);
        } catch (err) {
          console.error("Error searching products:", err);
        } finally {
          setIsSearching(false);
        }
      } else {
        setShowSearchResults(false);
        setSearchResults([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      setShowSearchResults(false);
      setMobileSearchOpen(false);
      router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  // Handle clicking outside to close search results
  useEffect(() => {
    const handleClickOutside = (event) => {
      const searchContainer = document.getElementById("search-container");
      const mobileSearchContainer = document.getElementById("mobile-search-container");
      
      if (searchContainer && !searchContainer.contains(event.target) &&
          (!mobileSearchContainer || !mobileSearchContainer.contains(event.target))) {
        setShowSearchResults(false);
      }
      
      // Close mobile search when clicking outside
      if (mobileSearchOpen && 
          mobileSearchContainer && 
          !mobileSearchContainer.contains(event.target) &&
          !event.target.closest('[data-mobile-search-toggle]')) {
        setMobileSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileSearchOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
        setDropdownOpen(false);
        setMobileSearchOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to navigate to product
  const handleProductClick = (productTitle) => {
    setShowSearchResults(false);
    setSearchTerm("");
    setMobileSearchOpen(false);
    router.push(`/product-details/${productTitle}`);
  };

  // Toggle mobile search
  const toggleMobileSearch = () => {
    setMobileSearchOpen(!mobileSearchOpen);
    if (!mobileSearchOpen) {
      setTimeout(() => {
        document.getElementById("mobile-search-input")?.focus();
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow w-full">
      {/* Logo and Search */}
      <div
        className={`container mx-auto flex items-center justify-between px-4 max-w-7xl transition-all duration-300 ${
          scrolled ? "py-2" : "py-2"
        }`}
      >
        <Link href="/" className="flex-shrink-0">
          <Image
            src={Logo}
            alt="Logo"
            width={120}
            height={80}
            className={`transition-all duration-300 ${
              scrolled ? "w-[3.5rem] md:w-[4.5rem]" : "w-[3.5rem] md:w-[4.5rem]"
            }`}
          />
        </Link>

        {/* Search Bar */}
        <div
          id="search-container"
          className="hidden lg:flex items-center w-full mr-14 relative"
        >
          <div className="flex items-center w-full border bg-gray-100 rounded-full shadow-sm px-4 max-w-2xl mx-auto">
            <Search
              className={`text-gray-600 ${scrolled ? "w-5 h-5" : "w-5 h-5 lg:w-6 lg:h-6"}`}
              onClick={handleSearch}
            />
            <input
              type="text"
              placeholder="Search for products..."
              className={`w-full bg-transparent outline-none text-gray-600 px-4 ${
                scrolled ? "py-2" : "py-2.5"
              }`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSearch();
                }
              }}
            />
            {isSearching && (
              <div role="status" className="mr-2">
                <svg
                  ariaHidden="true"
                  className="size-5 text-gray-300 animate-spin fill-gray-800"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            )}          
            {searchTerm && (
              <button
                type="button"
                className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
              >
                <X className="size-5" />
              </button>
            )}
          </div>

          {/* Search Results Dropdown */}
          {showSearchResults && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-white max-h-96 overflow-y-auto mt-2 rounded-lg shadow-lg max-w-2xl mx-auto z-50">
              <ul className="divide-y divide-gray-200 p-4">
                {searchResults.map((product) => (
                  <li
                    key={product.id}
                    className="p-3 overflow-auto hover:bg-gray-50 cursor-pointer flex items-center"
                    onClick={() => handleProductClick(product.title)}
                  >
                    {product.images && product.images[0] && (
                      <div className="flex-shrink-0 w-12 h-12 mr-3">
                        <Image
                          src={product.images[0]}
                          alt={product.title}
                          width={48}
                          height={48}
                          className="object-cover rounded-md"
                        />
                      </div>
                    )}
                    <div className="flex-grow">
                      <p className="font-medium text-gray-800">
                        {product.title}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-yellow-600">
                        {product.price} Dhs
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="p-2 border-t w-full text-center">
                <button
                  className="mx-auto py-2 hover:underline text-sm text-gray-500 hover:text-gray-700"
                  onClick={handleSearch}
                >
                  See all results
                </button>
              </div>
            </div>
          )}

          {/* No Results Message */}
          {showSearchResults &&
            searchTerm.trim().length > 2 &&
            searchResults.length === 0 &&
            !isSearching && (
              <div className="absolute top-full left-0 right-0 bg-white p-4 mt-2 rounded-lg shadow-lg max-w-2xl mx-auto z-50 text-center">
                <p className="text-gray-500">
                  No products found matching &quot;{searchTerm}&quot;
                </p>
              </div>
            )}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-5">
          {/* Mobile Search Icon */}
          <button
            className="lg:hidden text-gray-700"
            onClick={toggleMobileSearch}
            data-mobile-search-toggle="true"
          >
            <Search className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>

          <Link href="/cart" className="text-gray-700 relative">
  <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6" />
  {totalQuantity > 0 && (
    <div className="absolute -top-4 -right-3 bg-red-500 text-white rounded-full px-1.5 py-0.5 text-xs">
      {totalQuantity}
    </div>
  )}
</Link>

          <button
            aria-label="Toggle Menu"
            className="lg:hidden"
            onClick={() => setOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5 lg:w-6 lg:h-6" /> : <Menu className="w-5 h-5 lg:w-6 lg:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar Overlay */}
      {mobileSearchOpen && (
        <div 
          id="mobile-search-container"
          className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden flex items-start justify-center pt-16 px-4 animate-fadeIn"
        >
          <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="p-4 flex items-center border-b border-gray-100">
              <Search className="text-gray-500 w-5 h-5 flex-shrink-0" />
              <input
                id="mobile-search-input"
                type="text"
                className="w-full px-3 py-2 outline-none text-gray-700 placeholder-gray-400"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
              <button
                className="ml-2 text-gray-500"
                onClick={() => setMobileSearchOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Mobile Search Results */}
            {showSearchResults && (
              <div className="max-h-96 overflow-y-auto">
                {searchResults.length > 0 ? (
                  <>
                    <ul className="divide-y divide-gray-100">
                      {searchResults.map((product) => (
                        <li
                          key={product.id}
                          className="p-4 hover:bg-gray-50 cursor-pointer transition duration-150 flex items-center"
                          onClick={() => handleProductClick(product.title)}
                        >
                          {product.images && product.images[0] && (
                            <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-md overflow-hidden mr-4">
                              <Image
                                src={product.images[0]}
                                alt={product.title}
                                width={64}
                                height={64}
                                className="object-cover w-full h-full"
                              />
                            </div>
                          )}
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-800 mb-1">{product.title}</h4>
                            <p className="text-yellow-600 font-bold">{product.price} Dhs</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="p-2 border-t w-full text-center">
                      <button
                        className="mx-auto py-2 hover:underline text-sm text-gray-500 hover:text-gray-700"
                        onClick={handleSearch}
                      >
                        See all results
                      </button>
                    </div>
                  </>
                ) : (
                  searchTerm.trim().length > 2 && !isSearching && (
                    <div className="p-8 text-center text-gray-500">
                      <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-gray-100">
                        <Search className="w-8 h-8 text-gray-400" />
                      </div>
                      <p>No products found matching &quot;{searchTerm}&quot;</p>
                    </div>
                  )
                )}
                
                {isSearching && (
                  <div className="flex justify-center items-center p-8">
                    <div role="status">
                      <svg
                        ariaHidden="true"
                        className="size-8 text-gray-300 animate-spin fill-black"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Recent Searches or Suggestions (optional) */}
            {!showSearchResults && !isSearching && (
              <div className="p-4">
                <h4 className="text-sm font-medium text-gray-500 mb-3">Popular Searches</h4>
                <div className="flex flex-wrap gap-2">
                  {["Headphones", "Speakers", "Microphones", "Lights"].map((term) => (
                    <button
                      key={term}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1.5 rounded-full text-sm transition"
                      onClick={() => {
                        setSearchTerm(term);
                      }}
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Desktop Menu */}
      <nav className="hidden lg:flex bg-black">
        <div className="container mx-auto flex justify-center space-x-6 text-white text-sm">
          <Link
            href="/"
            className="font-semibold hover:text-yellow-500 px-3 py-4 transition-all duration-300"
          >
            Home
          </Link>

          {/* Dropdown Menu */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center font-semibold hover:text-yellow-500 px-3 py-4 transition-all duration-300">
              Types <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full min-w-40 left-0 bg-white shadow-lg rounded-md py-2 text-gray-800">
                {types.map((type) => (
                  <Link
                    key={type.title}
                    href={`/categories/${type.id}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {type.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/about-us"
            className="font-semibold hover:text-yellow-500 px-3 py-4 transition-all duration-300"
          >
            About Us
          </Link>
          <Link
            href="/contact-us"
            className="font-semibold hover:text-yellow-500 px-3 py-4 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetContent className="w-80 bg-white shadow-lg rounded-r-lg">
          <SheetHeader className="border-b border-gray-200 pb-4">
            <SheetTitle className="text-xl font-semibold text-gray-900">
              Menu
            </SheetTitle>
          </SheetHeader>

          <div className="flex flex-col space-y-4 mt-6">
            {/* Home Link */}
            <Link
              href="/"
              className="text-gray-800 hover:text-yellow-500 transition-colors duration-300"
            >
              Home
            </Link>

            {/* Navigation Items */}
            {types.map((type) => (
              <Link
                key={type.title}
                href={`/categories/${type.id}`}
                className="text-gray-800 hover:text-yellow-500 transition-colors duration-300"
              >
                {type.title}
              </Link>
            ))}

            {/* Additional Mobile Menu Links */}
            <Link
              href="/about-us"
              className="text-gray-800 hover:text-yellow-500 transition-colors duration-300"
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className="text-gray-800 hover:text-yellow-500 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      
      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </header>
  );
};