"use client";

import { useState, useEffect, useRef } from "react";
import OptionButton from "../components/optionbutton";

export default function Navbar({ setSelectedRegion, setSelectedOptions }) {
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
    </nav>
  );
}
