import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "BigCommerce",
    desc: "Help businesses build, manage, and grow their online stores.",
    img: "/static/projects/BigCommerce.png",
    link: "https://BigCommerce.com/",
    tags: ["React", "TypeScript", "NextJS", "TailwindCSS", "CSS", "Node.js"],
  },
  {
    id: 1,
    title: "CarsCommerce",
    desc: "Online marketplace and resource for car buyers and sellers",
    img: "/static/projects/CarsCommerce.png",
    link: "https://CarsCommerce.com/",
    tags: ["React", "Typescript", "Figma", "CSS", "Node.js"],
  },
  {
    id: 2,
    title: "Intellispark Pulse",
    desc: "help schools and districts improve student support by providing a platform",
    img: "/static/projects/Intellispark.png",
    link: "https://intellispark.com/",
    tags: ["React", "Typescript", "Material UI", "TailwindCSS", "Node.js"],
  },
  {
    id: 3,
    title: "MAVIN Furniture",
    desc: "Design, manufacture, and sell high-quality, heirloom-quality, custom wood furniture.",
    img: "/static/projects/MAVIN.png",
    link: "https://mavinfurniture.com/",
    tags: ["React", "Node.js", "TailwindCSS", "Bootstrap"],
  },
  {
    id: 4,
    title: "Learn.TheYEI",
    desc: "All the resources you will need to get a boost into economics.",
    img: "/static/projects/yei-learn.png",
    link: "https://learn.theyei.org/",
    tags: ["React", "NextJS", "TailwindCSS", "CSS"],
  },
  {
    id: 5,
    title: "BuildFaster",
    desc: "Beautiful HTML templates ready-made for your next landing page.",
    img: "/static/projects/buildfaster.png",
    link: "https://buildfaster-io.vercel.app/",
    tags: ["HTML", "CSS", "Javascript", "Gumroad"],
  },
  {
    id: 6,
    title: "React Emoji Search",
    desc: "1800+ emojis at your fingertips. Ready-to-use with just a simple copy+paste.",
    img: "/static/projects/react-emoji-search.png",
    link: "https://react-emoji-search.braydentw.vercel.app/",
    tags: ["React", "CSS", "JSON"],
  },
  {
    id: 7,
    title: "Madlibs",
    desc: "A simple version of Madlibs built for the web!",
    img: "/static/projects/madlibs.png",
    link: "https://fillemin.netlify.app/",
    tags: ["HTML", "CSS", "Javascript"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects