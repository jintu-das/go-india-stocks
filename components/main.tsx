"use client";

import React, { useState } from "react";
import MarketCard from "./UI/market-card";
import MarketStories from "./market-stories";
import DiscussionCard from "./cards/discussion-card";
import Chip from "./UI/chip";
import { kFormatter } from "../utils/functions";
import Sidebar from "./sidebar";
import { Tab } from "@headlessui/react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const TABS = ["Discussion Forum", "Market Stories"];

export default function Main() {
  const [isOpen, setIsOpen] = useState(true);

  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="flex-1 flex item items-stretch">
      <Sidebar open={isOpen} toggleState={toggleSidebar} />

      {isOpen && <article className="w-[256px]"></article>}

      <section className="flex-1 max-w-5xl mx-auto py-0 md:py-3">
        <div className="block md:hidden">
          <Tab.Group>
            <Tab.List className="flex space-x-1 bg-sky-900">
              {TABS.map((tab) => (
                <Tab
                  key={tab}
                  className={({ selected }) =>
                    classNames(
                      "w-full py-2.5 text-sm font-medium leading-5 text-white",
                      selected
                        ? "bg-sky-950 shadow border-b-[3px] border-red-600"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  {tab}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              <Tab.Panel>
                <div className="max-w-3xl mx-auto py-3 px-3 border my-2 rounded-lg shadow-md flex gap-2 items-center">
                  <Chip>sector 1</Chip>
                  <Chip variant="error">sector 2</Chip>
                  <Chip variant="warning">sector 3</Chip>

                  <div className="relative w-full max-w-lg">
                    <input
                      type="text"
                      placeholder="Search"
                      className="px-11 py-1 text-sm border rounded-full bg-gray-200 w-full"
                    />
                    <div className="absolute left-3 top-[0.35rem]">
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
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
                </div>

                <div className="max-w-3xl mx-auto pr-1 h-[calc(100vh-310px)] overflow-auto">
                  <DiscussionCard
                    title="Lorem ipsum"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sit,
            delectus ullam illum optio alias quaerat pariatur molestiae mollitia"
                    liked
                    noOfComment={kFormatter(2000)}
                    noOfLike={kFormatter(1500)}
                    noOfShare={kFormatter(3000)}
                    noOfView={kFormatter(10000)}
                    imageSrc="/images/infibeam-logo.png"
                  />
                  <DiscussionCard
                    title="Lorem ipsum"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sit,
            delectus ullam illum optio alias quaerat pariatur molestiae mollitia"
                    liked
                    noOfComment={kFormatter(3000)}
                    noOfLike={kFormatter(1500)}
                    noOfShare={kFormatter(300)}
                    noOfView={kFormatter(10000)}
                  />
                  <DiscussionCard
                    title="Lorem ipsum"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sit,
            delectus ullam illum optio alias quaerat pariatur molestiae mollitia"
                    liked={false}
                    noOfComment={kFormatter(1000)}
                    noOfLike={kFormatter(1500)}
                    noOfShare={kFormatter(300)}
                    noOfView={kFormatter(10000)}
                  />
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="h-[calc(100vh-250px)] overflow-auto">
                  <MarketStories mobileView drawerOpen={isOpen} />
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>

        <h1 className="header-text ml-4 hidden md:block">DISCUSSION FORUM</h1>
        <div className="max-w-3xl mx-auto py-3 px-3 border my-2 rounded-lg shadow-md gap-2 items-center hidden md:flex">
          <Chip>sector 1</Chip>
          <Chip variant="error">sector 2</Chip>
          <Chip variant="warning">sector 3</Chip>

          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search"
              className="px-11 py-1 text-sm border rounded-full bg-gray-200 w-full"
            />
            <div className="absolute left-3 top-[0.35rem]">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
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
        </div>

        {/*  for desktop view           */}
        <div className="max-w-3xl mx-auto pr-1 h-[calc(100vh-353px)] overflow-auto hidden md:block">
          <DiscussionCard
            title="Lorem ipsum"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sit,
            delectus ullam illum optio alias quaerat pariatur molestiae mollitia"
            liked
            noOfComment={kFormatter(2000)}
            noOfLike={kFormatter(1500)}
            noOfShare={kFormatter(3000)}
            noOfView={kFormatter(10000)}
            imageSrc="/images/infibeam-logo.png"
          />
          <DiscussionCard
            title="Lorem ipsum"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sit,
            delectus ullam illum optio alias quaerat pariatur molestiae mollitia"
            liked
            noOfComment={kFormatter(3000)}
            noOfLike={kFormatter(1500)}
            noOfShare={kFormatter(300)}
            noOfView={kFormatter(10000)}
          />
          <DiscussionCard
            title="Lorem ipsum"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sit,
            delectus ullam illum optio alias quaerat pariatur molestiae mollitia"
            liked={false}
            noOfComment={kFormatter(1000)}
            noOfLike={kFormatter(1500)}
            noOfShare={kFormatter(300)}
            noOfView={kFormatter(10000)}
          />
        </div>
      </section>

      {/* for desktop view */}
      <div className="hidden md:block">
        <MarketStories drawerOpen={isOpen} />
      </div>
    </main>
  );
}
