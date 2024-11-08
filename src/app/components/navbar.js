"use client";

import { useState, useEffect, useRef } from "react";
import OptionButton from "../components/optionbutton";

export default function Navbar({
  setAutoplay,
  setSelectedRegion,
  setSelectedOptions,
}) {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const stickyThreshold = 75; // Utilise "vh"

        const thresholdInPixels = (stickyThreshold / 100) * windowHeight;

        if (scrollPosition >= thresholdInPixels) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Checkbox pour activé le slider
  const handleCheckboxChange = (event) => {
    setAutoplay(event.target.checked);
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
        <li onClick={() => setSelectedRegion("Tous")}>Tous</li>
        <li onClick={() => setSelectedRegion("Provence-Alpes-Côte d'Azur")}>
          Provence
        </li>
        <li onClick={() => setSelectedRegion("Auvergne-Rhône-Alpes")}>
          Auvergne
        </li>
        <li onClick={() => setSelectedRegion("Normandie")}>Normandie</li>
        <li onClick={() => setSelectedRegion("Nouvelle-Aquitaine")}>
          Nouvelle-Aquitaine
        </li>
        <li onClick={() => setSelectedRegion("Corse")}>Corse</li>
        <li onClick={() => setSelectedRegion("Grand Est")}>Grand Est</li>
      </ul>
      <OptionButton setSelectedOptions={setSelectedOptions} />
      <label className="container-navbar">
        <div className="checkbox-text-container">
          <p>Activé Slider :</p>
          <input type="checkbox" onChange={handleCheckboxChange} />
          <svg viewBox="0 0 64 64" height="2em" width="2em">
            <path
              d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
              pathLength="575.0541381835938"
              className="path"
            />
          </svg>
        </div>
      </label>
    </nav>
  );
}
