'use client'
import { useState } from 'react';
import { FaMapMarkerAlt, FaCar, FaCalendarAlt, FaLock, FaRecycle } from 'react-icons/fa';

interface PontoDeAluguel {
  id: number;
  nome: string;
  latitude: number;
  longitude: number;
  endereco: string;
}

interface Veiculo {
  id: number;
  modelo: string;
  cor: string;
  placa: string;
  ponto: string;
  imagem: string; // URL da imagem do veículo
}

const pontosDeAluguel: PontoDeAluguel[] = [
  { id: 1, nome: 'Ponto EcoRide Centro', latitude: -23.5505, longitude: -46.6333, endereco: 'Rua X, 123, Centro' },
  { id: 2, nome: 'Ponto EcoRide Zona Norte', latitude: -23.6812, longitude: -46.5931, endereco: 'Rua Y, 456, Zona Norte' },
  { id: 3, nome: 'Ponto EcoRide Zona Sul', latitude: -23.6260, longitude: -46.7014, endereco: 'Rua Z, 789, Zona Sul' }
];

const veiculosDisponiveis: Veiculo[] = [
  {
    id: 1,
    modelo: 'Tesla Model 3',
    cor: 'Preto',
    placa: 'ABC-1234',
    ponto: 'Ponto EcoRide Centro',
    imagem: 'https://welectric.pt/wp-content/uploads/2019/03/Model_3_base-copy-1.jpg'
  },
  {
    id: 2,
    modelo: 'Nissan Leaf',
    cor: 'Branco',
    placa: 'XYZ-5678',
    ponto: 'Ponto EcoRide Zona Norte',
    imagem: 'https://www.vipcarnissan.com.br/wp-content/uploads/2021/12/LEAF_Branco-Diamond-com-Teto-Branco_Frontal-4-3_carrossel_versoes.png.ximg_.l_12_h.smart_-1024x614.png'
  },
  {
    id: 3,
    modelo: 'Chevrolet Bolt',
    cor: 'Azul',
    placa: 'JKL-4321',
    ponto: 'Ponto EcoRide Zona Sul',
    imagem: 'https://chevrolet360.co/bolt/autos/bolt-azul/11.webp?v=1'
  }
];

const SistemaPrincipal = () => {
  const [agendamento, setAgendamento] = useState<any>(null);
  const [carroSelecionado, setCarroSelecionado] = useState<Veiculo | null>(null);

  const handleAgendar = (carro: Veiculo) => {
    setAgendamento({ ...carro, data: new Date().toLocaleString() });
  };

  const handleDesbloquear = () => {
    if (!carroSelecionado) {
      alert('Por favor, selecione um carro para desbloquear.');
      return;
    }
    alert(`Carro ${carroSelecionado.modelo} desbloqueado com sucesso!`);
  };

  const handleDevolucao = () => {
    if (!carroSelecionado) {
      alert('Por favor, selecione um carro para devolver.');
      return;
    }
    alert(`Carro ${carroSelecionado.modelo} devolvido com sucesso!`);
    setCarroSelecionado(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-4">
      <header className="bg-[#1A3C40] text-white py-6 mb-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-semibold">EcoRide - Aluguel de Veículos Elétricos</h1>
        <p className="mt-2 text-lg">Mobilidade Sustentável ao Seu Alcance</p>
      </header>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-[#1A3C40] mb-4">Pontos de Aluguel</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pontosDeAluguel.map((ponto) => (
            <div key={ponto.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold text-[#34B5DF]">{ponto.nome}</h3>
              <p className="text-gray-600 mt-2">{ponto.endereco}</p>
              <p className="mt-4 text-sm text-gray-500">
                <FaMapMarkerAlt className="inline mr-2" />
                Latitude: {ponto.latitude}, Longitude: {ponto.longitude}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-[#1A3C40] mb-4">Veículos Disponíveis</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {veiculosDisponiveis.map((veiculo) => (
            <div
              key={veiculo.id}
              className={`p-6 rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer ${
                carroSelecionado?.id === veiculo.id ? 'border-4 border-[#34B5DF]' : 'bg-white'
              }`}
              onClick={() => setCarroSelecionado(veiculo)}
            >
              <img
                src={veiculo.imagem}
                alt={veiculo.modelo}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-[#34B5DF]">{veiculo.modelo}</h3>
              <p className="text-gray-600">Cor: {veiculo.cor}</p>
              <p className="text-gray-600">Placa: {veiculo.placa}</p>
              <p className="text-sm text-gray-500 mt-2">
                <FaCar className="inline mr-2" />
                {veiculo.ponto}
              </p>
            </div>
          ))}
        </div>
      </section>

      {carroSelecionado && (
        <section className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-semibold text-[#1A3C40] mb-4">Ações com o Veículo</h2>

          <div className="mb-4">
            <button
              onClick={() => handleAgendar(carroSelecionado)}
              className="w-full py-3 px-6 bg-[#34B5DF] text-white font-semibold rounded-lg hover:bg-[#1A3C40] transition"
            >
              <FaCalendarAlt className="inline mr-2" />
              Agendar Aluguel
            </button>
          </div>

          {agendamento && (
            <div className="mb-4 p-4 bg-gray-100 rounded-lg">
              <p className="font-semibold">Agendamento realizado com sucesso!</p>
              <p>Modelo: {agendamento.modelo}</p>
              <p>Data: {agendamento.data}</p>
            </div>
          )}

          <div className="mb-4">
            <button
              onClick={handleDesbloquear}
              className="w-full py-3 px-6 bg-[#A4D65E] text-white font-semibold rounded-lg hover:bg-[#34B5DF] transition"
            >
              <FaLock className="inline mr-2" />
              Desbloquear Carro
            </button>
          </div>

          <div className="mb-4">
            <button
              onClick={handleDevolucao}
              className="w-full py-3 px-6 bg-[#FF6F61] text-white font-semibold rounded-lg hover:bg-[#1A3C40] transition"
            >
              <FaRecycle className="inline mr-2" />
              Devolver Carro
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default SistemaPrincipal;
