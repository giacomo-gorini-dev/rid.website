import { ReactNode } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./style.css";
export default function Footer(): ReactNode {
  return (
    <section className="footer">
      <a href="tel: +393914794972" target="_blank">
        <FaPhone />
        <span>0332-890111 / +39 3914794972</span>
      </a>
      <a href="mailto:ridgorini@gmail.com" target="_blank">
        {" "}
        <FaEnvelope />
        <span>ridgorini@gmail.com</span>
      </a>
      <a href="https://maps.app.goo.gl/spNMjhH96jermQu1A" target="_blank">
        <FaMapMarkerAlt />
        <span>VIA I° MAGGIO 10, AZZATE VA</span>
      </a>
      <li>
        <a
          href="https://api.whatsapp.com/send/?phone=393914794972&text&type=phone_number&app_absent=0"
          target="_blank"
        >
          <FaWhatsapp size={32} />
        </a>
        <a href="https://www.facebook.com/ridgorini/" target="_blank">
          <FaFacebook size={32} />
        </a>
        <a href="https://www.instagram.com/ridgorini/" target="_blank">
          <FaInstagram size={32} />
        </a>
      </li>
    </section>
  );
}
