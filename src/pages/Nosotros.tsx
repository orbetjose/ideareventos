import HeroBanner from "../components/HeroBanner";
import { useEffect } from "react";
import { useMeta } from "../helpers/useMeta";

import AOS from "aos";

export default function Nosotros() {
  const domain = import.meta.env.VITE_WP_DOMAIN;
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  useMeta({
    title: "Idear Eventos - Nosotros",
    description: "Organización de eventos corporativos",
    keywords: "eventos, corporativos",
    canonical: "https://ideareventos.mx/nosotros",
    og: {
      title: "Idear Eventos - Nosotros",
      description: "Organizamos tus eventos con profesionalismo y creatividad.",
      type: "website",
      url: "https://ideareventos.mx/nosotros",
      image: "https://ideareventos.mx/og-image.jpg",
      site_name: "IDEAR EVENTOS",
    },
  });
  return (
    <>
      <HeroBanner
        title="Somos"
        imagen={`${domain}wp-content/uploads/2025/11/banner-nosotros.webp`}
      />
      <section className="md:max-w-5xl 2xl:max-w-7xl mx-auto px-4 md:px-0 md:pb-20 pb-6">
        <div className="flex flex-col md:flex-row items-center">
          <div
            className="flex-1 md:block hidden"
            data-aos="zoom-out">
            <img
              className="md:h-75 mx-auto "
              src={`${domain}wp-content/uploads/2025/11/img-nuestra-empresa.png`}
              alt=""
            />
          </div>
          <div className="flex-1 flex flex-col gap-2 font-verdana-regular">
            <h3 className="font-verdana-bold text-granite text-xl md:text-2xl">Nuestra empresa</h3>
            <p className="text-justify text-gunmetal">
              Una agencia especializada en la{" "}
              <span className="font-verdana-bold italic">planeación, organización y producción de eventos</span>{" "}
              corporativos, con una experiencia de más de 10 años en el mercado nacional e internacional.
            </p>
            <p className="text-justify text-gunmetal">
              Nos caracterizamos por ofrecer un <span className="font-verdana-bold italic">servicio personalizado</span>
              , con un equipo humano altamente capacitado para crear, planear, desarrollar, resolver y ejecutar las
              necesidades de cada cliente.
            </p>
            <div className="flex items-center border rounded-4xl px-5 py-1 w-fit mt-4 gap-2">
              <a
                href="#"
                className="font-verdana-regular text-gunmetal">
                Contáctanos
              </a>
              <img
                src={`${domain}wp-content/uploads/2025/10/chevron-right.png`}
                alt=""
                className="h-3"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#adadad] md:mt-60 ">
        <div className="md:max-w-5xl 2xl:max-w-7xl mx-auto px-4 md:px-0 ">
          <div className="flex justify-evenly overflow-scroll md:overflow-initial pt-4 gap-8 md:gap-0 md:pt-0">
            <img
              src={`${domain}wp-content/uploads/2025/11/img-empresas-3.png`}
              alt=""
              className="max-h-75 md:max-h-90 md:-mt-45"
            />
            <img
              src={`${domain}wp-content/uploads/2025/11/img-empresas-2.png`}
              alt=""
              className="max-h-75 md:max-h-90 md:-mt-45"
            />
            <img
              src={`${domain}wp-content/uploads/2025/11/img-empresas-1.png`}
              alt=""
              className="max-h-75 md:max-h-90 md:-mt-45"
            />
          </div>
          <div className="py-12 md:w-3/5 mx-auto">
            <p className="text-center text-lg font-verdana-regular ">
              Una empresa certificada por <span className="font-verdana-bold italic ">WEConnect International</span>,
              red global que conecta negocios de mujeres empresarias con compradores calificados en todo el mundo.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
