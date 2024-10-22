"use client";

import Link from "next/link";
import LogoBlack from "@/images/Logo-Black.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { ShoppingCart, Heart } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

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
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="w-full bg-white">
      <div className="text-xs bg-cyan-600 text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3 flex-grow">
            <Link href="/">
              <FaFacebook className="w-4 h-4" />
            </Link>
            <Link href="/">
              <FaTiktok className="w-4 h-4" />
            </Link>
            <Link href="/">
              <FaPinterest className="w-4 h-4" />
            </Link>
            <Link href="/">
              <FaInstagram className="w-4 h-4" />
            </Link>
            <Link href="/">
              <FaSquareXTwitter className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex-grow text-center">
            <p className="text-sm pr-24">Don&apos;t miss out, huge discounts available now!</p>
          </div>
          <div className="flex items-center space-x-4 flex-grow justify-end">
            <p>FAQs</p>
          </div>
        </div>
      </div>

      <div className="shadow lg:shadow-none container mx-auto px-4 max-w-7xl relative min-h-16 lg:min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-6 items-center py-2.5 md:py-3 lg:py-4">
        <Image width={200} height={100} src={LogoBlack} alt="Logo" className="w-24 md:w-28 lg:w-32 xl:w-36" />
        
        <div className="hidden lg:flex rounded-full border border-black overflow-hidden mx-auto font-[sans-serif] w-full max-w-2xl lg:col-span-4">
          <button type='button' className="flex items-center justify-center pl-4 pr-2">
            <Search className="w-5 h-5 text-black"/>
          </button>
          <input type="email" placeholder="Search Something..." className="w-full outline-none bg-white text-gray-600 text-sm pl-2 pr-4 py-2.5 min-w-0" />
        </div>

        <div className="flex justify-end w-full gap-5">
          <button className="flex items-center gap-1">
            <ShoppingCart className="w-6 h-6" />
          </button>
          <Link href="/cart" className="flex items-center gap-1">
            <Heart className="w-6 h-6" />
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

      <div className="bg-black w-full py-2 px-4 hidden lg:block">
        <div className="container mx-auto w-full max-w-6xl flex flex-wrap justify-center items-center gap-x-4 text-sm">
          {navigationItems.map((item) => (
            <div key={item.title} className="flex justify-center text-white">
              <p className="py-2 px-3">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};
