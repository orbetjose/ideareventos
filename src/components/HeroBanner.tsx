
type heroBannerProps = {
  title: string;
  text?: string;
  imagen: string;
};

export default function HeroBanner({ title, imagen, text }: heroBannerProps) {

  return (
    <section className="pb-14">
      <div className="relative">
        <img
          src={imagen}
          alt="Banner nosotros"
          className="h-[90vh] w-full object-cover"
        />
        <div className="absolute left-1/2 top-1/2 translate-middle w-[90%]">
          <h2 className="text-white text-3xl md:text-5xl text-center font-verdana-regular w-fit mx-auto uppercase underline underline-offset-12 decoration-yellowgreen decoration-3">
            {title}
          </h2>
          <p className="font-verdana-bold italic text-white text-lg text-center pt-8">{text}</p>
        </div>
      </div>
    </section>
  );
}
