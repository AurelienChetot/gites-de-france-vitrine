// app/page.js
import Header from "./components/header";
import Section from "./components/section";

// Server-side data fetching
export default async function Home() {
  const res = await fetch("http://localhost:3000/data.json");
  const gites = await res.json();

  return (
    <div>
      <Header gites={gites} />
      <Section />
    </div>
  );
}
