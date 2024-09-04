import Image from "next/image";

import { BackgroundGradient } from "../ui/background-gradient";
import {
  visualizer,
  cbn,
  tasky,
} from "@/assets";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const projects = [
  {
    image: cbn,
    title: "BN-Mappo-Coordination",
    description:
      "CBN is an implementation of algorithms for Deep Reinforcement Learning with continuous action spaces.",
    tags: [
      { name: "Python", color: "bg-sky-500" },
      { name: "C++", color: "bg-red-500" },
      { name: "Tensorflow", color: "bg-purple-500" },
    ],
    github: "https://github.com/Sweep76/BN-Mappo-Coordination",
    live: "https://sites.google.com/view/mappo",
  },
  {
    image: visualizer, 
    title: "Data Visualizer",
    description:
      "Fundamentals of data analysis with Python using Numpy, Pandas, Matplotlib, and Seaborn to process and visualize data",
    tags: [
      { name: "Python", color: "bg-sky-500" },
      { name: "Seaborn", color: "bg-green-600"},
      { name: "Pandas", color: "bg-red-500" },
    ],
    github: "https://github.com/Sweep76/Data-Analytics-Visualizer",
    live: "https://replit.com/@MariaSylwiaR/sea-level-predictor#main.py",
  },
  {
    image: tasky, 
    title: "Taskify Application",
    description:
      "Task Management App for Employees with searching index function",
    tags: [
      { name: "React", color: "bg-sky-500" },
      { name: "Express", color: "bg-green-600"},
      { name: "Javascript", color: "bg-yellow-700" },
    ],
    github: "https://github.com/Sweep76/Taskify-Management-Application",
    live: "#",
  },
];

const ProjectSection = () => {
  return (
    <section className="max-w-7xl px-5 w-full mx-auto mb-4 mt-20">
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-2">
        Projects
      </h1>
      <p className="text-center mb-6">My recent and past personal projects.</p>
      <div className="flex flex-wrap gap-4 justify-center">
        {projects.map((project, index) => (
          <BackgroundGradient
            key={index}
            className="rounded-[22px] px-4 py-6 w-full inline-flex flex-wrap justify-center md:justify-normal gap-6 items-center bg-white dark:bg-zinc-900"
          >
            <Image
              src={project.image}
              alt="tasky"
              height="400"
              width="400"
              className="object-contain w-[350px] lg:w-[450px] border shadow rounded-lg"
            />
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold text-black dark:text-neutral-200">
                {project.title}
              </p>
              <p className="text-sm max-w-xs text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
              <div className="py-2 flex items-center gap-4">
                <Link href={project.github} target="_blank">
                  <Button className="p-1.5 h-auto rounded-full">
                    <Github size={20} />
                  </Button>
                </Link>
                <Link href={project.live} target="_blank">
                  <Button className="p-1.5 h-auto rounded-full">
                    <ExternalLink size={20} />
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-1 flex-wrap">
                {project.tags.map((tag, index) => (
                  <p
                    key={index}
                    className={`${tag.color} inline-block py-0.5 px-2 rounded-full text-white space-x-1 text-xs border border-blue-400 dark:border-white`}
                  >
                    {tag.name}
                  </p>
                ))}
              </div>
            </div>
          </BackgroundGradient>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
