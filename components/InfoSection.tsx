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
  ratio: number;
  alt: string;
  imgPosition: ImagePosition;
  children: React.ReactNode;
}

export default function InfoSection({
  title,
  img,
  alt,
  ratio,
  children,
  imgPosition,
}: InfoSectionProps) {
  const textContainer = (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );

  const imageContainer = (
    <div
      style={{ "--ratio": ratio } as React.CSSProperties}
      className={`${styles.imageContainer} ${
        imgPosition == ImagePosition.RIGHT ? styles.imageRight : ""
      }`}
    >
      <Image
        className={styles.image}
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
