"use client";

import Link from "next/link";
import LogoBlack from "@/images/Logo-Black.png";
import Image from "next/image";
import { Menu, X, Search, ShoppingCart, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export const Navbar = () => {
  const navigationItems = [
    { title: "Home", href: "/" },
    { title: "Guitars", href: "/" },
    { title: "Accessories", href: "/" },
    { title: "Amps & Effects", href: "/" },
    { title: "Drums", href: "/" },
    { title: "Mics & Recording", href: "/" },
    { title: "Violins", href: "/" },
    { title: "Bargain Bin", href: "/" },
    { title: "New Products", href: "/" },
  ];

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow w-full">

      {/* Logo and Search */}
      <div className="container mx-auto flex items-center justify-between px-4 py-3 max-w-7xl">
        <Link href="/" className="flex-shrink-0">
          <Image src={LogoBlack} alt="Logo" width={120} height={80} className="w-24 lg:w-28 xl:w-32" />
        </Link>

        <div className="hidden lg:flex items-center w-full max-w-2xl mx-auto">
          <div className="flex items-center w-full bg-gray-100 rounded-full shadow-sm px-4">
            <Search className="text-gray-600" />
            <input
              type="search"
              placeholder="Search for products..."
              className="w-full bg-transparent outline-none text-gray-600 px-4 py-2"
            />
          </div>
        </div>

        <div className="flex items-center space-x-5">
          <Link href="/cart" className="flex items-center space-x-2 text-gray-700 rounded-full py-2 hover:bg-gray-50">
            <ShoppingCart className="w-6 h-6" />
          </Link>
          <Link href="/liked" className="flex items-center space-x-2 text-gray-700 rounded-full py-2 hover:bg-gray-50">
            <Heart className="w-6 h-6" />
          </Link>
          <button className="lg:hidden" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex bg-black py-2">
        <div className="container mx-auto flex justify-center space-x-4 text-white text-sm">
          {navigationItems.map((item) => (
            <Link key={item.title} href={item.href} className="hover:underline px-3 py-1">
              {item.title}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Sheet Menu */}
      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-full max-w-md p-4">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="space-y-4 mt-4">
            {navigationItems.map((item) => (
              <Link key={item.title} href={item.href} className="block text-lg text-gray-700 hover:underline">
                {item.title}
              </Link>
            ))}
          </div>

          <SheetHeader className="mt-8">
            <SheetTitle>Search</SheetTitle>
          </SheetHeader>
          <div className="flex items-center w-full bg-gray-100 rounded-full mt-4 px-4 py-2">
            <Search className="text-gray-600" />
            <input
              type="search"
              placeholder="Search for products..."
              className="w-full bg-transparent outline-none text-gray-600 px-4"
            />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};
