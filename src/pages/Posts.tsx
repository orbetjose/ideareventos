import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostInfo } from "../helpers/wp";
import type { infoPost } from "../types";
import NotFound from "./NotFound";
import HeroBlog from "../components/HeroBlog";
import { useMeta } from "../helpers/useMeta";

export default function Posts() {
  const domain = import.meta.env.VITE_WP_DOMAIN;

  const [infoPost, setinfoPost] = useState<infoPost[]>([]);
  const { slug } = useParams<{ slug: string }>();
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (slug) {
      getPostInfo(slug)
        .then((data) => {
          if (data.length === 0) {
            setNotFound(true);
          } else {
            setinfoPost(data);
          }
        })
        .catch(() => setNotFound(true))
        .finally(() => setLoading(false));
    }
  }, [slug]);

  const meta = infoPost.length
    ? {
        title: infoPost[0].title.rendered + " - Idear Eventos",
        description: "Organización de eventos corporativos",
        keywords: "eventos, corporativos",
        canonical: "https://ideareventos.mx",
        og: {
          title: "Idear Eventos - Posts",
          description: "Organizamos tus eventos con profesionalismo y creatividad.",
          type: "website",
          url: "https://ideareventos.mx",
          image: "https://ideareventos.mx/og-image.jpg",
          site_name: "IDEAR EVENTOS",
        },
      }
    : {
        title: "Cargando... - Idear Eventos",
      }; // algo minimal mientras carga

  useMeta(meta);

  if (loading) return <p>Cargando...</p>;
  if (notFound) return <NotFound />;

  return (
    <>
      <HeroBlog
        preText="Bienvenidos a nuestro"
        title="Blog"
        imagen={`${domain}wp-content/uploads/2025/11/banner-blog.png`}
      />
      <section className="max-w-5xl mx-auto px-4 md:px-0">
        <div className="text-center text-4xl ">
          <h1 className="pb-8 font-verdana-bold title-post">{infoPost[0].title.rendered}</h1>
        </div>
        <div
          className="space-y-4 pb-10 font-verdana-regular text-justify content-post"
          dangerouslySetInnerHTML={{ __html: infoPost[0].content.rendered }}></div>
      </section>
    </>
  );
}
