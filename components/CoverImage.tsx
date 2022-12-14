import React from "react";
import Image from "next/image";
import styles from "../styles/CoverImage.module.css";

export default function CoverImage() {
  return (
    <div>
      <div className={styles.mobileImage}>
        <Image
          src="/Stolpersteine/img/Mobile.png"
          alt="Gruppenbild des Geschichte Leistungskurses"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className={styles.desktopImage}>
        <Image
          src="/Stolpersteine/img/Desktop.png"
          alt="Gruppenbild des Geschichte Leistungskurses"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
}
