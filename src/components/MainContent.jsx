import React from "react";
import { fsLogo, Gear, Workspace } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faChartLine,
  faHandshake,
  faChartBar,
  faIndustry,
  faCloudUploadAlt,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";
gsap.registerPlugin(ScrollTrigger);

const MainContent = () => {
  useGSAP(() => {
    gsap.from(".anim", {
      ease: "power1.inOut",
      y: 60,
      delay: 3,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".anim",
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  }, []);
  return (
    <>
      <div className="w-full h-auto bg-gray-200 px-5 relative">
        <img
          className={`workspace-image w-full h-full object-cover opacity-20 left-[0] top-[0] absolute inset-0`}
          src={Workspace}
          alt=""
        />
        <div className="w-full h-full flex flex-col justify-evenly items-start py-10">
          <div className="pb-[15vh] xl:pb-[20vh] pt-[5vh] px-[10vw]">
            <h1 className="anim text-4xl lg:text-4xl font-bold text-gray-800 mb-6 ">
              Revolutionize Your Manufacturing with Factory Space
            </h1>
            <div className="anim grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <FeatureCard
                icon={faIndustry}
                title="Cloud-Based Platform"
                description="Connect with certified manufacturers and suppliers"
              />
              <FeatureCard
                icon={faCloudUploadAlt}
                title="Instant Access"
                description="Latest machinery and skilled operators at your fingertips"
              />
              <FeatureCard
                icon={faNetworkWired}
                title="Scalable Operations"
                description="Grow without equipment or space limitations"
              />
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Factory Space empowers you to transform your manufacturing
              process. Our innovative platform bridges the gap between your
              vision and production capabilities, enabling you to scale
              effortlessly and adapt to market demands with unprecedented
              agility.
            </p>
          </div>
          <div className="self-start w-full benefits px-[10vw]">
            <h2 className="text-3xl font-bold text-gray-700 mb-8">
              Why Choose Factory Space?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <BenefitCard
                icon={faDollarSign}
                title="Reduce Capital Expenditures"
                description="Reduce capital expenditures on equipment and infrastructure"
              />
              <BenefitCard
                icon={faChartLine}
                title="Improve Flexibility and Scalability"
                description="Improve flexibility and scalability in response to changing market conditions"
              />
              <BenefitCard
                icon={faHandshake}
                title="Enhance Collaboration"
                description="Enhance collaboration with suppliers and manufacturers through our digital platform"
              />
              <BenefitCard
                icon={faChartBar}
                title="Access Data-Driven Insights"
                description="Access to data-driven insights and analytics to optimize your manufacturing operations"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const BenefitCard = ({ icon, title, description }) => (
  <div className="bg-gray-800 text-white p-6 rounded-lg">
    <FontAwesomeIcon icon={icon} className="text-3xl text-yellow-400 mb-4" />
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white shadow-lg text-gray-800 p-4 rounded-lg flex items-start transition-all duration-300 hover:shadow-xl hover:scale-105">
    <FontAwesomeIcon icon={icon} className="text-2xl text-blue-600 mr-4 mt-1" />
    <div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

export default MainContent;
