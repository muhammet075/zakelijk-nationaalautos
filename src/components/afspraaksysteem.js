import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/afspraaksysteem.module.css";
import checkIco from "@/assets/icons/check.svg";

import afspraak1 from "@/assets/mockups/afspraak1.png";
import afspraak2 from "@/assets/mockups/afspraak2.png";
import afspraak3 from "@/assets/mockups/afspraak3.png";
import afspraak4 from "@/assets/mockups/afspraak4.png";

function Afspraaksysteem() {
  
  useEffect(() => {
  }, []);

  return (
    <div className={styles.afspraaksysteem}>
      <div>

        <div>
            <section>
                <Image src={afspraak1} alt="Screenshot van de admin dashboard"/>
            </section>
            <section>
                <h2>Afspraaksysteem</h2>
                <p>Laat de klant zijn auto bij u achterlaten op een afgesproken tijdstip.</p>
                <p>Dit afspraaksysteem biedt klanten de mogelijkheid om hun auto gedurende de dag bij ons achter te laten. Wij zullen vervolgens de benodigde tijd bepalen en aan de klant communiceren hoelang zij moeten wachten, of voor hoeveel dagen de auto bij ons zal blijven voor de benodigde service.</p>
                <p>Laat uw klanten eenvoudig een afspraak maken door hun kenteken in te voeren. Zodra het kenteken is ingevoerd, verschijnen alle relevante gegevens van hun voertuig. Vervolgens kunnen ze kiezen uit diverse diensten, zoals een onderhoudsbeurt, APK-keuring, reparaties, banden- of remmenvervanging, airco check en meer. Zodra de keuze is gemaakt, wordt het afspraakproces automatisch gestart. Laat uw klanten nu hun afspraak plannen en ervaar het gemak van onze service.</p>
            </section>
        </div>

        <div>
            <section>
                <h3>Afspraakgegevens</h3>
                <p>Na het selecteren van de gewenste dienst vult de klant eenvoudig de kilometerstand van hun auto in, samen met hun telefoonnummer, voor- en achternaam, e-mailadres en optioneel, de naam van hun bedrijf. Daarnaast hebben ze de mogelijkheid om een omschrijving toe te voegen waarin ze hun specifieke wensen of eventuele problemen met hun voertuig kunnen uitleggen. Het invullen van deze gegevens stelt ons in staat om hun afspraak op maat te plannen en hen een gerichte service te bieden.</p>
            </section>
            <section>
                <Image src={afspraak2} alt="Screenshot van de admin dashboard"/>
            </section>
        </div>

        <div>
            <section>
                <Image src={afspraak3} alt="Screenshot van de admin dashboard"/>
            </section>
            <section>
                <h3>Datum & tijd selecteren</h3>
                <p>Na het invoeren van de nodige gegevens wordt de klant uitgenodigd om een geschikte datum en tijd te kiezen voor het bezoek aan uw autobedrijf. De beschikbare tijden zijn gebaseerd op uw openingstijden van ons bedrijf. Bovendien kunnen we vrije dagen blokkeren, zodat deze niet beschikbaar zijn voor klantafspraken. Zodra de klant een geschikte datum heeft geselecteerd, kan de klant kiezen om de auto achter te laten bij uw autobedrijf. Op basis van de aard van de dienst beslist u hoelang de klant moet wachten of hoe lang de auto bij uw garage blijft.</p>
            </section>
        </div>

        <div>
            <section>
                <h3>Afspraakoverzicht</h3>
                <p>Met ons handige dashboard heeft u gemakkelijk toegang tot een overzicht van alle afspraken die zijn gemaakt. U kunt eenvoudig afspraken bekijken van vandaag en in de toekomst, evenals een archief van de afspraken die al hebben plaatsgevonden. Het overzicht is zo ontworpen dat u in één oogopslag de nodige informatie kunt zien, zoals klantgegevens, gekozen diensten, datums en tijden. Daarnaast biedt ons admin-dashboard de mogelijkheid om zelf afspraken toe te voegen, te wijzigen of te verwijderen. Dit stelt u in staat om de planning flexibel te beheren en aan te passen aan de veranderende behoeften van uw klanten en uw bedrijf. Met ons uitgebreide dashboard houden we de regie in handen voor een soepele en efficiënte bedrijfsvoering.</p>
            </section>
            <section>
                <Image src={afspraak4} alt="Screenshot van de admin dashboard"/>
            </section>
        </div>


      </div>
    </div>
  );
}

export default Afspraaksysteem;
