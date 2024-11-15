import { BestSellers } from "@/components/home/best-sellers";
import { Brands } from "@/components/home/brands";
import { Types } from "@/components/home/types";
import { Slide } from "@/components/home/slide";
import { Features } from "@/components/home/features";
import { News } from "@/components/home/news";
import { Deal } from "@/components/home/deal";
import { WhatsappButton } from "@/components/global/whatsapp-button";
import { Testimonial } from "@/components/home/testimonial";

export default function Home() {
  return (
    <main>
      <Slide />
      <Features />
      <Types />
      <BestSellers />
      <BestSellers />
      <Deal />
      <BestSellers />
      <Brands />
      <BestSellers />
      <BestSellers />
      <Testimonial />
      <News />
      <WhatsappButton />
    </main>
  );
}