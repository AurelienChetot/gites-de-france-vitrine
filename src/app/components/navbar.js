"use client";

import Link from "next/link";

export default function Navbar({ setSelectedRegion }) {
  return (
    <nav className="navbar">
      <ul>
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
    </nav>
  );
}
