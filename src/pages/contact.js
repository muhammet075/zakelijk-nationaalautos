import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import styles from "@/styles/contact.module.css";
import Head from "next/head";
import checkIco from "@/assets/icons/check.svg";
import Telefoon from "@/assets/icons/telefoonico.svg";
import Mail from "@/assets/icons/mailico.svg";
import WhatsApp from "@/assets/icons/whatsappico.svg";

export default function Contact() {
  useEffect(() => {
    const emailSent = sessionStorage.getItem("sentcontactform2");
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
    let message = document.querySelector("#messageform").value.trim();
    let antwoord = document.querySelector("#antwoordform").value.trim();

    if ( voorAchterNaam === '' || !isValidEmail(email) || numberform === '' || message === '') {

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

        if (message === "") {
            document.querySelector("#messageform").classList.add("notselected");
        }

        if (antwoord === "") {
            document.querySelector("#antwoordform").classList.add("notselected");
        }

    } else if (parseInt(antwoord) !== 3) {

        alert('Het antwoord op de wiskundige vraag is onjuist. Probeer het opnieuw');
  
        if (antwoord !== 4) {
            document.querySelector("#antwoordform").classList.add("notselected");
        }
        
    } else {

        const emailData = {
            voorachternaam: voorAchterNaam,
            emailadress: email,
            telefoonnummer: numberform,
            bericht: message,
        }

        emailjs.send("service_e9gy42e","template_zxgzc9c", emailData, "6E-oLaUqs1b5vJbY1");

        document.querySelector(".contactforminner1").classList.add("displaynone");
        document.querySelector(".contactforminner2").classList.remove("displaynone");

        sessionStorage.setItem("sentcontactform2", "yes");

        setTimeout(() => {
            document.querySelector(".contactforminner3").classList.remove("displaynone");
            document.querySelector(".contactforminner2").classList.add("displaynone");
        }, 1000);

    }
}

  return (
    <>
      <Head>
          <title>Contact | Nationaalautos.nl</title>
          <meta name="description" content="Neem contact op als u vragen heeft over een eigen website voor uw autobedrijf."/>
          <meta name="og:description" content="Neem contact op als u vragen heeft over een eigen website voor uw autobedrijf."/>
          <meta property="og:url" content="https://www.zakelijk.nationaalautos.nl/contact"/>
          <meta property="og:title" content="Contact | Nationaalautos.nl"/>
      </Head>
      <div className="content2">
        <div>
          <h1>Contact</h1>
          <p>Heeft u een vraag, opmerking, voorstel of iets anders? Aarzel niet om contact met ons op te nemen. Wij zullen zo spoedig mogelijk contact met u opnemen.</p>
        </div>
      </div>
      <div className={styles.contact}>
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
                        <textarea placeholder="Bericht" id="messageform" onClick={removeErrorState}></textarea>
                    </section>

                    <section>
                        <input placeholder="Wat is 2 + 1?" type="text" id="antwoordform" onChange={restrictToNumbers} onClick={removeErrorState} />
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
                    <p id="contactformsuccesp2">Bedankt voor uw bericht. Wij geven binnen 2 werkdagen reactie, houdt uw email in de gaten.</p>
                </div>
            </div>

            <div>
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
