"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  loading?: boolean;
  type?: "button" | "submit";
}

export default function Button({
  children,
  loading,
  type = "submit",
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      disabled={loading}
      type={type}
      className="w-full rounded-md bg-linear-to-r from-indigo-600 to-purple-600 px-4 py-2 text-white font-medium shadow-lg hover:shadow-indigo-500/50 transition disabled:opacity-60"
    >
      {loading ? "Loading..." : children}
    </motion.button>
  );
}
