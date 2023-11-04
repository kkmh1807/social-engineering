import Link from "next/link";
import React from "react";
import styles from "./feide.module.css";

export default function Error() {
  return (
    <div className={styles.error}>
      <h2 style={{ fontSize: "16px" }}>Login failed</h2>
      <p style={{ marginTop: "1rem", marginBottom: "0.5rem" }}>
        The system is currently unavailable. Try again later. You will be
        redirected to DFØ.{" "}
        <a href="https://login.dfo.no">Click to go directly to DFØ</a>
      </p>
      <p>
        Tracking number:
        <span
          style={{ backgroundColor: "rgba(0,0,0,0.1)", padding: "0 0.2rem" }}
        >
          b6621c588b
        </span>
      </p>
    </div>
  );
}
