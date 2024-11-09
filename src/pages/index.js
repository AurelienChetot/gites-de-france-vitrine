// pages/index.js
import HomeClient from "../app/components/homeclient";
import "../styles/global.scss";

export default function Home({ gites }) {
  if (!gites) {
    return <div>Erreur de récupération des données</div>;
  }

  return (
    <main>
      <HomeClient gites={gites} />
    </main>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_DATA_URL);

    if (!res.ok) {
      return {
        notFound: true,
      };
    }

    const gites = await res.json();

    return {
      props: { gites },
    };
  } catch (error) {
    console.error("Erreur lors de la récupération des données : ", error);
    return {
      notFound: true,
    };
  }
}
