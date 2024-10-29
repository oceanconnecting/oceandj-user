import { BestSellers } from "@/components/home/best-sellers";
import { Companies } from "@/components/home/companies";
import { Types } from "@/components/home/types"
import { Slider } from "@/components/home/slider";
import { Rating } from "@/components/home/rating";
import { Discount } from "@/components/home/discount";

export default function Home() {
  return (
    <div>
      <Slider />
      <Types />
      <BestSellers />
      <Companies />
      <BestSellers />
      <Discount />
      <Rating />
    </div>
  );
}