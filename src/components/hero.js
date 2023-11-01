import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import eigenWebsite from "@/assets/mockups/eigenwebsite.png";
import styles from "@/styles/hero.module.css";
import checkIco from "@/assets/icons/check.svg";
import ChevronRight from "@/assets/icons/chevron-right.svg";

function Hero() {
  
  useEffect(() => {
  }, []);
    
  return (
    <div className={styles.hero}>
      <div>
          <section>
            <h1 data-aos="fade-right">NationaalAutos.nl boost jouw autobedrijf.</h1>
            <ul>
              <li><Image src={checkIco} alt="Check Icoon"/>Eigen Website</li>
              <li><Image src={checkIco} alt="Check Icoon"/>Eigen occasion beheer</li>
              <li><Image src={checkIco} alt="Check Icoon"/>Geautomatiseerde advertenties</li>
              <li><Image src={checkIco} alt="Check Icoon"/>10+ Verkooppunten</li>
              <li><Image src={checkIco} alt="Check Icoon"/>Afsprakensysteem voor klanten</li>
            </ul>
            <div>
              <Link href="/klantworden" id="eigenwebsite" data-aos="fade-right">Klant worden <Image src={ChevronRight} alt="Verder Icoon"/></Link>
              <Link target="_blank" href="https://autogarage-project.vercel.app/" data-aos="fade-right">Live Demo <Image src={ChevronRight} alt="Verder Icoon"/></Link>
            </div>
          </section>
          <section>
            <Image src={eigenWebsite} alt="Mockup voor een eigen website"/>
          </section>
      </div>
    </div>
  );
}

export default Hero;