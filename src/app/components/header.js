// app/components/header.js
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";

export default function Header({ autoplay, setAutoplay }) {
  const sliderRef = useRef(null);
  const [gites, setGites] = useState([]);

  // Récupère les données des gîtes
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setGites(data));
  }, []);

  // Gère l'autoplay du slider en fonction de la valeur du checkbox
  useEffect(() => {
    if (sliderRef.current) {
      if (autoplay) {
        sliderRef.current.slickPlay();
      } else {
        sliderRef.current.slickPause();
      }
    }
  }, [autoplay]);

  // Configuration du slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: autoplay,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  // Fonction pour gérer le changement de l'état du checkbox
  const handleCheckboxChange = (event) => {
    setAutoplay(event.target.checked);
  };

  return (
    <header>
      <label className="container-navbar">
        <div className="checkbox-text-container">
          <p>Activé Slider</p>
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
      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {gites.map((gite) => (
          <div key={gite.id} className="gite-header">
            <Image
              className="img-header"
              src={gite.image}
              alt={gite.title}
              width={1920}
              height={1080}
            />
            <div className="text-container">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
              >
                Détente, Nature, <br />
                Partage
                <span className="gites">Gîtes de France</span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 0.6 }}
              >
                {gite.title}
              </motion.h2>
            </div>
          </div>
        ))}
      </Slider>
    </header>
  );
}
