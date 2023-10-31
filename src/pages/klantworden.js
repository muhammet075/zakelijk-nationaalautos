import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import styles from "@/styles/klantworden.module.css";
import Head from "next/head";
import checkIco from "@/assets/icons/check.svg";
import Telefoon from "@/assets/icons/telefoonico.svg";
import Mail from "@/assets/icons/mailico.svg";
import WhatsApp from "@/assets/icons/whatsappico.svg";

export default function Klantworden() {
  useEffect(() => {
    const emailSent = sessionStorage.getItem("sentcontactform");
    if (emailSent === "yes"){
        document.querySelector(".contactforminner1").classList.add("displaynone");
        document.querySelector(".contactforminner3").classList.remove("displaynone");
    } 
  }, []);

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function restrictToNumbers(event) {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]+/g, '');
  }

  function removeErrorState(){
    let notselected = document.querySelectorAll(".notselected");

    for (let i = 0; i < notselected.length; i++) {
        notselected[i].classList.remove("notselected");
    }
  }


  function checkContactForm(){
    let voorAchterNaam = document.querySelector("#voorachternaamform").value.trim();
    let email = document.querySelector("#emailform").value.trim();
    let numberform = document.querySelector("#numberform").value.trim();
    let bedrijfsform = document.querySelector("#bedrijfsform").value.trim();
    let kvkform = document.querySelector("#kvkform").value.trim();
    let btwform = document.querySelector("#btwform").value.trim();
    let straatnaamform = document.querySelector("#straatnaamform").value.trim();
    let huisnummerform = document.querySelector("#huisnummerform").value.trim();
    let postcodeform = document.querySelector("#postcodeform").value.trim();
    let plaatsform = document.querySelector("#plaatsform").value.trim();
    let message = document.querySelector("#messageform").value.trim();
    let antwoord = document.querySelector("#antwoordform").value.trim();

    if ( voorAchterNaam === '' || !isValidEmail(email) || numberform === '' || bedrijfsform === '' || kvkform === '' || btwform === '' || straatnaamform === '' || huisnummerform === '' || postcodeform === '' || plaatsform === '' || message === '') {

        alert('Controleer of de verplichte velden zijn ingevuld en of het e-mailadres geldig is');
   

        if (voorAchterNaam === ""){
            document.querySelector("#voorachternaamform").classList.add("notselected") 
        }

        if (!isValidEmail(email)){
            document.querySelector("#emailform").classList.add("notselected") 
        }

        if (numberform === ""){
            document.querySelector("#numberform").classList.add("notselected") 
        }

        if (bedrijfsform === "") {
            document.querySelector("#bedrijfsform").classList.add("notselected");
        }

        if (kvkform === "") {
          document.querySelector("#kvkform").classList.add("notselected");
        }

        if (btwform === "") {
          document.querySelector("#btwform").classList.add("notselected");
        }

        if (straatnaamform === "") {
          document.querySelector("#straatnaamform").classList.add("notselected");
        }

        if (huisnummerform === "") {
          document.querySelector("#huisnummerform").classList.add("notselected");
        }

        if (postcodeform === "") {
          document.querySelector("#postcodeform").classList.add("notselected");
        }

        if (plaatsform === "") {
          document.querySelector("#plaatsform").classList.add("notselected");
        }

        if (message === "") {
            document.querySelector("#messageform").classList.add("notselected");
        }

        if (antwoord === "") {
            document.querySelector("#antwoordform").classList.add("notselected");
        }

    } else if (parseInt(antwoord) !== 4) {

        alert('Het antwoord op de wiskundige vraag is onjuist. Probeer het opnieuw');
  
        if (antwoord !== 4) {
            document.querySelector("#antwoordform").classList.add("notselected");
        }
        
    } else {

        const emailData = {
            voorachternaam: voorAchterNaam,
            emailadress: email,
            telefoonnummer: numberform,
            bedrfijsnaam: bedrijfsform,
            kvk: kvkform,
            btw: btwform,
            adres: straatnaamform + " " + huisnummerform + ", " + postcodeform + " " + plaatsform,
            bericht: message,
        }

        emailjs.send("service_e9gy42e","template_suazsbb", emailData, "6E-oLaUqs1b5vJbY1");

        document.querySelector(".contactforminner1").classList.add("displaynone");
        document.querySelector(".contactforminner2").classList.remove("displaynone");

        sessionStorage.setItem("sentcontactform", "yes");

        setTimeout(() => {
            document.querySelector(".contactforminner3").classList.remove("displaynone");
            document.querySelector(".contactforminner2").classList.add("displaynone");
        }, 1000);

    }
}

  return (
    <>
      <Head>
          <title>Klant worden | Nationaalautos.nl</title>
          <meta name="description" content="Wilt u de diensten van Nationaalautos.nl gebruiken voor uw autobedrijf? Binnen een paar stappen bent u een klant van ons."/>
          <meta name="og:description" content="Wilt u de diensten van Nationaalautos.nl gebruiken voor uw autobedrijf? Binnen een paar stappen bent u een klant van ons."/>
          <meta property="og:url" content="https://www.zakelijk.nationaalautos.nl/klantworden"/>
          <meta property="og:title" content="Klant worden | Nationaalautos.nl"/>
      </Head>
      <div className="content2">
        <div>
          <h1>Klant worden</h1>
          <p>We zijn verheugd dat u geïnteresseerd bent om deel uit te maken van onze groeiende familie van tevreden klanten. Bij NationaalAutos.nl staat klanttevredenheid voorop, hierdoor streven we ernaar om u een naadloze en betrouwbare ervaring te bieden voor uw autobedrijf.</p>
        </div>
      </div>
      <div className={styles.klantworden}>
        <div>
            <div>
                <div className="contactforminner1">
                    <section>
                        <input type="text" placeholder="Voor- en achternaam" id="voorachternaamform" onClick={removeErrorState}></input>
                    </section>

                    <section>
                        <input type="email" placeholder="E-Mail" id="emailform" onClick={removeErrorState}></input>
                    </section>

                    <section>
                        <input type="text" placeholder="Telefoonnummer" id="numberform" onChange={restrictToNumbers} onClick={removeErrorState}></input>
                    </section>

                    <section>
                        <input type="text" placeholder="Bedrijfsnaam" id="bedrijfsform" onClick={removeErrorState}></input>
                    </section>

                    <section>
                        <input type="text" placeholder="KVK Nummer" id="kvkform" onChange={restrictToNumbers} onClick={removeErrorState}></input>
                    </section>

                    <section>
                        <input type="text" placeholder="BTW Nummer" id="btwform" onClick={removeErrorState}></input>
                    </section>

                    <section>
                        <input type="text" placeholder="Straatnaam" id="straatnaamform" onClick={removeErrorState}></input>
                        <input type="text" placeholder="Huis nr." id="huisnummerform" onClick={removeErrorState}></input>
                    </section>

                    <section>
                        <input type="text" placeholder="Postcode" id="postcodeform" onClick={removeErrorState} maxLength={7}></input>
                        <input type="text" placeholder="Plaats" id="plaatsform" onClick={removeErrorState}></input>
                    </section>

                    <section>
                        <textarea placeholder="Extra omschrijving" id="messageform" onClick={removeErrorState}></textarea>
                    </section>

                    <section>
                        <input placeholder="Wat is 3 + 1?" type="text" id="antwoordform" onChange={restrictToNumbers} onClick={removeErrorState} />
                    </section>

                    <section>
                        <button onClick={checkContactForm} id="contactfrombtn">Verzenden</button>
                    </section>
                </div>
                <div className="contactforminner2 displaynone">
                    <div class="loadingio-spinner-spinner-nnvlnihgqe8">
                        <div class="ldio-3kxj25bh4eh">
                            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        </div>
                    </div>
                </div>
                <div className="contactforminner3 displaynone">
                    <p><Image src={checkIco} alt="Succes Icoon"/> <span id="contactformsuccesp1">Bericht is met succes verzonden.</span></p>
                    <p id="contactformsuccesp2">Bedankt voor de interesse. Wij geven binnen 2 werkdagen reactie, houdt uw email in de gaten.</p>
                </div>
            </div>

            <div>
              <h2>Waarom klant worden?</h2>
              <ul>
                <li><Image src={checkIco} alt="Check Icoon"/> 24/7 Bereikbaar</li>
                <li><Image src={checkIco} alt="Check Icoon"/> Snelle service</li>
                <li><Image src={checkIco} alt="Check Icoon"/> Super snelle eigen website</li>
                <li><Image src={checkIco} alt="Check Icoon"/> Makkelijk je occasions beheren</li>
                <li><Image src={checkIco} alt="Check Icoon"/> Occasions automatisch adverteren</li>
                <li><Image src={checkIco} alt="Check Icoon"/> Adverteren op meerdere verkooppunten</li>
                <li><Image src={checkIco} alt="Check Icoon"/> Overzichtelijke afspraaksysteem</li>
                <li><Image src={checkIco} alt="Check Icoon"/> Makkelijk te gebruiken door klanten</li>
                <li><Image src={checkIco} alt="Check Icoon"/> RDW Kenteken integratie</li>
              </ul>

              <ul>
                <li>
                  <span><Image src={Mail} alt="Mail Icoon"/> E-Mail</span>
                  <Link href="mailto:partner@nationaalautos.nl">partner@nationaalautos.nl</Link>
                </li>
                <li>
                  <span><Image src={WhatsApp} alt="WhatsApp Icoon"/> WhatsApp</span>
                  <Link target="_blank" href="https://api.whatsapp.com/send/?phone=31687904632">+31 6 87 90 46 32</Link>
                </li>
                <li>
                  <span><Image src={Telefoon} alt="Telefoon Icoon"/> Telefoon</span>
                  <Link target="_blank" href="https://api.whatsapp.com/send/?phone=31687904632">+31 6 87 90 46 32</Link>
                </li>
              </ul>
            </div>
        </div>  
      </div>
    </>
  );
}
