'use client'
import { useEffect, useRef } from "react";
import { Chart, ChartData, ChartOptions } from "chart.js/auto";

export default function ImpactoAmbiental() {
  const co2ReductionChartRef = useRef<HTMLCanvasElement>(null);
  const fuelSavingChartRef = useRef<HTMLCanvasElement>(null);
  const sustainableContributionChartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (co2ReductionChartRef.current) {
      new Chart(co2ReductionChartRef.current, {
        type: "doughnut",
        data: {
          labels: ["CO₂ Evitado", "Emissão Convencional"],
          datasets: [
            {
              data: [21, 79],
              backgroundColor: ["#A4D65E", "#1A3C40"],
            },
          ],
        },
        options: { responsive: true, plugins: { legend: { display: true } } },
      });
    }

    if (fuelSavingChartRef.current) {
      new Chart(fuelSavingChartRef.current, {
        type: "bar",
        data: {
          labels: ["Combustível"],
          datasets: [
            {
              label: "Litros Economizados por 100 km",
              data: [5],
              backgroundColor: "#34B5DF",
            },
          ],
        },
        options: { responsive: true, scales: { y: { beginAtZero: true } } },
      });
    }

    if (sustainableContributionChartRef.current) {
      new Chart(sustainableContributionChartRef.current, {
        type: "pie",
        data: {
          labels: ["Energia Limpa", "Recursos Naturais"],
          datasets: [
            {
              data: [60, 40],
              backgroundColor: ["#1A3C40", "#A4D65E"],
            },
          ],
        },
        options: { responsive: true, plugins: { legend: { display: true } } },
      });
    }
  }, []);

  return (
    <section id="impacto" className="bg-[#1A3C40] text-white py-10 min-h-screen">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#A4D65E] mb-4">
          impacto ambiental
        </h1>
        <p className="text-gray-300 mb-8">
          A EcoRide ajuda a reduzir o impacto ambiental de cada viagem. Descubra
          como contribuímos para um planeta mais limpo e saudável.
        </p>
        {/* Flex container com flex-wrap e espaçamento entre os cards */}
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white text-[#1A3C40] p-6 rounded-lg shadow-md w-[400px]">
            <h2 className="text-xl font-semibold text-[#34B5DF] mb-4">
              Redução de CO₂
            </h2>
            <canvas ref={co2ReductionChartRef} className="mx-auto"></canvas>
            <p className="mt-4 text-center">
              Economia média de 0,21 kg de CO₂ por km rodado.
            </p>
          </div>
          <div className="bg-white text-[#1A3C40] p-6 rounded-lg shadow-md w-[400px]">
            <h2 className="text-xl font-semibold text-[#34B5DF] mb-4">
              Economia de combustível
            </h2>
            <canvas ref={fuelSavingChartRef} className="mx-auto"></canvas>
            <p className="mt-4 text-center">
              Economia de mais de 5 litros de combustível a cada 100 km.
            </p>
          </div>
          <div className="bg-white text-[#1A3C40] p-6 rounded-lg shadow-md w-[400px]">
            <h2 className="text-xl font-semibold text-[#34B5DF] mb-4">
              Contribuição sustentável
            </h2>
            <canvas ref={sustainableContributionChartRef} className="mx-auto"></canvas>
            <p className="mt-4 text-center">
              Promove o uso de energia limpa e reduz a pegada ambiental.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
