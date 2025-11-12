import HeroBanner from "../components/HeroBanner";
import { useEffect } from "react";
import { useMeta } from "../helpers/useMeta";

import AOS from "aos";

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
        <div className="md:max-w-5xl 2xl:max-w-7xl mx-auto px-4 md:px-0 md:pb-20 pb-6 flex flex-col md:flex-row justify-evenly font-verdana-regular">
          <div>
            <ul className="space-y-4 lista-ofrecemos">
              <li>
                <img
                  src={`${domain}wp-content/uploads/2025/11/check.png`}
                  className="inline-block h-4 pb-1"
                  alt=""
                />{" "}
                <span>Propuesta de Concepto.</span>
              </li>
              <li>
                <img
                  src={`${domain}wp-content/uploads/2025/11/check.png`}
                  className="inline-block h-4 pb-1"
                  alt=""
                />{" "}
                <span>Locaciones y Venues.</span>
              </li>
              <li>
                <img
                  src={`${domain}wp-content/uploads/2025/11/check.png`}
                  className="inline-block h-4 pb-1"
                  alt=""
                />{" "}
                <span>Coordinación Previa y Durante los Días del Evento.</span>
              </li>
              <li>
                <img
                  src={`${domain}wp-content/uploads/2025/11/check.png`}
                  className="inline-block h-4 pb-1"
                  alt=""
                />{" "}
                <span>Coordinación para Acompañantes.</span>
              </li>
              <li>
                <img
                  src={`${domain}wp-content/uploads/2025/11/check.png`}
                  className="inline-block h-4 pb-1"
                  alt=""
                />{" "}
                <span>Actividades como Tours, Deportivas y Artísticas.</span>
              </li>
              <li>
                <img
                  src={`${domain}wp-content/uploads/2025/11/check.png`}
                  className="inline-block h-4 pb-1"
                  alt=""
                />{" "}
                <span>Actividades de Integración.</span>
              </li>
              <li>
                <img
                  src={`${domain}wp-content/uploads/2025/11/check.png`}
                  className="inline-block h-4 pb-1"
                  alt=""
                />{" "}
                <span>Seguridad Privada.</span>
              </li>
              <li>
                <img
                  src={`${domain}wp-content/uploads/2025/11/check.png`}
                  className="inline-block h-4 pb-1"
                  alt=""
                />{" "}
                <span>Catering.</span>
              </li>
              <li>
                <img
                  src={`${domain}wp-content/uploads/2025/11/check.png`}
                  className="inline-block h-4 pb-1"
                  alt=""
                />{" "}
                <span>Traducción Simultánea.</span>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4 lista-ofrecemos">
              <li>
                <img
                  src={`${domain}wp-content/uploads/2025/11/check.png`}
                  className="inline-block h-4 pb-1"
                  alt=""
                />{" "}
                <span>Equipo Audiovisual.</span>
              </li>
              <li>
                <img
                  src={`${domain}wp-content/uploads/2025/11/check.png`}
                  className="inline-block h-4 pb-1"
                  alt=""
                />{" "}
                <span>Producción de Escenografías y Stands.</span>
              </li>
              <li>
                <img
                  src={`${domain}wp-content/uploads/2025/11/check.png`}
                  className="inline-block h-4 pb-1"
                  alt=""
                />{" "}
                <span>Fotografía y Video.</span>
              </li>
              <li>
                <img
                  src={`${domain}wp-content/uploads/2025/11/check.png`}
                  className="inline-block h-4 pb-1"
                  alt=""
                />{" "}
                <span>Edecanes.</span>
              </li>
              <li>
                <img
                  src={`${domain}wp-content/uploads/2025/11/check.png`}
                  className="inline-block h-4 pb-1"
                  alt=""
                />{" "}
                <span>Regalos personalizados.</span>
              </li>
              <li>
                <img
                  src={`${domain}wp-content/uploads/2025/11/check.png`}
                  className="inline-block h-4 pb-1"
                  alt=""
                />{" "}
                <span>Souvenirs.</span>
              </li>
              <li>
                <img
                  src={`${domain}wp-content/uploads/2025/11/check.png`}
                  className="inline-block h-4 pb-1"
                  alt=""
                />{" "}
                <span>Registro Personalizado.</span>
              </li>
              <li>
                <img
                  src={`${domain}wp-content/uploads/2025/11/check.png`}
                  className="inline-block h-4 pb-1"
                  alt=""
                />{" "}
                <span>Diseño e Impresión Branding.</span>
              </li>
              <li>
                <img
                  src={`${domain}wp-content/uploads/2025/11/check.png`}
                  className="inline-block h-4 pb-1"
                  alt=""
                />{" "}
                <span>Artistas, Conferencistas y Presentadores.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
