import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkbox: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const domain = import.meta.env.VITE_WP_DOMAIN;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const payload = {
      ...formData,
    };

    try {
      const response = await fetch(`${domain}wp-json/contact-form/v1/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Error al enviar el formulario");

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        checkbox: false,
        message: "",
      });
    } catch (err) {
      setError("No se pudo enviar el formulario");
    } finally {
      setLoading(false);
    }

    try {
      const res = await emailjs.send(
        "service_9jbyuyo",
        "template_6nwth2d",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "b6OBi1S8TM8PMPe4O"
      );
      if (res.status !== 200) throw new Error("Error en el envio");
    } catch (error) {
      console.log("Failed...", error);
    }
  };

  return (
    <div className="md:max-w-5xl mx-auto py-14 px-8 md:px-0">
      <div className="flex justify-center items-center flex-col-reverse md:flex-row ">
        <div className=" bg-white rounded-full py-6 relative w-full pr-40">
          <img
            src={`${domain}wp-content/uploads/2025/11/imagen-contacto.webp`}
            alt=""
            className="h-100 absolute -left-10 top-1/2 -translate-y-1/2"
          />
          <form
            onSubmit={handleSubmit}
            className="space-y-3 text-sm  font-verdana-regular w-1/2 ml-auto">
            <h3 className="text-gunmetal font-verdana-bold text-2xl">CONTÁCTANOS</h3>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              onChange={handleChange}
              value={formData.name}
              className="w-full px-5 py-2 bg-platinum rounded-full "
              required
            />
            <div>
              <input
                type="email"
                name="email"
                placeholder="Correo"
                onChange={handleChange}
                value={formData.email}
                className="w-full px-5 py-2 bg-platinum rounded-full "
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="phone"
                placeholder="Teléfono"
                onChange={handleChange}
                value={formData.phone}
                className="w-full px-5 py-2 bg-platinum rounded-full "
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Mensaje"
              onChange={handleChange}
              value={formData.message}
              className="w-full px-5 py-2 bg-platinum rounded-full "
              required
            />
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                required
              />
              <p className="text-xs">
                Si, estoy de acuerdo con las{" "}
                <a
                  href={`${domain}wp-content/uploads/2025/11/Politica-Privacidad-y-Datos-personales-Idear-Eventos.pdf`}
                  target="_blank"
                  className="underline">
                  políticas de privacidad y los términos y condiciones
                </a>
              </p>
            </div>
            <div className="flex items-center border rounded-4xl px-5 py-1 w-fit mt-4 gap-2">
              <button
                type="submit"
                className="font-verdana-regular text-gunmetal cursor-pointer"
                disabled={loading}>
                {loading ? "Enviando..." : "Enviar"}
              </button>
              <img
                src={`${domain}wp-content/uploads/2025/11/ico-enviar.png`}
                alt=""
                className="h-3"
              />
            </div>
          </form>
          {success ? (
            <p className="text-green-500 text-center mt-4 font-poppins-bold text-lg absolute right-2/5 bottom-1 translate-x-1/2">
              ¡Mensaje enviado con éxito!
            </p>
          ) : null}
          {error ? <p className="text-red-500 font-poppins-bold text-lg">{error}</p> : null}
        </div>
      </div>
    </div>
  );
}
