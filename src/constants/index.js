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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faFacebook,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faT } from "@fortawesome/free-solid-svg-icons";

export const navLists = ["Home", "Connect"];

export const companyName = "Factory Space AI";
export const companyTagline =
  "Transform Your Manufacturing Business with Elastic Manufacturing";

export const socialLinks = [
  {
    icon: faLinkedinIn,
    link: "linkedin.com/company/FactorySpace",
  },
  {
    icon: faXTwitter,
    link: "x.com/FactorySpace",
  },
  {
    icon: faFacebook,
    link: "facebook.com/factoryspace",
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
        question: "Which of these best describe you?",
        description: "Help us tailor the setup for your business.",
        type: "mcq",
        options: ["Manufacturer", "Trader"],
        fieldName: "designation",
      },
      {
        id: 2,
        question: "What is your company's name?",
        description: "Provide your registered company name.",
        type: "input",
        fieldName: "companyName",
      },
      {
        id: 3,
        question: "What is your business email?",
        description: "Provide a valid business email.",
        type: "input",
        fieldName: "businessEmail",
      },
      {
        id: 4,
        question: "Which industry does your company operate in?",
        description: "Specify your primary industry.",
        type: "input",
        fieldName: "industrySector",
      },
    ],
  },
  {
    SlideNo: 2,
    Questioner: [
      {
        id: 5,
        question: "What types of machines do you own?",
        description: "List your main machinery.",
        type: "input",
        inputSize: "large",
        fieldName: "ownedMachines",
      },
      {
        id: 6,
        question: "What is the utilization rate of these machines?",
        description: "Select your machine usage.",
        type: "mcq",
        options: [
          "Fully utilized (80-100%)",
          "Partially utilized (50-79%)",
          "Underutilized (below 50%)",
        ],
        fieldName: "machineUtilizationRate",
      },
    ],
  },
  {
    SlideNo: 3,
    Questioner: [
      {
        id: 7,
        question: "What leasing arrangement do you prefer?",
        description: "Choose your preferred leasing model.",
        type: "mcq",
        options: [
          "Short-term leases",
          "Long-term leases",
          "On-demand leasing",
          "Other",
        ],
        fieldName: "leasingPreference",
      },
      {
        id: 8,
        question: "Which pricing model do you prefer for leasing out machines?",
        description: "Select your preferred pricing structure.",
        type: "mcq",
        options: ["Fixed fee", "Revenue share", "Pay-per-use", "Other"],
        fieldName: "preferredPricingModel",
      },
    ],
  },
  {
    SlideNo: 4,
    Questioner: [
      {
        id: 9,
        question: "Any additional feedback?",
        description: "Share your thoughts or concerns.",
        type: "feedback",
        fieldName: "additionalFeedback",
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
        question: "Which of these best describe you?",
        description: "Help us tailor the setup for your business.",
        type: "mcq",
        options: ["Manufacturer", "Trader"],
        fieldName: "designation",
      },
      {
        id: 2,
        question: "What is your company's name?",
        description: "Provide your registered company name.",
        type: "input",
        fieldName: "companyName",
      },
      {
        id: 3,
        question: "What is your business email?",
        description: "Provide a valid business email.",
        type: "input",
        fieldName: "businessEmail",
      },
      {
        id: 4,
        question: "Which industry does your company operate in?",
        description: "Specify your primary industry.",
        type: "input",
        fieldName: "industrySector",
      },
    ],
  },
  {
    SlideNo: 2,
    Questioner: [
      {
        id: 5,
        question: "What products do you plan to manufacture?",
        description: "Details about your primary products.",
        type: "input",
        fieldName: "productsToManufacture",
      },
      {
        id: 6,
        question: "Which machines are essential for manufacturing?",
        description: "Key machinery for your production line.",
        type: "input",
        fieldName: "essentialMachines",
      },
      {
        id: 7,
        question: "How often will you use these machines?",
        description: "Your expected usage pattern.",
        type: "mcq",
        options: ["Daily", "Weekly", "Monthly", "On-demand"],
        fieldName: "machineUsageFrequency",
      },
    ],
  },
  {
    SlideNo: 3,
    Questioner: [
      {
        id: 8,
        question: "Which pricing model suits your strategy?",
        description: "Choose a suitable pricing structure.",
        type: "mcq",
        options: ["Subscription-based", "Pay-per-use", "Revenue-sharing"],
        fieldName: "pricingModel",
      },
      {
        id: 9,
        question: "Which services add value to your operations?",
        description: "Select applicable services.",
        type: "mcq",
        options: [
          "Technical support",
          "Machine operation training",
          "Logistics management",
          "Quality control",
          "Maintenance and servicing",
        ],
        fieldName: "valueAddedServices",
      },
    ],
  },
  {
    SlideNo: 4,
    Questioner: [
      {
        id: 10,
        question: "Any additional feedback?",
        description: "Share your thoughts or concerns.",
        type: "feedback",
        fieldName: "additionalFeedback",
      },
    ],
  },
];

// Firebase Creds
export const firebaseCreds = {
  API_KEY: "AIzaSyC5EUGSPjg0-1-MxzjV99em_-7VIdHLI4w",
  PROJECT_ID: "factory-space-9270a",
  BASE_URL: "https://firestore.googleapis.com/v1",
  REFRESH_TOKEN:
    "AMf-vBxeSoGMwZ0vWErJ92yFVdnluwzwqDgKrCdpimXeSxELZBu6E3tTtxevJRII56ydGGayqxdexitfWjlegruS791NWjgMZ631OZTsV67toQPyp3Cem3gpAydjmSSWdns3fMY6EvejSPvGtY6MhAKcoPJwLHwHT4hZlQaxmLZvG0QmARVaVlES0mpwzaH7Ozk2zGTjU-8X4wmu5LO70GCwGHsbumGtpU3ctIZU9u9APLKIzG0YxMY",
  JWT_SECRET: "dsafldsjoaidfuoisdf",
};

export const adminCred = { userId: "rfs", password: "rfsai" };
