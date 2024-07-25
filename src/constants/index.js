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
export const companyTagline =
  "Revolutionizing the Future of Manufacturing with Innovation and Technology";

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

export const ManufacturerSlides = [
  {
    SlideNo: 1,
    Questioner: [
      {
        id: 1,
        question: "Let's get started. Which of these best describe you?",
        description: "We'll help you set up based on your business needs.",
        type: "mcq",
        options: ["Manufacturer", "Trader"],
      },
      {
        id: 2,
        question: "Company Name",
        description: "Please enter your company's official registered name.",
        type: "input",
      },
      {
        id: 3,
        question: "Email",
        description: "Provide a valid email address for communication.",
        type: "input",
      },
      {
        id: 4,
        question: "Industry",
        description: "Specify the primary industry your company operates in.",
        type: "input",
      },
    ],
  },
  {
    SlideNo: 2,
    Questioner: [
      {
        id: 5,
        question: "What types of machines do you currently own?",
        description: "List the main types of machinery in your inventory.",
        type: "input",
      },
      {
        id: 6,
        question: "What is the current utilisation rate of these machines?",
        description:
          "Select the option that best represents your machine usage.",
        type: "mcq",
        options: [
          "Fully utilized (80-100%)",
          "Partially utilized (50-79%)",
          "Underutilized (below 50%)",
        ],
      },
    ],
  },
  {
    SlideNo: 3,
    Questioner: [
      {
        id: 7,
        question: "What type of leasing arrangement would you prefer?",
        description: "Choose the leasing model that suits your business needs.",
        type: "mcq",
        options: [
          "Short-term leases",
          "Long-term leases",
          "On-demand leasing",
          "Other",
        ],
      },
      {
        id: 8,
        question:
          "What pricing model would you find most appealing for leasing out your machines?",
        description:
          "Select the pricing structure you prefer for machine leasing.",
        type: "mcq",
        options: ["Fixed fee", "Revenue share", "Pay-per-use", "Other"],
      },
    ],
  },
  {
    SlideNo: 4,
    Questioner: [
      {
        id: 9,
        question: "Any additional feedback",
        description:
          "Please share any other thoughts, suggestions, or concerns you may have.",
        type: "feedback",
      },
    ],
  },
];

export const TraderSlides = [
  {
    SlideNo: 1,
    Questioner: [
      {
        id: 1,
        question:
          "Let's get started. Which category best describes your business?",
        description:
          "We'll tailor our services based on your specific business needs.",
        type: "mcq",
        options: ["Manufacturer", "Trader"],
      },
      {
        id: 2,
        question: "What is your company's legal name?",
        description:
          "Please provide the officially registered name of your company.",
        type: "input",
      },
      {
        id: 3,
        question: "What is your business email address?",
        description:
          "Enter a valid email address for all business communications.",
        type: "input",
      },
      {
        id: 4,
        question: "In which industry does your company primarily operate?",
        description:
          "Specify the main industry sector of your business activities.",
        type: "input",
      },
    ],
  },
  {
    SlideNo: 2,
    Questioner: [
      {
        id: 5,
        question: "What types of products do you intend to manufacture?",
        description:
          "Please provide details about the primary products you plan to produce.",
        type: "input",
      },
      {
        id: 6,
        question:
          "Which specific machines are essential for your manufacturing process?",
        description:
          "List the key types of machinery required for your production line.",
        type: "input",
      },
      {
        id: 7,
        question: "How frequently do you expect to utilize these machines?",
        description:
          "Select the option that best represents your anticipated usage pattern.",
        type: "mcq",
        options: ["Daily", "Weekly", "Monthly", "On-demand"],
      },
    ],
  },
  {
    SlideNo: 3,
    Questioner: [
      {
        id: 8,
        question:
          "Which pricing model aligns best with your business strategy?",
        description:
          "Choose the pricing structure that you find most suitable for your operations.",
        type: "mcq",
        options: ["Subscription-based", "Pay-per-use", "Revenue-sharing"],
      },
      {
        id: 9,
        question:
          "Which additional services would add value to your operations?",
        description:
          "Select all applicable services that would enhance your manufacturing process.",
        type: "mcq",
        options: [
          "Technical support and troubleshooting",
          "Comprehensive machine operation training",
          "Logistics and transportation management",
          "Quality control and assurance protocols",
          "Regular maintenance and servicing",
        ],
      },
    ],
  },
  {
    SlideNo: 4,
    Questioner: [
      {
        id: 10,
        question: "Any additional feedback",
        description:
          "Please share any other thoughts, suggestions, or concerns you may have.",
        type: "feedback",
      },
    ],
  },
];
