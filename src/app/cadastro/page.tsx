'use client'
import { useState } from 'react'
import Link from 'next/link'

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    cpf: '',
    dtNascimento: '',
    estado: '',
    numeroCNH: '',
  })

  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Garantindo que a data esteja no formato 'YYYY-MM-DD'
    const formattedData = {
      ...formData,
      dtNascimento: new Date(formData.dtNascimento).toISOString().split('T')[0],
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      })

      if (response.ok) {
        setMessage('Cadastro realizado com sucesso!')
        setFormData({
          nome: '',
          email: '',
          senha: '',
          cpf: '',
          dtNascimento: '',
          estado: '',
          numeroCNH: '',
        })
      } else {
        setMessage('Erro ao cadastrar. Verifique os dados e tente novamente.')
      }
    } catch (error) {
      console.error('Erro ao enviar os dados: ', error)
      setMessage('Ocorreu um erro. Tente novamente mais tarde.')
    }
  }

  return (
    <div className="min-h-screen bg-[#e8e9eb] flex justify-center items-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-[400px]">
        <h2 className="text-center text-2xl font-semibold text-[#1a3c40] mb-6">Cadastro EcoRide</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((field) => (
            <div className="mb-4" key={field}>
              <label
                htmlFor={field}
                className="block text-[#1a3c40] font-medium"
              >
                {field === 'dtNascimento'
                  ? 'Data de Nascimento'
                  : field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={
                  field === 'senha'
                    ? 'password'
                    : field === 'dtNascimento'
                    ? 'date'
                    : 'text'
                }
                id={field}
                name={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border border-[#2d2d2d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34b5df]"
                required
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#a4d65e] text-white font-semibold rounded-lg hover:bg-[#34b5df] transition"
          >
            Cadastrar
          </button>
        </form>
        {message && <p className="text-center text-[#1a3c40] mt-4">{message}</p>}
      <p className='text-center p-4'><Link href="/login">Já tem Cadastro? Login</Link></p>
      </div>
    </div>
  )
}

export default Cadastro
