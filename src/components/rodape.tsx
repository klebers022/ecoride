// components/Footer.tsx

export default function Footer() {
    return (
      <footer className="bg-[#1A3C40] text-white py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Logo e Navegação */}
            <div className="footer-section text-center md:text-left">
              <img
                src="\logo.png"
                alt="EcoRide Logo"
                className="footer-logo mb-4 mx-auto md:mx-0"
                width={150}
                height={150}
              />
              <p>EcoRide - Mobilidade Sustentável</p>
            </div>
  
            {/* Links Úteis */}
            <div className="footer-section">
              <h3 className="text-xl font-semibold text-[#A4D65E] mb-4">Links Úteis</h3>
              <ul>
                <li><a href="#home" className="text-gray-300 hover:text-[#34B5DF]">Início</a></li>
                <li><a href="#plans" className="text-gray-300 hover:text-[#34B5DF]">Planos</a></li>
                <li><a href="#impact" className="text-gray-300 hover:text-[#34B5DF]">Impacto Ambiental</a></li>
                <li><a href="#faq" className="text-gray-300 hover:text-[#34B5DF]">Perguntas Frequentes</a></li>
              </ul>
            </div>
  
            {/* Contato */}
            <div className="footer-section text-center md:text-left">
              <h3 className="text-xl font-semibold text-[#A4D65E] mb-4">Contato</h3>
              <p>Email: <a href="mailto:suporte@ecoride.com" className="text-gray-300 hover:text-[#34B5DF]">suporte@ecoride.com</a></p>
              <p>Telefone: <span className="text-gray-300">(11) 1234-5678</span></p>
           
            </div>
          </div>
          <p className="footer-bottom-text text-center mt-8 text-gray-400">
            © 2024 EcoRide - Todos os direitos reservados.
          </p>
        </div>
      </footer>
    );
  }
  