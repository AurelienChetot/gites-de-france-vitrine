// app/components/header.js
"use client";

import { useState, useEffect, useRef } from "react";

import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";

export default function Header({ autoplay }) {
  const sliderRef = useRef(null);
  const [gites, setGites] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setGites(data));
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      if (autoplay) {
        sliderRef.current.slickPlay();
      } else {
        sliderRef.current.slickPause();
      }
    }
  }, [autoplay]);

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

  return (
    <header>
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
                transition={{ duration: 1 }}
              >
                Détente, Nature, <br />
                Partage
                <span className="gites">Gîtes de France</span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
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
