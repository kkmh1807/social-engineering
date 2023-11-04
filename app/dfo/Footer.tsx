import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "./dfo.module.css";

export default function DFOFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <Link className={styles.footerLink} href="https://dfo.no/en/dfo-id-0">
          Read more about DFØ-ID
        </Link>
        <Link
          className={styles.footerLink}
          href="https://dfo.no/en/dfo-id-0#a93ac8a43215ecb9f79ade43451013418"
        >
          Password Rules
        </Link>
        <Link className={styles.footerLink} href="https://dfo.no/en/contact-us">
          Contact
        </Link>
        <Link className={styles.footerLink} href="https://dfo.no/en/privacy">
          Privacy (data capsules / cookies)
        </Link>
      </div>
      <div className={styles.dfoInfo}>
        <Image src="/dfo-footer.svg" alt="Dfo" width="137" height="38"></Image>
        <br></br>
        Lørenfaret 1 C <br></br>
        Pb 7154 St. Olavs plass, 0130 Oslo<br></br>
        Tlf: 400 07 997 <br></br>
        Org. nr. 986 252 932
      </div>
    </footer>
  );
}
