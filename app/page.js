"use client";

import { BestSelling } from "@/components/best-selling";
import { Types } from "@/components/types";
import { Slide } from "@/components/slide";
import { Features } from "@/components/features";
import { WhatsappButton } from "@/components/global/whatsapp-button";
import { Testimonial } from "@/components/testimonial";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";
import { NewsArticles } from "@/components/news-articles";
import { Analytics } from "@vercel/analytics/react"
export default function Home() {

  return (
    <>
      <GoogleAnalytics gaId="G-DFF68T1RVB" />
      <Analytics/>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-DFF68T1RVB`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DFF68T1RVB', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <main>
        <Slide />
        <Features />
        <Types />
        <BestSelling />
        <NewsArticles />
        <Testimonial />
        <WhatsappButton />
      </main>
    </>
  );
}
