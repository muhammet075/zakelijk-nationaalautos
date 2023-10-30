import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/eigenwebsite.module.css";
import checkIco from "@/assets/icons/check.svg";

function Eigenwebsite() {
  
  useEffect(() => {

  }, []);




    
  return (
    <div className={styles.eigenwebsite}>
      <div>

          <h2>Eigen website voor jouw autobedrijf</h2>
          <p>Nationaalautos.nl biedt autobedrijven een eigen website voor soepele afspraken voor APK, onderhoud, reparaties en bandenwissels. Beheerders kunnen afspraken bekijken, aanpassen en annuleren. Ook kunnen ze moeiteloos occasions toevoegen die automatisch op Nationaalautos.nl, Marktplaats, Autoscout24 en meer verkooppunten verschijnen. Het beheerdersdashboard maakt het eenvoudig om occasioninformatie up-to-date te houden. Dit alles helpt autobedrijven om efficiënter te werken en klanttevredenheid te verhogen.</p>
          <ul>
            <li><Image src={checkIco} alt="Check Icoon"/>Vindbaar in Google</li>
            <li><Image src={checkIco} alt="Check Icoon"/>Inclusief .NL domein</li>
            <li><Image src={checkIco} alt="Check Icoon"/>Dashboard pagina</li>
            <li><Image src={checkIco} alt="Check Icoon"/>Klantvriendlijk</li>
            <li><Image src={checkIco} alt="Check Icoon"/>Modern design</li>
            <li><Image src={checkIco} alt="Check Icoon"/>Razend snel & maatwek</li>
          </ul>

      </div>
    </div>
  );
}

export default Eigenwebsite;
