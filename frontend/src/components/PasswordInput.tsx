"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface PasswordInputProps {
  label: string;
  required?: boolean;
  error?: string;
  register: any;
  name: string;
}

export default function PasswordInput({
  label,
  required,
  error,
  register,
  name,
}: PasswordInputProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-800">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className="relative">
        <motion.input
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.15 }}
          type={show ? "text" : "password"}
          {...register(name)}
          className={`w-full rounded-md border bg-white px-3 py-2 pr-12 text-gray-900 outline-none transition
            ${
              error
                ? "border-red-500 focus:ring-2 focus:ring-red-500"
                : "border-gray-300 focus:ring-2 focus:ring-indigo-500"
            }`}
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-600 hover:text-gray-900"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>

      {error && (
        <span className="text-xs text-red-600">{error}</span>
      )}
    </div>
  );
}
