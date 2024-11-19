import { BestSelling } from "@/components/best-selling";
import { Brands } from "@/components/brands";
import { Types } from "@/components/types";
import { Slide } from "@/components/slide";
import { Features } from "@/components/features";
// import { News } from "@/components/news";
import { WhatsappButton } from "@/components/global/whatsapp-button";
import { Testimonial } from "@/components/testimonial";
import { TrendingInGuitars } from "@/components/trending-in-guitars";
import { TrendingInPianos } from "@/components/trending-in-pianos";
import { TrendingInDrums } from "@/components/trending-in-drums";
import { TrendingInProAudio } from "@/components/trending-in-pro-audio";
import Deal from "@/components/deal";

export default function Home() {
  return (
    <main>
      <Slide />
      <Features />
      <Types />
      <BestSelling />
      <TrendingInGuitars />
      <Deal />
      <TrendingInPianos />
      <Brands />
      <TrendingInDrums />
      <TrendingInProAudio />
      <Testimonial />
      {/* <News /> */}
      <WhatsappButton />
    </main>
  );
}