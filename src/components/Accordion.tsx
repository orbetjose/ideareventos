import { useState } from "react";
import { accordionData } from "../data/data";

export default function Accordion() {
  const domain = import.meta.env.VITE_WP_DOMAIN;
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex gap-10 ">
      <div className="accordion-container flex-1">
        {accordionData.slice(0, 9).map((item, index) => (
          <div
            key={index}
            className="border-b border-yellowgreen ">
            <div
              className="flex justify-between items-center w-full cursor-pointer"
              onClick={() => toggleAccordion(index)}>
              <div className="flex gap-2 items-center">
                <img
                    src={`${domain}wp-content/uploads/2025/11/check.png`}
                    className="inline-block h-4 pb-1"
                    alt=""
                  />
                <span>{item.title}</span>
              </div>

              <span className="accordion-icon cursor-pointer">{activeIndex === index ? "-" : "+"}</span>
            </div>

            {activeIndex === index && (
              <div className="pl-6 accordion-content">
                <p className="text-black">{item.description}</p>
                <a
                  href={item.url}
                  className="bg-yellowgreen px-4 py-1 rounded-xl font-verdana-bold text-white my-2 block w-fit">
                  Cotiza ahora
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="accordion-container flex-1">
        {accordionData.slice(9, 19).map((item, index) => {
          const actualIndex = index + 10; 
          return (
            <div
              key={actualIndex}
              className="border-b border-yellowgreen ">
              <div
                className="flex justify-between items-center w-full cursor-pointer"
                onClick={() => toggleAccordion(actualIndex)}>
                <div className="flex gap-2 items-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/check.png`}
                    className="inline-block h-4 pb-1"
                    alt=""
                  />
                  <span>{item.title}</span>
                </div>

                <span className="accordion-icon cursor-pointer">{activeIndex === actualIndex ? "-" : "+"}</span>
              </div>

              {activeIndex === actualIndex && (
                <div className="pl-6 accordion-content">
                  <p className="">{item.description}</p>
                  <a
                    href={item.url}
                    className="bg-yellowgreen px-4 py-1 rounded-xl font-verdana-bold text-white my-2 block w-fit">
                    Cotiza ahora
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
