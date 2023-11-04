import Link from "next/link";
import React from "react";
import DFOHeader from "./Header";
import DFOFooter from "./Footer";
import styles from "./dfo.module.css";
import Choice from "./Choice";

export default function Page() {
  return (
    <div className={styles.dfoPage}>
      <DFOHeader />
      <div className={styles.container}>
        <h1 style={{ fontSize: "3.5rem", margin: "0" }}>Welcome to login</h1>
        <p style={{ fontSize: "1.2rem" }}>
          Choose your business from the list.
        </p>

        <Choice />
        <Link href="/feide" className={styles.dfoButton}>
          Choose your business
        </Link>
      </div>
      <DFOFooter />
    </div>
  );
}
