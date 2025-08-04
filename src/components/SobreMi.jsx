import React, { useEffect, useState, useRef } from "react";


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
      className={`flex flex-col md:flex-row items-center max-w-6xl mx-auto p-8 transition-opacity duration-1000 ease-in-out
        ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
    >
      {/* Foto */}
      <img
        
        alt="Melisa Fernández"
        className="w-12 h-12 object-cover mb-6 md:mb-0 md:mr-10 shadow-lg"
      />

      {/* Texto */}
      <div className="text-gray-800 dark:text-gray-200 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
        <p className="mb-4">
          ¡Hola! Soy Melisa Fernández. Desarroladora web. Me encanta crear interfaces limpias, funcionales y accesibles
          usando tecnologías modernas como React, Tailwind CSS y JavaScript.
        </p>
        <p>
          También disfruto aprender sobre UX/UI y mejorar continuamente mis habilidades
          para ofrecer las mejores experiencias de usuario.
        </p>

        {/* Datos de contacto */}
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Contacto</h3>
          <p>Email: melisa@example.com</p>
          <p>Teléfono: +54 9 11 1234 5678</p>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
