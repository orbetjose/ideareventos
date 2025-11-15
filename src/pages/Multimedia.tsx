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
                    src={`${domain}wp-content/uploads/2025/11/galeria-1.webp`}
                    alt=""
                    className=" "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-foto">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-2.webp`}
                    alt=""
                    className=" "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-foto">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-3.webp`}
                    alt=""
                    className=" "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-foto">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-4.webp`}
                    alt=""
                    className=" "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-foto">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-5.webp`}
                    alt=""
                    className=" "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-foto">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-6.webp`}
                    alt=""
                    className=" "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-foto">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-7.webp`}
                    alt=""
                    className=" "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-foto">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-8.webp`}
                    alt=""
                    className=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-foto">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-9.webp`}
                    alt=""
                    className=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-foto">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-10.webp`}
                    alt=""
                    className=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-foto">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-11.webp`}
                    alt=""
                    className=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-foto">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-12.webp`}
                    alt=""
                    className=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-foto">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-13.webp`}
                    alt=""
                    className=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-foto">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-14.webp`}
                    alt=""
                    className=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-foto">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-15.webp`}
                    alt=""
                    className=" "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-foto">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-16.webp`}
                    alt=""
                    className=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-foto">
                <div className="relative text-black text-center">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-17.webp`}
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
                  spaceBetween: 0,
                },
              }}
              className="">
              <SwiperSlide className="">
                <div className="relative text-black text-center w-full">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-18.webp`}
                    alt=""
                    className="rounded-3xl h-70 w-full object-cover "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="relative text-black text-center w-full">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-19.webp`}
                    alt=""
                    className="rounded-3xl h-70 w-full object-cover "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="relative text-black text-center w-full">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-20.webp`}
                    alt=""
                    className="rounded-3xl h-70 w-full object-cover a"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="relative text-black text-center w-full">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-21.webp`}
                    alt=""
                    className="rounded-3xl h-70 w-full object-cover "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="relative text-black text-center w-full">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-22.webp`}
                    alt=""
                    className="rounded-3xl h-70 w-full object-cover "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="relative text-black text-center w-full">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-23.webp`}
                    alt=""
                    className="rounded-3xl h-70 w-full object-cover a"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="relative text-black text-center w-full">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-24.webp`}
                    alt=""
                    className="rounded-3xl h-70 w-full object-cover "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="relative text-black text-center w-full">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-25.webp`}
                    alt=""
                    className="rounded-3xl h-70 w-full object-cover "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="relative text-black text-center w-full">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-26.webp`}
                    alt=""
                    className="rounded-3xl h-70 w-full object-cover a"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="relative text-black text-center w-full">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-27.webp`}
                    alt=""
                    className="rounded-3xl h-70 w-full object-cover "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="relative text-black text-center w-full">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-28.webp`}
                    alt=""
                    className="rounded-3xl h-70 w-full object-cover "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="relative text-black text-center w-full">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-29.webp`}
                    alt=""
                    className="rounded-3xl h-70 w-full object-cover a"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="relative text-black text-center w-full">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-30.webp`}
                    alt=""
                    className="rounded-3xl h-70 w-full object-cover "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="relative text-black text-center w-full">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-31.webp`}
                    alt=""
                    className="rounded-3xl h-70 w-full object-cover "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="relative text-black text-center w-full">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-32.webp`}
                    alt=""
                    className="rounded-3xl h-70 w-full object-cover a"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="relative text-black text-center w-full">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-33.webp`}
                    alt=""
                    className="rounded-3xl h-70 w-full object-cover "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="relative text-black text-center w-full">
                  <img
                    src={`${domain}wp-content/uploads/2025/11/galeria-34.webp`}
                    alt=""
                    className="rounded-3xl h-70 w-full object-cover a"
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
