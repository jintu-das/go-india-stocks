"use client";

import Image from "next/image";
import Button from "./button";
import Searchbar from "./searchbar";
import StockRate from "./stock-rate";

export default function Navbar() {
  return (
    <>
      <nav className="p-3 flex grow">
        <div className="flex justify-start items-center gap-8 grow">
          <Image
            src="/images/logo.webp"
            height={60}
            width={60}
            alt="Your Name"
          />
          <Searchbar />
        </div>
        {/* hidden on desktop */}
        <button className="ml-3 mr-1 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {/* hidden on mobile */}
        <div className="items-center justify-end gap-4 pl-40 hidden lg:flex">
          <Button noBorder>Contact Us</Button>
          <Button>SIGN UP</Button>
          <Button>SIGN IN</Button>
        </div>
      </nav>
      <div className="p-2 bg-black text-white text-xs font-light flex justify-center items-center gap-4 overflow-hidden">
        <StockRate direction="up" label="BHARATI AIRTEL" value={0.03} />
        <StockRate direction="down" label="HINDALCO" value={0.23} />
        <StockRate direction="down" label="RELIANCE" value={10.2} />
        <StockRate direction="up" label="MRF" value={0.03} />
        <StockRate direction="up" label="BHARATI AIRTEL" value={0.03} />
        <StockRate direction="neutral" label="BHARATI AIRTEL" value={0.03} />
        <StockRate direction="down" label="BHARATI AIRTEL" value={0.03} />
        <StockRate direction="up" label="BHARATI AIRTEL" value={0.03} />
        <StockRate direction="neutral" label="BHARATI AIRTEL" value={0.03} />
      </div>
    </>
  );
}
