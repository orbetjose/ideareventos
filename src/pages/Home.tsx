import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useEffect } from "react";
import { useMeta } from "../helpers/useMeta";
import AOS from "aos";

export default function Home() {
  const domain = import.meta.env.VITE_WP_DOMAIN;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  useMeta({
    title: "Idear Eventos - Home",
    description: "Organización de eventos corporativos",
    keywords: "eventos, corporativos",
    canonical: "https://ideareventos.mx",
    og: {
      title: "Idear Eventos - Home",
      description: "Organizamos tus eventos con profesionalismo y creatividad.",
      type: "website",
      url: "https://ideareventos.mx",
      image: "https://ideareventos.mx/og-image.jpg",
      site_name: "IDEAR EVENTOS",
    },
  });
  return (
    <>
      <section className="pb-14">
        <div className="relative">
          <img
            src={`${domain}wp-content/uploads/2025/10/banner-principal.png`}
            alt=""
            className="h-[90vh] w-full object-cover"
          />
          <div className="absolute left-1/2 top-1/2 translate-middle w-[90%]">
            <h2 className="text-white text-3xl md:text-5xl text-center md:w-3/4 mx-auto 2xl:w-1/2 font-verdana-regular">
              Especialistas en{" "}
              <span className="bg-yellowgreen rounded-full px-2 inline-block md:pb-2">Organización</span> de Eventos
              Corporativos
            </h2>
          </div>
        </div>
      </section>
      <section className="md:max-w-5xl 2xl:max-w-7xl mx-auto px-4 md:px-0 md:pb-14 pb-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 flex flex-col gap-2 font-verdana-regular">
            <h3 className="font-verdana-bold text-granite text-xl md:text-2xl">Nuestra empresa</h3>
            <p className="text-justify text-gunmetal">
              En <span className="font-eras-bold">Idear</span> creemos que los eventos no solo se organizan: se viven,
              se sienten y se recuerdan.
            </p>
            <p className="text-justify text-gunmetal">
              Somos una agencia mexicana con más de 10 años de experiencia diseñando congresos, convenciones,
              activaciones y experiencias BTL para marcas nacionales e internacionales.
            </p>
            <p className="italic text-justify text-gunmetal">
              <span className="font-eras-bold">Nuestro propósito es claro: crear lo extraordinario</span>, hecho a tu
              medida.
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
          <div
            className="flex-1 md:block hidden"
            data-aos="zoom-out">
            <img
              className="md:h-90 mx-auto "
              src={`${domain}wp-content/uploads/2025/10/nuestra-empresa.png`}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="bg-silver rounded-b-[4rem]">
        <div className="text-white bg-granite pt-8 pb-20 rounded-b-[4rem]">
          <div className="flex flex-col-reverse gap-8 md:gap-0 md:flex-row items-center md:max-w-5xl 2xl:max-w-7xl mx-auto px-4 md:px-0 font-verdana-regular">
            <div
              className="flex-1 md:h-90 relative"
              data-aos="flip-left">
              <img
                className="md:h-110 md:absolute -top-10 -left-24 w-full object-cover object-right 2xl:object-contain 2xl:-left-40"
                src={`${domain}wp-content/uploads/2025/10/laptop-1.png`}
                alt=""
              />
            </div>
            <div className="flex-1">
              <h3 className="font-verdana-bold md:text-2xl text-lg">
                No creemos en moldes ni en soluciones genéricas.
              </h3>
              <p className="md:text-lg pt-2">Diseñamos eventos únicos que conectan con personas, marcas y emociones:</p>
              <div className="flex flex-col pt-4 gap-2">
                <div className="flex items-center gap-2">
                  <img
                    src={`${domain}wp-content/uploads/2025/10/ico-check.png`}
                    alt="Icono Check"
                    className="h-5"
                  />
                  <p>Convenciones corporativas que inspiran y transforman.</p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src={`${domain}wp-content/uploads/2025/10/ico-check.png`}
                    alt="Icono Check"
                    className="h-5"
                  />
                  <p>Congresos internacionales con planeación rigurosa y logística impecable.</p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src={`${domain}wp-content/uploads/2025/10/ico-check.png`}
                    alt="Icono Check"
                    className="h-5"
                  />
                  <p>Activaciones BTL que sorprenden e involucran al público.</p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src={`${domain}wp-content/uploads/2025/10/ico-check.png`}
                    alt="Icono Check"
                    className="h-5"
                  />
                  <p>Eventos sostenibles con impacto positivo en tu marca y en el planeta.</p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src={`${domain}wp-content/uploads/2025/10/ico-check.png`}
                    alt="Icono Check"
                    className="h-5"
                  />
                  <p>Cada proyecto es pensado desde la empatía, innovación y excelencia operativa.</p>
                </div>
              </div>
              <a
                href="/idear"
                className="bg-yellowgreen px-5 py-1 rounded-2xl font-verdana-bold text-white block w-fit mt-8">
                Idear inspira
              </a>
            </div>
          </div>
        </div>
        <div className="md:max-w-5xl 2xl:max-w-7xl mx-auto px-4 md:px-0 pt-8 pb-14">
          <h3 className="font-verdana-bold text-gunmetal text-xl md:text-2xl text-center">¿Por qué elegirnos?</h3>
          <p className="text-center font-verdana-regular pt-1 text-gunmetal">
            Lo que nos diferencia no son solo los resultados visibles, sino cómo hacemos sentir a quienes confían en
            nosotros.
          </p>
          <p className="text-center font-verdana-regular pt-2 text-lg text-gunmetal">
            Con <span className="font-eras-bold">Idear</span> tienes:
          </p>
          <div className="flex flex-col md:flex-row gap-2 pt-6">
            <div className="flex flex-col gap-2">
              <div className="bg-yellowgreen flex flex-col justify-center items-center rounded-2xl py-4 px-6 text-white">
                <div className="flex gap-2 items-center">
                  <img
                    className="h-8"
                    src={`${domain}wp-content/uploads/2025/10/ico-check-2.png`}
                    alt=""
                  />
                  <span className="font-verdana-bold text-lg pb-3">Efectividad inmediata</span>
                </div>
                <p className="font-verdana-regular text-sm">Resolvemos retos con agilidad y precisión.</p>
              </div>
              <div>
                <img
                  src={`${domain}wp-content/uploads/2025/10/beneficio-2.png`}
                  alt=""
                  className="h-50 w-full object-cover rounded-3xl md:h-auto"
                />
              </div>
            </div>
            <div className="flex flex-col-reverse md:flex-col gap-2">
              <div>
                <img
                  src={`${domain}wp-content/uploads/2025/10/beneficio1.png`}
                  alt=""
                  className="h-50 w-full object-cover rounded-3xl md:h-auto"
                />
              </div>
              <div className="bg-yellowgreen flex flex-col justify-center items-center rounded-2xl py-4 px-6 text-white">
                <div className="flex gap-2 items-center">
                  <img
                    className="h-8"
                    src={`${domain}wp-content/uploads/2025/10/ico-servicio.png`}
                    alt=""
                  />
                  <span className="font-verdana-bold text-lg pb-3">Servicio empático</span>
                </div>
                <p className="font-verdana-regular text-sm">
                  Entendemos lo que tu marca necesita antes de que lo digas.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-yellowgreen flex flex-col justify-center items-center rounded-2xl py-4 px-6 text-white">
                <div className="flex gap-2 items-center">
                  <img
                    className="h-8"
                    src={`${domain}wp-content/uploads/2025/10/ico-apoyo.png`}
                    alt=""
                  />
                  <span className="font-verdana-bold text-lg pb-3">Confianza y credibilidad</span>
                </div>
                <p className="font-verdana-regular text-sm">
                  Más de una década trabajando con marcas líderes en México y USA.
                </p>
              </div>
              <div>
                <img
                  src={`${domain}wp-content/uploads/2025/10/beneficio-3.png`}
                  alt=""
                  className="h-50 w-full object-cover rounded-3xl md:h-auto"
                />
              </div>
            </div>
            <div className="flex flex-col-reverse md:flex-col gap-2">
              <div>
                <img
                  src={`${domain}wp-content/uploads/2025/10/beneficio-4.png`}
                  alt=""
                  className="h-50 w-full object-cover rounded-3xl md:h-auto"
                />
              </div>
              <div className="bg-yellowgreen flex flex-col justify-center items-center rounded-2xl py-4 px-6 text-white">
                <div className="flex gap-2 items-center">
                  <img
                    className="h-8"
                    src={`${domain}wp-content/uploads/2025/10/ico-idea.png`}
                    alt=""
                  />
                  <span className="font-verdana-bold text-lg pb-3">Innovación constante</span>
                </div>
                <p className="font-verdana-regular text-sm">
                  Tendencias globales, experiencias inmersivas y sostenibilidad real.
                </p>
              </div>
            </div>
          </div>
          <a
            href="/galeria"
            className="bg-yellowgreen px-5 py-1 rounded-2xl font-verdana-bold text-white block w-fit mx-auto mt-8">
            Ver galeria
          </a>
        </div>
      </section>
      <section className="py-10 md:py-14">
        <div className="relative md:max-w-4xl 2xl:max-w-5xl mx-auto px-4 md:px-0">
          <h3 className="font-verdana-bold md:absolute text-xl md:text-3xl top-0 left-6 text-gunmetal pb-4 md:pb-0 text-center md:text-left md:w-1/3">
            En Idear no <span className="text-yellowgreen">organizamos</span> eventos.
          </h3>
          <div className="md:absolute bottom-20 md:left-10 md:max-w-sm space-y-3 font-verdana-regular">
            <p className="text-justify md:text-white">Creamos momentos extraordinarios que marcan historias.</p>
            <p className="text-justify md:text-white">
              Queremos que cada asistente sienta que todo fue diseñado para ellos.
            </p>
            <p className="text-justify md:text-white">
              <span className="font-verdana-bold">Nuestro compromiso:</span> escuchar, diseñar, ejecutar y cuidar cada
              detalle con pasión y profesionalismo.
            </p>
          </div>
          <img
            src={`${domain}wp-content/uploads/2025/10/eventos-scaled.webp`}
            className="h-[70vh] md:max-h-[80vh] 2xl:h-auto w-full object-cover object-top md:block hidden 2xl:object-contain"
            alt=""
          />
        </div>
      </section>
      <section>
        <div className=" md:max-w-4xl mx-auto px-4 md:px-0 text-center pb-6 md:pb-0">
          <h3 className="font-verdana-bold text-xl md:text-2xl text-center text-gunmetal">
            ¿Listo para tu próximo <span className="text-yellowgreen">gran evento</span>?
          </h3>
          <p className="text-center font-verdana-regular pt-2 pb-6 text-gunmetal">
            Hablemos hoy y creemos juntos lo extraordinario, hecho a tu medida.
          </p>
          <a
            href="#"
            className="bg-yellowgreen px-5 py-2 rounded-2xl font-verdana-bold text-white">
            Quiero mi propuesta
          </a>
        </div>
      </section>
      <section className="py-10 md:py-14">
        <div className="md:max-w-4xl mx-auto px-12 md:px-0">
          <h3 className="text-center font-verdana-bold pb-8 text-2xl md:text-3xl text-gunmetal">Casos de éxito</h3>
          <div className="relative slider-exitos">
            <button className="swiper-button-prev swiper-button-prev-exitos">
              <img
                src={`${domain}wp-content/uploads/2025/10/chevron-left.png`}
                alt=""
                className=""
              />
            </button>
            <button className="swiper-button-next swiper-button-next-exitos">
              <img
                src={`${domain}wp-content/uploads/2025/10/chevron-right.png`}
                alt=""
                className=""
              />
            </button>
            <Swiper
              watchOverflow={false}
              loop={false}
              modules={[Navigation, Pagination]}
              navigation={{
                prevEl: ".swiper-button-prev-exitos",
                nextEl: ".swiper-button-next-exitos",
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              className="">
              <SwiperSlide className="">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/10/quote-1.png`}
                    alt=""
                    className="absolute h-7 top-4 left-4"
                  />
                  <img
                    src={`${domain}wp-content/uploads/2025/10/quote-2.png`}
                    alt=""
                    className="absolute h-7 bottom-11 right-5"
                  />
                  <img
                    src={`${domain}wp-content/uploads/2025/10/buble.png`}
                    alt=""
                  />
                  <div className="absolute top-1/2 left-1/2 translate-middle w-full pb-6">
                    <p className="font-verdana-regular px-10 leading-4">
                      Excelente apoyo en nuestra Reunión Anual de Ventas. Organización impecable, atención a detalles y
                      compromiso que garantizó un evento exitoso.
                    </p>
                    <span className="font-verdana-bold ">Michelin México</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/10/quote-1.png`}
                    alt=""
                    className="absolute h-7 top-4 left-4"
                  />
                  <img
                    src={`${domain}wp-content/uploads/2025/10/quote-2.png`}
                    alt=""
                    className="absolute h-7 bottom-11 right-5"
                  />
                  <img
                    src={`${domain}wp-content/uploads/2025/10/buble.png`}
                    alt=""
                  />
                  <div className="absolute top-1/2 left-1/2 translate-middle w-full pb-6">
                    <p className="font-verdana-regular px-10 leading-4">
                      Profesionalismo, responsabilidad y pasión. Con su apoyo, todos nuestros eventos han sido exitosos.
                      Gran trabajo del equipo IDEAR.
                    </p>
                    <span className="font-verdana-bold pt-2 block ">DLE Academy / ExxonMobil</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/10/quote-1.png`}
                    alt=""
                    className="absolute h-7 top-4 left-4"
                  />
                  <img
                    src={`${domain}wp-content/uploads/2025/10/quote-2.png`}
                    alt=""
                    className="absolute h-7 bottom-11 right-5"
                  />
                  <img
                    src={`${domain}wp-content/uploads/2025/10/buble.png`}
                    alt=""
                  />
                  <div className="absolute top-1/2 left-1/2 translate-middle w-full pb-6">
                    <p className="font-verdana-regular px-10 leading-4">
                      Excelente atención y profesionalismo. Han sido clave para el éxito de nuestros DLE Academy. Equipo
                      confiable y talentoso.
                    </p>
                    <span className="font-verdana-bold pt-2 block ">DLE Academy / ExxonMobil</span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="pb-10 md:pb-14 ">
        <div className="md:max-w-4xl mx-auto px-12 md:px-0">
          <h3 className="text-center font-verdana-bold pb-6 text-2xl md:text-3xl text-gunmetal">Blog</h3>
          <div className="relative">
            <button className="swiper-button-prev swiper-button-prev-blog">
              <img
                src={`${domain}wp-content/uploads/2025/10/chevron-left.png`}
                alt=""
              />
            </button>
            <button className="swiper-button-next swiper-button-next-blog">
              <img
                src={`${domain}wp-content/uploads/2025/10/chevron-right.png`}
                alt=""
              />
            </button>
            <Swiper
              watchOverflow={false}
              loop={false}
              modules={[Navigation, Pagination]}
              navigation={{
                prevEl: ".swiper-button-prev-blog",
                nextEl: ".swiper-button-next-blog",
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="">
              <SwiperSlide>
                <div className="bg-gunmetal rounded-3xl text-white font-verdana-regular">
                  <img
                    src={`${domain}wp-content/uploads/2025/10/card_1.png`}
                    alt=""
                  />
                  <div className="p-6 md:min-h-55 flex flex-col">
                    <span className="font-verdana-bold text-lg">Michelin Bid Week</span>
                    <p className="py-3">Cuatro eventos, una misma visión de excelencia.</p>
                    <a
                      href="/post/michelin-bid-week"
                      className="bg-white text-gunmetal px-4 py-1 rounded-xl mt-auto block w-fit">
                      Leer más
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gunmetal rounded-3xl text-white font-verdana-regular">
                  <img
                    src={`${domain}wp-content/uploads/2025/10/card_2.png`}
                    alt=""
                  />
                  <div className="p-6 md:min-h-55 flex flex-col">
                    <span className="font-verdana-bold text-lg">LA DLE Academy</span>
                    <p className="py-3">
                      Cómo transformamos una capacitación de ingeniería en una experiencia de aprendizaje y
                      entretenimiento.
                    </p>
                    <a
                      href="/post/la-dle-academy"
                      className="bg-white text-gunmetal px-4 py-1 rounded-xl mt-auto block w-fit">
                      Leer más
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-gunmetal rounded-3xl text-white font-verdana-regular">
                  <img
                    src={`${domain}wp-content/uploads/2025/10/card_3.png`}
                    alt=""
                  />
                  <div className="p-6 md:min-h-55 flex flex-col">
                    <span className="font-verdana-bold text-lg">
                      Cómo Elegir la Agencia de Eventos Corporativos Perfecta
                    </span>
                    <p className="py-3">3 Pilares que IDEAR Domina (Sostenibilidad, Innovación y Logística)</p>
                    <a
                      href="/post/como-elegir-la-agencia-de-eventos-corporativos-perfecta"
                      className="bg-white text-gunmetal px-4 py-1 rounded-xl mt-auto block w-fit">
                      Leer más
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="md:pt-8 flex items-center justify-center gap-4">
            <a
              href=""
              className="bg-yellowgreen px-5 py-1 rounded-3xl font-verdana-regular text-gunmetal text-lg">
              Más artículos
            </a>
            <img
              src={`${domain}wp-content/uploads/2025/10/chevron-right-2.png`}
              alt=""
              className="h-8"
            />
          </div>
        </div>
      </section>
    </>
  );
}
