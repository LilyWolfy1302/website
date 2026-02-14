import React from "react";
import styles from "../styles/Tagrenderensning.module.css";
import Header from "../components/header";

// Update this path to your real image
import heroImage from "../assets/images/tagrenderensning-hero.jpg";

export default function Tagrenderensning({ phone = "20 14 19 29" }) {
  const tel = phone.replace(/\s+/g, "");

  return (
    <div className={styles.wrapper}>
        <Header />
      {/* HERO */}
      <header className={styles.hero}>
        <img
          src={heroImage}
          alt="Tagrenderensning"
          className={styles.heroImage}
        />
      </header>

      {/* CONTENT */}
      <main className={styles.main}>
        <section className={styles.textSection}>
          <h1 className={styles.title}>Tagrenderensning – undgå skader og tilstopning</h1>

          <p className={styles.paragraph}>
            Tilstoppede tagrender kan føre til overløb, fugtproblemer og skader på
            facaden. Med en grundig tagrenderensning sikrer du, at vandet ledes
            korrekt væk fra huset – især i efterår og vinter.
          </p>

          <p className={styles.paragraph}>
            Jeg fjerner blade, mos og snavs effektivt og sørger for, at tagrenden
            fungerer, som den skal. Arbejdet udføres sikkert og ordentligt – med
            fokus på et pænt resultat.
          </p>

          <p className={styles.paragraphStrong}>
            Oprydning er selvfølgelig inkluderet, så alt efterlades rent og ryddeligt.
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
