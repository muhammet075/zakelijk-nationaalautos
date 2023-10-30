import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/footer.module.css";
import Logo from "@/assets/img/nationaalautos.svg"
import Telefoon from "@/assets/icons/telefoonico.svg"
import Mail from "@/assets/icons/mailico.svg"
import WhatsApp from "@/assets/icons/whatsappico.svg";
import Instagram from "@/assets/icons/instagram.svg";
import Facebook from "@/assets/icons/facebook.svg";


function Footer() {

  useEffect(() => {    
  }, []);
  
  return (
    <footer className={styles.footer}>
        <div>
            <section>
                <Link href="/"><Image src={Logo} alt="Logo van NationaalAutos.nl"/></Link>
                <p>NationaalAutos.nl is gespecialiseerd in diensten leveren voor auto bedrijven & occasions verkoop.</p>
                <p>KVK: 91341167</p>
                <p>BTW: NL004883756B73</p>
                <Link href="/privacyverklaring">Privacy verklaring</Link>
                <Link href="/algemenevoorwaarden">Algemeene voorwaarden</Link>
                <p>&copy; Copyright - 2023 NationaalAutos.nl</p>
            </section>

            <section>
                <ul>
                    <li><h2>Links</h2></li>
                    <li><Link target="_blank" href="https://nationaalautos.nl">NationaalAutos.nl</Link></li>
                    <li><Link href="/#eigenwebsite">Eigen website</Link></li>
                    <li><Link href="/#verkooppunten">Verkooppunten</Link></li>
                    <li><Link href="/#occasionsbeheer">Occasionsbeheer</Link></li>
                    <li><Link href="/#afspraaksysteem">Afspraaksysteem</Link></li>
                    {/* <li><Link href="/">Voorbeelden</Link></li> */}
                    <li><Link href="/overons">Over ons</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/klantworden">Klant worden</Link></li>
                </ul>
            </section>

            <section>
                <ul>
                    <li><h2>Socials</h2></li>
                    <li><Link target="_blank" href="https://api.whatsapp.com/send/?phone=31687904632"><Image src={WhatsApp} alt="WhatsApp Icoon"/>WhatsApp</Link></li>
                    <li><Link target="_blank" href="https://api.whatsapp.com/send/?phone=31687904632"><Image src={Telefoon} alt="Telefoon Icoon"/>+31 6 87 90 46 32</Link></li>
                    <li><Link href="mailto:partner@nationaalautos.nl"><Image src={Mail} alt="Mail Icoon"/>E-Mail</Link></li>
                    <li><Link href="/"><Image src={Instagram} alt="Instagram Icoon"/>Instagram</Link></li>
                    <li><Link href="/"><Image src={Facebook} alt="Facebook Icoon"/>Facebook</Link></li>
                </ul>
            </section>
        </div>
    </footer>
  );
}

export default Footer;
