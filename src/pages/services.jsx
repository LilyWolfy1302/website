import Header from "../components/header";
import styles from "../styles/Services.module.css";
import { Link } from "react-router-dom";

// Import images
import haekkeklipningImg from "../assets/images/hækkeklipning-hero.jpg";
import beskaeringskunstImg from "../assets/images/beskaeringskunst-hero.jpg";
import beskaerningFaeldningImg from "../assets/images/beskaering-faeldning-hero.jpg";
import tagrenderensningImg from "../assets/images/tagrenderensning-hero.jpg";
import lugningImg from "../assets/images/lugning-hero.jpg";
import graesslaaningImg from "../assets/images/graesslaaning-hero.jpg";

const services = [
  {
    id: "haek",
    title: "Hækkeklipning",
    description: "Professionel hækkeklipning og vedligehold.",
    image: haekkeklipningImg,
    link: "/hækkeklipning"
  },
  {
    id: "beskaering",
    title: "Japanske beskæringskunst",
    description: "Finkæmmet beskæring og formgivning.",
    image: beskaeringskunstImg,
    link: "/beskæringskunst"
  },
  {
    id: "faeldning",
    title: "Beskæring & Fældning",
    description: "Professionel beskæring og fældning af træer.",
    image: beskaerningFaeldningImg,
    link: "/beskaeringFaeldning"
  },
  {
    id: "tagrenderensning",
    title: "Tagrenderensning",
    description: "Rensning og vedligeholdelse af tagrender.",
    image: tagrenderensningImg,
    link: "/tagrenderensning"
  },
  {
    id: "lugning",
    title: "Lugning",
    description: "Grundig lugning og ukrudtsbekæmpelse.",
    image: lugningImg,
    link: "/lugning"
  },
  {
    id: "graes",
    title: "Græsslåning",
    description: "Regelmæssig græsslåning og plænepleje.",
    image: graesslaaningImg,
    link: "/græsslåning"
  }
];

export default function Services() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.container}>
        <div className={styles.heroSection}>
          <h1 className={styles.title}>Mine Ydelser</h1>
          <p className={styles.subtitle}>Her kan du se en oversigt over de ydelser jeg tilbyder.</p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <Link to={`/services/${service.link}`} key={service.id} className={styles.serviceCard}>
              <div className={styles.imageWrapper}>
                <img src={service.image} alt={service.title} className={styles.serviceImage} />
                <div className={styles.imageOverlay}></div>
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceDescription}>{service.description}</p>
                <span className={styles.learnMore}>Læs mere →</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
