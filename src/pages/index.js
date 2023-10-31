import { useEffect } from "react";
import Head from "next/head";
import Hero from "@/components/hero";
import Eigenwebsite from "@/components/eigenwebsite";
import Occasionbeheer from "@/components/occasionbeheer";
import Afspraaksysteem from "@/components/afspraaksysteem";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {

  useEffect(() => {
    Aos.init();
  });

  return (
    <>
      <Head>
          <title>Zakelijk | Nationaalautos.nl</title>
          <meta name="description" content="Nationaalautos.nl biedt autobedrijven een eigen website voor soepele afspraken voor APK, onderhoud, reparaties en meer. Beheerders kunnen afspraken bekijken, aanpassen en annuleren. Ook kunnen ze moeiteloos occasions toevoegen die automatisch op Nationaalautos.nl, Marktplaats en meer worden geadverteerd."/>
          <meta name="og:description" content="Nationaalautos.nl biedt autobedrijven een eigen website voor soepele afspraken voor APK, onderhoud, reparaties en meer. Beheerders kunnen afspraken bekijken, aanpassen en annuleren. Ook kunnen ze moeiteloos occasions toevoegen die automatisch op Nationaalautos.nl, Marktplaats en meer worden geadverteerd."/>
          <meta property="og:url" content="https://www.zakelijk.nationaalautos.nl/"/>
          <meta property="og:title" content="Zakelijk | Nationaalautos.nl"/>
      </Head>
      <Hero/>
      <Eigenwebsite/>
      <Occasionbeheer/>
      <Afspraaksysteem/>
    </>
  );
}
