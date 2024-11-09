// app/page.js

import HomeClient from "./components/homeclient";

export default async function Home() {
  // Récupere le fetch coté serveur (non client)
  const res = await fetch(process.env.NEXT_PUBLIC_DATA_URL);
  const gites = await res.json();

  return (
    <main>
      <HomeClient gites={gites} />
    </main>
  );
}
