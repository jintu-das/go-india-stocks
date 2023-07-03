import React from "react";

export default function Searchbar() {
  return (
    <div className="relative w-full max-w-lg">
      <input
        type="text"
        placeholder="Search"
        className="px-4 py-2 text-sm border rounded-md bg-gray-200 w-full"
      />
      <div className="absolute right-3 top-2">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
