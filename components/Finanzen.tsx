import React from "react";
import PercentageCircle from "./PercentageCircle";
import styles from "../styles/Finanzen.module.css";

export default function Finanzen() {
  return (
    <div className={styles.container}>
      <h1>Der Stand unserer Finanzen:</h1>
      <PercentageCircle color="#41aba6" percentage={50} />
    </div>
  );
}
