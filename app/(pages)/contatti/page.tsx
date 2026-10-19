import { ReactNode } from "react";
import ContactForm from "@/app/components/ContactForm/page";
import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import "./style.css";
export default function Contatti(): ReactNode {
  return (
    <section>
      <div className="contatti-wrapper">
        <ContactForm></ContactForm>
      </div>
      <div>
        <h2>I nostri contatti</h2>
        <ul>
          <li>
            <a href="tel:+393914794972" target="_blank">
              <FaPhone></FaPhone>
              <span>0332-890111 / +39 3914794972</span>
            </a>
          </li>
          <li>
            <a href="mailto:ridgorini@gmail.com" target="_blank">
              <FaEnvelope></FaEnvelope>
              <span>ridgorini@gmail.com</span>
            </a>
          </li>
          <li className="social-contatti">
            <a href="https://www.instagram.com/ridgorini/" target="_blank">
              <FaInstagram></FaInstagram>
              <span>Instagram di Rid Gorini</span>
            </a>
            <a href="https://www.facebook.com/ridgorini/" target="_blank">
              <FaFacebook></FaFacebook>
              <span>Facebook di Rid Gorini</span>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=393914794972&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              <FaWhatsapp></FaWhatsapp>
              <span>Whatsapp</span>
            </a>
          </li>
          <li>
            <a
              href="https://maps.app.goo.gl/spNMjhH96jermQu1A"
              target="_blank"
              className="luogo"
            >
              <div>
                <FaMapMarkerAlt />
                <span>VIA I° MAGGIO 10, AZZATE VA</span>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d695.7290631217533!2d8.785292799999997!3d45.772868599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47867dbed34bbf53%3A0x486c54e9fa857c5f!2sRid!5e0!3m2!1sit!2sit!4v1792436103606!5m2!1sit!2sit"
                width="300"
                height="300"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
