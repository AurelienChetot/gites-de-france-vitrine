// app/page.js

import Footer from "./components/footer";
import HomeClient from "./components/homeclient";

export default async function Home() {
  // Récupere le fetch coté serveur (non client)
  const res = await fetch("http://localhost:3000/data.json");
  const gites = await res.json();

  return (
    <div>
      <HomeClient gites={gites} />
      <Footer />
    </div>
  );
}
