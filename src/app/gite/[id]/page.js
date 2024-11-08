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
    <div>
      <h1>{gite.title}</h1>
      <p>{gite.description}</p>
      <Image src={gite.image} alt={gite.title} width={1000} height={500} />
      <p>Prix par nuit: {gite.price_per_night}€</p>
    </div>
  );
}
