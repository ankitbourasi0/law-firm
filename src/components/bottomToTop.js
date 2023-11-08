"use client"
import { motion, useAnimationControls, useScroll } from "framer-motion";
import { useEffect } from "react";
import {FaArrowUp} from"react-icons/fa"
import { useState } from "react";

function ScrollToTopButton() {
  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false)
    }
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility)

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  // const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
   
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  useEffect(() => {
    return scrollYProgress.on("change", (latestValue) => {
      if (latestValue > 0.5) {
        controls.start("show");
      } else {
        controls.start("hide");
      }
    });
  });

  return (
    <motion.button
    className={`fixed bottom-10 right-10 z-40 bg-yellow-500 p-5 shadow-sm shadow-amber-800 rounded-full outline-none transition-opacity duration-200 ${
      isVisible ? "opacity-100" : "opacity-0"
    }`}

      initial="hide"
      animate={controls}
      onClick={scrollToTop}
    >
      <FaArrowUp size={"18px"} color="white"/>
    </motion.button>
  );
}

export default ScrollToTopButton;
