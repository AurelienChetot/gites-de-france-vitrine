import { useEffect, useState } from "react";

export default function Loading() {
  const loadingMessages = [
    "Les gîtes se construisent... Patientez pendant que les murs sèchent !",
    "Les oreillers sont en cours de gonflage... Douceur en approche !",
    "Nos draps se font repasser... Prêt à rêver ?",
    "On vérifie que le Wi-Fi passe jusqu'au hamac... Presque prêt !",
    "Optimisation des couchers de soleil... Ça arrive !",
    "On règle la température parfaite pour la sieste... Encore un instant !",
    "Le jardinier est en train de finir son café... Il est bientôt temps de profiter !",
    "Nous balayons les nuages... Le soleil arrive !",
  ];

  const [loadingMessage, setLoadingMessage] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * loadingMessages.length);
    setLoadingMessage(loadingMessages[randomIndex]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="loading-container">
      <p>{loadingMessage}</p>
      <div className="loader">
        <div className="cell d-0"></div>
        <div className="cell d-1"></div>
        <div className="cell d-2"></div>
        <div className="cell d-1"></div>
        <div className="cell d-2"></div>
        <div className="cell d-2"></div>
        <div className="cell d-3"></div>
        <div className="cell d-3"></div>
        <div className="cell d-4"></div>
      </div>
    </div>
  );
}
