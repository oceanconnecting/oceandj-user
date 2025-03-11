import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Providers } from "@/lib/provider";
import { Navbar } from "@/components/global/navbar";
import { Footer } from "@/components/global/footer";
import Banner from "@/components/global/banner";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react"
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Dj Stage",
  description: "Dj Stage store",
  icons: {
    icon: "/Logo.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <Providers>
          <Toaster position="top-center" reverseOrder={false} />
          <Banner />
          <Navbar/>
          <div className="">
            {children}
            <Analytics/>
          </div>
          <Footer />
        </Providers>
       
      </body>
    </html>
  );
}
