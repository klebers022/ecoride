

import ImpactoAmbiental from "@/components/impacto";

export default function Home() {
  return (
    <div>
      <section
        className="relative bg-cover bg-center h-screen flex items-center"
        style={{ backgroundImage: 'url("/background.jpg")' }}
      >
        {/* Sobreposição com Gradiente */}
        <div className="bg-gradient-to-t from-black via-transparent to-transparent absolute inset-0 opacity-60"></div>

        {/* Conteúdo da Seção */}
        <div className="relative z-10 max-w-lg mx-8 md:ml-16 text-left text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Eco<span className="text-[#A4D65E]">Ride</span>
          </h1>
          <p className="mt-4 text-2xl md:text-3xl font-semibold">
            Movimente-se pelo Futuro Sustentável
          </p>
          <button className="mt-8 bg-[#A4D65E] hover:bg-[#8ab44f] text-black font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
            Comece agora
          </button>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-[#1A3C40] mb-4">
          Como Funciona
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Alugar um carro elétrico nunca foi tão fácil! Veja como você pode
          começar com EcoRide em três passos simples.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Passo 1 */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-6 w-80 text-center transform transition duration-300 hover:scale-105">
            <img
              src="/lugar-colocar.png"
              alt="Ícone Localizar"
              className="mx-auto mb-4 h-12"
            />
            <h3 className="text-xl font-semibold text-[#34B5DF]">
              Localize um EcoRide
            </h3>
            <p className="text-gray-600 mt-2">
              Use nosso app para encontrar o carro elétrico mais próximo.
              Simples e rápido!
            </p>
          </div>

          {/* Passo 2 */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-6 w-80 text-center transform transition duration-300 hover:scale-105">
            <img
              src="/carro.png"
              alt="Ícone Reservar"
              className="mx-auto mb-4 h-12"
            />
            <h3 className="text-xl font-semibold text-[#34B5DF]">
              Reserve e Desbloqueie
            </h3>
            <p className="text-gray-600 mt-2">
              Reserve o carro pelo app e desbloqueie-o instantaneamente com seu
              celular.
            </p>
          </div>

          {/* Passo 3 */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-6 w-80 text-center transform transition duration-300 hover:scale-105">
            <img
              src="/seguro-de-automovel.png"
              alt="Ícone Devolver"
              className="mx-auto mb-4 h-12"
            />
            <h3 className="text-xl font-semibold text-[#34B5DF]">
              Devolva o Carro
            </h3>
            <p className="text-gray-600 mt-2">
              Estacione o carro em qualquer ponto EcoRide e finalize sua viagem
              no app.
            </p>
          </div>
        </div>
      </section>

      <ImpactoAmbiental />

      <section id="planos" className="bg-[#f6fffc] py-16 px-4 min-h-screen">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-5xl font-bold text-[#003060]">Planos</h2>
          <p className="text-lg text-gray-600 mt-4">
            Escolha o plano EcoRide ideal para suas necessidades e aproveite a
            mobilidade sustentável.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
          {/* Plano Básico */}
          <div className="relative bg-white shadow-lg rounded-lg pt-2 pb-6 px-6 max-w-xs text-center border-t-[6px] border-[#a6eb83] flex flex-col justify-between h-[380px] mx-auto transform transition duration-300 hover:scale-105">
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mt-4">
                Básico
              </h3>
              <p className="text-4xl font-bold text-[#34B5DF] my-4">
                R$29<span className="text-lg font-normal">/hora</span>
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>Ideal para viagens curtas</li>
                <li>100 km de autonomia</li>
                <li>Seguro básico incluso</li>
              </ul>
            </div>
            <button className="w-full py-2 bg-[#34B5DF] text-white font-semibold rounded hover:bg-[#2a93b9] transition">
              Escolher Plano
            </button>
          </div>

          {/* Plano Padrão */}
          <div className="relative bg-white shadow-lg rounded-lg pt-2 pb-6 px-6 max-w-xs text-center border-t-[6px] border-[#7cd4ea] flex flex-col justify-between h-[380px] mx-auto transform transition duration-300 hover:scale-105">
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mt-4">
                Padrão
              </h3>
              <p className="text-4xl font-bold text-[#34B5DF] my-4">
                R$49<span className="text-lg font-normal">/hora</span>
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>Perfeito para passeios diários</li>
                <li>200 km de autonomia</li>
                <li>Seguro completo incluso</li>
                <li>Atendimento prioritário</li>
              </ul>
            </div>
            <button className="w-full py-2 bg-[#34B5DF] text-white font-semibold rounded hover:bg-[#2a93b9] transition">
              Escolher Plano
            </button>
          </div>

          {/* Plano Premium */}
          <div className="relative bg-white shadow-lg rounded-lg pt-2 pb-6 px-6 max-w-xs text-center border-t-[6px] border-[#003060] flex flex-col justify-between h-[380px] mx-auto transform transition duration-300 hover:scale-105">
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mt-4">
                Premium
              </h3>
              <p className="text-4xl font-bold text-[#34B5DF] my-4">
                R$79<span className="text-lg font-normal">/hora</span>
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li>Para uma experiência completa</li>
                <li>300 km de autonomia</li>
                <li>Seguro premium incluso</li>
                <li>Atendimento VIP</li>
                <li>Carro de substituição</li>
              </ul>
            </div>
            <button className="w-full py-2 bg-[#34B5DF] text-white font-semibold rounded hover:bg-[#2a93b9] transition">
              Escolher Plano
            </button>
          </div>
        </div>
      </section>

      <section className=" text-white py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1A3C40] mb-6">
            O que nossos clientes estão dizendo
          </h2>
          <p className="text-gray-600 mb-8">
            Veja como a EcoRide está transformando a mobilidade urbana com a
            sustentabilidade e a experiência incrível dos nossos clientes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Avaliações */}
            <div className="bg-white text-[#1A3C40] p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="Cliente 1"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">João Silva</h3>
                  <div className="flex justify-center text-yellow-400">
                    {/* Estrelas */}
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="w-5 h-5"
                      >
                        <path d="M8 .25a.75.75 0 0 1 .66.418l1.5 3.033 3.352.497a.75.75 0 0 1 .415 1.29l-2.419 2.364.572 3.334a.75.75 0 0 1-1.088.792L8 10.348l-2.976 1.564a.75.75 0 0 1-1.087-.792l.572-3.334-2.419-2.364a.75.75 0 0 1 .415-1.29l3.352-.497 1.5-3.033A.75.75 0 0 1 8 .25z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "A EcoRide me proporcionou uma experiência incrível! O carro é
                confortável, sustentável e perfeito para a cidade."
              </p>
            </div>

            <div className="bg-white text-[#1A3C40] p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/2.jpg"
                  alt="Cliente 2"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">Maria Oliveira</h3>
                  <div className="flex justify-center text-yellow-400">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="w-5 h-5"
                      >
                        <path d="M8 .25a.75.75 0 0 1 .66.418l1.5 3.033 3.352.497a.75.75 0 0 1 .415 1.29l-2.419 2.364.572 3.334a.75.75 0 0 1-1.088.792L8 10.348l-2.976 1.564a.75.75 0 0 1-1.087-.792l.572-3.334-2.419-2.364a.75.75 0 0 1 .415-1.29l3.352-.497 1.5-3.033A.75.75 0 0 1 8 .25z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Adorei o serviço da EcoRide! A conveniência de pegar o carro e
                saber que estou ajudando o meio ambiente é incrível."
              </p>
            </div>

            <div className="bg-white text-[#1A3C40] p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/3.jpg"
                  alt="Cliente 3"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">Carlos Pereira</h3>
                  <div className="flex justify-center text-yellow-400">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="w-5 h-5"
                      >
                        <path d="M8 .25a.75.75 0 0 1 .66.418l1.5 3.033 3.352.497a.75.75 0 0 1 .415 1.29l-2.419 2.364.572 3.334a.75.75 0 0 1-1.088.792L8 10.348l-2.976 1.564a.75.75 0 0 1-1.087-.792l.572-3.334-2.419-2.364a.75.75 0 0 1 .415-1.29l3.352-.497 1.5-3.033A.75.75 0 0 1 8 .25z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "O atendimento foi excelente e o carro é uma maravilha! Muito
                prático e econômico. Recomendo a todos."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" text-white py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1A3C40] mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 mb-8">
            Respostas para suas principais dúvidas sobre o EcoRide.
          </p>

          <div className="faq-questions max-w-4xl mx-auto">
            <details className="mb-4">
              <summary className="text-lg font-semibold text-[#34B5DF] cursor-pointer">
                Como posso localizar um carro EcoRide?
              </summary>
              <p className="text-gray-600 mt-2">
                Você pode localizar os carros EcoRide através de nosso
                aplicativo, que mostra a disponibilidade e localização em tempo
                real.
              </p>
            </details>

            <details className="mb-4">
              <summary className="text-lg font-semibold text-[#34B5DF] cursor-pointer">
                Quanto custa alugar um carro EcoRide?
              </summary>
              <p className="text-gray-600 mt-2">
                Oferecemos planos flexíveis e tarifas por minuto, hora ou dia.
                Veja a seção de preços para detalhes.
              </p>
            </details>

            <details className="mb-4">
              <summary className="text-lg font-semibold text-[#34B5DF] cursor-pointer">
                Como o pagamento é feito?
              </summary>
              <p className="text-gray-600 mt-2">
                O pagamento é feito pelo aplicativo com cartão de crédito,
                débito ou por meio de carteiras digitais.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
