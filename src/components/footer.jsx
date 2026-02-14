import styles from "../styles/Footer.module.css";
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png";
import { socialLinks } from "../config";
import { servicesTimes } from "../config";


export default function Footer() {



    return(
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
                        <img src={facebook} alt="Facebook" style={{width: "50px", height:"40px"}}/>
                      </div>
                      <div className={styles.socialBtn} onClick={() => window.open(socialLinks[1].url, "_blank")}>
                        <img src={instagram} alt="Instagram" style={{width: "45px", height:"45px"}}/>
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
    )
}