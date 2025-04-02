"use client";
import { useEffect, useRef } from "react";
import Navbar from "./nav-bar";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const Header = () => {
  const arrowRef = useRef(null);

  gsap.registerPlugin(ScrollToPlugin);

  const handleClick = (event: any) => {
    if (event.target === arrowRef.current) {
      console.log("gooo");
      gsap.to(window, {
        scrollTo: window.scrollY + window.innerHeight, // Scroll 100vh
        duration: 1,
        ease: "power1.inOut",
      });
    }
  };
  useEffect(() => {
    gsap.to(arrowRef.current, {
      y: 100,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inout",
    });

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick); // Cleanup event
  }, []);

  return (
    <div id="header" className="relative h-[100vh]">
      <Navbar />
      <div
        className="absolute top-0 left-0 w-[100vw] h-screen bg-center bg-cover text-4xl font-bold -z-10"
        style={{
          backgroundImage: "url('/assets/images/desktop/image-header.jpg')",
        }}
      />
      <h1 className="text-6xl uppercase w-full text-center text-white py-20 md:text-8xl">
        we are creatives
      </h1>
      <img
        ref={arrowRef}
        onClick={handleClick}
        src="/assets/images/icon-arrow-down.svg"
        alt="arrow"
        className="arrow mx-auto cursor-pointer absolute top-1/2 left-1/2 -translate-1/2"
      />
    </div>
  );
};

export default Header;
