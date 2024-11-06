// app/page.js
import Header from "./components/header";

// Server-side data fetching
export default async function Home() {
  const res = await fetch("http://localhost:3000/data.json"); // Assurez-vous que data.json est dans public/
  const gites = await res.json(); // Charger les données

  return (
    <div>
      <Header gites={gites} /> {/* Passer les données à Header */}
    </div>
  );
}
