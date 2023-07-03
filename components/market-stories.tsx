import React from "react";
import MarketCard from "./UI/market-card";
import classNames from "classnames";

interface IProp {
  drawerOpen: boolean;
  mobileView?: boolean;
}

export default function MarketStories({
  drawerOpen,
  mobileView = false,
}: IProp) {
  const numbers = [1, 2, 3, 4];
  const items = drawerOpen ? numbers.slice(0, 2) : numbers.slice(0, 4);
  const marketClass = classNames("grid gap-2", {
    "grid-cols-2": !drawerOpen,
    "grid-cols-1": drawerOpen,
  });

  return (
    <aside className="p-4 md:p-2 ">
      <h1 className="header-text mb-3 hidden md:block">MARKET STORIES</h1>
      <div
        className={
          mobileView
            ? "flex gap-3 flex-col justify-center items-center"
            : marketClass
        }
      >
        {items.map((item) => (
          <MarketCard
            key={item}
            image="https://lh3.googleusercontent.com/p/AF1QipN0oDUkuTjCFJVLX0Kaf6ORsNuEKAxBGJrBT28R=s1360-w1360-h1020"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
        ))}
      </div>
    </aside>
  );
}
