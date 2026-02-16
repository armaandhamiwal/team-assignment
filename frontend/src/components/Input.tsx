"use client";

import { motion } from "framer-motion";

interface InputProps {
  label: string;
  required?: boolean;
  error?: string;
  type?: string;
  register: any;
  name: string;
}

export default function Input({
  label,
  required,
  error,
  type = "text",
  register,
  name,
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-800">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <motion.input
        whileFocus={{ scale: 1.01 }}
        transition={{ duration: 0.15 }}
        type={type}
        {...register(name)}
        className={`rounded-md border bg-white px-3 py-2 text-gray-900 outline-none transition
          ${
            error
              ? "border-red-500 focus:ring-2 focus:ring-red-500"
              : "border-gray-300 focus:ring-2 focus:ring-indigo-500"
          }`}
      />

      {error && (
        <span className="text-xs text-red-600">{error}</span>
      )}
    </div>
  );
}
