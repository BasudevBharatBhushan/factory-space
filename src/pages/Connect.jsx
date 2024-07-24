import React from "react";
import ProgressBar from "../components/ProgressBar";
import Slide from "../components/Slide/Slide";

const Connect = () => {
  const ManufacturerSlides = [
    {
      SlideNo: 1,
      Questioner: [
        {
          id: 1,
          question: "Let's get started. Which of these best describe you?",
          description: "We'll help you set up based on your business needs.",
          type: "mcq",
          options: ["Manufacturer", "Trader", "Customer", "Other"],
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
          id: 1,
          question: "What types of machines do you currently own?",
          description: "List the main types of machinery in your inventory.",
          type: "input",
        },
        {
          id: 2,
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
          id: 1,
          question: "What type of leasing arrangement would you prefer?",
          description:
            "Choose the leasing model that suits your business needs.",
          type: "mcq",
          options: [
            "Short-term leases",
            "Long-term leases",
            "On-demand leasing",
            "Other",
          ],
        },
        {
          id: 2,
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
          id: 1,
          question: "Any additional feedback",
          description:
            "Please share any other thoughts, suggestions, or concerns you may have.",
          type: "feedback",
        },
      ],
    },
  ];

  const TraderSlides = [
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
          options: ["Manufacturer", "Trader", "Customer", "Other"],
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
          id: 1,
          question: "What types of products do you intend to manufacture?",
          description:
            "Please provide details about the primary products you plan to produce.",
          type: "input",
        },
        {
          id: 2,
          question:
            "Which specific machines are essential for your manufacturing process?",
          description:
            "List the key types of machinery required for your production line.",
          type: "input",
        },
        {
          id: 3,
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
          id: 1,
          question:
            "Which pricing model aligns best with your business strategy?",
          description:
            "Choose the pricing structure that you find most suitable for your operations.",
          type: "mcq",
          options: ["Subscription-based", "Pay-per-use", "Revenue-sharing"],
        },
        {
          id: 2,
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
          id: 1,
          question:
            "Do you have any additional feedback or specific requirements?",
          description:
            "Please share any other insights, suggestions, or concerns that could help us serve you better.",
          type: "feedback",
        },
      ],
    },
  ];

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-purple-900 via-teal-800 to-purple-900 flex justify-center items-center">
      <Slide />
    </div>
  );
};

export default Connect;
