"use client";

import { useState, useEffect, useRef } from "react";
import OptionButton from "../components/optionbutton";

export default function Navbar({ setSelectedRegion, setSelectedOptions }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);

  // Fonction pour gérer le scroll
  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const navbarTop = navbarRef.current.getBoundingClientRect().top;
        setIsSticky(navbarTop <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
    // Scroll automatiquement vers le haut de la section
    document
      .getElementById("top-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav ref={navbarRef} className={`navbar ${isSticky ? "sticky" : ""}`}>
      <label className="hamburger">
        <input
          type="checkbox"
          className="menu-toggle-checkbox"
          onClick={() => setIsOpen(!isOpen)}
        />
        <svg viewBox="0 0 32 32">
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg>
      </label>
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li onClick={() => handleRegionClick("Tous")}>
          <a href="#top-section">Tous</a>
        </li>
        <li onClick={() => handleRegionClick("Provence-Alpes-Côte d'Azur")}>
          <a href="#top-section">Provence</a>
        </li>
        <li onClick={() => handleRegionClick("Auvergne-Rhône-Alpes")}>
          <a href="#top-section">Auvergne</a>
        </li>
        <li onClick={() => handleRegionClick("Normandie")}>
          <a href="#top-section">Normandie</a>
        </li>
        <li onClick={() => handleRegionClick("Nouvelle-Aquitaine")}>
          <a href="#top-section">Nouvelle-Aquitaine</a>
        </li>
        <li onClick={() => handleRegionClick("Corse")}>
          <a href="#top-section">Corse</a>
        </li>
        <li onClick={() => handleRegionClick("Grand Est")}>
          <a href="#top-section">Grand Est</a>
        </li>
      </ul>
      <OptionButton setSelectedOptions={setSelectedOptions} />
    </nav>
  );
}
