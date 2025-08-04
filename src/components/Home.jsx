import React, { useState, useEffect } from "react";
import HeaderimgWebp from "../assets/img-header.webp";

const Button = ({ onClick, children, variant = "primary", ariaLabel }) => {
  const baseClasses = "font-medium text-sm py-1.5 px-4 rounded-full shadow transition";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white text-blue-600 hover:bg-blue-100",
  };
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${baseClasses} ${variants[variant]}`}
      type="button"
    >
      {children}
    </button>
  );
};

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Cierra menú en móvil al hacer clic
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuOpen && !e.target.closest("nav") && !e.target.closest("button")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [menuOpen]);

  return (
    <>
      <header className="relative w-screen h-screen overflow-hidden">
        {/* Imagen de fondo */}
        <picture className="absolute inset-0 z-0">
          <source srcSet={HeaderimgWebp} type="image/webp" />
          <img
            src={HeaderimgWebp}
            alt="Imagen de cabecera con fondo"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </picture>

        {/* Contenido central */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl text-center px-4 z-20">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
            ¡Hola! Soy Melisa Fernández
          </h1>
          <p className="text-sm sm:text-base md:text-xl mt-4 text-white drop-shadow-md">
            Desarrolladora web en formación, apasionada por el diseño y el frontend 💻✨
          </p>

          {/* Botones debajo del texto (solo escritorio) */}
          <div className="md:flex justify-between gap-10 mt-4">
            <Button className="mb-2 md:mb-0"
              onClick={() => scrollToId("sobre-mi")}
              variant="secondary"
              ariaLabel="Ir a la sección Sobre mí"
            >
              Sobre mí
            </Button>
            <Button
              onClick={() => scrollToId("proyectos")}
              variant="primary"
              ariaLabel="Ir a la sección Proyectos"
            >
              Ver proyectos
            </Button>
          </div>

          {/* Aquí podrías poner el menú hamburguesa para móvil si querés */}
        </div>
      </header>
    </>
  );
};

export default Home;
