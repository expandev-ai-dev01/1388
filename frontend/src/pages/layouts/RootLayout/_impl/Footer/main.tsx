/**
 * @component Footer
 * @summary Application footer with contact information and social links
 * @domain core
 * @type layout-component
 * @category layout
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Restaurante Italiano</h3>
            <p className="text-gray-400">Sabores autênticos da Itália no coração da cidade.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Horário de Funcionamento</h4>
            <ul className="text-gray-400 space-y-2">
              <li>Segunda a Sexta: 11h - 23h</li>
              <li>Sábado e Domingo: 12h - 00h</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="text-gray-400 space-y-2">
              <li>Telefone: (11) 1234-5678</li>
              <li>Email: contato@restaurante.com</li>
              <li>Endereço: Rua Exemplo, 123</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Restaurante Italiano. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
