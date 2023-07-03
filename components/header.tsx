import Navbar from "@/components/UI/navbar";
import Image from "next/image";
import React from "react";
import { LOG0_DATA } from "../utils/constants";

export default function Header() {
  return (
    <header>
      <Navbar />
      <section>
        <h2 className="header-text p-3">FEATURED COMPANIES</h2>

        <div className="flex gap-6 justify-center items-center bg-blue-200 py-1 px-3 overflow-hidden">
          {LOG0_DATA.map((logo) => (
            <Image
              key={logo.id}
              width={100}
              height={100}
              alt="company logo"
              src={logo.src}
            />
          ))}
          {LOG0_DATA.map((logo) => (
            <Image
              key={logo.id}
              width={100}
              height={100}
              alt="company logo"
              src={logo.src}
            />
          ))}
        </div>
      </section>
    </header>
  );
}
