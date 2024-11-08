"use client";

import Image from "next/image";

import Person from "../../../public/svg/person.svg";
import Bed from "../../../public/svg/bed.svg";
import Star from "../../../public/svg/star.svg";
import Euro from "../../../public/svg/euro.svg";
import Dog from "../../../public/svg/dog.svg";
import Swiming from "../../../public/svg/piscine.svg";
import Rando from "../../../public/svg/rando.svg";
import Velo from "../../../public/svg/bike.svg";

export default function Section({ gites, selectedRegion, selectedOptions }) {
  // Filtrage des gites en fonction de la région et des options sélectionnée (filtre)
  const filteredGites = gites.filter((gite) => {
    const matchesRegion =
      selectedRegion === "Tous" || gite.region === selectedRegion;

    const matchesOptions =
      (selectedOptions.animaux_acceptes === "oui"
        ? gite.animaux_acceptes === "oui"
        : true) &&
      (selectedOptions.piscine === "oui" ? gite.piscine === "oui" : true) &&
      (selectedOptions.randonnee === "oui" ? gite.randonnee === "oui" : true) &&
      (selectedOptions.location_velo === "oui"
        ? gite.location_velo === "oui"
        : true);

    return matchesRegion && matchesOptions;
  });
  return (
    <section className="section-container">
      <p className="text-color">
        Retrouvez notre sélection :{" "}
        {selectedRegion !== "Tous" && selectedRegion}
      </p>

      {filteredGites.length === 0 ? (
        // Affiche ce message si aucun gîte n'est disponible après filtrage
        <div className="no-results-message">
          <div className="card-message">
            <div className="loader-message">
              <p>
                Pas de gîtes disponibles pour le moment, veuillez modifier les
                filtres :
              </p>
              <div className="words">
                <span className="word">Animaux Acceptés</span>
                <span className="word">Piscine</span>
                <span className="word">Randonnée</span>
                <span className="word">Location de vélo</span>
                <span className="word">Animaux Acceptés</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
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
                        <Image
                          alt={Person}
                          src={Person}
                          width={30}
                          height={0}
                        />
                        {gite.capacity}
                      </div>
                      <div className="bed-container">
                        <Image alt={Bed} src={Bed} width={25} height={0} />
                        {gite.beds}
                      </div>
                      <div className="animal-container">
                        <Image alt={Dog} src={Dog} width={25} height={0} />
                        {gite.animaux_acceptes}
                      </div>
                      <div className="swiming-container">
                        <Image
                          alt={Swiming}
                          src={Swiming}
                          width={30}
                          height={0}
                        />
                        {gite.piscine}
                      </div>
                      <div className="rando-container">
                        <Image alt={Rando} src={Rando} width={25} height={0} />
                        {gite.randonnee}
                      </div>
                      <div className="velo-container">
                        <Image alt={Velo} src={Velo} width={25} height={0} />
                        {gite.location_velo}
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
      )}
    </section>
  );
}
