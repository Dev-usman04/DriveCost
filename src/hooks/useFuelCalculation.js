import { useState } from 'react';

const useFuelCalculation = () => {
  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateFuelConsumption = (distance, fuelUsed, fuelPrice) => {
    setIsCalculating(true);

    setTimeout(() => {
      const dist = parseFloat(distance);
      const fuel = parseFloat(fuelUsed);
      const price = parseFloat(fuelPrice);

      const consumption = (fuel / dist) * 100; // this is the formular for calculating  L/100km
      const mpg = (dist * 0.621371) / (fuel * 0.264172); // this is the formular for calculating Miles per gallon
      const totalCost = fuel * price;
      const costPerKm = totalCost / dist;
      const costPer100Km = costPerKm * 100;

      setResults({
        consumption: consumption.toFixed(2),
        mpg: mpg.toFixed(1),
        totalCost: totalCost.toFixed(2),
        costPerKm: costPerKm.toFixed(3),
        costPer100Km: costPer100Km.toFixed(2)
      });

      setIsCalculating(false);
    }, 1500);
  };

  const resetCalculator = () => {
    setResults(null);
  };

  return {
    results,
    isCalculating,
    calculateFuelConsumption,
    resetCalculator
  };
};

export default useFuelCalculation;
