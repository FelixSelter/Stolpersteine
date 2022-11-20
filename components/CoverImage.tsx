import React from "react";
import Image from "next/image";
import styles from "../styles/CoverImage.module.css";

export default function CoverImage() {
  return (
    <div>
      <div className={styles.mobileImage}>
        <Image
          src="/img/Mobile.webp"
          alt="Gruppenbild des Geschichte Leistungskurses"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className={styles.desktopImage}>
        <Image
          src="/img/Desktop.webp"
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
