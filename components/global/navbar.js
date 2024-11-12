"use client";

import Link from "next/link";
import LogoBlack from "@/images/Logo-Black.png";
import Image from "next/image";
import { Menu, X, Search, ShoppingCart, Heart, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export const Navbar = () => {
  const navigationItems = [
    { title: "Brands", href: "/" },
    { title: "Hot Deals", href: "/" },
    { title: "New Arrival", href: "/" },
    { title: "Bargain Bin", href: "/" },
  ];

  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Added state for dropdown menu

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
        setDropdownOpen(false); // Close dropdown on resize for desktop
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 32;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow w-full">
      {/* Logo and Search */}
      <div
        className={`container mx-auto flex items-center justify-between px-4 max-w-7xl transition-all duration-300 ${
          !scrolled ? "py-3" : "py-2"
        }`}
      >
        <Link href="/" className="flex-shrink-0">
          <Image
            src={LogoBlack}
            alt="Logo"
            width={120}
            height={80}
            className={`transition-all duration-300 ${
              !scrolled
                ? "w-[6.5rem] lg:w-[7.5rem] xl:w-[8.5rem]"
                : "w-[5.5rem] lg:w-[6.5rem] xl:w-[7.5rem]"
            }`}
          />
        </Link>

        <div className="hidden lg:flex items-center w-full mr-14">
          <div className="flex items-center w-full border bg-gray-100 rounded-full shadow-sm px-4 max-w-2xl mx-auto">
            <Search
              className={`text-gray-600 transition-all duration-300 ${
                !scrolled ? "w-6 h-6" : "w-5 h-5"
              }`}
            />
            <input
              type="search"
              placeholder="Search for products..."
              className={`w-full bg-transparent outline-none text-gray-600 px-4 transition-all duration-300 ${
                !scrolled ? "py-2.5" : "py-1.5"
              }`}
            />
          </div>
        </div>

        <div className="flex items-center space-x-5">
          <Link
            href="/cart"
            className="flex items-center space-x-2 text-gray-700 rounded-full py-2 hover:bg-gray-50"
          >
            <ShoppingCart className="w-6 h-6" />
          </Link>
          <Link
            href="/liked"
            className="flex items-center space-x-2 text-gray-700 rounded-full py-2 hover:bg-gray-50"
          >
            <Heart className="w-6 h-6" />
          </Link>
          <button className="lg:hidden" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Desktop Menu */}
      <nav className={`hidden lg:flex bg-black`} >
        <div className="container mx-auto flex justify-center space-x-6 text-white text-sm">
          <Link
              href="/"
              className={`font-semibold hover:text-yellow-500 px-3 transition-all duration-300 ${
                !scrolled ? "py-4" : "py-3"
              }`}
            >
              Home
          </Link>

          <div className="relative">
            <button
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              className={`font-semibold hover:text-yellow-500 px-3 flex items-center transition-all duration-300 ${
                !scrolled ? "py-4" : "py-3"
              }`}
            >
              Accessories
            </button>
            {dropdownOpen && (
              <ul 
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)} 
                className="absolute left-0 bg-white shadow-lg rounded-lg text-gray-600 w-48 z-10"
              >
                <li>
                  <Link
                    href="/collections/accessory"
                    className="block px-4 py-2 hover:text-black"
                  >
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/collections/keyboard-stand"
                    className="block px-4 py-2 hover:text-black"
                  >
                    Piano & Keyboards
                  </Link>
                </li>
                <li>
                  <Link
                    href="/collections/guitars-accessories"
                    className="block px-4 py-2 hover:text-black"
                  >
                    Guitar & Ukulele
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {navigationItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`font-semibold hover:text-yellow-500 px-3 transition-all duration-300 ${
                !scrolled ? "py-4" : "py-3"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu (Sheet) */}
      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-start space-y-3 mt-8">
          <Link
            href="/"
            className="font-semibold hover:text-yellow-500"
          >
            Home
          </Link>
          <div className="w-full">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full text-left font-semibold hover:text-yellow-500 flex items-center justify-between transition-all duration-300"
            >
              Accessories
              <span className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : "rotate-0"}`}>
                <ChevronDown className="w-4 h-4"/>
              </span>
            </button>
            {dropdownOpen && (
              <div className="">
                <Link href="/collections/accessory" className="block px-4 py-2 hover:text-black">
                  Accessories
                </Link>
                <Link href="/collections/keyboard-stand" className="block px-4 py-2 hover:text-black">
                  Piano & Keyboards
                </Link>
                <Link href="/collections/guitars-accessories" className="block px-4 py-2 hover:text-black">
                  Guitar & Ukulele
                </Link>
              </div>
            )}
          </div>
          <div className="w-full grid gap-3">
            {navigationItems.map((item) => (
              <div key={item.title} className="">
                <Link
                  href={item.href}
                  className="font-semibold py-2"
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};
