import React from 'react';
import { Calculator, IndianRupee, ArrowRight } from 'lucide-react';
import { InputField } from './components/InputField';
import { ResultCard } from './components/ResultCard';
import { useROICalculator } from './hooks/useROICalculator';

function App() {
  const {
    investment,
    setInvestment,
    returnAmount,
    setReturnAmount,
    timeframe,
    setTimeframe,
    calculateROI
  } = useROICalculator();

  const { totalROI, annualROI, netReturn } = calculateROI();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <Calculator className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-800">ROI Calculator</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <InputField
                label="Initial Investment"
                value={investment}
                onChange={setInvestment}
                icon={IndianRupee}
                placeholder="10000"
              />

              <InputField
                label="Return Amount"
                value={returnAmount}
                onChange={setReturnAmount}
                icon={IndianRupee}
                placeholder="12000"
              />

              <InputField
                label="Time Period (Years)"
                value={timeframe}
                onChange={setTimeframe}
                placeholder="1"
                min="0.1"
                step="0.1"
              />
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-indigo-600" />
                Results
              </h2>

              <div className="space-y-4">
                <ResultCard
                  title="Total ROI"
                  value={totalROI}
                  isPercentage
                />

                <ResultCard
                  title="Annual ROI"
                  value={annualROI}
                  isPercentage
                />

                <ResultCard
                  title="Net Return"
                  value={netReturn}
                  isDollar
                />
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">
              ROI (Return on Investment) measures the profitability of an investment by comparing its return to its cost. 
              A positive ROI means the investment is profitable, while a negative ROI indicates a loss.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;