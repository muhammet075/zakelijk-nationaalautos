import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta name="format-detection" content="telephone=no"/>
        <meta name="viewport" content="width=device-width, user-scalable=no"/>
        <meta name="robots" content="noindex" />
      </Head>
      
      <div id='app'>
        <Header/>
        <main>
          <Component {...pageProps} />
        </main>
        <Footer/>
      </div>
    </>
  );
}

export default MyApp;
