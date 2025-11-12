import HeroBanner from "../components/HeroBanner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { useMeta } from "../helpers/useMeta";

export default function Multimedia() {
  const domain = import.meta.env.VITE_WP_DOMAIN;
  useMeta({
    title: "Idear Eventos - Galeria",
    description: "Organización de eventos corporativos",
    keywords: "eventos, corporativos",
    canonical: "https://ideareventos.mx/multimedia",
    og: {
      title: "Idear Eventos - Galeria",
      description: "Organizamos tus eventos con profesionalismo y creatividad.",
      type: "website",
      url: "https://ideareventos.mx/multimedia",
      image: "https://ideareventos.mx/og-image.jpg",
      site_name: "IDEAR EVENTOS",
    },
  });
  return (
    <>
      <HeroBanner
        title="Galería"
        imagen={`${domain}wp-content/uploads/2025/11/banner-multimedia.png`}
      />
      <section>
        <div className="md:max-w-8xl 2xl:max-w-7xl mx-auto px-4 md:px-0">
          <h3 className="font-verdana-bold text-gunmetal text-3xl text-center">Fotos</h3>
          <a
            href="#"
            className="bg-yellowgreen px-3 py-1 rounded-2xl font-verdana-bold text-white block mx-auto w-fit">
            Ver todas
          </a>
          <div className="relative slider-fotos my-14">
            <button className="swiper-button-prev swiper-button-prev-fotos">
              <img
                src={`${domain}wp-content/uploads/2025/10/chevron-left.png`}
                alt=""
                className=""
              />
            </button>
            <button className="swiper-button-next swiper-button-next-fotos">
              <img
                src={`${domain}wp-content/uploads/2025/10/chevron-right.png`}
                alt=""
                className=""
              />
            </button>
            <div className="swiper-pagination-fotos"></div>
            <Swiper
              watchOverflow={false}
              loop={true}
              modules={[Navigation, Pagination, EffectCoverflow]}
              navigation={{
                prevEl: ".swiper-button-prev-fotos",
                nextEl: ".swiper-button-next-fotos",
              }}
              pagination={{
                dynamicBullets: true,
                el: ".swiper-pagination-fotos",
              }}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              className="">
              <SwiperSlide className="slide-foto">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/fotos-thumbnail.png`}
                    alt=""
                    className=" "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-foto">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/fotos-thumbnail.png`}
                    alt=""
                    className=" "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-foto">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/fotos-thumbnail.png`}
                    alt=""
                    className=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-foto">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/fotos-thumbnail.png`}
                    alt=""
                    className=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-foto">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/fotos-thumbnail.png`}
                    alt=""
                    className=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-foto">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/fotos-thumbnail.png`}
                    alt=""
                    className=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-foto">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/fotos-thumbnail.png`}
                    alt=""
                    className=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-foto">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/fotos-thumbnail.png`}
                    alt=""
                    className=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-foto">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/fotos-thumbnail.png`}
                    alt=""
                    className=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-foto">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/fotos-thumbnail.png`}
                    alt=""
                    className=" "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-foto">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/fotos-thumbnail.png`}
                    alt=""
                    className=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-foto">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/fotos-thumbnail.png`}
                    alt=""
                    className=""
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="md:mt-26">
        <div className="md:max-w-4xl 2xl:max-w-7xl mx-auto px-4 md:px-0">
          <h3 className="font-verdana-bold text-gunmetal text-3xl text-center">Videos</h3>
          <a
            href="#"
            className="bg-yellowgreen px-3 py-1 rounded-2xl font-verdana-bold text-white block mx-auto w-fit">
            Ver todos
          </a>
          <div className="relative slider-videos mb-18 mt-10">
            <button className="swiper-button-prev swiper-button-prev-videos">
              <img
                src={`${domain}wp-content/uploads/2025/10/chevron-left.png`}
                alt=""
                className=""
              />
            </button>
            <button className="swiper-button-next swiper-button-next-videos">
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
                prevEl: ".swiper-button-prev-videos",
                nextEl: ".swiper-button-next-videos",
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: -40,
                },
              }}
              className="">
              <SwiperSlide className="">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/video-thumbnail.png`}
                    alt=""
                    className=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/video-thumbnail.png`}
                    alt=""
                    className=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/video-thumbnail.png`}
                    alt=""
                    className="a"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
