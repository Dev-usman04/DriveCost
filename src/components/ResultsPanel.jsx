import React from 'react';
import { TrendingUp, Sparkles } from 'lucide-react';

const ResultsPanel = ({ results }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-500 hover:shadow-orange-500/25">
      <div className="flex items-center mb-8">
        <TrendingUp className="w-8 h-8 text-orange-400 mr-3" />
        <h2 className="text-3xl font-bold text-white">Results</h2>
      </div>

      {!results ? (
        <div className="flex flex-col items-center justify-center h-96 text-gray-400">
          <Sparkles className="w-16 h-16 mb-4 animate-pulse" />
          <p className="text-xl text-center">Enter your data and click calculate to see results</p>
        </div>
      ) : (
        <div className="space-y-6 animate-fade-in">
          <ResultItem label="Fuel Consumption" value={`${results.consumption} L/100km`} color="emerald" />
          <ResultItem label="Fuel Efficiency" value={`${results.mpg} MPG`} color="blue" />
          <ResultItem label="Total Cost" value={`₦${results.totalCost}`} color="orange" />
          <ResultItem label="Cost per 100km" value={`₦${results.costPer100Km}`} color="red" />
          <ResultItem label="Cost per Kilometer" value={`₦${results.costPerKm}`} color="yellow" />
        </div>
      )}
    </div>
  );
};

const ResultItem = ({ label, value, color }) => (
  <div className={`bg-gradient-to-r from-${color}-500/20 to-${color}-600/20 rounded-2xl p-6 border border-${color}-400/30 transform hover:scale-105 transition-all duration-300`}>
    <h3 className={`text-${color}-300 font-semibold mb-2`}>{label}</h3>
    <p className="text-3xl font-bold text-white">{value}</p>
  </div>
);

export default ResultsPanel;
