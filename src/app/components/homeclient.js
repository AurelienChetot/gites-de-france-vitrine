// app/components/HomeClient.js
"use client";

import { useState, useEffect } from "react";
import Navbar from "./navbar";
import Section from "./section";
import Header from "./header";
import Footer from "./footer";

export default function HomeClient({ gites }) {
  const [autoplay, setAutoplay] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("Tous");
  const [selectedOptions, setSelectedOptions] = useState({
    //non par defaut et se change a la selection dans optionbutton.js
    animaux_acceptes: "non",
    piscine: "non",
    randonnee: "non",
    location_velo: "non",
  });

  return (
    <div>
      <Header gites={gites} autoplay={autoplay} setAutoplay={setAutoplay} />
      <Navbar
        setSelectedRegion={setSelectedRegion}
        setSelectedOptions={setSelectedOptions}
      />
      <Section
        gites={gites}
        selectedRegion={selectedRegion}
        selectedOptions={selectedOptions}
      />
      <Footer />
    </div>
  );
}
