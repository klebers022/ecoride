'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const Dashboard = () => {
  const [veiculos, setVeiculos] = useState<any[]>([])
  const [pontosUsuario, setPontosUsuario] = useState<number>(0)
  const router = useRouter()
  const [usuario, setUsuario] = useState<{ id: number; nome: string } | null>(null)

  // Verifica o usuário no localStorage
  useEffect(() => {
    const usuarioLocal = typeof window !== 'undefined' ? localStorage.getItem('usuario') : null
    if (usuarioLocal) {
      setUsuario(JSON.parse(usuarioLocal))
      fetchPontosUsuario(JSON.parse(usuarioLocal).id)
    } else {
      router.push('/login') // Redireciona para login se não estiver autenticado
    }
  }, [])

  // Busca veículos disponíveis
  useEffect(() => {
    if (usuario) {
      fetchVeiculos()
    }
  }, [usuario])

  const fetchVeiculos = async () => {
    try {
      const response = await fetch('http://localhost:5000/veiculos/disponiveis')
      const data = await response.json()
      setVeiculos(data.veiculos || [])
    } catch (error) {
      console.error('Erro ao buscar veículos:', error)
    }
  }

  const fetchPontosUsuario = async (usuarioId: number) => {
    try {
      const response = await fetch(`http://localhost:5000/usuario/${usuarioId}/pontos`)
      const data = await response.json()
      setPontosUsuario(data.pontos || 0)
    } catch (error) {
      console.error('Erro ao buscar pontos do usuário:', error)
    }
  }

  const handleAgendar = async (veiculoId: number) => {
    try {
      const response = await fetch('http://localhost:5000/agendamento', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_usuario: usuario?.id,
          id_veiculo: veiculoId,
        }),
      })

      const data = await response.json()
      alert(data.mensagem)
    } catch (error) {
      console.error('Erro ao agendar veículo:', error)
    }
  }

  const handleDesbloquear = async (veiculoId: number) => {
    try {
      const response = await fetch(`http://localhost:5000/veiculos/${veiculoId}/desbloquear`, {
        method: 'PATCH',
      })
      const data = await response.json()
      alert(data.mensagem)
    } catch (error) {
      console.error('Erro ao desbloquear veículo:', error)
    }
  }

  const handleDevolver = async (veiculoId: number) => {
    try {
      const response = await fetch(`http://localhost:5000/veiculos/${veiculoId}/devolver`, {
        method: 'PATCH',
      })
      const data = await response.json()
      alert(data.mensagem)
      fetchVeiculos() // Atualiza a lista de veículos disponíveis após devolver
    } catch (error) {
      console.error('Erro ao devolver veículo:', error)
    }
  }

  return (
    <div className="min-h-screen bg-[#e8e9eb] text-[#1a3c40]">
      <header className="bg-[#1a3c40] text-white p-6">
        <h1 className="text-3xl font-bold text-center">Bem-vindo, {usuario?.nome}!</h1>
        <p className="text-center mt-2">Pontos acumulados: <span className="font-semibold">{pontosUsuario}</span></p>
      </header>
      <main className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold text-center mb-8">Veículos Disponíveis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {veiculos.map((veiculo) => (
            <div
              key={veiculo.id}
              className="p-6 bg-white shadow-md rounded-lg border border-[#2d2d2d] hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-bold text-[#1a3c40]">{veiculo.modelo}</h3>
              <p className="text-[#2d2d2d]">Cor: {veiculo.cor}</p>
              <p className="text-[#2d2d2d]">Placa: {veiculo.placa}</p>
              <div className="mt-4 grid gap-2">
                <button
                  onClick={() => handleAgendar(veiculo.id)}
                  className="w-full py-2 bg-[#34b5df] text-white font-semibold rounded-md hover:bg-[#a4d65e] transition-colors"
                >
                  Agendar
                </button>
                <button
                  onClick={() => handleDesbloquear(veiculo.id)}
                  className="w-full py-2 bg-[#a4d65e] text-white font-semibold rounded-md hover:bg-[#34b5df] transition-colors"
                >
                  Desbloquear
                </button>
                <button
                  onClick={() => handleDevolver(veiculo.id)}
                  className="w-full py-2 bg-[#1a3c40] text-white font-semibold rounded-md hover:bg-[#34b5df] transition-colors"
                >
                  Devolver
                </button>
              </div>
            </div>
          ))}
        </div>
        {veiculos.length === 0 && (
          <p className="text-center text-lg text-[#2d2d2d] mt-6">Nenhum veículo disponível no momento.</p>
        )}
      </main>
     
    </div>
  )
}

export default Dashboard
