import React from "react";

interface CardProps {
  image: string;
  description: string;
}

export default function MarketCard({ image, description }: CardProps) {
  return (
    <div className="relative w-64 h-48 rounded-lg overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-md"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50">
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  );
}
