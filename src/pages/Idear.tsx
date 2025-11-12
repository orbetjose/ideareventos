import HeroBanner from "../components/HeroBanner";
import { useEffect } from "react";
import { useMeta } from "../helpers/useMeta";

import AOS from "aos";

export default function Idear() {
  const domain = import.meta.env.VITE_WP_DOMAIN;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
    useMeta({
      title: "Idear Eventos - Idear inspira",
      description: "Organización de eventos corporativos",
      keywords: "eventos, corporativos",
      canonical: "https://ideareventos.mx/idear",
      og: {
        title: "Idear Eventos - Idear inspira",
        description: "Organizamos tus eventos con profesionalismo y creatividad.",
        type: "website",
        url: "https://ideareventos.mx/idear",
        image: "https://ideareventos.mx/og-image.jpg",
        site_name: "IDEAR EVENTOS",
      },
    });

  return (
    <>
      <HeroBanner
        title="Idear inspira"
        imagen={`${domain}wp-content/uploads/2025/11/banner-idear.png`}
      />
      <section>
        <div className="md:max-w-5xl 2xl:max-w-7xl mx-auto px-4 md:px-0 md:pb-20 pb-6">
          <div className="flex flex-col gap-8">
            <div className="flex md:flex-row flex-col text-center md:text-left md:max-w-190 mx-auto px-8 md:px-10 rounded-2xl items-center justify-center md:gap-8 shadow-lg py-6 md:py-0" data-aos="fade-left">
              <img
                src={`${domain}wp-content/uploads/2025/11/comunidad.png`}
                className="h-60 p-4"
                alt=""
              />
              <div>
                <h2 className="font-verdana-bold text-2xl">
                  Sorprendemos a <span className="text-yellowgreen">una comunidad</span>
                </h2>
                <p className="text-lg font-verdana-regular">y organizamos algo bonito de fin de año.</p>
                <div className="flex items-center mx-auto border rounded-4xl px-5 py-1 w-fit mt-4 gap-2">
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
            <div className="flex md:flex-row flex-col text-center md:text-left md:max-w-190 mx-auto px-8 md:px-10 rounded-2xl items-center justify-center md:gap-8 shadow-lg py-6 md:py-0" data-aos="fade-left">
              <img
                src={`${domain}wp-content/uploads/2025/11/personal-logistico.png`}
                className="h-60 p-4"
                alt=""
              />
              <div>
                <h2 className="font-verdana-bold text-2xl">
                  Contratamos personal <span className="text-yellowgreen">logístico local</span>
                </h2>
                <p className="text-lg font-verdana-regular">
                  de manera incluyente en las ciudades donde se realice el evento.
                </p>
                <div className="flex items-center mx-auto border rounded-4xl px-5 py-1 w-fit mt-4 gap-2">
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
            <div
              className="flex md:flex-row flex-col text-center md:text-left md:max-w-190 mx-auto px-8 md:px-10 rounded-2xl items-center justify-center md:gap-8 shadow-lg py-6 md:py-0"
              data-aos="fade-left">
              <img
                src={`${domain}wp-content/uploads/2025/11/productos-1.png`}
                className="h-60 p-4"
                alt=""
              />
              <div>
                <h2 className="font-verdana-bold text-2xl">
                  <span className="text-yellowgreen">Apoyamos</span> en la compra de productos
                </h2>
                <p className="text-lg font-verdana-regular">a proveedoras mujeres en cada región.</p>
                <div className="flex items-center mx-auto border rounded-4xl px-5 py-1 w-fit mt-4 gap-2">
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
          </div>
        </div>
      </section>
    </>
  );
}
