"use client";

interface IProp {
  noBorder?: boolean;
  children: string;
}

export default function Button({ children, noBorder = false }: IProp) {
  const buttonStyle = "rounded-md text-xs font-semibold  text-slate-700";

  return (
    <button
      className={
        noBorder
          ? `${buttonStyle} py-2 px-1`
          : `${buttonStyle} border border-gray-400 py-2 px-6 hover:bg-gray-100`
      }
    >
      {children}
    </button>
  );
}
