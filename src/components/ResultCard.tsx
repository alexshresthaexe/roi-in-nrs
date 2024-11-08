import React from 'react';
import { LucideIcon, Percent } from 'lucide-react';

interface ResultCardProps {
  title: string;
  value: string;
  isPercentage?: boolean;
  isDollar?: boolean;
}

export function ResultCard({ title, value, isPercentage, isDollar }: ResultCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="text-sm text-gray-600">{title}</div>
      <div className={`text-2xl font-bold ${isDollar ? 'text-green-600' : 'text-indigo-600'} flex items-center gap-1`}>
        {isDollar && '₹'}
        {value}
        {isPercentage && <Percent className="w-5 h-5" />}
      </div>
    </div>
  );
}