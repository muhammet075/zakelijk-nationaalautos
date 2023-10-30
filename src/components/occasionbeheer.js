import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/occasionbeheer.module.css";
import checkIco from "@/assets/icons/check.svg";
import dashboard from "@/assets/mockups/dashboard.png"
import occasiontoevoegen from "@/assets/mockups/occasiontoevoegen.png";
import occasiondashboard from "@/assets/mockups/occasiondashboard.png";
import occasiondetail from "@/assets/mockups/occasiondetail.png";

import NationaalAutos from "@/assets/img/nationaalautos.svg";
import Marktplaats from "@/assets/img/marktplaats.svg";
import Autoscout24 from "@/assets/img/autoscout24.svg";
import Gaspedaal from "@/assets/img/gaspedaal.svg";
import Autotrack from "@/assets/img/autotrack.svg";



function Occasionbeheer() {
  
  useEffect(() => {

  }, []);




    
  return (
    <div className={styles.occasionbeheer} id="verkooppunten">
      <div>

        <div>
            <section>
                <h2>Eenvoudige occasion beheer</h2>
                <p>Met onze geavanceerde websitefuncties kunnen autobedrijven moeiteloos occasions toevoegen aan hun inventaris. Voer het kenteken in voor directe toegang tot RDW-voertuiginformatie en upload eenvoudig foto's en details zoals prijs en kilometerstand. Met een paar klikken verschijnt uw aanbod automatisch op meerdere verkooppunten zoals op je eigen website, NationaalAutos.nl, Marktplaats, Autoscout24, Gaspedaal en meerdere. Hierdor wordt de kans op een snelle en succesvolle verkoop vergroot. Wij zorgen voor een naadloze online verkoopervaring, zodat u zich kunt concentreren op uitstekende klantenservice.</p>
            </section>
            <section>
                <Image src={dashboard} alt="Screenshot van de admin dashboard"/>
            </section>
        </div>


        <div>
            <section>
                <h2>Verkooppunten</h2>
                <ul id="occasionsbeheer">
                    <li><Image src={NationaalAutos} alt="Logo van NationaalAutos.nl"/></li>
                    <li><Image src={Marktplaats} alt="Logo van Martkplaats"/></li>
                    <li><Image src={Autoscout24} alt="Logo van Autoscout24"/></li>
                    <li><Image src={Gaspedaal} alt="Logo van Gaspedaal.nl"/></li>
                    <li><Image src={Autotrack} alt="Logo van Autotrack.nl"/></li>
                </ul>
            </section>
        </div>



        <div>
            <section>
                <Image src={occasiontoevoegen} alt="Screenshot om een occasion toetevoegen"/>
            </section>
            <section>
                <h3>Occasion toevoegen</h3>
                <p>Voeg moeiteloos occasions toe via het admin-paneel door simpelweg het kenteken in te voeren. Ontvang direct alle relevante voertuiginformatie van de RDW-server. Met een paar klikken wordt de auto automatisch geadverteerd op uw eigen website, Nationaalautos.nl, Marktplaats, Autoscout24, Gaspedaal en andere verkooplocaties. Beheerders kunnen zich concentreren op klantenservice terwijl het platform zorgt voor een moeiteloze online verkoopervaring.</p>
            </section>
        </div>

        <div>
            <section>
                <Image src={occasiondetail} alt="Screenshot van een detail pagina van een occasion"/>
            </section>
            <section>
                <h3>Occasion pagina</h3>
                <p id="afspraaksysteem">Deze opmaak zal ook consistent worden toegepast op zowel de eigen website als op Nationaalautos.nl, waardoor gebruikers een uniforme en gestroomlijnde ervaring hebben, ongeacht het platform dat ze gebruiken.</p>
            </section>
        </div>



      </div>
    </div>
  );
}

export default Occasionbeheer;
