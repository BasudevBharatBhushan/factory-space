import React from "react";
import {
  fsLogo,
  Gear,
  Workspace,
  ManufacturerVectorImage,
  TraderVectorImage,
  OperatorVectorImage,
  Trader,
} from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
    gsap.from(".anim-1", {
      ease: "slow(0.7,0.7,false)",
      // scale: 0.5,
      y: 80,
      x: 100,
      delay: 10,
      opacity: 0,
      stagger: 0.5,
      duration: 3,
      scrollTrigger: {
        trigger: ".anim-1",
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    gsap.from(".anim-2", {
      ease: "slow(0.7,0.7,false)",
      delay: 5,
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 3,
      scrollTrigger: {
        trigger: ".anim-2",
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    gsap.from(".benefit-card", {
      ease: "power2.out",
      y: 50,
      opacity: 0,
      stagger: 0.5,
      duration: 3,
      scrollTrigger: {
        trigger: ".benefit-card",
        start: "top 90%",
        end: "top 50%",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    gsap.from(".vector-img-1", {
      ease: "slow(0.7,0.7,false)",
      x: -100,
      y: 50,
      opacity: 0,
      // duration: 3,
      scrollTrigger: {
        trigger: ".factory-space-users-1",
        start: "top 90%",
        end: "top 50%",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    gsap.from(".card-description-1", {
      ease: "slow(0.7,0.7,false)",
      x: 100,
      y: 50,
      opacity: 0,
      // duration: 3,
      scrollTrigger: {
        trigger: ".factory-space-users-1",
        start: "top 90%",
        end: "top 50%",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
    gsap.from(".vector-img-2", {
      ease: "slow(0.7,0.7,false)",
      x: 100,
      y: 50,
      opacity: 0,
      // duration: 3,
      scrollTrigger: {
        trigger: ".factory-space-users-2",
        start: "top 90%",
        end: "top 50%",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    gsap.from(".card-description-2", {
      ease: "slow(0.7,0.7,false)",
      x: -100,
      y: 50,
      opacity: 0,
      // duration: 3,
      scrollTrigger: {
        trigger: ".factory-space-users-2",
        start: "top 90%",
        end: "top 50%",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    gsap.from(".vector-img-3", {
      ease: "slow(0.7,0.7,false)",
      x: -100,
      y: 50,
      opacity: 0,
      // duration: 3,
      scrollTrigger: {
        trigger: ".factory-space-users-3",
        start: "top 90%",
        end: "top 50%",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    gsap.from(".card-description-3", {
      ease: "slow(0.7,0.7,false)",
      x: 100,
      y: 50,
      opacity: 0,
      // duration: 3,
      scrollTrigger: {
        trigger: ".factory-space-users-3",
        start: "top 90%",
        end: "top 50%",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
    // gsap.from(".trust-badge", {
    //   ease: "slow(0.7,0.7,false)",
    //   delay: 3,
    //   scale: 0.5,
    //   opacity: 0,
    //   stagger: 0.2,
    //   duration: 3,
    //   scrollTrigger: {
    //     trigger: ".call-to-action",
    //     start: "top 80%",
    //     end: "top 20%",
    //     scrub: 2,
    //     invalidateOnRefresh: true,
    //   },
    // });
  }, []);

  return (
    <>
      <div className="w-full h-auto bg-white px-5 relative">
        {/* <img
          className={`workspace-image w-full h-full object-cover opacity-20 left-[0] top-[0] absolute inset-0`}
          src={Workspace}
          alt=""
        /> */}
        <div className="w-full h-full flex flex-col justify-evenly items-start py-10 ">
          <div className="pb-[5vh] xl:pb-[20vh] pt-[5vh] xl:pt-[15vh] px-[10vw] flex flex-col justify-center">
            <h1 className="anim-1 text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Revolutionize Your Manufacturing with Factory Space
            </h1>
            <div className="anim-1 grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
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
          </div>
          {/* <div className="self-start w-full benefits px-[10vw]">
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
          </div> */}

          <div className="factory-space-users grid grid-rows-3  w-full py-[4vh] h-auto">
            <div className="factory-space-users-1 grid grid-cols-1 xl:grid-cols-2 items-center content-center xl:h-screen px-[10vw] pb-[10vh] xl:pb-0 gap-8 ">
              <div className="vector-img-1 ">
                <img className=" rounded-2xl" src={TraderVectorImage} alt="" />
              </div>
              <div className=" card-description-1 flex flex-col gap-8 ">
                <div>
                  <p className="font-bold text-4xl lg:text-5xl">
                    Start your own virtual Factory
                  </p>
                </div>
                <div>
                  <p className=" text-gray-700">
                    Elevate your business without setting up your own
                    manufacturing unit. Leverage existing factories to produce
                    and scale effortlessly.
                  </p>
                </div>
                <div>
                  <button className="group bg-black text-white px-6 py-3 font-semibold rounded-lg hover:scale-105 hover:border hover:border-black hover:text-black hover:bg-white transition ease-in-out duration-300">
                    <span className="flex items-center">
                      Get started
                      <svg
                        className="w-0 h-0 ml-2 transition-all duration-300 ease-in-out group-hover:w-4 group-hover:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="factory-space-users-2 grid grid-cols-1 xl:grid-cols-2 items-center xl:h-screen px-[10vw] pb-[10vh] xl:pb-0 gap-8">
              <div className=" card-description-2 flex flex-col gap-8 order-2 xl:order-1">
                <div>
                  <p className="font-bold text-4xl lg:text-5xl">
                    Start your own virtual Factory
                  </p>
                </div>
                <div>
                  <p className=" text-gray-700">
                    Elevate your business without setting up your own
                    manufacturing unit. Leverage existing factories to produce
                    and scale effortlessly.
                  </p>
                </div>
                <div>
                  <button className="group bg-black text-white px-6 py-3 font-semibold rounded-lg hover:scale-105 hover:border hover:border-black hover:text-black hover:bg-white transition ease-in-out duration-300">
                    <span className="flex items-center">
                      Get started
                      <svg
                        className="w-0 h-0 ml-2 transition-all duration-300 ease-in-out group-hover:w-4 group-hover:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              <div className=" vector-img-2 order-1 xl:order-2">
                <img src={ManufacturerVectorImage} alt="" />
              </div>
            </div>
            <div className="factory-space-users-3 grid grid-cols-1 xl:grid-cols-2 items-center xl:h-screen px-[10vw] gap-8">
              <div className=" vector-img-3 ">
                <img src={OperatorVectorImage} alt="" />
              </div>
              <div className=" card-description-3 flex flex-col gap-8">
                <div>
                  <p className="font-bold text-4xl lg:text-5xl">
                    I am expert operator, I want to do more work
                  </p>
                </div>
                <div>
                  <p className=" text-gray-700">
                    Boost your productivity and take on more projects with ease.
                    Our platform provides you with the tools and support to do
                    more work and achieve your professional goals.
                  </p>
                </div>
                <div>
                  <button className="group bg-black text-white px-6 py-3 font-semibold rounded-lg hover:scale-105 hover:border hover:border-black hover:text-black hover:bg-white transition ease-in-out duration-300">
                    <span className="flex items-center">
                      Get started
                      <svg
                        className="w-0 h-0 ml-2 transition-all duration-300 ease-in-out group-hover:w-4 group-hover:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* <FactorySpaceCard
              image={TraderVectorImage}
              title="Start your own virtual Factory"
              description="Elevate your business without setting up your own manufacturing unit. Leverage existing factories to produce and scale effortlessly."
            />

            <FactorySpaceCard
              image={ManufacturerVectorImage}
              title="Start your own virtual Factory"
              description="Elevate your business without setting up your own manufacturing unit. Leverage existing factories to produce and scale effortlessly."
            />

            <FactorySpaceCard
              image={OperatorVectorImage}
              title="I am expert operator, I want to do more work"
              description="Boost your productivity and take on more projects with ease. Our platform provides you with the tools and support to do more work and achieve your professional goals."
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

const BenefitCard = ({ icon, title, description }) => (
  <div className="benefit-card bg-gray-800 text-white p-6 rounded-lg">
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

const FactorySpaceCard = ({ image, title, description }) => (
  <div className="grid grid-cols-1 xl:grid-cols-2 items-center h-screen px-[10vw] gap-8">
    <div className=" vector-img ">
      <img className=" rounded-2xl" src={image} alt="" />
    </div>
    <div className=" card-description flex flex-col gap-8">
      <div>
        <p className="font-bold text-5xl">{title}</p>
      </div>
      <div>
        <p className=" text-gray-700">{description}</p>
      </div>
      <div>
        <button className="bg-black text-white px-6 py-3 font-semibold rounded-lg">
          Get started
        </button>
      </div>
    </div>
  </div>
);

export default MainContent;
