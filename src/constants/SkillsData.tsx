import {
  SiNodedotjs,
  SiNextdotjs,
  SiExpress,
  SiRedux,
  SiFirebase,
  SiTypescript,
  SiJquery,
  SiNestjs,
  SiWebrtc,
  SiCsharp,
  SiJest,
  SiKubernetes,
  SiTailwindcss,
} from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiSass,
  DiMsqlServer,
  DiPostgresql,
  DiDocker,
  DiDotnet,
  DiPython,
} from "react-icons/di";
import { BsGit } from "react-icons/bs";
import { FaAngular, FaAws } from "react-icons/fa";
import { GrGraphQl, GrMysql } from "react-icons/gr";
import React from "react";

export const TechStackData = [
  {
    Advance: [
      {
        name: "NodeJS",
        icon: <SiNodedotjs className="md:text-4xl text-2xl" color="#4caf50" />,
      },
      {
        name: "ExpressJS",
        icon: <SiExpress className="md:text-4xl text-2xl" color="#4caf50" />,
      },
      {
        name: "ReactJS",
        icon: <DiReact className="md:text-4xl text-2xl" color="#53c1de" />,
      },
      {
        name: "JavaScript",
        icon: (
          <DiJavascript1 className="md:text-4xl text-2xl" color="#ffd600" />
        ),
      },
      {
        name: "Redux-toolkit",
        icon: <SiRedux className="md:text-4xl text-2xl" color="#7e57c2" />,
      },
      {
        name: "jQuery",
        icon: <SiJquery className="md:text-4xl text-2xsl" color="#106dae" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="md:text-4xl text-2xl" color="#377cc8" />,
      },
      {
        name: "C#",
        icon: <SiCsharp className="md:text-4xl text-2xl" color="#377cc8" />,
      },
      {
        name: "MS SQL Server",
        icon: (
          <DiMsqlServer className="md:text-4xl text-2xsl" color="#106dae" />
        ),
      },

      {
        name: "Postgres",
        icon: (
          <DiPostgresql className="md:text-4xl text-2xsl" color="#106dae" />
        ),
      },

      {
        name: "AWS",
        icon: <FaAws className="md:text-4xl text-2xsl" color="#106dae" />,
      },
    ],
    Good: [
      {
        name: "NextJS",
        icon: (
          <SiNextdotjs className="md:text-4xl text-2xl dark:text-white text-black" />
        ),
      },
      {
        name: "NestJS",
        icon: (
          <SiNestjs className="md:text-4xl text-2xl dark:text-white text-black" />
        ),
      },

      {
        name: "Git",
        icon: <BsGit className="md:text-4xl text-2xl" color="#f4511e" />,
      },
      {
        name: "Docker",
        icon: <DiDocker className="md:text-4xl text-2xl" color="#f4511e" />,
      },
      {
        name: "WEB RTC",
        icon: <SiWebrtc className="md:text-4xl text-2xl" color="#f4511e" />,
      },
      {
        name: "ASP.Net",
        icon: <DiDotnet className="md:text-4xl text-2xl" color="#f4511e" />,
      },
      {
        name: "Jest",
        icon: <SiJest className="md:text-4xl text-2xl" color="#f4511e" />,
      },
      {
        name: "MySQL",
        icon: <GrMysql className="md:text-4xl text-2xl" color="#08668e" />,
      },
      {
        name: "SASS",
        icon: <DiSass className="md:text-4xl text-2xl" color="#f06292" />,
      },
    ],
    Familiar: [
      {
        name: "Angular",
        icon: <FaAngular className="md:text-4xl text-2xl" color="#c50836" />,
      },
      {
        name: "Tailwindcss",
        icon: (
          <SiTailwindcss className="md:text-4xl text-2xl" color="#c50836" />
        ),
      },
      {
        name: "GraphQL",
        icon: <GrGraphQl className="md:text-4xl text-2xl" color="#c50836" />,
      },

      {
        name: "Python",
        icon: <DiPython className="md:text-4xl text-2xl" color="#7b7fb5" />,
      },

      {
        name: "Kubernetes",
        icon: <SiKubernetes className="md:text-4xl text-2xl" color="#f06292" />,
      },
      {
        name: "MongoDB",
        icon: <DiMongodb className="md:text-4xl text-2xl" color="#4caf50" />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase className="md:text-4xl text-2xl" color="#ffcd33" />,
      },
    ],
  },
];
