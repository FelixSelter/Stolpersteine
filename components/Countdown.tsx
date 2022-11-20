import Script from "next/script";
import React from "react";
import styles from "../styles/Countdown.module.css";

interface CountdownProps {
  date: Date;
  heading: string;
  subheading: string;
}

export default function Countdown({
  date,
  heading,
  subheading,
}: CountdownProps) {
  return (
    <>
      <Script src="/Stolpersteine/scripts/countdown.js" strategy="lazyOnload" />
      <div id="countdown" className={styles.countdown} data-date={date}>
        <div className={styles.content}>
          <div className={styles.text}>
            <div className={styles.subheading}>
              {subheading} [{date.toLocaleDateString("de-DE")}]
            </div>
            <div className={styles.heading}>{heading}</div>
          </div>
          <div className={styles.segmentContainer}>
            <div className={styles.segment}>
              <span className={`days ${styles.timer}`}>Please</span>
              <span className={styles.multiplier}>Tage</span>
            </div>
            <div className={styles.segment}>
              <span className={`hours ${styles.timer}`}>enable</span>
              <span className={styles.multiplier}>Stunden</span>
            </div>
            <div className={styles.segment}>
              <span className={`minutes ${styles.timer}`}>Java</span>
              <span className={styles.multiplier}>Minuten</span>
            </div>
            <div className={styles.segment}>
              <span className={`seconds ${styles.timer}`}>Script</span>
              <span className={styles.multiplier}>Sekunden</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
