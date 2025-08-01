import React, { useState } from 'react';
import { Fuel } from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';
import InputPanel from './components/InputPanel';
import ResultsPanel from './components/ResultsPanel';
import useFuelCalculation from './hooks/useFuelCalculation';

const FuelCalculator = () => {
  const [distance, setDistance] = useState('');
  const [fuelUsed, setFuelUsed] = useState('');
  const [fuelPrice, setFuelPrice] = useState('');
  const { results, isCalculating, calculateFuelConsumption, resetCalculator } = useFuelCalculation();

  const handleCalculate = () => {
    if (!distance || !fuelUsed || !fuelPrice) return;
    calculateFuelConsumption(distance, fuelUsed, fuelPrice);
  };

  const handleReset = () => {
    setDistance('');
    setFuelUsed('');
    setFuelPrice('');
    resetCalculator();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 relative overflow-hidden">
      <ParticleBackground />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-orange-600 rounded-full mb-6 shadow-2xl transform hover:scale-110 transition-transform duration-300">
            <Fuel className="w-10 h-10 text-white animate-bounce" />
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-4 animate-pulse">
            DriveCost
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Calculate your fuel consumption, efficiency, and costs with stunning precision
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <InputPanel
            distance={distance}
            setDistance={setDistance}
            fuelUsed={fuelUsed}
            setFuelUsed={setFuelUsed}
            fuelPrice={fuelPrice}
            setFuelPrice={setFuelPrice}
            onCalculate={handleCalculate}
            onReset={handleReset}
            isCalculating={isCalculating}
          />

          <ResultsPanel results={results} />
        </div>

        <div className="text-center mt-12 text-gray-400">
          <p className="text-lg">Built by DevDre — From Idea to Execution, Powered by React & Tailwind</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default FuelCalculator;
