import Header from "../components/header";
import styles from "../styles/Contact.module.css";

import avatar from "../assets/images/avatar.jpg";

export default function Contact() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.container}>
        <div className={styles.card}>
          <div className={styles.left}>
            <h1 className={styles.title}>Kontakt mig</h1>
            <p className={styles.name}>
              Filip Edison R.A Mogensen
            </p>
            <p className={styles.info}>
              Tlf: <a className={styles.phoneLink} href="tel:+4520141929">+45 20141929</a>
            </p>
            <p className={styles.info}>
              E-mail: <a className={styles.phoneLink} href="mailto:Niwahaveservice@gmail.com">Niwahaveservice@gmail.com</a>
            </p>
          </div>
          <div className={styles.right}>
            <img
              src={avatar}
              alt="profile"
              className={styles.image}
            />
          </div>
          <p className={styles.helpText}>
            Har du spørgsmål? Kontakt mig gerne på mail eller telefon - Jeg står klar til at hjælpe
          </p>
        </div>
      </main>
    </div>
  );
}