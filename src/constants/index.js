import { airtel, presidency, netflix, cocacola, kiit } from "../utils";
import {
  psOne,
  psTwo,
  psTwo2,
  psThree,
  psThree2,
  psFour,
  psFive,
  psSeven,
} from "../utils";

export const navLists = ["Home", "Connect"];

export const companyName = "Factory Space AI";
export const companyTagline = "Empowering the future of manufacturing";

export const clients = [
  {
    name: "Airtel",
    logo: airtel,
  },
  {
    name: "Presidency",
    logo: presidency,
  },
  {
    name: "Netflix",
    logo: netflix,
  },
  {
    name: "Coca Cola",
    logo: cocacola,
  },
  {
    name: "KIIT",
    logo: kiit,
  },
  {
    name: "KIIT",
    logo: null,
  },
];

export const problemStatements = [
  {
    title: "Lack of Skilled Manpower",
    description:
      "The industry faces a significant shortage of skilled labor, which hampers production efficiency and innovation.",
    picture: psOne,
  },
  {
    title: "High Barriers to Entry",
    description:
      "Aspiring entrepreneurs face significant upfront capital requirements for machinery and quality control infrastructure.",
    picture: psTwo,
  },
  {
    title: "Underutilization of Machinery",
    description:
      "Small-scale industry owners often have idle machinery due to lack of trained labor or otherwise that incurs costs without generating revenue.",
    picture: psThree,
  },
  {
    title: "Inefficient Sourcing (Imports)",
    description:
      "Manufacturers struggle with sourcing components locally, leading to higher costs and longer lead times.",
    picture: psFour,
  },
  {
    title: "Quality Control",
    description:
      "Ensuring consistent quality across a distributed network is expensive and challenging.",
    picture: psFive,
  },
  // {
  //   title: "Vendor Showcase Limitations",
  //   description:
  //     "Equipment vendors need effective ways to demonstrate their products and gather user feedback to drive sales and innovation.",
  //   picture: psSix,
  // },
  {
    title: "Operational Inefficiencies",
    description:
      "Manufacturing processes often suffer from inefficiencies due to poor job scheduling and lack of virtual simulation capabilities.",
    picture: psSeven,
  },
];

export const solutions = [
  {
    title: "AI-Enabled Factory Operating System",
    value:
      "Utilizes AI to virtually simulate manufacturing processes and schedule jobs for maximum efficiency. Comparable to various levels of driving automation in vehicles, from operator assist to autonomous factories with integrated advanced robotics.",
    benefit:
      "Optimizes operations, reduces waste, and increases productivity by ensuring efficient resource utilization.",
  },
  {
    title: "Machine Listing for Small-Scale Industry",
    value: "Generates additional revenue by renting out idle machinery.",
    benefit: "Maximizes asset utilization and reduces operational costs.",
  },
  {
    title: "Virtual Factories for Individual Entrepreneurs",
    value:
      "Provides access to high-tech manufacturing capabilities without significant capital investment.",
    benefit:
      "Lowers barriers to entry, enabling more innovators to bring their ideas to life.",
  },
  {
    title: "Skilled Labor Pool and Training Programs",
    value:
      "Provides access to a pool of trained, skilled labor and offers continuous on-the-job guidance and training programs to upskill the workforce using AI in their native language.",
    benefit:
      "Addresses labor shortages, enhances production efficiency, and supports innovation by ensuring a steady supply of skilled manpower.",
  },
  {
    title: "Local Sourcing for Manufacturers",
    value:
      "Connects manufacturers with local suppliers for faster, cost-effective component sourcing by manufacturing them through entrepreneurs in virtual factories.",
    benefit:
      "Reduces lead times, lowers costs, and improves supply chain resilience.",
  },
  {
    title: "Shared Regional Quality Control Infrastructure",
    value:
      "Offers high-quality, standardized quality control services accessible to all platform users.",
    benefit:
      "Ensures product consistency while reducing individual costs for quality assurance.",
  },
  // {
  //   title: "Vendor Showcase and Feedback Platform",
  //   value:
  //     "Allows vendors to list and demonstrate their latest machinery, run real production jobs, gather real-time user feedback, and drive sales.",
  //   benefit: "Facilitates innovation and market adoption of new technologies.",
  // },
];
