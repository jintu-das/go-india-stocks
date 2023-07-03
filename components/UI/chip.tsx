import React from "react";

interface IProp {
  variant?: "primary" | "error" | "warning";
  children: string;
}

export default function Chip({ variant = "primary", children }: IProp) {
  const textColor =
    variant === "primary"
      ? "bg-blue-700"
      : variant === "error"
      ? "bg-red-700"
      : "bg-yellow-500";

  return <div className={`chip ${textColor}`}>{children}</div>;
}
