/**
 * @page HomePage
 * @summary Main landing page of the restaurant website
 * @domain core
 * @type landing-page
 * @category public
 */
export const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Bem-vindo ao Restaurante Italiano
          </h1>
          <p className="text-xl md:text-2xl mb-8">Experimente os sabores autênticos da Itália</p>
          <a
            href="#menu"
            className="inline-block bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Ver Cardápio
          </a>
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Sobre Nós</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6">
              Há mais de 20 anos trazendo a verdadeira culinária italiana para você. Nossos pratos
              são preparados com ingredientes frescos e receitas tradicionais, proporcionando uma
              experiência gastronômica única.
            </p>
          </div>
        </div>
      </section>

      <section id="menu" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Nosso Cardápio</h2>
          <p className="text-center text-gray-600 mb-8">
            Em breve, você poderá explorar nossos deliciosos pratos.
          </p>
        </div>
      </section>

      <section id="gallery" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Galeria</h2>
          <p className="text-center text-gray-600 mb-8">
            Conheça nosso ambiente e pratos através de nossas fotos.
          </p>
        </div>
      </section>

      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Localização e Contato</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Endereço</h3>
                <p className="text-gray-700 mb-2">Rua Exemplo, 123</p>
                <p className="text-gray-700 mb-2">Bairro Centro</p>
                <p className="text-gray-700 mb-4">São Paulo - SP</p>
                <h3 className="text-2xl font-semibold mb-4 mt-6">Contato</h3>
                <p className="text-gray-700 mb-2">Telefone: (11) 1234-5678</p>
                <p className="text-gray-700">Email: contato@restaurante.com</p>
              </div>
              <div className="bg-gray-300 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-600">Mapa interativo em breve</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
