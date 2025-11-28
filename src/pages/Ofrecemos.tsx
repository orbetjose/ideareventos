import HeroBanner from "../components/HeroBanner";
import { useEffect } from "react";
import { useMeta } from "../helpers/useMeta";

import AOS from "aos";
import Accordion from "../components/Accordion";


export default function Ofrecemos() {


  const domain = import.meta.env.VITE_WP_DOMAIN;
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  useMeta({
    title: "Idear Eventos - Ofrecemos",
    description: "Organización de eventos corporativos",
    keywords: "eventos, corporativos",
    canonical: "https://ideareventos.mx/ofrecemos",
    og: {
      title: "Idear Eventos - Ofrecemos",
      description: "Organizamos tus eventos con profesionalismo y creatividad.",
      type: "website",
      url: "https://ideareventos.mx/ofrecemos",
      image: "https://ideareventos.mx/og-image.jpg",
      site_name: "IDEAR EVENTOS",
    },
  });
  


  return (
    <>
      <HeroBanner
        title="OFRECEMOS"
        text="Eventos: Planeación, Organización y Producción."
        imagen={`${domain}wp-content/uploads/2025/11/banner-ofrecemos.png`}
        button={"Cotiza ahora"}
      />
      <section className=" relative md:pb-24 pb-12">
        <div className="md:max-w-5xl 2xl:max-w-7xl mx-auto px-4 md:px-0 ">
          <div className="flex justify-center items-center">
            <div className="-mr-8 relative z-5">
              <img
                className="max-h-40 hidden md:block"
                src={`${domain}wp-content/uploads/2025/11/imagen-ofrecemos-3.png`}
                alt=""
              />
            </div>
            <div className="">
              <img
                className="relative z-10 md:scale-120 max-h-45"
                src={`${domain}wp-content/uploads/2025/11/imagen-ofrecemos-1.png`}
                alt=""
              />
            </div>
            <div className="-ml-8 relative z-5">
              <img
                className="max-h-40 hidden md:block"
                src={`${domain}wp-content/uploads/2025/11/imagen-ofrecemos-2.png`}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="bg-yellowgreen w-full h-15 absolute top-1/4 left-1/2 -translate-x-1/2"></div>
      </section>
      <section>
        <div className="md:max-w-5xl 2xl:max-w-7xl mx-auto px-4 md:px-0 md:pb-20 pb-6  font-verdana-regular">
          <div>
            <Accordion />
          </div>

        </div>
      </section>
    </>
  );
}
