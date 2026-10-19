import { ReactNode } from "react";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import "./style.css";

export default function Navbar(): ReactNode {
  return (
    <nav>
      <Link href={"/"}>
        <Image
          src="/LogoRidGorini.webp"
          alt="RID"
          width={200}
          height={100}
          loading="eager"
        ></Image>
      </Link>
      <ul>
        <li>
          <Link href={"/contatti"}>Contatti</Link>
        </li>
        <li>
          <Link href={"/chi-siamo"}>Chi Siamo</Link>
        </li>
        <li className="social">
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
      </ul>
    </nav>
  );
}
