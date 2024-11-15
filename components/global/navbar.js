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
          scrolled ? "py-2" : "py-3"
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
                ? "w-[5.5rem] lg:w-[6.5rem] xl:w-[7.5rem]"
                : "w-[6.5rem] lg:w-[7.5rem] xl:w-[8.5rem]"
            }`}
          />
        </Link>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center w-full mr-14">
          <div className="flex items-center w-full border bg-gray-100 rounded-full shadow-sm px-4 max-w-2xl mx-auto">
            <Search className="text-gray-600 w-6 h-6" />
            <input
              type="search"
              placeholder="Search for products..."
              className="w-full bg-transparent outline-none text-gray-600 px-4 py-2.5"
            />
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-5">
          <Link href="/cart" className="text-gray-700">
            <ShoppingCart className="w-6 h-6" />
          </Link>
          <Link href="/liked" className="text-gray-700">
            <Heart className="w-6 h-6" />
          </Link>
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
            className="font-semibold hover:text-yellow-500 px-3 py-4"
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className={`${dropdownOpen ? "text-yellow-500" : "text-white"} font-semibold px-3 py-4 flex items-center`}>
              Types
            </button>
            {dropdownOpen && types.length > 0 && (
              <ul className="absolute left-0 bg-white shadow-lg rounded-lg text-gray-700 p-2 w-48 z-10">
                {types.map((type) => (
                  <li key={type.id}>
                    <Link
                      href={`/categories/${type.id}`}
                      className="block text-sm px-4 py-2 rounded hover:bg-gray-200 hover:text-black"
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
              className="font-semibold hover:text-yellow-500 px-3 py-4"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col space-y-3 mt-8">
            <Link href="/" className="font-semibold hover:text-yellow-500">
              Home
            </Link>
            <div>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full flex items-center justify-between font-semibold hover:text-yellow-500"
              >
                Types
                <ChevronDown
                  className={`transition-transform ${
                    dropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {dropdownOpen && (
                <div>
                  {types.map((type) => (
                    <Link
                      key={type.id}
                      href={`/categories/${type.id}`}
                      className="block px-4 py-2 hover:text-black"
                    >
                      {type.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="font-semibold hover:text-yellow-500"
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
