import React from "react";

const Contact= () => {
  return (
    <section className="bg-blue-500 from-slate-900 to-slate-800 text-white py-26 px-8">
      <div className="flex flex-row justify-evenly max-w-6xl mx-auto gap-12">
        {/* Columna izquierda - Información de contacto */}
        <div>
          <h2 className="text-4xl font-bold mb-6">¡Escríbeme y hablamos!</h2>
        
          <ul className="space-y-4 mt-6">
            <li className="flex items-start gap-4">
              <span className="text-xl">🏢</span>
              <div>
                <p className="font-semibold">545 Mavis Island</p>
                <p>Chicago, IL 99191</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-xl">📞</span>
              <p>+1 (555) 234-5678</p>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-xl">✉️</span>
              <p>hello@example.com</p>
            </li>
          </ul>
        </div>

        {/* Columna derecha - Formulario */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium">First name</label>
              <input type="text" className="w-full p-3 bg-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Last name</label>
              <input type="text" className="w-full p-3 bg-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" className="w-full p-3 bg-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone number</label>
            <input type="tel" className="w-full p-3 bg-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea rows="4" className="w-full p-3 bg-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow"
            >
              Send message
            </button>
          </div>
        </form>
      </div>

      
    </section>
  );
};

export default Contact;


