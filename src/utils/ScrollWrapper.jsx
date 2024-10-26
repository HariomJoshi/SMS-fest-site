// ScrollWrapper.js
import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

const ScrollWrapper = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1.5, // Adjust the speed of scrolling
    });

    // Update Locomotive Scroll on resize
    window.addEventListener("resize", () => scroll.update());

    return () => {
      scroll.destroy();
      window.removeEventListener("resize", () => scroll.update());
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef} className="overflow-hidden">
      {children}
    </div>
  );
};

export default ScrollWrapper;
