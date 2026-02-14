import React from "react";
import styles from "../styles/Beskaeringskunst.module.css";
import Header from "../components/header";

// Update this path to your actual image
import heroImage from "../assets/images/beskaeringskunst-hero.jpg";

export default function Beskaeringskunst({ phone = "20 14 19 29" }) {
  const tel = phone.replace(/\s+/g, "");

  return (
    <div className={styles.wrapper}>
      <Header />
      {/* HERO */}
      <header className={styles.hero}>
        <img
          src={heroImage}
          alt="Beskæringskunst (Niwaki) – formklipning af træer og buske"
          className={styles.heroImage}
        />
      </header>

      {/* CONTENT */}
      <main className={styles.content}>
        <section className={styles.textSection} aria-label="Om beskæringskunst">
          <h1 className={styles.title}>Form din have med japanske beskæringskunst</h1>

          <p className={styles.paragraph}>
            Niwaki er japansk beskæringskunst, hvor træer og buske formes med fokus på
            balance, ro og naturlig skønhed. Gennem omhyggelig og gennemtænkt beskæring
            fremhæves plantens karakter og struktur, så haven får et harmonisk udtryk.
            Hver gren har sin plads, og resultatet er en have, hvor form, natur og
            skønhed går op i en højere enhed.
          </p>

          <p className={styles.paragraph}>
            Resultatet er en have med et elegant og tidløst udtryk, hvor strukturen og
            naturen smelter sammen.
          </p>

          <p className={styles.paragraphStrong}>
            Jeg sørger naturligvis også for oprydning, så din have er klar til brug.
          </p>
        </section>

        {/* CTA */}
        <section className={styles.cta} aria-label="Kontakt">
          <div className={styles.ctaInner}>
            <div className={styles.phoneIcon} aria-hidden="true">
              {/* Simple phone icon */}
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <path d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.5 21 3 13.5 3 4c0-.6.4-1 1-1h3.3c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2 1.9z" />
              </svg>
            </div>

            <h2 className={styles.ctaTitle}>Ring og høre mere!</h2>

            <div className={styles.phoneNumber}>{phone}</div>

            <a className={styles.callButton} href={`tel:${tel}`}>
              Ring nu
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
