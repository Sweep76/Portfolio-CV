"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import {
  pytorch,
  tensorflow,
  r,
  matlab,
  jupyter,
  cplus,
  css,
  express,
  fastapi,
  figma,
  git,
  html,
  javascript,
  mysql,
  nextjs,
  nodejs,
  python,
  reactjs,
  tailwind,
  typescript,
} from "@/assets";

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cplus,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "NEXT JS",
    icon: nextjs,
  },
  {
    name: "Jupyter Lab",
    icon: jupyter,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "Pytorch",
    icon: pytorch,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Matlab",
    icon: matlab,
  },
  {
    name: "R",
    icon: r,
  },
];

function TechSection() {
  return (
    <section className="text-center mb-20 max-w-7xl px-5 w-full mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold">Skills</h1>
      <p className="mb-4 mt-2">
        These are the following technologies I have used previously
      </p>
      <InfiniteMovingCards
        items={technologies}
        direction="right"
        speed="normal"
      />
    </section>
  );
}

export default TechSection;
