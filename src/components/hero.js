import { useEffect, useState } from "react";
import Image from "next/image";
import eigenWebsite from "@/assets/mockups/eigenwebsite.png";
import styles from "@/styles/hero.module.css";
import checkIco from "@/assets/icons/check.svg";

function Hero() {
  
  useEffect(() => {

  }, []);




    
  return (
    <div className={styles.hero}>
      <div>

          <section>
            <h1>NationaalAutos.nl boost jouw autobedrijf.</h1>
            <ul>
              <li><Image src={checkIco} alt="Check Icoon"/>Eigen Website</li>
              <li><Image src={checkIco} alt="Check Icoon"/>Eigen occasion beheer</li>
              <li><Image src={checkIco} alt="Check Icoon"/>Geautomatiseerde advertenties</li>
              <li><Image src={checkIco} alt="Check Icoon"/>10+ Verkooppunten</li>
              <li><Image src={checkIco} alt="Check Icoon"/>Afsprakensysteem voor klanten</li>
            </ul>
            <a href="/klantworden" id="eigenwebsite">Klant worden</a>
          </section>

          <section>
            <Image src={eigenWebsite} alt="Mockup voor een eigen website"/>
          </section>


      </div>
    </div>
  );
}

export default Hero;
