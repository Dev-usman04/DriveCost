import React from 'react';
import { Calculator, Car, Fuel, Zap } from 'lucide-react';

const InputPanel = ({
  distance, setDistance,
  fuelUsed, setFuelUsed,
  fuelPrice, setFuelPrice,
  onCalculate, onReset,
  isCalculating
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-500 hover:shadow-emerald-500/25">
      <div className="flex items-center mb-8">
        <Calculator className="w-8 h-8 text-emerald-400 mr-3" />
        <h2 className="text-3xl font-bold text-white">Input Data</h2>
      </div>

      <div className="space-y-6">
        <div className="group">
          <label className="block text-sm font-semibold text-gray-300 mb-3 group-hover:text-emerald-400 transition-colors">
            Distance Traveled (km)
          </label>
          <div className="relative">
            <input
              type="number"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              className="w-full px-6 py-4 bg-black/30 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/50 focus:border-emerald-400 transition-all duration-300 text-lg"
              placeholder="Enter distance"
            />
            <Car className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-gray-300 mb-3 group-hover:text-orange-400 transition-colors">
            Fuel Used (liters)
          </label>
          <div className="relative">
            <input
              type="number"
              step="0.1"
              value={fuelUsed}
              onChange={(e) => setFuelUsed(e.target.value)}
              className="w-full px-6 py-4 bg-black/30 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-orange-500/50 focus:border-orange-400 transition-all duration-300 text-lg"
              placeholder="Enter fuel amount"
            />
            <Fuel className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-gray-300 mb-3 group-hover:text-red-400 transition-colors">
            Fuel Price (per liter)
          </label>
          <div className="relative">
            <input
              type="number"
              step="0.01"
              value={fuelPrice}
              onChange={(e) => setFuelPrice(e.target.value)}
              className="w-full px-6 py-4 bg-black/30 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-red-500/50 focus:border-red-400 transition-all duration-300 text-lg"
              placeholder="Enter price per liter"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-semibold">₦</span>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <button
            onClick={onCalculate}
            disabled={!distance || !fuelUsed || !fuelPrice || isCalculating}
            className="flex-1 bg-gradient-to-r from-emerald-500 to-orange-600 hover:from-emerald-600 hover:to-orange-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
          >
            {isCalculating ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                Calculating...
              </>
            ) : (
              <>
                <Zap className="w-6 h-6" />
                Calculate
              </>
            )}
          </button>

          <button
            onClick={onReset}
            className="px-6 py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputPanel;
