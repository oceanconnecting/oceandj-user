import { BestSellers } from "@/components/home/best-sellers";
import { Companies } from "@/components/home/companies";
import { Types } from "@/components/home/types";
import { Slide } from "@/components/home/slide";
import { Discount } from "@/components/home/discount";
import { LastNews } from "@/components/home/last-news";
import { Features } from "@/components/home/features";
import { News } from "@/components/home/news";
import { Deal } from "@/components/home/deal";
import Testimonial from "@/components/home/testimonial";

export default function Home() {
  return (
    <div>
      <Slide />
      <Features />
      <Types />
      <BestSellers />
      {/* <Companies /> */}
      <BestSellers />
      <Deal />
      <BestSellers />
      {/* <Discount /> */}
      <BestSellers />
      {/* <Testimonial /> */}
      {/* <LastNews /> */}
      {/* <News /> */}
    </div>
  );
}