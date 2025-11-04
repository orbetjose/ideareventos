

export default function Whatsapp() {
      const domain = import.meta.env.VITE_WP_DOMAIN;

  return (
    <a href="https://api.whatsapp.com/send?phone=529992659866&text=Hola+Idear+estoy+interesado+en+organizar+mi+pr%C3%B3ximo+evento+con+ustedes" target="_blank"><img className="flotante-whatsapp" src={`${domain}wp-content/uploads/2025/11/whatsapp.png`} alt="" /></a>
  )
}
