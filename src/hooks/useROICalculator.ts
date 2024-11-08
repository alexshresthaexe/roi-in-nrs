import { useState } from 'react';

interface ROICalculation {
  totalROI: string;
  annualROI: string;
  netReturn: string;
}

export function useROICalculator() {
  const [investment, setInvestment] = useState<number>(10000);
  const [returnAmount, setReturnAmount] = useState<number>(12000);
  const [timeframe, setTimeframe] = useState<number>(1);

  const calculateROI = (): ROICalculation => {
    const roi = ((returnAmount - investment) / investment) * 100;
    const annualROI = roi / timeframe;
    return {
      totalROI: roi.toFixed(2),
      annualROI: annualROI.toFixed(2),
      netReturn: (returnAmount - investment).toFixed(2)
    };
  };

  return {
    investment,
    setInvestment,
    returnAmount,
    setReturnAmount,
    timeframe,
    setTimeframe,
    calculateROI
  };
}