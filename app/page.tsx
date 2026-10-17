import Image from "next/image";
import {
  FaWrench,
  FaOilCan,
  FaTachometerAlt,
  FaLaptopMedical,
  FaLeaf,
  FaTruck,
  FaPhone,
  FaClock,
} from "react-icons/fa";
import "./style.css";
import Footer from "@/app/components/Footer/page";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <h2>Professionalità, Affidibilità e Competenza per la tua Auto</h2>
          <p>Prenditi cura del tuo veicolo attraverso la nostra officina</p>
          <div className="cta">
            <span>
              <FaPhone />
              <p>0332-890111 / +39 3914794972</p>
            </span>
            <a href="tel:+39 3914794972">Contattaci</a>
          </div>
        </div>
        <Image
          className="image-services"
          src="/rid_img_hero.webp"
          alt="Immagine Rid"
          width={400}
          height={200}
        ></Image>
      </section>
      <section className="servizi">
        <h2>I Nostri Servizi</h2>
        <ul>
          <li>
            <Image
              className="image-services"
              src="/manutenzioniRid.webp"
              alt="Manutenzioni Rid"
              width={380}
              height={200}
            ></Image>
            <div>
              <FaWrench className="icon-services" />
              <span>Riparazioni e manutenzioni su tutti i veicoli</span>
            </div>
          </li>
          <li>
            <Image
              className="image-services"
              src="/riparazioneIniezioneRid.webp"
              alt="Iniezione Rid"
              width={380}
              height={200}
            ></Image>
            <div>
              <FaOilCan className="icon-services" />
              <span>
                Revisione e riparazione di pompe di iniezione, iniettori e
                sistemi diesel
              </span>
            </div>
          </li>
          <li>
            <Image
              className="image-services"
              src="/tagliandiRid.webp"
              alt="Tagliandi Rid"
              width={380}
              height={200}
            ></Image>
            <div>
              {" "}
              <FaTachometerAlt className="icon-services" />
              <span>Tagliandi</span>
            </div>
          </li>
          <li>
            <Image
              className="image-services"
              src="/serviziBoschCarService.webp"
              alt="Servizi Bosch CarService Da Rid"
              width={380}
              height={200}
            ></Image>
            <div>
              <FaLaptopMedical className="icon-services" />
              <span>
                <div>Servizi Bosch Car Service:</div>
                <div>Diagnostica elettronica avanzata e ricambi ufficiali</div>
              </span>
            </div>
          </li>
          <li>
            <Image
              className="image-services"
              src="/decarbonizzazioneIdrogeno.webp"
              alt="Servizi Bosch CarService Da Rid"
              width={380}
              height={200}
            ></Image>
            <div>
              <FaLeaf className="icon-services" />
              <span>Decarbonizzazione a idrogeno</span>
            </div>
          </li>
          <li>
            <Image
              className="image-services"
              src="/veicoliIndustriali.webp"
              alt="Servizi Bosch CarService Da Rid"
              width={380}
              height={200}
            ></Image>
            <div>
              <FaTruck className="icon-services" />
              <span>Interventi su veicoli industriali</span>
            </div>
          </li>
        </ul>
      </section>
      <section className="section-time-table">
        <div className="divider">
          <h3>Sempre Disponibili Alle Vostre Richieste</h3>
          <h2>Vieni da Noi</h2>
        </div>
        <div className="time-table">
          <div>
            <FaClock className="icon-time-table" />
            <h2>Orari</h2>
          </div>
          <table>
            <thead>
              <tr>
                <th>Mattina</th>
                <th>Pomeriggio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>8:00 - 12:00</td>
                <td>14:00 - 18:00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="images-end">
        <Image
          className="image-end"
          src="/fondatoreRid80.webp"
          alt="Il Nostro Fondatore"
          width={400}
          height={400}
        ></Image>
        <Image
          className="image-end"
          src="/fotoRid.webp"
          alt="La Nostra Azienda"
          width={825}
          height={400}
        ></Image>
        <Image
          className="image-end"
          src="/boschCarServiceAd.webp"
          alt="Bosch Car Service AD"
          width={400}
          height={400}
        ></Image>
      </section>
      <Footer />
    </>
  );
}
