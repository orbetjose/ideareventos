import HeroBanner from "../components/HeroBanner";
import { useEffect } from "react";
import AOS from "aos";

export default function Hacemos() {
  const domain = import.meta.env.VITE_WP_DOMAIN;
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const data = [
    {
      image: "wp-content/uploads/2025/11/congreso.png",
      title: "Congresos",
    },
    {
      image: "wp-content/uploads/2025/11/convenciones.png",
      title: "Convenciones",
    },
    {
      image: "wp-content/uploads/2025/11/seminarios.png",
      title: "Seminarios",
    },
    {
      image: "wp-content/uploads/2025/11/foros.png",
      title: "Foros",
    },
    {
      image: "wp-content/uploads/2025/11/prensa.png",
      title: "Ruedas de prensa",
    },
    {
      image: "wp-content/uploads/2025/11/productos.png",
      title: "Lanzamientos de productos",
    },
    {
      image: "wp-content/uploads/2025/11/trabajo.png",
      title: "Reuniones de trabajo",
    },
    {
      image: "wp-content/uploads/2025/11/incentivos.png",
      title: "Reuniones de incentivos",
    },
    {
      image: "wp-content/uploads/2025/11/fiestas.png",
      title: "Fiestas de fin de año",
    },
    {
      image: "wp-content/uploads/2025/11/corporativos.png",
      title: "Entrenamientos corporativos",
    },
    {
      image: "wp-content/uploads/2025/11/marca.png",
      title: "Activaciones de marca",
    },
  ];
  return (
    <>
      <HeroBanner
        title="Hacemos"
        text="Eventos: Planeación, Organización y Producción."
        imagen={`${domain}wp-content/uploads/2025/11/banner-hacemos.webp`}
      />
      <section className="pb-12">
        <div className="md:max-w-6xl 2xl:max-w-7xl mx-auto px-4 md:px-0">
          <div className="md:flex flex-wrap place-content-center md:gap-8">
            {data.map((item, index) => (
              <div
                key={index}
                className="relative md:w-[160px]">
                <img
                  src={domain + item.image}
                  className=""
                  alt=""
                />
                <img src={`${domain}wp-content/uploads/2025/11/ico-arrow.png`} className="absolute -top-1 right-0 h-8" alt="" />
                <span className="absolute font-verdana-bold italic text-white bottom-4 left-1/2 -translate-1/2">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
