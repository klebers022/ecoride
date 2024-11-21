// components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header
      className="bg-black bg-opacity-70 backdrop-blur-sm"
      
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          
          <span className="text-white text-xl font-bold">
            ECO<span className="text-[#A4D65E]">RIDE</span>
          </span>
        </div>

        {/* Navegação */}
        <nav className="flex items-center space-x-6">
          <Link
            className="text-white font-semibold hover:text-[#A4D65E]"
            href="/"
          >
            home
          </Link>
          <Link
            className="text-white font-semibold hover:text-[#A4D65E]"
            href="/"
          >
            Planos
          </Link>
          <Link
            className="text-white font-semibold hover:text-[#A4D65E]"
            href="/"
          >
            Impacto
          </Link>
        </nav>

        {/* Botão Entrar */}
        <Link
          className="bg-[#A4D65E] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#8ab44f]"
          href="/login"
        >
          Entrar
        </Link>
      </div>
    </header>
  );
}
