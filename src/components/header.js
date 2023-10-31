import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/header.module.css";
import Logo from "@/assets/img/nationaal-autos-logo.svg";
import Telefoon from "@/assets/icons/telefoonico.svg";
import Mail from "@/assets/icons/mailico.svg";
import WhatsAppIco from "@/assets/icons/whatsappico.svg";
import WhatsApp from "@/assets/icons/whatsapp.svg";
import Hamburger from "@/assets/icons/hamburger.svg";
import Close from "@/assets/icons/close.svg";
import ChevronRight from "@/assets/icons/chevron-right.svg";

function Header() {

  useEffect(() => {


      window.addEventListener('scroll', function() {
        const header = document.querySelector("header");
        if (window.scrollY >= 150) {
            header.classList.add("fixedheader");
        } else {
            header.classList.remove("fixedheader");
        }
    });

    
  }, []);

  function openHamburger(){
    document.querySelector(".hamburgermenu").classList.remove("closehamburger");
    document.querySelector(".hamburgermenu").classList.add("openhamburger");
  }

  function closeHamburger(){
    document.querySelector(".hamburgermenu").classList.remove("openhamburger");
    document.querySelector(".hamburgermenu").classList.add("closehamburger");
  }
  
  return (
    <header className={styles.header}>
      <div>
        <section>
          <Link href="/"><Image src={Logo} alt="Logo van Nationaal Autos"/></Link>
          <Link target="_blank" href="https://api.whatsapp.com/send/?phone=31687904632"><Image src={WhatsApp} alt="WhatsApp Icoon"/></Link>
        </section>

        <section>
          <ul>
            <li><Link target="_blank" href="https://api.whatsapp.com/send/?phone=31687904632"><Image src={Telefoon} alt="Telefoon Icoon"/> +31 6 87 90 46 32</Link></li>
            <li><Link href="mailto:partner@nationaalautos.nl"><Image src={Mail} alt="Mail Icoon"/>partner@nationaalautos.nl</Link></li>
            <li><Link target="_blank" href="https://api.whatsapp.com/send/?phone=31687904632"><Image src={WhatsAppIco} alt="WhatsApp Icoon"/> WhatsApp</Link></li>
            <li><Link href="/overons">Over ons</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>

          <ul className="hamburgermenu">
            <li><button onClick={closeHamburger}><Image src={Close} alt="Sluit Icoon"/></button></li>
            <li><Link href="/#eigenwebsite" onClick={closeHamburger}>Eigen website</Link></li>
            <li><Link href="/#verkooppunten" onClick={closeHamburger}>Verkooppunten</Link></li>
            <li><Link href="/#occasionsbeheer" onClick={closeHamburger}>Occasionsbeheer</Link></li>
            <li><Link href="/#afspraaksysteem" onClick={closeHamburger}>Afspraaksysteem</Link></li>
            {/* <li><Link href="/" onClick={closeHamburger}>Voorbeelden</Link></li> */}
            <li><Link href="/overons" onClick={closeHamburger}>Over ons</Link></li>
            <li><Link href="/contact" onClick={closeHamburger}>Contact</Link></li>
            <li><Link href="/klantworden" onClick={closeHamburger}>Klant worden <Image src={ChevronRight} alt="Verder Icoon"/></Link></li>
          </ul>

          <button id="hamburgerbtn" onClick={openHamburger}><Image src={Hamburger} alt="Hamburger Icoon"/></button>

        </section>
      </div>

    </header>
  );
}

export default Header;
