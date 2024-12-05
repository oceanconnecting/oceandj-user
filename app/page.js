"use client";

import Banner from "@/components/global/banner";
import { Navbar } from "@/components/global/navbar";
import { BestSelling } from "@/components/best-selling";
import { Types } from "@/components/types";
import { Slide } from "@/components/slide";
import { Features } from "@/components/features";
import { WhatsappButton } from "@/components/global/whatsapp-button";
import { Testimonial } from "@/components/testimonial";
import { TrendingInGuitars } from "@/components/trending-in-guitars";
import { TrendingInPianos } from "@/components/trending-in-pianos";
import { TrendingInDrums } from "@/components/trending-in-drums";
import { TrendingInProAudio } from "@/components/trending-in-pro-audio";
import { Footer } from "@/components/global/footer";
import { Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://admin-djstage.vercel.app/api/types/list-types?limit=20"
        );
        setTypes(response.data.types || []);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load types.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [isLoading]);

  return (
    <>
      <GoogleAnalytics gaId="G-27HTVW5LYH" />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-27HTVW5LYH`}
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
            gtag('config', 'G-27HTVW5LYH', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      {isLoading ? (
        <div className="h-screen flex items-center justify-center">
          <Loader2 className="w-10 h-10 animate-spin" />
        </div>
      ) : (
        <>
          <Banner />
          <Navbar types={types} error={error} />
          <main>
            <Slide />
            <Features />
            <Types />
            <BestSelling />
            <TrendingInGuitars />
            <TrendingInPianos />
            <TrendingInDrums />
            <TrendingInProAudio />
            <Testimonial />
            <WhatsappButton />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
