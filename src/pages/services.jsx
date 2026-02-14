import Header from "../components/header";

export default function Services() {
  return (
    <div style={{ paddingTop: 100 }}>
      <Header />
      <main style={{ maxWidth: 1100, margin: "24px auto", padding: "0 20px" }}>
        <h1>Services</h1>
        <p>Her kan du se en oversigt over de ydelser jeg tilbyder.</p>

        <section id="haek">
          <h2>Hækkeklipning</h2>
          <p>Profesisonel hækkeklipning og vedligehold.</p>
        </section>

        <section id="beskaering">
          <h2>Japanske beskæringskunst</h2>
          <p>Finkæmmet beskæring og formgivning.</p>
        </section>

        <section id="grass">
          <h2>Beskæring & Fældning</h2>
        </section>
      </main>
    </div>
  );
}
