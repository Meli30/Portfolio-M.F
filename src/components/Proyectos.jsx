import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const proyectos = [
  {
    id: 1,
    nombre: "Caroline Sada",
    imagen: "/img/proyectos/CarolineSada.png",
    link: "https://meli30.github.io/CarolineSada/",
  },
  {
    id: 2,
    nombre: "AluraGeek",
    imagen: "/img/proyectos/AluraGeek.png",
    link: "https://meli30.github.io/AluraGeek/",
  },
  {
    id: 3,
    nombre: "AluraFlix",
    imagen: "/img/proyectos/AluraFlix.png",
    link: "https://meli30.github.io/ChallengeAluraFlix/",
  },

  {
    id: 4,
    nombre: "AluraFlix",
    imagen: "/img/proyectos/AluraFlix.png",
    link: "https://meli30.github.io/ChallengeAlura/",
  },

  {
    id: 4,
    nombre: "AluraFlix",
    imagen: "/img/proyectos/AluraFlix.png",
    link: "https://meli30.github.io/ChallengeAlura/",
  },


];

export default function Proyectos() {
  return (
    <section id="proyectos" className="bg-black dark:bg-gray-500 py-25">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
        Mis Proyectos
      </h2>
      <p className="max-w-xl mx-auto text-gray-700 dark:text-gray-300 text-center mb-10">
        A continuación verás una galería de algunos proyectos que desarrollé durante mi formación.
      </p>
      <div className="mx-auto px-4">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation = {{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
           onInit={(swiper) => {
          // Habilitar navegación custom porque usamos selectores propios
          swiper.params.navigation.prevEl = ".swiper-button-prev";
          swiper.params.navigation.nextEl = ".swiper-button-next";
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        >
          {proyectos.map((proyecto) => (
            <SwiperSlide key={proyecto.id}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border dark:border-gray-700 hover:shadow-xl transition text-center">
                <img
                  src={proyecto.imagen}
                  alt={`Imagen del proyecto ${proyecto.nombre}`}
                  className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-white shadow"
                />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {proyecto.nombre}
                </h3>
                <a
                  href={proyecto.link}
                  className="text-blue-600 dark:text-blue-400 mt-2 inline-block hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Proyecto
                </a>
              </div>
            </SwiperSlide>
          ))}

          {/* Flechas custom posicionadas */}
        <button
          className="swiper-button-prev absolute top-1/2 -left-6 transform -translate-y-1/2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 rounded-full p-2 shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition z-10"
          aria-label="Anterior"
        >
          ‹
        </button>
        <button
          className="swiper-button-next absolute top-1/2 -right-6 transform -translate-y-1/2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 rounded-full p-2 shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition z-10"
          aria-label="Siguiente"
        >
          ›
        </button>



        </Swiper>
      </div>
    </section>
  );
}


