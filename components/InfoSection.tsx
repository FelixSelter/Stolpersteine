import React from "react";
import Image from "next/image";
import styles from "../styles/InfoSection.module.css";

export enum ImagePosition {
  LEFT,
  RIGHT,
}

interface InfoSectionProps {
  title: string;
  img: string;
  alt: string;
  imgPosition: ImagePosition;
  children: string;
}

export default function InfoSection({
  title,
  img,
  alt,
  children,
  imgPosition,
}: InfoSectionProps) {
  const textContainer = (
    <div>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );

  const imageContainer = (
    <div
      className={`${styles.imageContainer} ${
        imgPosition == ImagePosition.RIGHT ? styles.imageRight : ""
      }`}
    >
      <Image
        src={img}
        alt={alt}
        fill
        style={{
          objectFit: "contain",
        }}
      />
    </div>
  );

  return (
    <div className={styles.row}>
      {imageContainer}
      {textContainer}
    </div>
  );
}
