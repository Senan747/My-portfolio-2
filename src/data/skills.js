import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact, FaVuejs } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiLaravel,
  SiCodeigniter,
  SiMysql,
  SiPostgresql,
  SiRedux,
  SiTailwindcss,
  SiLinux,
  SiNginx,
  SiApache,
  SiDocker,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const skillCategories = [
  {
    key: "languages",
    items: [
      { Icon: SiPhp, name: "PHP" },
      { Icon: SiJavascript, name: "JavaScript" },
      { Icon: SiTypescript, name: "TypeScript" },
      { Icon: AiFillHtml5, name: "HTML5" },
      { Icon: FaCss3Alt, name: "CSS3" },
    ],
  },
  {
    key: "frontend",
    items: [
      { Icon: FaReact, name: "React" },
      { Icon: TbBrandNextjs, name: "Next.js" },
      { Icon: FaVuejs, name: "Vue.js" },
      { Icon: SiRedux, name: "Redux" },
      { Icon: SiTailwindcss, name: "Tailwind CSS" },
    ],
  },
  {
    key: "backend",
    items: [
      { Icon: SiLaravel, name: "Laravel" },
      { Icon: SiCodeigniter, name: "CodeIgniter" },
    ],
  },
  {
    key: "databases",
    items: [
      { Icon: SiMysql, name: "MySQL" },
      { Icon: SiPostgresql, name: "PostgreSQL" },
    ],
  },
  {
    key: "devops",
    items: [
      { Icon: SiLinux, name: "Linux" },
      { Icon: SiNginx, name: "Nginx" },
      { Icon: SiApache, name: "Apache" },
      { Icon: SiDocker, name: "Docker" },
    ],
  },
  {
    key: "tools",
    items: [
      { Icon: SiGit, name: "Git" },
      { Icon: SiGithub, name: "GitHub" },
    ],
  },
];
