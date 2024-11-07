// app/page.js

import Footer from "./components/footer";
import HomeClient from "./components/homeclient";

// Récupere le fetch coté serveur (non client)
export default async function Home() {
  const res = await fetch("http://localhost:3000/data.json");
  const gites = await res.json();

  return (
    <div>
      <HomeClient gites={gites} />
      <Footer />
    </div>
  );
}
