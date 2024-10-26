// App.js
import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import MonopolySection from "./components/MonopolySection";
import EventsRegistrationSection from "./components/EventsRegstrationSection";
import OligopolyComponent from "./components/OligopolyComponent";
import EventGrid from "./components/EventGrid";
import useSmoothScroll from "./utils/useSmoothScroll";
import ScrollWrapper from "./utils/ScrollWrapper";
import { useRef } from "react";

function App() {
  useSmoothScroll();
  const oligopolyRef = useRef(null);
  const monopolyRef = useRef(null);
  return (
    <div className="font-sans">
      <Header />
      <ScrollWrapper>
        <HeroSection oligopolyRef={oligopolyRef} monopolyRef={monopolyRef} />
        <MonopolySection monopolyRef={monopolyRef} />
        <EventsRegistrationSection />
        <OligopolyComponent oligopolyRef={oligopolyRef} />
        <EventGrid />
        <Footer />
      </ScrollWrapper>
    </div>
  );
}

export default App;
