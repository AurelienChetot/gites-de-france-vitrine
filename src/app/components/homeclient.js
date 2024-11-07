// app/components/HomeClient.js
// Creation de la page homeclient car le fetch est async (pas de hook utilisable)
"use client";

import { useState } from "react";
import Navbar from "./navbar";
import Section from "./section";

export default function HomeClient({ gites }) {
  const [selectedRegion, setSelectedRegion] = useState("Tous");

  return (
    <div>
      <Navbar setSelectedRegion={setSelectedRegion} />
      <Section gites={gites} selectedRegion={selectedRegion} />
    </div>
  );
}
