import Image from "next/image";
import "./style.css";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <h2>Professionalità, Affidibilità e Competenza per la tua Auto</h2>
          <p>Prenditi cura del tuo veicolo attraverso la nostra officina</p>
          <div className="cta">
            <p>0332-890111 / +39 3914794972</p>
            <a href="tel:+39 3914794972">Contattaci</a>
          </div>
        </div>
        <Image
          src="/rid_img_hero.webp"
          alt="Immagine Rid"
          width={400}
          height={200}
        ></Image>
      </section>
      <section className="servizi">
        <h2>I Nostri Servizi</h2>
        <ul>
          <li>Riparazioni e manutenzioni su tutti i veicoli</li>
          <li>
            Revisione e riparazione di pompe di iniezione, iniettori e sistemi
            diesel
          </li>
          <li>Tagliandi</li>
          <li>
            Servizi Bosch Car Service: Diagnostica elettronica avanzata e
            ricambi ufficiali
          </li>
          <li>Decarbonizzazione a idrogeno</li>
          <li>Interventi su veicoli industriali</li>
        </ul>
      </section>
    </>
  );
}
