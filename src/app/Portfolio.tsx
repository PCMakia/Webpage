import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Expertise } from "./components/Expertise";
import { Work } from "./components/Work";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

export function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen width on mount and resize
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the threshold for mobile
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      // Start transition after scrolling 300px
      setIsScrolled(currentScrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Calculate opacity for the video background overlay
  const scrollProgress = Math.min(scrollY / 500, 1);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Background Video Section - Fixed */}
      <div className="fixed inset-0 z-0">
        {/* 
          Desktop video (for screens wider than 768px):
          Replace /videos/desktop-intro.mp4 with your actual desktop video path
          
          Mobile video (for screens 768px or smaller):
          Replace /videos/mobile-intro.mp4 with your actual mobile video path
        */}
        {/* Fallback image - shows if video doesn't load */}
        <img
          src="assets/BG_backup.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="assets/BG_backup.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          key={isMobile ? 'mobile' : 'desktop'} // Force re-render when switching
        >
          <source 
            src={isMobile ? "/videos/mobile-intro.mp4" : "/videos/desktop-intro.mp4"} 
            type="video/mp4" 
          />
        </video>
        <div
          className="absolute inset-0 bg-black transition-opacity duration-500"
          style={{ opacity: 0.3 + scrollProgress * 0.7 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />

        {/* Hero Section with Transition Effect */}
        <div className="min-h-screen flex items-center justify-center px-4 py-20">
          <div
            className="transition-all duration-500 ease-out"
            style={{
              backgroundColor: isScrolled
                ? "rgba(0, 0, 0, 1)"
                : "rgba(0, 0, 0, 0.5)",
              width: isScrolled ? "75%" : "100%",
              maxWidth: isScrolled ? "1200px" : "100%",
              padding: isScrolled ? "4rem" : "2rem",
              borderRadius: isScrolled ? "12px" : "0",
            }}
          >
            <Hero />
          </div>
        </div>

        {/* Rest of the sections with solid background */}
        <div className="bg-[#0a0a0a]">
          <div className="text-center py-8 text-[#b0b0b0] text-sm max-w-[1200px] mx-auto px-8">
            <p>Inspired by Vedal (Vtuber Neuro-sama creator)</p>
          </div>

          <Expertise />
          <Work />
          <Experience />
          <Contact />
          <Footer />
        </div>

        <ScrollToTop />
      </div>
    </div>
  );
}