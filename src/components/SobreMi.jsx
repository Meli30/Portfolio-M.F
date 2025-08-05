import React, { useEffect, useState, useRef } from "react";
import MelisaFoto from "../assets/MelisaFernández.webp";


const SobreMi = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Solo animar una vez
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sobre-mi"
      ref={ref}
      className={` p-10 text-2xl flex flex-col 
        md:flex-row items-center max-w-6xl mx-auto p-8
        ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
    >

      {/* Texto */}
      <div className="text-gray-800 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
        <p className="mb-4">
          ¡Hola! Soy Melisa Fernández. Desarroladora web que le encanta crear interfaces limpias, funcionales y accesibles
          usando tecnologías modernas como React, Tailwind CSS y JavaScript.
        </p>
        <p>
          También disfruto aprender sobre UX/UI y mejorar continuamente mis habilidades
          para ofrecer las mejores experiencias de usuario.
        </p>
      </div>

      {/* Foto */}
      <img

        src={MelisaFoto}
        alt="Melisa Fernández"
        className="p-5  w-150 h-150 object-cover mb-6 md:mb-0 md:mr-10 shadow-lg"
      />
    </section>
  );
};

export default SobreMi;
