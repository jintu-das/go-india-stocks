import { difference } from "next/dist/build/utils";
import React from "react";

interface IProp {
  label: string;
  value: number;
  direction: "up" | "down" | "neutral";
}

export default function StockRate({ label, direction, value }: IProp) {
  let textColor =
    direction === "up"
      ? "text-green-600"
      : direction === "down"
      ? "text-red-600"
      : "text-white";
  return (
    <div className="mr-3 inline-block whitespace-nowrap">
      <span className="text-white uppercase pr-2">{label}</span>
      <span className={textColor}>{value}%</span>
    </div>
  );
}
