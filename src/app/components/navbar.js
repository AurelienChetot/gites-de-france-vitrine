// app/components/Navbar.js
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">Provence</Link>
        </li>
        <li>
          <Link href="/">Auvergne</Link>
        </li>
        <li>
          <Link href="/">Normandie</Link>
        </li>
        <li>
          <Link href="/">Nouvelle-Aquitaine</Link>
        </li>
        <li>
          <Link href="/">Corse</Link>
        </li>
      </ul>
    </nav>
  );
}
