"use client";

import Link from "next/link";
import LogoBlack from "@/images/Logo-Black.png";
import Image from "next/image";
import { Menu, X, Search, ShoppingCart } from "lucide-react";
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
    <header className="w-full bg-white">
      {/* banner */}
      <div className="text-xs bg-yellow-500 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex-grow text-center p-0.5">
            <p className="text-xs sm:text-sm hover:underline">
              Don&apos;t miss out our Halloween discount! Level up to 70% off!
            </p>
          </div>
        </div>
      </div>
      {/* logo and search*/}
      <div className="shadow lg:shadow-none container mx-auto px-4 max-w-7xl relative min-h-16 lg:min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-6 items-center py-2.5 md:py-3 lg:py-4">
        <Link href="/" className="w-28 lg:w-32">
          <Image width={150} height={100} src={LogoBlack} alt="Logo" className="w-28 lg:w-32"/>
        </Link>
        <div className="hidden lg:flex rounded-full border border-black overflow-hidden mx-auto font-[sans-serif] w-full max-w-2xl lg:col-span-4">
          <button type='button' className="flex items-center justify-center pl-4 pr-2">
            <Search className="w-5 h-5 text-black"/>
          </button>
          <input type="email" placeholder="Search Something..." className="w-full outline-none bg-white text-gray-600 text-sm pl-2 pr-4 py-2.5 min-w-0" />
        </div>
        <div className="flex justify-end w-full gap-5">
          <Link href="/cart" className="flex items-center gap-1 border border-black rounded-full py-2 px-5 hover:bg-gray-50">
            <ShoppingCart className="w-5 h-5 mr-2" />
            <span>My Cart</span>
          </Link>
        </div>

        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <button onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-6 h-6" />}
          </button>
          <Sheet open={isOpen} onOpenChange={setOpen}>
            <SheetContent side="right" className="w-full">
              <SheetHeader className="mt-6">
                <SheetTitle>Search</SheetTitle>
              </SheetHeader>
              <div className="mt-2 flex rounded-full border border-black overflow-hidden mx-auto font-[sans-serif] w-full max-w-xl">
                <button type='button' className="flex items-center justify-center pl-3 pr-1.5">
                  <Search className="w-4 h-4 text-black"/>
                </button>
                <input type="email" placeholder="Search Something..." className="w-full outline-none bg-white text-gray-600 text-sm pl-1.5 pr-3 py-2 min-w-0" />
              </div>
              <SheetHeader className="mt-6">
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="my-2">
                {navigationItems.map((item) => (
                  <div key={item.title} className="mb-4">
                    <Link href={item.href} className="text-sm">
                      {item.title}
                    </Link>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      {/* menu */}
      <div className="bg-black w-full py-2 px-4 hidden lg:block">
        <div className="container mx-auto w-full max-w-6xl flex flex-wrap justify-center items-center gap-x-4 text-sm">
          {navigationItems.map((item) => (
            <div key={item.title} className="flex justify-center text-white">
              <Link href={item.href} className="py-2 px-3 hover:underline">{item.title}</Link>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};
