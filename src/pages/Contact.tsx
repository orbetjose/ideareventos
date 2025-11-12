import ContactForm from "../components/ContactForm";
import { useMeta } from "../helpers/useMeta";
const domain = import.meta.env.VITE_WP_DOMAIN;

export default function Contact() {
  useMeta({
    title: "Idear Eventos - Contáctanos",
    description: "Organización de eventos corporativos",
    keywords: "eventos, corporativos",
    canonical: "https://ideareventos.mx/contacto",
    og: {
      title: "Idear Eventos - Contáctanos",
      description: "Organizamos tus eventos con profesionalismo y creatividad.",
      type: "website",
      url: "https://ideareventos.mx/contacto",
      image: "https://ideareventos.mx/og-image.jpg",
      site_name: "IDEAR EVENTOS",
    },
    
  });
  return (
    <>
      <section className="bg-platinum">
        <div className="">
          <div className="relative">
            <img
              src={`${domain}wp-content/uploads/2025/11/banner-contact.png`}
              alt="Banner contactanos - Idear eventos"
              className="h-[65vh] 2xl:h-[55vh] w-full object-cover 2xl:object-bottom"
            />
            <div className="absolute left-1/2 top-1/2 translate-middle w-[90%]">
              <h2 className="text-white text-4xl md:text-5xl text-center font-verdana-regular w-fit mx-auto uppercase underline underline-offset-12 decoration-yellowgreen decoration-3">
                Contacto
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-platinum">
        <ContactForm />
      </section>
    </>
  );
}
