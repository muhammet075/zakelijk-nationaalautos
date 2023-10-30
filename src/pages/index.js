import { useEffect } from "react";
import Head from "next/head";
import Hero from "@/components/hero";
import Eigenwebsite from "@/components/eigenwebsite";
import Occasionbeheer from "@/components/occasionbeheer";
import Afspraaksysteem from "@/components/afspraaksysteem";

export default function Home() {

  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>zakelijk-nationaalautos</title>
      </Head>
      <Hero/>
      <Eigenwebsite/>
      <Occasionbeheer/>
      <Afspraaksysteem/>
    </>
  );
}
