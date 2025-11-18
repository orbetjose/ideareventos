import HeroBanner from "../components/HeroBanner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { useMeta } from "../helpers/useMeta";
import { useEffect, useMemo, useRef, useState } from "react";
import Lightbox, { type MediaItem } from "../components/Lightbox";

// Pequeño componente para mostrar un frame del video en el segundo ~1 como thumbnail
function VideoThumb({
  src,
  className,
  onClick,
  seekSeconds = 1,
}: {
  src: string;
  className?: string;
  onClick?: () => void;
  seekSeconds?: number;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let requestedTime = seekSeconds;

    const onLoadedMetadata = () => {
      // Si el video es muy corto, busca la mitad de su duración
      if (video.duration && requestedTime > video.duration) {
        requestedTime = Math.max(0, Math.min(1, video.duration / 2));
      }
      try {
        video.currentTime = requestedTime;
      } catch {
        // Algunos navegadores requieren esperar a que sea "seekable"
      }
    };

    const onSeeked = () => {
      // Asegurar que quede pausado en el frame
      try {
        video.pause();
      } catch {}
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("seeked", onSeeked);

    // En casos donde loadedmetadata no dispare correctamente,
    // intenta una segunda búsqueda tras un pequeño delay.
    const fallback = setTimeout(() => {
      if (!video.duration) return;
      try {
        video.currentTime = Math.min(requestedTime, Math.max(0.1, video.duration / 3));
      } catch {}
    }, 1200);

    return () => {
      clearTimeout(fallback);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("seeked", onSeeked);
    };
  }, [src, seekSeconds]);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative mx-auto cursor-pointer block group ${className || ""}`}>
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="metadata"
        // Importante: sin controls para que se vea como imagen
        controls={false}
        className="rounded-3xl h-120 md:h-100 w-full object-cover bg-black"
      />
      {/* Overlay play */}
      <span className="pointer-events-none absolute inset-0 rounded-3xl bg-black/0 group-hover:bg-black/20 transition" />
      <span className="pointer-events-none absolute inset-0 grid place-items-center">
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/90 group-hover:bg-white text-black shadow-lg transition">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}

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

  // Fotos (1..17)
  const photoItems: MediaItem[] = useMemo(
    () =>
      Array.from({ length: 17 }, (_, i) => {
        const n = i + 1;
        return {
          type: "image" as const,
          src: `${domain}wp-content/uploads/2025/11/galeria-${n}.webp`,
          alt: `Foto ${n}`,
        };
      }),
    [domain]
  );

  // El formato de array es como solicitaste.
  const reelUrls: string[] = [
    `${domain}wp-content/uploads/2025/11/video-1.mp4`,
    `${domain}wp-content/uploads/2025/11/video-2.mp4`,
    `${domain}wp-content/uploads/2025/11/video-4.mp4`,
    `${domain}wp-content/uploads/2025/11/video-5.mp4`,
    `${domain}wp-content/uploads/2025/11/video-6.mp4`,
    `${domain}wp-content/uploads/2025/11/video-7.mp4`,
    `${domain}wp-content/uploads/2025/11/video-8.mp4`,
  ];

  // Lightbox: items de video desde reelUrls
  const videoItems: MediaItem[] = useMemo(
    () =>
      reelUrls.map((url, idx) => ({
        type: "video" as const,
        src: url,
        alt: `Video ${idx + 1}`,
      })),
    [reelUrls]
  );

  // Lightbox state para fotos
  const [openPhotos, setOpenPhotos] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Lightbox state para videos
  const [openVideos, setOpenVideos] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);

  return (
    <>
      <HeroBanner
        title="Galería"
        imagen={`${domain}wp-content/uploads/2025/11/banner-multimedia.png`}
      />

      {/* ------------------ FOTOS ------------------ */}
      <section>
        <div className="md:max-w-8xl 2xl:max-w-7xl mx-auto px-4 md:px-0">
          <h3 className="font-verdana-bold text-gunmetal text-3xl text-center">Fotos</h3>

          <div className="relative slider-fotos my-14">
            <button className="swiper-button-prev swiper-button-prev-fotos">
              <img
                src={`${domain}wp-content/uploads/2025/10/chevron-left.png`}
                alt=""
              />
            </button>
            <button className="swiper-button-next swiper-button-next-fotos">
              <img
                src={`${domain}wp-content/uploads/2025/10/chevron-right.png`}
                alt=""
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
              {photoItems.map((item, i) => (
                <SwiperSlide
                  className="slide-foto"
                  key={`foto-${i}`}>
                  <button
                    type="button"
                    onClick={() => {
                      setPhotoIndex(i);
                      setOpenPhotos(true);
                    }}
                    className="relative text-black text-center block focus:outline-none group cursor-pointer">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="rounded-3xl"
                      loading="lazy"
                    />
                    {/* Zoom icon hover */}
                    <span className="absolute inset-0 rounded-3xl ring-0 group-hover:ring-4 ring-yellowgreen/60 transition" />
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ------------------ VIDEOS ------------------ */}
      <section className="md:mt-26">
        <div className="md:max-w-6xl 2xl:max-w-7xl mx-auto px-4 md:px-0">
          <h3 className="font-verdana-bold text-gunmetal text-3xl text-center">Videos</h3>

          <div className="relative slider-videos mb-24 mt-10">
            <button className="swiper-button-prev swiper-button-prev-videos">
              <img
                src={`${domain}wp-content/uploads/2025/10/chevron-left.png`}
                alt=""
              />
            </button>
            <button className="swiper-button-next swiper-button-next-videos">
              <img
                src={`${domain}wp-content/uploads/2025/10/chevron-right.png`}
                alt=""
              />
            </button>
            <div className="swiper-pagination-videos"></div>

            <Swiper
              watchOverflow={false}
              loop={false}
              modules={[Navigation, Pagination]}
              navigation={{
                prevEl: ".swiper-button-prev-videos",
                nextEl: ".swiper-button-next-videos",
              }}
              pagination={{
                dynamicBullets: true,
                el: ".swiper-pagination-videos",
              }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 20 },
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 24 },
                1024: { slidesPerView: 5, spaceBetween: 28 },
              }}
              className="">
              {reelUrls.map((url, i) => (
                <SwiperSlide key={`video-${i}`}>
                  <VideoThumb
                    src={url}
                    onClick={() => {
                      setVideoIndex(i);
                      setOpenVideos(true);
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Lightbox para fotos */}
      <Lightbox
        items={photoItems}
        open={openPhotos}
        startIndex={photoIndex}
        onClose={() => setOpenPhotos(false)}
      />

      {/* Lightbox para videos */}
      <Lightbox
        items={videoItems}
        open={openVideos}
        startIndex={videoIndex}
        onClose={() => setOpenVideos(false)}
      />
    </>
  );
}
