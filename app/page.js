import { BestSellers } from "@/components/home/best-sellers";
import { Companies } from "@/components/home/companies";
// import { Types } from "@/components/home/types"
import { Slider } from "@/components/home/slider";
import { Discount } from "@/components/home/discount";
import { LastNews } from "@/components/home/last-news";
import { Features } from "@/components/home/features";
import { News } from "@/components/home/news";

export default function Home() {
  return (
    <div>
      <Slider />
      <Features />
      {/* <Types /> */}
      <BestSellers />
      <Companies />
      <BestSellers />
      <Discount />
      <BestSellers />
      <LastNews />
      <News />
    </div>
  );
}