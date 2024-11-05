import React, { useRef, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import MonopolySection from "./components/MonopolySection";
import EventsRegistrationSection from "./components/EventsRegstrationSection";
import OligopolyComponent from "./components/OligopolyComponent";
import EventGrid from "./components/EventGrid";
import ScrollWrapper from "./utils/ScrollWrapper";
import LocomotiveScroll from "locomotive-scroll";
import "./styles/locomotive-scroll.css";

function App() {
  const scrollRef = useRef(null);
  const scrollInstance = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollInstance.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 0.6, // Adjust to control scroll speed
      });

      // Update locomotive on content resize
      const handleResize = () => {
        if (scrollInstance.current) {
          scrollInstance.current.update();
        }
      };
      window.addEventListener("resize", handleResize);

      // Clean up on component unmount
      return () => {
        if (scrollInstance.current) {
          scrollInstance.current.destroy();
        }
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const oligopolyRef = useRef(null);
  const monopolyRef = useRef(null);
  const herosectionRef = useRef(null);
  const eventsRegtrationRef = useRef(null);
  const eventsGridRef = useRef(null);

  return (
    <div className="App">
      <Header
        herosectionRef={herosectionRef}
        monopolyRef={monopolyRef}
        eventsRegtrationRef={eventsRegtrationRef}
        oligopolyRef={oligopolyRef}
        eventsGridRef={eventsGridRef}
      />
      <div className="font-sans" ref={scrollRef} data-scroll-container>
        <ScrollWrapper>
          <HeroSection herosectionRef={herosectionRef} />
          <MonopolySection
            monopolyRef={monopolyRef}
            eventsRegtrationRef={eventsRegtrationRef}
          />
          <EventsRegistrationSection
            eventsRegtrationRef={eventsRegtrationRef}
          />
          <OligopolyComponent
            oligopolyRef={oligopolyRef}
            eventsGridRef={eventsGridRef}
          />
          <EventGrid eventsGridRef={eventsGridRef} />
          <Footer />
        </ScrollWrapper>
      </div>
    </div>
  );
}

export default App;
