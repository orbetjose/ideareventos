type heroBannerProps = {
  title: string;
  preText?: string;
  imagen: string;
};

export default function HeroBanner({ title, imagen, preText }: heroBannerProps) {
  return (
    <section className="pb-14">
      <div className="relative">
        <img
          src={imagen}
          alt="Banner nosotros"
          className="h-[90vh] w-full object-cover"
        />
        <div className="absolute left-1/2 top-1/2 translate-middle w-[90%]">
          <p className="font-verdana italic text-white text-lg text-center pb-2">{preText}</p>
          <h2 className="text-white text-5xl md:text-8xl text-center font-verdana-regular w-fit mx-auto uppercase underline underline-offset-12 decoration-yellowgreen decoration-3">
            {title}
          </h2>
        </div>
      </div>
    </section>
  );
}
