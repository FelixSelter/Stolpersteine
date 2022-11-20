import React from "react";
import styles from "../styles/PercentageCircle.module.css";

interface PercentageCircleProps {
  color: string;
  percentage: number;
}

export default function PercentageCircle({
  color,
  percentage,
}: PercentageCircleProps) {
  return (
    <svg
      viewBox="0 0 36 36"
      style={{ stroke: color, maxHeight: "min(40vh, 250px)" }}
    >
      <path
        className={styles.circleBg}
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
        className={styles.circle}
        strokeDasharray={`${percentage}, 100`}
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className={styles.percentage}>
        {percentage}%
      </text>
    </svg>
  );
}
