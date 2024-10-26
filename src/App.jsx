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

function App() {
  useSmoothScroll();
  return (
    <div className="font-sans">
      <ScrollWrapper>
        <Header />
        <HeroSection />
        <MonopolySection />
        <EventsRegistrationSection />
        <OligopolyComponent />
        <EventGrid />
        <Footer />
      </ScrollWrapper>
    </div>
  );
}

export default App;
