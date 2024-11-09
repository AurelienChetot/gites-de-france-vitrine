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

  // Fonction le clic sur un lien et d'empecher le comportement de l'url #top-section
  const handleScroll = (event, region) => {
    // Empeche le comportement du lien "#" dans l'URL
    event.preventDefault();

    // Met a jour la région choisi
    setSelectedRegion(region);

    // Recupere l'element ciblé par l'id (top-section)
    const element = document.getElementById("top-section");

    // Si l'element existe effectue le scroll
    if (element) {
      // effet de smooth lors du clique
      element.scrollIntoView({ behavior: "smooth" });
    }
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
        <li onClick={(event) => handleScroll(event, "Tous")}>
          <a href="#top-section">Tous</a>
        </li>
        <li
          onClick={(event) => handleScroll(event, "Provence-Alpes-Côte d'Azur")}
        >
          <a href="#top-section">Provence</a>
        </li>
        <li onClick={(event) => handleScroll(event, "Auvergne-Rhône-Alpes")}>
          <a href="#top-section">Auvergne</a>
        </li>
        <li onClick={(event) => handleScroll(event, "Normandie")}>
          <a href="#top-section">Normandie</a>
        </li>
        <li onClick={(event) => handleScroll(event, "Nouvelle-Aquitaine")}>
          <a href="#top-section">Nouvelle-Aquitaine</a>
        </li>
        <li onClick={(event) => handleScroll(event, "Corse")}>
          <a href="#top-section">Corse</a>
        </li>
        <li onClick={(event) => handleScroll(event, "Grand Est")}>
          <a href="#top-section">Grand Est</a>
        </li>
      </ul>
      <OptionButton setSelectedOptions={setSelectedOptions} />
    </nav>
  );
}
