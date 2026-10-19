import { ReactNode } from "react";
import Image from "next/image";
import "./style.css";

export default function ChiSiamo(): ReactNode {
  return (
    <section>
      <div className="storia">
        <h2>La Nostra Storia</h2>
        <p>
          Fondata nel 1983 da Lenelio e Rosanna Gorini. Da più di 40 anni
          serviamo le vostre esigenze attraverso i professionisti e
          apparecchiature al passo coi tempi. Offriamo competenza e supporto su
          tutti i veicoli ( non solo diesel ).
        </p>
      </div>
      <Image
        src="/fondatoreRid80.webp"
        alt="Foto Rid - La Nostra Storia"
        width={380}
        height={380}
      ></Image>
    </section>
  );
}
