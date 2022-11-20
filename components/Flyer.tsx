/* eslint-disable @next/next/no-sync-scripts */
import Script from "next/script";
import Image from "next/image";
import React from "react";
import styles from "../styles/Flyer.module.css";

export default function Flyer() {
  return (
    <>
      <noscript>
        The interactive flyer only works if javascript is enabled. Please
        download the pdf
      </noscript>
      <script src="https://code.jquery.com/jquery-3.6.1.min.js" />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/turn.js/3/turn.min.js"
        onLoad={() => {
          const script = document.createElement("script");
          script.type = "text/javascript";
          script.src = "/Stolpersteine/scripts/initFlyer.js";
          document.body.appendChild(script);
        }}
      />
      <div className={styles.container}>
        <div id="flipbook">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
            (page) => {
              return (
                <div key={page} className={styles.page}>
                  <Image
                    src={`/Stolpersteine/flyer/flyer-stolpersteine-${page}.webp`}
                    alt=""
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              );
            }
          )}
        </div>
        <div className={styles.controlsContainer}>
          <button id="prev">
            <Image
              src="/Stolpersteine/icons/caret-left-solid.svg"
              alt=""
              width={50}
              height={50}
            />
          </button>
          <a
            href="/Stolpersteine/flyer/Stadt-Wörrstadt-Fyler-Jüdische-Familien.pdf"
            download
          >
            <Image
              src="/Stolpersteine/icons/download-solid.svg"
              alt=""
              width={50}
              height={50}
            />
          </a>
          <button id="next">
            <Image
              src="/Stolpersteine/icons/caret-right-solid.svg"
              alt=""
              width={50}
              height={50}
            />
          </button>
        </div>
      </div>
    </>
  );
}
