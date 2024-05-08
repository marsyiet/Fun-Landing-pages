"use client"
import About from "@/components/About";
import Buy from "@/components/Buy";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Preloader from "../components/Preloader";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])
  return (
    <main>
      <div className="relative flex justify-center items-center max-h-full overflow-hidden">
        <Navbar/>
        <Hero />
      </div>
      <About />
      <Buy />  
      <Footer/>
    </main>
  );
}
