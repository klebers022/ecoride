'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  })
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false) // Estado para controle de carregamento
  const router = useRouter() // Hook do Next.js para navegação

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true) // Ativa o carregamento ao enviar o formulário

    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const data = await response.json()
        setMessage('Login realizado com sucesso!')

        // Armazena os dados do usuário no localStorage
        localStorage.setItem('usuario', JSON.stringify(data.usuario))

        // Redireciona para a página de dashboard
        router.push('/dashboard')
      } else {
        setMessage('Erro ao fazer login. Verifique suas credenciais.')
      }
    } catch (error) {
      console.error('Erro ao enviar os dados: ', error)
      setMessage('Ocorreu um erro. Tente novamente mais tarde.')
    } finally {
      setIsLoading(false) // Desativa o carregamento após a requisição
    }
  }

  return (
    <div className="min-h-screen bg-[#e8e9eb] flex justify-center items-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-[400px]">
        <h2 className="text-center text-2xl font-semibold text-[#1a3c40] mb-6">Login EcoRide</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-[#1a3c40] font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-[#2d2d2d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34b5df]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="senha" className="block text-[#1a3c40] font-medium">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-[#2d2d2d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34b5df]"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 text-white font-semibold rounded-lg transition ${
              isLoading ? 'bg-gray-400' : 'bg-[#a4d65e] hover:bg-[#34b5df]'
            }`}
            disabled={isLoading} // Desabilita o botão durante o carregamento
          >
            {isLoading ? 'Carregando...' : 'Entrar'}
          </button>
        </form>
        {message && <p className="text-center text-[#1a3c40] mt-4">{message}</p>}
      <p className='text-center p-4'><Link href="/cadastro">Não tem Cadastro? Faça já o seu</Link></p>
      </div>
    </div>
  )
}

export default Login
