import Link from "next/link";
import React from "react";
import DFOHeader from "./Header";
import styles from "./dfo.module.css";

const choices = [
  "",
  "Arbeids- og inkluderingsdepartementet",
  "Arbeidsretten",
  "Arbeidstilsynet",
  "Arkivverket",
  "Artsdatabanken",
  "Barne- og familiedepartementet",
  "Barne-, ungdoms- og familiedirektoratet",
  "Barneombudet",
  "Barneverns- og helsenemnda",
  "Bioteknologirådet",
  "Dagligvaretilsynet",
  "Datatilsynet",
  "De nasjonale forskningsetiske komiteene",
  "De samiske videregående skoler, Karasjok og Kautokeino",
  "Departementenes sikkerhets- og serviceorganisasjon (DSS)",
  "Direktoratet for byggkvalitet",
  "Direktoratet for e-helse",
  "Digitaliseringsdirektoratet",
  "Direktoratet for høyere utdanning og kompetanse",
  "Direktoratet for mineralforvaltning med Bergmesteren for Svalbard",
  "Direktoratet for samfunnssikkerhet og beredskap (DSB)",
  "Direktoratet for strålevern og atomsikkerhet",
  "Direktoratet for forvaltning og økonomistyring (DFØ)",
  "Diskrimineringsnemnda",
  "Domstolene i Norge",
  "Eksportfinansiering Norge",
  "Eldreombudet",
  "EOS-utvalget",
  "Feide",
  "Other agencies",
];

export default function Choice() {
  return (
    <div className={styles.form}>
      Business
      <select className={styles.select} defaultValue=" ">
        {choices.map((element) => (
          <option value={element}>{element}</option>
        ))}
      </select>
      <div className={styles.checkbox}>
        <input type="checkbox" className={styles.inputCheckbox} />
        Remember my choice
      </div>
    </div>
  );
}
