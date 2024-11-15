import { BestSellers } from "@/components/best-sellers";
import { Brands } from "@/components/brands";
import { Types } from "@/components/types";
import { Slide } from "@/components/slide";
import { Features } from "@/components/features";
import { News } from "@/components/news";
import { Deal } from "@/components/deal";
import { WhatsappButton } from "@/components/global/whatsapp-button";
import { Testimonial } from "@/components/testimonial";

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