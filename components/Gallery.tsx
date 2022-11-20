import React, { MouseEvent } from "react";
import styles from "../styles/Gallery.module.css";
import Image from "next/image";

interface GalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function Gallery({ images }: GalleryProps) {
  function shiftLeft(e: MouseEvent<HTMLDivElement>) {
    const gallery = e.currentTarget.nextElementSibling as HTMLDivElement;
    const children = Array.from(gallery.children) as HTMLDivElement[];
    const visibleChildren = children.filter(
      (child) => child.style.display !== "none"
    );
    const hiddenChildren = children
      .filter((child) => child.style.display === "none")
      .reverse();

    if (hiddenChildren.length > 0) {
      const childToShow = hiddenChildren[0];
      const width = childToShow.style.width;
      childToShow.style.left = `-${width}`;
      childToShow.style.display = "block";

      for (const child of children) {
        child.animate(
          {
            transform: ["translateX(0)", `translateX(${width})`],
          },
          { duration: 400 }
        );
      }

      setTimeout(() => {
        childToShow.style.left = "0";
        childToShow.style.width = "";
        childToShow.style.position = "relative";
      }, 400);
    }
  }

  function shiftRight(e: MouseEvent<HTMLDivElement>) {
    const gallery = e.currentTarget.previousElementSibling as HTMLDivElement;
    const children = (Array.from(gallery.children) as HTMLDivElement[]).filter(
      (child) => child.style.display !== "none"
    );

    if (children.length > 4) {
      const firstChild = children[0];
      const width = firstChild.offsetWidth;
      firstChild.style.position = "absolute";
      firstChild.style.width = `${width}px`;

      for (const child of children.slice(1)) {
        child.style.left = `${width}px`;
      }

      for (const child of children) {
        child.animate(
          {
            transform: `translateX(-${width}px)`,
          },
          { duration: 400 }
        );
      }

      setTimeout(() => {
        for (const child of children.slice(1)) {
          child.style.left = "0px";
        }

        firstChild.style.display = "none";
      }, 400);
    }
  }

  return (
    <div>
      <h1>Bildergalerie:</h1>
      <noscript>This gallery looks better with JavaScript enabled</noscript>
      <div className={styles.gallery}>
        <div className={styles.galleryControl} onClick={shiftLeft}>
          <Image
            src="/icons/angle-left-solid.svg"
            alt="Shift gallery left"
            width={50}
            height={50}
          />
        </div>
        <div className={styles.galleryItemContainer}>
          {images.map((image, i) => (
            <div key={i} className={styles.imageContainer}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
        <div className={styles.galleryControl} onClick={shiftRight}>
          <Image
            src="/icons/angle-right-solid.svg"
            alt="Shift gallery right"
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
}
