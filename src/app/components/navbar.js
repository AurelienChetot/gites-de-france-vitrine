"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <Link className="nav" href="/">
          <li>Tous</li>
        </Link>
        <Link href="/">
          <li>Provence</li>
        </Link>
        <Link href="/">
          <li>Auvergne</li>
        </Link>
        <Link href="/">
          <li>Normandie</li>
        </Link>
        <Link href="/">
          <li>Nouvelle-Aquitaine</li>
        </Link>
        <Link href="/">
          <li>Corse</li>
        </Link>
      </ul>
    </nav>
  );
}
