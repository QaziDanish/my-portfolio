"use client";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { TechStackData } from "@/constants/SkillsData";

export interface Tech {
  name: string;
  icon: JSX.Element;
}

export interface TechStackSection {
  Advance: Tech[];
  Good: Tech[];
  Familiar: Tech[];
}

export interface TechStackData {
  [key: string]: TechStackSection;
}

const TechStack: React.FC = () => {
  const [section, setSection] = useState<string>("Advance");
  const [sectionData, setSectionData] = useState<Tech[]>([]);
  const [isTechStack, setIsTechStack] = useState(false);
  const techStackRef = useRef<HTMLDivElement>(null);
  const techBoxesRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const techStackObserver = new IntersectionObserver(
      ([techStackEntry]) => {
        setIsTechStack(techStackEntry.isIntersecting);
      },
      {
        rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-250px"}`,
      }
    );

    if (techStackRef.current) {
      techStackObserver.observe(techStackRef.current);
    }

    if (isTechStack) {
      techBoxesRef.current?.classList.add("pop-up-child");
      buttonsRef.current?.classList.add("pop-up");
    } else {
      techBoxesRef.current?.classList.remove("pop-up-child");
      buttonsRef.current?.classList.remove("pop-up");
    }
  }, [isTechStack]);

  useEffect(() => {
    const selectedSection = TechStackData.find((sections) =>
      sections.hasOwnProperty(section)
    );
    setSectionData(selectedSection ? (selectedSection as any)[section] : []);

    setTimeout(() => {
      techBoxesRef.current?.classList.add("pop-up-child");
    }, 300);
  }, [section]);

  return (
    <Fragment>
      <section
        className="shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-hidden"
        id="techStack"
        ref={techStackRef}
      >
        <h2 className="text-3xl font-bold text-center p-4 flex justify-center items-center gap-3">
          <FaLaptopCode /> Tech Stack
        </h2>

        <div
          className="pop-down transition-all w-fit duration-500 m-auto rounded-lg border border-black dark:border-white border-solid overflow-hidden"
          ref={buttonsRef}
        >
          <button
            className={`w-[120px] md:w-[150px] p-2 font-bold ${
              section === "Advance" ? "bg-red-600" : ""
            } transition-all`}
            onClick={(e) => {
              setSection(e.currentTarget.innerText);
              if (section !== e.currentTarget.innerText)
                techBoxesRef.current?.classList.remove("pop-up-child");
            }}
          >
            Advance
          </button>
          <button
            className={`w-[120px] md:w-[150px] p-2 font-bold ${
              section === "Good" ? "bg-red-600" : ""
            } transition-all border-l border-r border-black dark:border-white border-solid`}
            onClick={(e) => {
              setSection(e.currentTarget.innerText);
              if (section !== e.currentTarget.innerText)
                techBoxesRef.current?.classList.remove("pop-up-child");
            }}
          >
            Good
          </button>
          <button
            className={`w-[100px] md:w-[150px] p-2 font-bold ${
              section === "Familiar" ? "bg-red-600" : ""
            } transition-all`}
            onClick={(e) => {
              setSection(e.currentTarget.innerText);
              if (section !== e.currentTarget.innerText)
                techBoxesRef.current?.classList.remove("pop-up-child");
            }}
          >
            Familiar
          </button>
        </div>

        <div
          className="pop-down-child flex min-h-[450px] py-[30px] px-[20px] md:px-[100px] flex-wrap justify-center items-center gap-5"
          ref={techBoxesRef}
        >
          {sectionData.map((tech: Tech) => (
            <div
              className="transition-all duration-700 px-2 h-fit py-3 md:py-5 w-[120px] md:w-[150px] border border-black dark:border-white border-solid rounded flex flex-col gap-3 items-center"
              key={tech.name}
            >
              <p>{tech.icon}</p>
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default TechStack;
