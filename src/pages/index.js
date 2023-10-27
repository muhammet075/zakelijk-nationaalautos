import { useEffect } from "react";
import Head from "next/head";
import Hero from "@/components/Hero";

export default function Home() {

  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>zakelijk-nationaalautos</title>
      </Head>
      <Hero/>
    </>
  );
}
