"use client";
import { useState } from 'react';

function CarbonFootprintCalculator() {
  const [energyConsumed, setEnergyConsumed] = useState('');
  const [powerLossCoeff, setPowerLossCoeff] = useState(1.059); // Set default value and allow user to change it
  const [conversionFactor, setConversionFactor] = useState(0.474); // Set default value based on Pittsburgh PA
  const [carbonEmissions, setCarbonEmissions] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  function calculateCarbonEmissions(energy, powerLossCoeff, conversionFactor) {
    const adjustedEnergy = energy * powerLossCoeff;
    const emissions = adjustedEnergy * conversionFactor;
    return emissions.toFixed(2);
  }

  function handleCalculate(e) {
    e.preventDefault();
    if (!energyConsumed || energyConsumed < 0 || !powerLossCoeff || !conversionFactor) {
      setErrorMsg("Please make sure all fields are filled in correctly with positive numbers.");
      return;
    }
    setErrorMsg('');
    const totalEmissions = calculateCarbonEmissions(parseFloat(energyConsumed), parseFloat(powerLossCoeff), parseFloat(conversionFactor));
    setCarbonEmissions(totalEmissions);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-radial from-light-gray to-white">
      <div className="w-full max-w-2xl p-10 bg-navy rounded-xl shadow-custom">
        <form onSubmit={handleCalculate} className="space-y-6">
          <div>
            <label htmlFor="energy" className="block text-sm font-sans text-white">Energy consumed (kWh)</label>
            <input
              id="energy"
              type="number"
              value={energyConsumed}
              onChange={(e) => setEnergyConsumed(e.target.value)}
              placeholder="Enter energy in kWh"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-blue focus:border-custom-blue"
              aria-label="Energy consumed in kWh"
            />
          </div>
          <div>
            <label htmlFor="powerLossCoeff" className="block text-sm font-sans text-white">Coefficient of Expected Power Loss</label>
            <input
              id="powerLossCoeff"
              type="number"
              step="0.001"
              value={powerLossCoeff}
              onChange={(e) => setPowerLossCoeff(e.target.value)}
              placeholder="Enter coefficient"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-blue focus:border-custom-blue"
              aria-label="Coefficient of Expected Power Loss"
            />
          </div>
          <div>
            <label htmlFor="conversionFactor" className="block text-sm font-sans text-white">Regional Conversion Factor (kg CO2/kWh)</label>
            <input
              id="conversionFactor"
              type="number"
              step="0.001"
              value={conversionFactor}
              onChange={(e) => setConversionFactor(e.target.value)}
              placeholder="Enter conversion factor"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-blue focus:border-custom-blue"
              aria-label="Regional Conversion Factor"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-custom-blue hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl focus:outline-none focus:shadow-outline"
          >
            Calculate
          </button>
        </form>
        {errorMsg && <div className="mt-4 text-red-500">{errorMsg}</div>}
        {carbonEmissions && (
          <div className="mt-4 text-lg p-4 bg-light-gray rounded-xl">
            <p>Total Carbon Emissions: <span className="font-semibold">{carbonEmissions} kg CO2</span></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CarbonFootprintCalculator;
