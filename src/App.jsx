import React from "react";
import Header from "./components/header";
import product from "./assets/product.png";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-[#F0F1F5] hover:bg-[#E8E9F1] transform hover:scale-105 transition-all duration-300 shadow-md rounded-lg p-6 flex flex-col items-center w-full max-w-sm border-t-4 border-[#6B7C93]">
      <div className="text-5xl text-[#6B7C93] mb-4">{icon}</div>
      <h3 className="text-xl text-[#343C55] mb-3">{title}</h3>
      <p className="text-center text-[#4A4A6B]">{description}</p>
    </div>
  );
};

const ClientReviewCard = ({ name, comment, rating }) => {
  return (
    <div className="bg-[#F0F1F5] transform hover:scale-105 transition-all duration-300 shadow-lg rounded-lg p-6 w-full max-w-md border-l-4 border-[#6B7C93]">
      <h3 className="text-xl text-[#343C55] mb-2">{name}</h3>
      <p className="text-[#4A4A6B] mb-4">{comment}</p>
      <div className="flex items-center">
        {Array(rating)
          .fill(0)
          .map((_, i) => (
            <span key={i} className="text-[#FFD700] text-lg">
              ★
            </span>
          ))}
        {Array(5 - rating)
          .fill(0)
          .map((_, i) => (
            <span key={i} className="text-[#DDDDDD] text-lg">
              ★
            </span>
          ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#343C55] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-start gap-8">
        <div className="mb-8 lg:mb-0">
          <h3 className="text-2xl font-semibold mb-4">Contáctanos</h3>
          <p className="mb-2 flex items-center">
            <span className="font-medium mr-2">📞</span>+57 302 2749709
          </p>
          <p className="mb-2 flex items-center">
            <span className="font-medium mr-2">📧</span>
            chatjouetcol@gmail.com
          </p>
          <p className="flex items-center">
            <span className="font-medium mr-2">📍</span>
            Dosquebradas, Colombia
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">Envíanos un Mensaje</h3>
          <form>
            <div className="grid gap-4">
              <input
                type="text"
                className="border border-gray-300 p-3 rounded w-full text-black focus:ring-2 focus:ring-[#6B7C93] transition duration-300 ease-in-out"
                placeholder="Nombre"
              />
              <textarea
                className="border border-gray-300 p-3 rounded w-full text-black focus:ring-2 focus:ring-[#6B7C93] transition duration-300 ease-in-out"
                placeholder="Mensaje"
                rows="3"
              ></textarea>
              <button
                type="submit"
                className="bg-[#6B7C93] hover:bg-[#343C55] text-white py-2 px-4 rounded transition duration-300 ease-in-out"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
      <p className="text-center text-gray-400 mt-12">
        © 2024 chatjouetcol . Todos los derechos reservados.
      </p>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen font-['Archivo_Black']">
      <Header />
      <main>
        <section
          id="producto"
          className="flex flex-col lg:flex-row px-8 py-12 bg-[#f6f8ff]"
        >
          <div className="flex flex-col justify-center mx-auto text-center">
            <h1 className="text-6xl md:text-8xl text-[#343C55] transition-transform duration-300 hover:scale-105">
            Chatjouet

            </h1>
            <img
              src={product}
              alt="CatComfort 2024"
              className="w-auto h-72 rounded-lg shadow-xl mx-auto my-8 transition-transform duration-300 hover:scale-105"
            />
            <p className="text-lg text-[#4A4A6B] mt-4 max-w-prose mx-auto">
              Comederos resistentes y diseñados pensando en la salud y bienestar
              de los gatos; además de un producto práctico que ayuda con la
              alimentación y entrenamiento de los mininos.
            </p>
            <div className="flex justify-center space-x-8 mt-8">
              <button className="bg-[#6B7C93] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#343C55] transition duration-200 transform hover:-translate-y-1">
                Comprar Ahora
              </button>
              <button className="border border-[#6B7C93] text-[#6B7C93] py-3 px-6 rounded-lg shadow-lg hover:bg-[#6B7C93] hover:text-white transition duration-200 transform hover:-translate-y-1">
                Más Información
              </button>
            </div>
          </div>
        </section>

        <section
          id="caracteristicas"
          className="flex flex-col items-center px-6 py-12 bg-[#E9ECF5]"
        >
          <h2 className="text-center text-4xl text-[#343C55] mb-10">
            Características Principales
          </h2>
          <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-8 items-start mt-6 w-full max-w-7xl">
            <FeatureCard
              icon="🛡️"
              title="Durabilidad"
              description="Nuestros comederos están fabricados con materiales de alta calidad que garantizan una larga duración y resistencia."
            />
            <FeatureCard
              icon="❤️"
              title="Salud y Bienestar"
              description="Diseñados especialmente para promover hábitos alimenticios saludables y el bienestar general de los gatos."
            />
            <FeatureCard
              icon="🧩"
              title="Funcionalidad"
              description="Ayudan en el entrenamiento y desarrollo de habilidades de los mininos, haciendo la hora de comer un momento divertido."
            />
            <FeatureCard
              icon="🔒"
              title="Seguridad"
              description="Nuestros productos están diseñados para asegurar que los gatos se alimenten de manera segura, minimizando riesgos."
            />
          </div>
        </section>

        <section
          id="testimonios"
          className="flex flex-col items-center pt-12 px-6 bg-[#f6f8ff]"
        >
          <h2 className="text-center text-4xl text-[#343C55] mb-10">
            Clientes Satisfechos...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 justify-items-center mb-20">
            <ClientReviewCard
              name="Marta Alvarez"
              comment="Los comederos de CatComfort son perfectos. Mi gato estaba comiendo demasiado rápido y ahora come más despacio y saludable. ¡Gran compra!"
              rating={5}
            />
            <ClientReviewCard
              name="Luis Ramírez"
              comment="Me encanta cómo estos productos están diseñados con tanto amor por los gatos. Es evidente que se preocupan por el bienestar de nuestras mascotas. ¡Recomendado!"
              rating={5}
            />
            <ClientReviewCard
              name="Paula Torres"
              comment="No solo son prácticos, sino que también ayudan a mi gato a mantenerse activo durante su alimentación. Una compra excelente."
              rating={4}
            />
          </div>
        </section>

        <section
          id="sobre-nosotros"
          className="px-8 py-12 flex flex-col mx-auto bg-gradient-to-b from-[#E9ECF5] to-[#E3E5F5]"
        >
          <h2 className="text-4xl text-center text-[#343C55] mb-12">
            Sobre Nosotros
          </h2>
          <div className="flex flex-col mx-auto max-w-3xl">
            <div className="text-justify">
              <div className="mt-10">
                <h3 className="text-2xl font-semibold text-[#343C55] mb-3">
                  Visión
                </h3>
                <p className="text-lg text-[#4A4A6B]">
                  Nuestra visión es liderar el mercado nacional en la creación
                  de productos innovadores dedicados al bienestar y desarrollo
                  saludable de los gatos.
                </p>
              </div>
              <div className="mt-10">
                <h3 className="text-2xl font-semibold text-[#343C55] mb-3">
                  Misión
                </h3>
                <p className="text-lg text-[#4A4A6B]">
                  Proporcionar a nuestros clientes productos de alta calidad que
                  no solo favorezcan la salud y el bienestar de sus gatos, sino
                  que también aporten a una vida diaria más cómoda y práctica.
                </p>
              </div>
              <div className="mt-16 bg-[#F0F1F5] shadow-lg transform hover:scale-105 transition-all duration-300 rounded-lg p-6 border-t-4 border-[#6B7C93]">
                <h3 className="text-2xl font-semibold text-[#343C55] mb-4">
                  Nuestro Equipo
                </h3>
                <ul className="list-disc list-inside">
                  <li className="text-lg text-[#4A4A6B]">
                    Sofía Bejarano Flórez
                  </li>
                  <li className="text-lg text-[#4A4A6B]">
                    Sofía Rodriguez Londoño
                  </li>
                  <li className="text-lg text-[#4A4A6B]">11°A</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
