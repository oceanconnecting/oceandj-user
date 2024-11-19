"use client";

import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  Heart,
  ChevronDown,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import LogoBlack from "@/images/Logo-Black.png";

export const Navbar = () => {
  const [types, setTypes] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const navigationItems = [
    { title: "Brands", href: "/" },
    { title: "Hot Deals", href: "/" },
    { title: "New Arrival", href: "/" },
    { title: "Bargain Bin", href: "/" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
        setDropdownOpen(false);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://admin-djstage.vercel.app/api/types/list-types?limit=20"
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
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow w-full">
      {/* Logo and Search */}
      <div
        className={`container mx-auto flex items-center justify-between px-4 max-w-7xl transition-all duration-300 ${
          scrolled ? "py-4 md:py-4.5 lg:py-3" : "py-4 md:py-4.5 lg:py-4"
        }`}
      >
        <Link href="/" className="flex-shrink-0">
          <Image
            src={LogoBlack}
            alt="Logo"
            width={120}
            height={80}
            className={`transition-all duration-300 ${
              scrolled
                ? "w-[6rem] md:w-[6.5rem] lg:w-[7.5rem]"
                : "w-[6.5rem] md:w-[7.5rem] lg:w-[8.5rem]"
            }`}
          />
        </Link>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center w-full mr-14">
          <div className="flex items-center w-full border bg-gray-100 rounded-full shadow-sm px-4 max-w-2xl mx-auto">
            <Search className={`text-gray-600 ${scrolled ? "w-5 h-5" : "w-6 h-6"}`} />
            <input
              type="search"
              placeholder="Search for products..."
              className={`w-full bg-transparent outline-none text-gray-600 px-4 ${scrolled ? "py-2" : "py-2.5"}`}
            />
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-5">
          <Link href="/cart" className="text-gray-700">
            <ShoppingCart className="w-6 h-6" />
          </Link>
          {/* <Link href="/liked" className="text-gray-700">
            <Heart className="w-6 h-6" />
          </Link> */}
          <button
            aria-label="Toggle Menu"
            className="lg:hidden"
            onClick={() => setOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex bg-black">
        <div className="container mx-auto flex justify-center space-x-6 text-white text-sm">
          <Link
            href="/"
            className={`font-semibold hover:text-yellow-500 px-3 transition-all duration-300 ${
              scrolled ? "py-3" : "py-4"
            }`}
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className={`${dropdownOpen ? "text-yellow-500" : "text-white"} font-semibold px-3 flex items-center transition-all duration-300 ${
              scrolled ? "py-3" : "py-4"
            }`}>
              Types
            </button>
            {dropdownOpen && types.length > 0 && (
              <ul className="absolute left-0 bg-white shadow-lg rounded-lg text-gray-700 p-2 w-48 z-10">
                {types.map((type) => (
                  <li key={type.id}>
                    <Link
                      href={`/categories/${type.id}`}
                      className="block text-sm px-4 py-2 rounded hover:bg-gray-200 hover:text-black"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {type.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {navigationItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`font-semibold hover:text-yellow-500 px-3 transition-all duration-300 ${
                scrolled ? "py-3" : "py-4"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetContent className="w-80 bg-white shadow-lg rounded-r-lg">
          <SheetHeader className="border-b border-gray-200 pb-4">
            <SheetTitle className="text-xl font-semibold text-gray-900">Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col space-y-4 mt-6">
            {/* Home Link */}
            <Link
              href="/"
              className="text-lg text-gray-800 hover:text-yellow-500 transition-colors duration-300"
            >
              Home
            </Link>

            {/* Dropdown for Types */}
            <div>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full flex items-center justify-between text-lg text-gray-800 hover:text-yellow-500 transition-colors duration-300"
              >
                Types
                <ChevronDown
                  className={`ml-2 h-5 w-5 text-gray-600 transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {dropdownOpen && (
                <div className="mt-2 space-y-2">
                  {types.map((type) => (
                    <Link
                      key={type.id}
                      href={`/categories/${type.id}`}
                      className="block text-gray-700 hover:text-black hover:bg-gray-100 py-2 px-3 rounded transition-colors duration-300"
                    >
                      {type.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Navigation Items */}
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-lg text-gray-800 hover:text-yellow-500 transition-colors duration-300"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>

    </header>
  );
};
