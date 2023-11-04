import React from "react";
import styles from "./dfo.module.css";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export default function DFOHeader() {
  return (
    <div className={styles.dfoHeader}>
      <div className={styles.dfoHeaderWrapperInner}>
        <Image src="/dfo-favicon.svg" alt="DFO" width="325" height="35" />
      </div>
      <div className={styles.dfoHeaderMenu}>
        <Link href="" className={styles.link}>
          <Image
            src="/norwegian.svg"
            alt="Norsk flagg"
            width="17"
            height="14"
          />
          Norsk
        </Link>
        <Link href="" className={clsx(styles.link, styles.english)}>
          <Image
            src="/english.svg"
            alt="Engelsk flagg"
            width="17"
            height="14"
          />
          English
        </Link>
      </div>
    </div>
  );
}
