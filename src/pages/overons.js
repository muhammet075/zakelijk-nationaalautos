import { useEffect } from "react";
import Head from "next/head";

export default function Overons() {

  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>Over ons | Nationaalautos.nl</title>
          <meta name="description" content="Wat voor soort bedrijf is Nationaalautos.nl en wat voor soort diensten levert het bedrijf op?"/>
          <meta name="og:description" content="Wat voor soort bedrijf is Nationaalautos.nl en wat voor soort diensten levert het bedrijf op?"/>
          <meta property="og:url" content="https://www.zakelijk.nationaalautos.nl/overons"/>
          <meta property="og:title" content="Over ons | Nationaalautos.nl"/>
      </Head>
      <div className="content">
        <div>

        <h1>Over ons</h1>
        
        <article>
            <section>
                <h2>Welkom bij NationaalAutos.nl</h2>
                <p>NationaalAutos.nl is een toonaangevend bedrijf gespecialiseerd in het ontwerpen en ontwikkelen van hoogwaardige websites voor autobedrijven. Onze op maat gemaakte websites bieden een naadloze gebruikerservaring, waardoor klanten moeiteloos afspraken kunnen maken voor diverse services, waaronder onderhoud, APK-keuringen, reparaties en meer.</p>
            </section>
            <section>
                <h2>Gemakkelijke afsprakenplanning</h2>
                <p>Met ons geavanceerde online boekingssysteem kunnen klanten eenvoudig een geschikte tijd en datum kiezen om hun voertuig bij uw garage achter te laten. Als autogarage-eigenaar heeft u volledige controle over de planning, waardoor u efficiënt kunt beheren hoe lang de klant zijn auto kwijt is, waardoor zowel klanten als uw bedrijf profiteren van een gestroomlijnd proces.</p>
            </section>
            <section>
                <h2>Verkoop van occasions</h2>
                <p>Naast het aanbieden van afsprakenplanning bieden wij ook een geautomatiseerd verkoopsysteem voor autohandelaren. U kunt eenvoudig uw occasions te koop aanbieden, waarbij onze technologie deze automatisch adverteert op verschillende gerenommeerde verkooppunten, waaronder ons eigen platform NationaalAutos.nl, Marktplaats, AutoScout24 en meer. Dit maximaliseert de zichtbaarheid van uw voertuigen en vergroot de kans op succesvolle verkooptransacties.</p>
            </section>
            <section>
                <h2>Gebruiksvriendelijk dashboard admin panel</h2>
                <p>Alle door ons gecreëerde websites zijn uitgerust met een intuïtief dashboard admin panel, waarmee garage-eigenaren moeiteloos alle afspraken kunnen inzien en beheren. Bovendien biedt dit systeem een geïntegreerd beheer van uw occasions, waardoor u op een efficiënte manier het gehele bedrijfsproces kunt stroomlijnen en optimaliseren.</p>
            </section>
        </article>

        </div>
      </div>
    </>
  );
}
