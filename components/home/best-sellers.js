"use client";

import { Products } from "./products";
import HHH from "@/images/hhh.png";

export const BestSellers = () => {
  const products = [
    {
      id: 1,
      title: "Sax Alto Supreme Verso Verni",
      image: HHH,
      price: 299.99,
      discount: 10,
      brand: "Yamaha",
      category: "Wind Instruments"
    },
    {
      id: 2,
      title: "Sax Tenor Supreme Verso Verni",
      image: HHH,
      price: 399.99,
      discount: 15,
      brand: "Yamaha",
      category: "Wind Instruments"
    },
    {
      id: 3,
      title: "Electric Guitar Fender Stratocaster",
      image: HHH,
      price: 699.99,
      discount: 20,
      brand: "Fender",
      category: "String Instruments"
    },
    {
      id: 4,
      title: "Digital Piano Yamaha P-125",
      image: HHH,
      price: 499.99,
      discount: 5,
      brand: "Yamaha",
      category: "Keyboard Instruments"
    },
    {
      id: 5,
      title: "Drum Set Pearl Export",
      image: HHH,
      price: 899.99,
      discount: 25,
      brand: "Pearl",
      category: "Percussion Instruments"
    },
    {
      id: 6,
      title: "Flute Gemeinhardt 3OB",
      image: HHH,
      price: 249.99,
      discount: 0,
      brand: "Gemeinhardt",
      category: "Wind Instruments"
    },
    {
      id: 7,
      title: "Violin Yamaha V3 Series",
      image: HHH,
      price: 199.99,
      discount: 10,
      brand: "Yamaha",
      category: "String Instruments"
    },
    {
      id: 8,
      title: "Trumpet Bach TR300H2",
      image: HHH,
      price: 349.99,
      discount: 15,
      brand: "Bach",
      category: "Brass Instruments"
    },
    {
      id: 9,
      title: "Acoustic Guitar Gibson J-45",
      image: HHH,
      price: 1099.99,
      discount: 10,
      brand: "Gibson",
      category: "String Instruments"
    },
    {
      id: 10,
      title: "Keyboard Roland FA-08",
      image: HHH,
      price: 1199.99,
      discount: 20,
      brand: "Roland",
      category: "Keyboard Instruments"
    }
  ];
  const title = "Trending in Guitars"

  return (
    <Products products={products} title={title}/>
  );
}