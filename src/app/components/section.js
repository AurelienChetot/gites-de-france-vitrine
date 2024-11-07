"use client";

import Image from "next/image";

import Person from "../../../public/svg/person.svg";
import Bed from "../../../public/svg/bed.svg";
import Star from "../../../public/svg/star.svg";
import Euro from "../../../public/svg/euro.svg";

export default function Section({ gites, selectedRegion }) {
  const filteredGites =
    selectedRegion === "Tous"
      ? gites
      : gites.filter((gite) => gite.region === selectedRegion);
  return (
    <section className="section-container">
      <p className="text-color">Retrouvez notre sélection :</p>
      <div className="card-container">
        {filteredGites.map((gite, index) => (
          <div key={index} className="container noselect">
            <div className="canvas">
              <div className="tracker tr-1"></div>
              <div className="tracker tr-2"></div>
              <div className="tracker tr-3"></div>
              <div className="tracker tr-4"></div>
              <div className="tracker tr-5"></div>
              <div className="tracker tr-6"></div>
              <div className="tracker tr-7"></div>
              <div className="tracker tr-8"></div>
              <div className="tracker tr-9"></div>
              <div className="tracker tr-10"></div>
              <div className="tracker tr-11"></div>
              <div className="tracker tr-12"></div>
              <div className="tracker tr-13"></div>
              <div className="tracker tr-14"></div>
              <div className="tracker tr-15"></div>
              <div className="tracker tr-16"></div>
              <div className="tracker tr-17"></div>
              <div className="tracker tr-18"></div>
              <div className="tracker tr-19"></div>
              <div className="tracker tr-20"></div>
              <div className="tracker tr-21"></div>
              <div className="tracker tr-22"></div>
              <div className="tracker tr-23"></div>
              <div className="tracker tr-24"></div>
              <div className="tracker tr-25"></div>
              <div id="card">
                <div id="prompt">
                  {" "}
                  <p className="front-text">
                    Envie de visitez la région {gite.region}
                  </p>
                  <p className="effect">Voir plus</p>
                </div>
                <div className="button-container">
                  <a href="https://google.com" target="/blank">
                    <button>Visitez</button>
                  </a>
                </div>
                <div className="title">
                  <p>{gite.description}</p>
                  <div className="capacity-bed-container">
                    <div className="capacity-container">
                      <Image alt={Person} src={Person} width={30} height={0} />
                      {gite.capacity}
                    </div>
                    <div className="bed-container">
                      <Image alt={Bed} src={Bed} width={25} height={0} />
                      {gite.beds}
                    </div>
                  </div>
                  <div className="price-container">
                    {gite.price_per_night}
                    <Image alt={Euro} src={Euro} width={13} height={0} />
                    {""}
                    <p>Par nuit</p>
                  </div>
                  <div className="rating-container">
                    <Image alt={Star} src={Star} width={25} height={0} />
                    {gite.rating}
                  </div>
                </div>
                <div className="img-text-container">
                  <Image
                    src={gite.image}
                    alt={gite.title}
                    quality={100}
                    width={200}
                    height={100}
                  />
                  <div className="subtitle">
                    <p>{gite.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
