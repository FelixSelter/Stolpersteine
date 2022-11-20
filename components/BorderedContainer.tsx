import React from "react";

interface BorderedContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function BorderedContainer({
  children,
  className,
}: BorderedContainerProps) {
  return (
    <div
      className={className}
      style={{ padding: "10px", border: "4px solid #41aba6" }}
    >
      {children}
    </div>
  );
}
