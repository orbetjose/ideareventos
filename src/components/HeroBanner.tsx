
type heroBannerProps = {
  title: string;
  text?: string;
  imagen: string;
  button?: string;
};

export default function HeroBanner({ title, imagen, text, button }: heroBannerProps) {

  return (
    <section className="pb-14">
      <div className="relative">
        <img
          src={imagen}
          alt={`Banner ${title}`}
          className="h-[90vh] 2xl:h-[65vh] w-full object-cover 2xl:object-bottom"
        />
        <div className="absolute left-1/2 top-1/2 translate-middle w-[90%]">
          <h2 className="text-white text-4xl md:text-5xl text-center font-verdana-regular w-fit mx-auto uppercase underline underline-offset-12 decoration-yellowgreen decoration-3">
            {title}
          </h2>
          <p className="font-verdana-bold italic text-white text-lg text-center pt-8">{text}</p>
          {button && (
            <a className="bg-yellowgreen px-5 py-1 rounded-2xl font-verdana-bold text-white block w-fit hover:scale-105 transition-transform mx-auto text-xl mt-6" href="https://api.whatsapp.com/send?phone=529992659866&text=Hola+Idear+estoy+interesado+en+organizar+mi+pr%C3%B3ximo+evento+con+ustedes" target="_blank">{button}</a>
          )}
        </div>
      </div>
    </section>
  );
}
