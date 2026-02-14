import React from "react";
import styles from "../styles/About.module.css";
import Header from "../components/header";
import imageAbout from "../assets/images/imageAbout.jpg";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className={styles.page}>
        <Header />
      <div className={styles.container}>
        {/* Top section */}
        <section className={styles.aboutSection}>
          <div className={styles.left}>
            <h1 className={styles.title}>Jeg har mange års erfaring med haveservice</h1>

            <div className={styles.text}>
              <p>
                Mit navn er Filip, og jeg er selvstændig gartner med stor passion for smukke
                og velplejede grønne områder.
              </p>

              <p>
                Jeg udfører alt inden for almindeligt havearbejde og vedligeholdelse, men har
                også specialiseret mig i japansk beskæringskunst, hvor præcision og æstetik går
                hånd i hånd.
              </p>

              <p>
                Jeg lægger stor vægt på personlig service, pålidelighed og et flot resultat –
                hver eneste gang. For mig er en god og ærlig dialog med kunden en vigtig del
                af arbejdet, så vi sammen kan skabe den have, du drømmer om.
              </p>

              <p>
                Derfor har jeg etableret Niwa Haveservice – for at tilbyde en tryg, personlig
                og professionel havemand, der sætter kvalitet og kundetilfredshed i første række.
              </p>
            </div>
              <div className={styles.ctaRow}>
              <Link className={styles.cta} to="/contact">
                Ring til mig
              </Link>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.imageCard}>
              <img
                src={imageAbout}
                alt="Niwa Haveservice"
                className={styles.image}
                onError={(e) => {
                  // fallback if you haven't added the image yet
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>
        </section>

        {/* Optional small info cards (nice touch) */}
        <section className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Pålidelig</div>
            <div className={styles.cardText}>Jeg holder aftaler og møder op til tiden.</div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Grundig</div>
            <div className={styles.cardText}>Arbejdet udføres roligt og med respekt for dit hjem.</div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Kvalitet</div>
            <div className={styles.cardText}>Fokus på flot resultat – hver eneste gang.</div>
          </div>
        </section>
      </div>
        <Footer />
    </div>
  );
}
