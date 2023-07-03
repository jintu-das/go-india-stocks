import React from "react";

interface IProp {
  label: string;
  icon: React.ReactNode;
}

export default function ActionButton({ label, icon }: IProp) {
  return (
    <button className="flex justify-start items-center gap-1 pl-8">
      {icon}
      <span className="text-xs font-semibold">{label}</span>
    </button>
  );
}
