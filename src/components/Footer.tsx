import Whatsapp from "./Whatsapp";
export default function Footer() {
  const domain = import.meta.env.VITE_WP_DOMAIN;
  return (
    <footer className="py-10 bg-gunmetal text-white font-verdana-regular">
      <Whatsapp />
      <section>
        <div className="grid md:grid-cols-3 md:max-w-8xl mx-auto px-4 md:px-0 gap-8 md:gap-0">
          <div className="text-center">
            <img
              src={`${domain}wp-content/uploads/2025/10/logo_footer.png`}
              alt="Logo Idear Eventos"
              className="h-14 md:h-18 mx-auto"
            />
          </div>
          <div className="flex flex-col items-center md:items-start gap-1">
            <span>Carol Montealegre</span>
            <div className="flex gap-1 items-center">
              <img
                src={`${domain}wp-content/uploads/2025/10/ico-call.png`}
                alt=""
                className="h-4"
              />
              <span>Cel. 9992659866</span>
            </div>
            <div className="flex gap-1 items-center">
              <img
                src={`${domain}wp-content/uploads/2025/10/ico-mail.png`}
                alt=""
                className="h-3"
              />
              <span>cmontealegre@ideareventos.mx</span>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start gap-1">
            <span>Alejandra Salas</span>
            <div className="flex gap-1 items-center">
              <img
                src={`${domain}wp-content/uploads/2025/10/ico-call.png`}
                alt=""
                className="h-4"
              />
              <span>Cel. 9932078435</span>
            </div>
            <div className="flex gap-1 items-center">
              <img
                src={`${domain}wp-content/uploads/2025/10/ico-mail.png`}
                alt=""
                className="h-3"
              />
              <span>msalas@ideareventos.mx</span>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
