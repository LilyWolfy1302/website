import styles from "../styles/Home.module.css";
import checkMark from "../assets/checkmark.png";
import Header from "../components/header";
import logo from "../assets/images/image1.jpg"
import facebook from "../assets/facebook.png"
import leaf from "../assets/leaf.png"
import leaf1 from "../assets/leaf1.png"
import instagram from "../assets/instagram.png";
import { socialLinks } from "../config";
import { servicesTimes } from "../config";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Header />
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroCard}>
            <img src={leaf} alt="Leaf" style={{position:"absolute", width:"60px", height:"60px", top:22, right:20}}/>
            <img src={leaf1} alt="Leaf" style={{position:"absolute", width:"90px", height:"90px", top:0, left:30}}/>
            <img src={leaf1} alt="Leaf" style={{position:"absolute", width:"90px", height:"90px", bottom:0, left:450}}/>
            <div className={styles.heroLeft}>
              <h1>Hjælp til havearbejde?</h1>
              <p>- En have der føles tryg og rar-</p>
            </div>

            <div className={styles.listBox}>
              <h3>Havemand til alle dine behov</h3>
              <ul>
                <div onClick={() => navigate("/services/hækkeklipning")}>
                    <img src={checkMark} alt="Checkmark" />
                    <span>Hækkeklipning</span>
                </div>
                <div onClick={() => navigate("/services/japanske-beskæringskunst")}>
                    <img src={checkMark} alt="Checkmark" />
                    <span>Japanske beskæringskunst</span>
                </div>
                <div onClick={() => navigate("/services/beskaering-faeldning")}>
                    <img src={checkMark} alt="Checkmark" /> 
                    <span>Beskæring & Fældning</span>
                </div>
                <div  onClick={() => navigate("/services/tagrenderensning")}>
                    <img src={checkMark} alt="Checkmark" />
                    <span>Tagrenderensning</span>
                </div>
                <div  onClick={() => navigate("/services/lugning")}>
                    <img src={checkMark} alt="Checkmark" />
                    <span>Lugning</span>
                </div>
                <div onClick={() => navigate("/services/graesslaening")}>
                    <img src={checkMark} alt="Checkmark" />
                    <span>Græsslåning</span>
                </div>
                
              </ul>

              <a
                href="#contact"
                className={`${styles.btn} ${styles.btnGold}`}
              >
                KONTAKT MIG →
              </a>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className={styles.contentGrid}>
          <div className={styles.logoBig}>
            <img className={styles.logoBigImg} src={logo} alt="Logo" />
          </div>

          <div className={styles.textContent}>
            <div className={styles.textBlock}>
              <h2>Tryghed og faste aftaler</h2>
              <p>
                Har du brug for hjælp til havearbejdet, men ønsker
                en rolig og pålidelig løsning?
              </p>
              <p>
                Som din havemand hjælper jeg dig med at holde haven
                pæn, så du kan nyde den uden besvær. Arbejdet udføres roligt, grundigt og med respekt for både haven og dit hjem
              </p>
            </div>

            <div className={styles.textBlock}>
              <h2>Hvad der er vigtigt for mig</h2>
              <p>
                For mig er det vigtigt at holde aftaler og møde op til tiden. Jeg tager mig god tid og lytter til, hvad du gerne vil have lavet, så du får den bedst muligt service og at du føler dig tryg
              </p>
              <p>
                Du kan få hjælp en gang eller aftale en fast hjælp - det er op til dig og, hvornår det passer dig bedst.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div style={{flex:1}}>
            <strong>Niwa Haveservice</strong>
            <p>Tlf: +45 20141929</p>
            <p>CVR: 46160568</p>
            <p>
                Email: 
                <a className={styles.emailLink} href="mailto:Niwahaveservice@gmail.com">
                    Niwahaveservice@gmail.com
                </a>
            </p>


          </div>

          <div style={{flex:1, display:"flex", flexDirection:"column", alignItems:"center"}}>
            <strong>FØLG MIG</strong>
            <div className={styles.socialRow}>
              <div className={styles.socialBtn} onClick={() => window.open(socialLinks[0].url, "_blank")}>
                <img src={facebook} alt="Facebook" style={{width: "100%", height:"100%"}}/>
              </div>
              <div className={styles.socialBtn} onClick={() => window.open(socialLinks[1].url, "_blank")}>
                <img src={instagram} alt="Instagram" style={{width: "100%", height:"100%"}}/>
              </div>
            </div>
          </div>

          <div className={styles.footerLinks}>
                <p style={{textAlign:"end", fontWeight:"bold", fontSize:"22px", margin:0,}}>Telefontid:</p>
                {servicesTimes.map((item, index) => (
                    <div key={index} className={styles.footerLink}>
                        <span>{item.dag}</span>
                        <span style={{paddingLeft:"8px"}}>{item.tid}</span>
                    </div>
                ))}
            </div>
        </div>
        <p style={{textAlign:"center", margin:0}}>© 2026 Niwa Haveservice · CVR: 46160568</p>
      </footer>
    </div>
  );
}
