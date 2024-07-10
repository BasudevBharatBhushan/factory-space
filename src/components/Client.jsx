import React, { useRef } from "react";
import { clients } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Client = () => {
  const clientBoxRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const container = clientBoxRef.current;

    console.log(container.scrollWidth, window.innerWidth);

    const boxes = gsap.utils.toArray(clientBoxRef.current.children);

    let getToValue = () => -(container.scrollWidth - window.innerWidth);

    gsap.fromTo(
      container,
      {
        x: 0,
      },
      {
        x: () => -(container.scrollWidth - window.innerWidth),
        ease: "none",
        duration: 3,
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,

          start: "top 20%",
          end: () => `+=${getToValue() * -1}`,
          scrub: 1,
          invalidateOnRefresh: true,
          // markers: true,
        },
      }
    );
  });

  return (
    <section
      ref={containerRef}
      className="w-full bg-gray-100 overflow-x-hidden p-8 mb-0"
    >
      <div className="pb-4 mb-0">
        <p className=" font-extrabold text-2xl md:text-5xl text-gray-300">
          Our Clients
        </p>
      </div>
      <div
        id="clientbox"
        ref={clientBoxRef}
        className="flex flex-row py-5 nowrap w-auto text-9xl"
      >
        {clients.map((client, index) =>
          index !== clients.length - 1 ? (
            <img
              key={index}
              className="h-20 md:h-40 mx-10 inline-block"
              src={client.logo}
              alt={client.name}
            />
          ) : (
            <img
              className="w-40 mx-10"
              key={index}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/725px-Adidas_Logo.svg.png?20240107104015"
            ></img>
          )
        )}
        {/* <h2 className="mx-2">Monaco</h2>
  <h2 className="mx-2">Austria</h2>
  <h2 className="mx-2">Hungary</h2>
  <h2 className="mx-2">Netherlands</h2>
  <h2 className="mx-2">Japan</h2> */}
      </div>
    </section>
  );
};

export default Client;
