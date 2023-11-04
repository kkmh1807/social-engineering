import Link from "next/link";
import React from "react";
import styles from "./feide.module.css";
import LoginBox from "./LoginBox";

export default function Page() {
  return (
    <div className={styles.body}>
      <LoginBox />
    </div>
  );
}
