import { useEffect, useMemo, useRef, useState } from "react";

export type MediaItem =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string; alt?: string; poster?: string };

type LightboxProps = {
  items: MediaItem[];
  open: boolean;
  startIndex?: number;
  onClose: () => void;
};

export default function Lightbox({ items, open, startIndex = 0, onClose }: LightboxProps) {
  const [index, setIndex] = useState(startIndex);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    setIndex(startIndex);
  }, [startIndex, open]);

  // Bloquear scroll de body cuando está abierto
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Atajos de teclado
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    // Autoplay cuando el item actual es video
    const item = items[index];
    if (item?.type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
    return () => {
      // Pausar si cambiamos de item o cerramos
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, open]);

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  const current = useMemo(() => items[index], [items, index]);

  if (!open || !current) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}>
      {/* Controles */}
      <button
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute top-4 right-4 text-white/90 hover:text-white bg-black/40 hover:bg-black/60 rounded-full w-10 h-10 grid place-items-center">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {items.length > 1 && (
        <>
          <button
            aria-label="Anterior"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-white/90 hover:text-white bg-black/40 hover:bg-black/60 rounded-full w-10 h-10 grid place-items-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            aria-label="Siguiente"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 text-white/90 hover:text-white bg-black/40 hover:bg-black/60 rounded-full w-10 h-10 grid place-items-center z-100">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      )}

      {/* Contenido */}
      <div className=" rounded-2xl overflow-hidden bg-black shadow-2xl p-0">
        {current.type === "image" ? (
          <img
            src={current.src}
            alt={current.alt || ""}
            className="w-auto h-[67vh] md:h-[90vh] object-contain"
            loading="eager"
            decoding="sync"
          />
        ) : (
          <video
            ref={videoRef}
            src={current.src}
            poster={current.poster}
            controls
            playsInline
            className="w-full h-[85vh] md:h-[95vh] object-contain bg-black"
            onLoadedData={(e) => {
              const video = e.currentTarget;
              video.volume = 0.1; // 30% de volumen
            }}
          />
        )}
      </div>
    </div>
  );
}