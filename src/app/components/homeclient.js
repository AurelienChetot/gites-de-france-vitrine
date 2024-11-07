// app/components/HomeClient.js
"use client";

import { useState } from "react";
import Navbar from "./navbar";
import Section from "./section";
import Header from "./header";

export default function HomeClient({ gites }) {
  const [selectedRegion, setSelectedRegion] = useState("Tous");
  const [autoplay, setAutoplay] = useState(false);

  return (
    <div>
      <Navbar setSelectedRegion={setSelectedRegion} setAutoplay={setAutoplay} />
      <Header gites={gites} autoplay={autoplay} />
      <Section gites={gites} selectedRegion={selectedRegion} />
    </div>
  );
}
