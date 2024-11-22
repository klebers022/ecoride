"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-white text-xl font-bold">
            ECO<span className="text-[#A4D65E]">RIDE</span>
          </span>
        </div>

        {/* Botão para Mobile */}
        <button
          className="block md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Navegação */}
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 absolute md:static top-16 md:top-auto left-0 w-full md:w-auto bg-black md:bg-transparent px-4 md:px-0 py-4 md:py-0`}
        >
          <Link
            className="text-white font-semibold hover:text-[#A4D65E]"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-white font-semibold hover:text-[#A4D65E]"
            href="#planos"
          >
            Planos
          </Link>
          <Link
            className="text-white font-semibold hover:text-[#A4D65E]"
            href="#impacto"
          >
            Impacto
          </Link>
          {/* Botão Entrar */}
          <Link
            className="bg-[#A4D65E] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#8ab44f]"
            href="/login"
          >
            Entrar
          </Link>
        </nav>
      </div>
    </header>
  );
}