import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet";

const domain = import.meta.env.VITE_WP_DOMAIN;

export default function Contact() {
  return (
    <>
      {" "}
      <Helmet>
        <title>IDEAR EVENTOS - Contactanos</title>
        <meta
          name="description"
          content="Organización de eventos corporativos"
        />
        <meta
          name="keywords"
          content="Organización de eventos corporativos"
        />
      </Helmet>
      <section>
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 translate-middle">
            <h3 className="font-verdana-bold text-white md:text-3xl text-2xl">Contáctanos</h3>
          </div>
          <img
            src={`${domain}wp-content/uploads/2025/10/contact-banner.jpg`}
            alt=""
            className="h-[50vh] md:h-auto w-full object-cover"
          />
        </div>
      </section>
      <section className="">
        <ContactForm />
      </section>
    </>
  );
}
