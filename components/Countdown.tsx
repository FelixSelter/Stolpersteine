import Script from "next/script";
import React, { useEffect, useState } from "react";
import styles from "../styles/Countdown.module.css";

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

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
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const delta = date.getTime() - Date.now();
      if (delta <= 0) {
        clearInterval(interval);
        setTime(0);
        return;
      }
      setTime(delta);
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return (
    <>
      <div id="countdown" className={styles.countdown} data-date={date}>
        <div className={styles.content}>
          <div className={styles.text}>
            <div className={styles.subheading}>
              {subheading} &#91;
              <time dateTime={date.toTimeString()}>
                {date.toLocaleString("De-de")}
              </time>
              &#93;
            </div>
            <div className={styles.heading}>{heading}</div>
          </div>
          <div className={styles.segmentContainer}>
            <div className={styles.segment}>
              <span className={`days ${styles.timer}`}>
                {Math.floor(time / day)}
              </span>
              <span className={styles.multiplier}>Tage</span>
            </div>
            <div className={styles.segment}>
              <span className={`hours ${styles.timer}`}>
                {Math.floor((time % day) / hour)}
              </span>
              <span className={styles.multiplier}>Stunden</span>
            </div>
            <div className={styles.segment}>
              <span className={`minutes ${styles.timer}`}>
                {Math.floor((time % hour) / minute)}
              </span>
              <span className={styles.multiplier}>Minuten</span>
            </div>
            <div className={styles.segment}>
              <span className={`seconds ${styles.timer}`}>
                {Math.floor((time % minute) / second)}
              </span>
              <span className={styles.multiplier}>Sekunden</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
