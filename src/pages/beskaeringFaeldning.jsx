import React from "react";
import styles from "../styles/BeskaeringFaeldning.module.css";
import Header from "../components/header";

// Update path to your real image
import heroImage from "../assets/images/beskaering-faeldning-hero.jpg";

export default function BeskaeringFaeldning({ phone = "20 14 19 29" }) {
  const tel = phone.replace(/\s+/g, "");

  return (
    <div className={styles.wrapper}>
        <Header />
      {/* HERO */}
      <header className={styles.hero}>
        <img
          src={heroImage}
          alt="Beskæring og fældning"
          className={styles.heroImage}
        />
      </header>

      {/* TEXT */}
      <main className={styles.main}>
        <section className={styles.textSection}>
          <h1 className={styles.title}>
            Fra beskæring til fældning – jeg klarer det hele
          </h1>

          <p className={styles.paragraph}>
            Uanset om træer og buske trænger til en let beskæring eller en fuld
            fældning, står jeg klar til at hjælpe.
          </p>

          <p className={styles.paragraph}>
            Jeg udfører arbejdet sikkert, effektivt og med respekt for
            omgivelserne. Med fokus på nøjagtighed sikrer jeg et flot og trygt
            resultat – fra første snit til sidste gren er fjernet.
          </p>

          <p className={styles.paragraphStrong}>
            Jeg sørger naturligvis også for oprydning, så din have er klar til
            brug.
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
