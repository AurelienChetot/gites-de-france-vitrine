// app/components/HomeClient.js
"use client";

import { useState, useEffect } from "react";
import Navbar from "./navbar";
import Section from "./section";
import Header from "./header";
import Footer from "./footer";
import Loading from "./loading";

export default function HomeClient({ gites }) {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState("Tous");
  const [autoplay, setAutoplay] = useState(false);

  useEffect(() => {
    const loadingDelay = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(loadingDelay);
  }, [gites]);

  if (isLoading) return <Loading />;

  return (
    <div>
      <Header gites={gites} autoplay={autoplay} />
      <Navbar setSelectedRegion={setSelectedRegion} setAutoplay={setAutoplay} />
      <Section gites={gites} selectedRegion={selectedRegion} />
      <Footer />
    </div>
  );
}
