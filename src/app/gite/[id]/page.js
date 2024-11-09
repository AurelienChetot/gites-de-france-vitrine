// app/gite/[id]/page.js
import { notFound } from "next/navigation"; // Affiche page 404 si gite pas trouvé
import Image from "next/image";

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
          <h1>{gite.title}</h1>
          <p className="gitepage-text">{gite.description_2}</p>
          <p className="gitepage-text">
            Prix par nuit: {gite.price_per_night}€
          </p>
        </div>
      </div>
    </div>
  );
}
