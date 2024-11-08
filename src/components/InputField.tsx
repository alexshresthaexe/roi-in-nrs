import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  icon?: LucideIcon;
  placeholder?: string;
  type?: string;
  min?: string;
  step?: string;
}

export function InputField({
  label,
  value,
  onChange,
  icon: Icon,
  placeholder,
  type = "number",
  min,
  step
}: InputFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className={`w-full ${Icon ? 'pl-10' : 'px-4'} pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
          placeholder={placeholder}
          min={min}
          step={step}
        />
      </div>
    </div>
  );
}