import React from "react";

const Contact= () => {
  return (
    <section className=" bg-gray-200 from-slate-900 to-slate-800 text-black py-30 px-10">
      <div className="flex flex-row justify-evenly max-w-6xl mx-auto gap-12">
        {/* Columna izquierda - Información de contacto */}
        <div>
          <h2 className="text-4xl font-bold mb-6">¡Escríbeme y hablamos!</h2>
        
          <ul className="space-y-4 mt-6">
            <li className="flex items-start gap-4">
              <span className="text-xl">🏢</span>
              <div>
               
                <p>Córdoba, Argentina</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-xl">📞</span>
              <p>(03576)-15525383</p>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-xl">✉️</span>
              <p>melif6108@gmail.com</p>
            </li>
          </ul>
        </div>

        {/* Columna derecha - Formulario */}
        <form className="space-y-4 bg-gray-400 p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium">Nombre y apellido</label>
              <input type="text" className="w-full p-3 bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" />
            </div>
           
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" className="w-full p-3 bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" />
          </div>

          <div>
            <label className="block mb-1 font-medium">Número de teléfono</label>
            <input type="tel" className="w-full p-3 bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" />
          </div>

          <div>
            <label className="block mb-1 font-medium">Mensaje</label>
            <textarea rows="4" className="w-full p-3 bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"></textarea>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="secundary bg-gray-300 hover:bg-gray-500 text-black px-6 py-3 rounded-lg font-semibold shadow"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>

      
    </section>
  );
};

export default Contact;


