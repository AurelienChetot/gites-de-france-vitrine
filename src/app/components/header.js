// app/components/header.js
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [gites, setGites] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setGites(data));
  }, []);

  return (
    <header>
      {gites.map((gite) => (
        <div key={gite.id} className="gite-header">
          <Image
            className="img-header"
            src={gite.image}
            alt={gite.title}
            width={1920}
            height={1080}
            layout="responsive"
          />
        </div>
      ))}
    </header>
  );
}
