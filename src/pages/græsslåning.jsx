import React from "react";
import styles from "../styles/Graesslaaning.module.css";
import Header from "../components/header";

// Update this path to your real image
import heroImage from "../assets/images/graesslaaning-hero.jpg";

export default function Graesslaaning({ phone = "20 14 19 29" }) {
  const tel = phone.replace(/\s+/g, "");

  return (
    <div className={styles.wrapper}>
        <Header />
      {/* HERO */}
      <header className={styles.hero}>
        <img
          src={heroImage}
          alt="Græsslåning"
          className={styles.heroImage}
        />
      </header>

      {/* CONTENT */}
      <main className={styles.main}>
        <section className={styles.textSection}>
          <h1 className={styles.title}>Græsslåning – en pæn plæne uden besvær</h1>

          <p className={styles.paragraph}>
            En velklippet græsplæne gør hele haven mere indbydende. Jeg hjælper
            med græsslåning, så du slipper for arbejdet og får en plæne, der ser
            flot ud hele sæsonen.
          </p>

          <p className={styles.paragraph}>
            Uanset om du ønsker fast vedligeholdelse eller hjælp en gang imellem,
            sørger jeg for et ensartet resultat og en pæn finish langs kanter og
            bede. Arbejdet udføres effektivt og med respekt for din have.
          </p>

          <p className={styles.paragraphStrong}>
            Oprydning er naturligvis inkluderet – din have efterlades klar til brug.
          </p>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.ctaInner}>
            <div className={styles.icon} aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
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
