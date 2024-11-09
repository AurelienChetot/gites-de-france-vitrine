// app/gite/[id]/page.js
import { notFound } from "next/navigation"; // Affiche page 404 si gite pas trouvé
import Image from "next/image";

import Rating from "../../components/rating";

import Person from "../../../../public/svg/person.svg";
import Bed from "../../../../public/svg/bed.svg";
import Star from "../../../../public/svg/star.svg";
import Dog from "../../../../public/svg/dog.svg";
import Swiming from "../../../../public/svg/piscine.svg";
import Rando from "../../../../public/svg/rando.svg";
import Velo from "../../../../public/svg/bike.svg";

export default async function GitePage({ params }) {
  // stock id gite dans params
  const { id } = await params;

  const res = await fetch("http://localhost:3000/data.json");
  const gites = await res.json();

  // Filtrer les données pour l'id du gite
  const gite = gites.find((g) => g.id === parseInt(id));

  if (!gite) {
    notFound(); //Si pas de gite page 404
  }

  return (
    <div className="gitepage-container">
      <Image
        className="img-gitepage"
        src={gite.image}
        alt={gite.title}
        width={1000}
        height={500}
      />
      <p className="region-gitepage">
        Région : <span className="text-color-gitepage">{gite.region}</span>
      </p>
      {""}
      <div className="gitepage-info-container">
        <div className="card-proprio">
          <div className="infos">
            <div className="image"></div>
            <div className="info">
              <div>
                <p className="name">Propriétaire</p>
                <p className="function">{gite.proprietaire}</p>
              </div>
              <div className="stats">
                <p className="flex flex-col">
                  Portable :<span className="state-value">{gite.portable}</span>
                </p>
                <p className="flex flex-col">
                  Fixe :<span className="state-value">{gite.fixe}</span>
                </p>
              </div>
            </div>
          </div>
          <button className="request" type="button">
            Contactez par mail
          </button>
        </div>
        {""}
        <div className="gitepage-text-container">
          <h1>
            <span className="text-color-gitepage">{gite.title}</span>
          </h1>
          <p className="gitepage-text">{gite.description_2}</p>
          <div className="gitepage-text-icon-container">
            <p className="gitepage-text">
              <span className="text-color-gitepage">Plus de détails :</span>
            </p>
            <div className="capacity-bed-container">
              <div className="capacity-container">
                <Image alt={Person} src={Person} width={30} height={0} />
                <p className="gitepage-text">{gite.capacity}</p>
              </div>
              <div className="bed-container">
                <Image alt={Bed} src={Bed} width={25} height={0} />
                <p className="gitepage-text">{gite.beds}</p>
              </div>
              <div className="animal-container">
                <Image alt={Dog} src={Dog} width={25} height={0} />
                <p className="gitepage-text">{gite.animaux_acceptes}</p>
              </div>
              <div className="swiming-container">
                <Image alt={Swiming} src={Swiming} width={30} height={0} />
                <p className="gitepage-text">{gite.piscine}</p>
              </div>
              <div className="rando-container">
                <Image alt={Rando} src={Rando} width={25} height={0} />
                <p className="gitepage-text">{gite.randonnee}</p>
              </div>
              <div className="velo-container">
                <Image alt={Velo} src={Velo} width={25} height={0} />
                <p className="gitepage-text">{gite.location_velo}</p>
              </div>
            </div>
            <div className="price-rating-container">
              <div className="price-gitepage-container">
                <p>{gite.price_per_night}€ Par nuit</p>
              </div>
              <div className="rating-gitepage-container">
                <Image alt={Star} src={Star} width={25} height={0} />
                {gite.rating}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="notation-gitepage-container">
        <Rating />
      </div>
    </div>
  );
}
