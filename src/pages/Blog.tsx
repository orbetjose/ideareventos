import HeroBlog from "../components/HeroBlog";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useEffect } from "react";
import { useMeta } from "../helpers/useMeta";

import AOS from "aos";
import { Link } from "react-router-dom";

export default function Blog() {
  const domain = import.meta.env.VITE_WP_DOMAIN;
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  useMeta({
    title: "Idear Eventos - Blog",
    description: "Organización de eventos corporativos",
    keywords: "eventos, corporativos",
    canonical: "https://ideareventos.mx/blog",
    og: {
      title: "Idear Eventos - Blog",
      description: "Organizamos tus eventos con profesionalismo y creatividad.",
      type: "website",
      url: "https://ideareventos.mx/blog",
      image: "https://ideareventos.mx/og-image.jpg",
      site_name: "IDEAR EVENTOS",
    },
  });
  return (
    <>
      <HeroBlog
        title="Blog"
        preText="Bienvenidos a nuestro"
        imagen={`${domain}wp-content/uploads/2025/11/banner-blog-1.png`}
      />
      <section>
        <div className="max-w-4xl mx-auto px-4 md:px-0">
          <span className="bg-yellowgreen font-verdana-bold text-white px-4 py-1 rounded-lg text-lg">Tendencias</span>
          <div className="relative slider-tendencias mb-14 pt-8">
            <button className="swiper-button-prev swiper-button-prev-tendencias">
              <img
                src={`${domain}wp-content/uploads/2025/10/chevron-left.png`}
                alt=""
                className=""
              />
            </button>
            <button className="swiper-button-next swiper-button-next-tendencias">
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
                prevEl: ".swiper-button-prev-tendencias",
                nextEl: ".swiper-button-next-tendencias",
              }}
              pagination={{
                dynamicBullets: true,
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
                <Link to="/post/michelin-bid-week">
                  <div className="relative text-black">
                    <img
                      src={`${domain}wp-content/uploads/2025/11/Bid-Week-Michelin-scaled.webp`}
                      alt="Michelin Bid Week"
                      className="h-60 w-full object-cover rounded-4xl"
                    />
                    <span className="absolute font-verdana-bold text-white px-6 bottom-6 w-full">
                      Michelin Bid Week
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="">
                <Link to="/post/la-dle-academy">
                  <div className="relative text-black">
                    <img
                      src={`${domain}wp-content/uploads/2025/11/DLE-Academy-scaled.webp`}
                      alt="LA DLE Academy"
                      className="h-60 w-full object-cover rounded-4xl"
                    />
                    <span className="absolute font-verdana-bold text-white px-6 bottom-6 w-full">LA DLE Academy</span>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="">
                <Link to="/post/5-experiencias-de-team-building-y-kick-offs-corporativos-inolvidables">
                  <div className="relative text-black">
                    <img
                      src={`${domain}wp-content/uploads/2025/11/tendencia-3.png`}
                      alt="5 experiencias de team Building y kick-offs corporativos inolvidables"
                      className="h-60 w-full object-cover rounded-4xl"
                    />
                    <span className="absolute font-verdana-bold text-white px-6 bottom-6 w-full">
                      5 experiencias de team Building y kick-offs corporativos inolvidables
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="bg-platinum py-12">
        <div className="max-w-4xl mx-auto px-4 md:px-0">
          <div className="relative slider-noticias  pt-8">
            <span className="bg-yellowgreen font-verdana-bold text-white px-4 py-1 rounded-lg text-lg">Noticias</span>
            <button className="swiper-button-prev swiper-button-prev-noticias hidden md:block">
              <img
                src={`${domain}wp-content/uploads/2025/10/chevron-left.png`}
                alt=""
                className=""
              />
            </button>
            <button className="swiper-button-next swiper-button-next-noticias hidden md:block">
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
              pagination={{
                dynamicBullets: true,
              }}
              navigation={{
                prevEl: ".swiper-button-prev-noticias",
                nextEl: ".swiper-button-next-noticias",
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
              }}
              className="">
              <SwiperSlide className="">
                <div className="relative">
                  <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
                    <div className="flex-2 md:pr-16">
                      <h3 className="font-verdana-bold text-gunmetal text-xl pb-2">
                        Cómo elegir la agencia de{" "}
                        <span className="text-yellowgreen">eventos corporativos perfecta</span>
                      </h3>
                      <p className="font-verdana-regular text-gunmetal">
                        Organizar un evento corporativo ya no es solo una tarea logística; es una inversión estratégica
                        en la imagen, la cultura y los objetivos de tu empresa.
                      </p>
                      <div className="flex items-center border rounded-4xl px-5 py-1 w-fit mt-4 gap-2">
                        <a
                          href="/post/como-elegir-la-agencia-de-eventos-corporativos-perfecta"
                          className="font-verdana-regular text-gunmetal">
                          Leer más
                        </a>
                        <img
                          src={`${domain}wp-content/uploads/2025/10/chevron-right.png`}
                          alt=""
                          className="h-3"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <img
                        src={`${domain}wp-content/uploads/2025/11/noticias-1.png`}
                        alt=""
                        className="h-60"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="relative">
                  <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
                    <div className="flex-2 pr-16">
                      <h3 className="font-verdana-bold text-gunmetal text-xl pb-2">
                        Realidad aumentada e IA: La tecnología inmersiva que transforma tus{" "}
                        <span className="text-yellowgreen">eventos corporativos</span>
                      </h3>
                      <p className="font-verdana-regular text-gunmetal">
                        El desafío de los eventos corporativos actuales es que el público ya no se conforma con ser
                        espectador pasivo.
                      </p>
                      <div className="flex items-center border rounded-4xl px-5 py-1 w-fit mt-4 gap-2">
                        <a
                          href="/post/realidad-aumentada-y-ia-la-tecnologia-inmersiva-que-transforma-tus-eventos-corporativos"
                          className="font-verdana-regular text-gunmetal">
                          Leer más
                        </a>
                        <img
                          src={`${domain}wp-content/uploads/2025/10/chevron-right.png`}
                          alt=""
                          className="h-3"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <img
                        src={`${domain}wp-content/uploads/2025/11/noticias-1.png`}
                        alt=""
                        className="h-60"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-4xl mx-auto px-4 md:px-0">
          <div className="relative slider-eventos  py-12">
            <Swiper
              watchOverflow={false}
              loop={false}
              modules={[Pagination]}
              pagination={{
                dynamicBullets: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
              }}
              className="">
              <SwiperSlide className="">
                <div className="relative">
                  <div className="flex items-center flex-col md:flex-row gap-8 ">
                    <div className="flex-1">
                      <img
                        src={`${domain}wp-content/uploads/2025/11/eventos-1.png`}
                        alt=""
                        className="h-60 mx-auto"
                      />
                    </div>
                    <div className="flex-1 pr-16">
                      <span className="bg-yellowgreen font-verdana-bold text-white px-4 py-1 rounded-lg text-lg">
                        Eventos
                      </span>
                      <h3 className="font-verdana-bold text-gunmetal text-xl pt-4 pb-2">
                        Conectamos personas, marcas y emociones
                      </h3>
                      <p className="font-verdana-regular text-gunmetal">
                        Cada evento que creamos tiene un propósito: construir conexiones reales.
                      </p>
                      <div className="flex items-center border rounded-4xl px-5 py-1 w-fit mt-4 gap-2">
                        <a
                          href="/post/como-elegir-la-agencia-de-eventos-corporativos-perfecta"
                          className="font-verdana-regular text-gunmetal">
                          Leer más
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
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
