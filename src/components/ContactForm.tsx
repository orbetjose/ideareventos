import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
        checkbox: false,
        message: "",
      });
    } catch (err) {
      setError("No se pudo enviar el formulario");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:max-w-4xl mx-auto py-14 px-8 md:px-0">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="flex-1">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 text-sm  font-verdana-regular
      ">
            <label>Nombre</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              className="w-full px-2 pt-2 pb-4 border border-charged-blue rounded bg-black-50"
              required
            />
            <div>
              <label>Correo</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                className="w-full px-2 pt-2 pb-4 border border-charged-blue rounded bg-black-50"
                required
              />
            </div>
            <label htmlFor="">Mensaje</label>
            <textarea
              name="message"
              onChange={handleChange}
              value={formData.message}
              className="w-full px-2 pt-2 pb-4 h-[154px] border border-charged-blue rounded bg-black-50"
              required
            />
            <div className="flex gap-4">
              <input
                type="checkbox"
                required
              />
              <p>
                Si, estoy de acuerdo con las{" "}
                <a
                  href="#"
                  className="underline">
                  políticas de privacidad
                </a>{" "}
                y los{" "}
                <a
                  href="#"
                  className="underline">
                  términos y condiciones
                </a>{" "}
              </p>
            </div>

            <button
              type="submit"
              className="font-verdana-regular px-4 py-2 rounded block w-full text-white bg-yellowgreen text-center text-base cursor-pointer"
              disabled={loading}>
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </form>
          {success ? (
            <p className="text-green-500 text-center mt-4 font-poppins-bold text-lg ">¡Mensaje enviado con éxito!</p>
          ) : null}
          {error ? <p className="text-red-500 font-poppins-bold text-lg">{error}</p> : null}
        </div>
        <div className="flex-1">
          <div className="font-verdana-regular text-lg space-y-1 md:text-2xl md:ps-20 md:space-y-3 md:pt-10 pb-4 text-center md:text-left">
            <h3>Mayores informes:</h3>
            <p>Cel. +52 99 92 65 98 66</p>
            <p>cmontealegre@ideareventos.mx</p>
          </div>
        </div>
      </div>
    </div>
  );
}
