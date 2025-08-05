import React, { useEffect, useRef, useState } from "react";
import {
  FaReact,
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
  FaServer,
} from "react-icons/fa";

const habilidades = [
  {
    nombre: "React",
    nivel: 90,
    icono: <FaReact className="text-blue-500 w-12 h-12" />,
  },
  {
    nombre: "JavaScript",
    nivel: 85,
    icono: <FaJsSquare className="text-yellow-400 w-12 h-12" />,
  },
  {
    nombre: "Tailwind CSS",
    nivel: 80,
    icono: <FaCss3Alt className="text-teal-500 w-12 h-12" />,
  },
  {
    nombre: "HTML5",
    nivel: 95,
    icono: <FaHtml5 className="text-orange-600 w-12 h-12" />,
  },
  {
    nombre: "Node.js",
    nivel: 75,
    icono: <FaServer className="text-green-600 w-12 h-12" />,
  },
];

const Habilidades = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="habilidades"
      ref={ref}
      className="max-w-6xl mx-auto py-16 px-4"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-black">
        Habilidades
      </h2>
      <div className="flex flew-row flex-wrap justify-evenly">
        <div class="flex flex-col gap-8 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4">
  <img 
  class="mx-auto block h-22 rounded-full sm:mx-0 sm:shrink-0" 
  src="/img/erin-lindford.jpg" 
  alt="JavaScipt" />
  <div class="space-y-2 text-center sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg font-semibold text-black">Erin Lindford</p>
    </div>
  </div>
</div>

<div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
  <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" 
  src="/img/erin-lindford.jpg" 
  alt="CSS" />
  <div class="space-y-2 text-center sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg font-semibold text-black">Erin Lindford</p>
    </div>
  </div>
</div>

<div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
  <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" 
  src="/img/erin-lindford.jpg" 
  alt="React" />
  <div class="space-y-2 text-center sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg font-semibold text-black">Erin Lindford</p>
    </div>
  </div>
</div>

<div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
  <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" 
  src="/img/erin-lindford.jpg" 
  alt="Tailwind" />
  <div class="space-y-2 text-center sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg font-semibold text-black">Erin Lindford</p>
    </div>
  </div>
</div>

<div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
  <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" 
  src="/img/erin-lindford.jpg" 
  alt="HTML" />
  <div class="space-y-2 text-center sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg font-semibold text-black">Erin Lindford</p>
    </div>
  </div>
</div>

<div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
  <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" 
  src="/img/erin-lindford.jpg" 
  alt="NODE" />
  <div class="space-y-2 text-center sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg font-semibold text-black">Erin Lindford</p>
      
    </div>
    
  </div>
</div>
      </div>
      

    </section>
  );
};

export default Habilidades;


