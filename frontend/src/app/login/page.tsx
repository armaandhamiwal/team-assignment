"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Login failed");
        return;
      }

      setMessage("Login successful");
    } catch {
      setMessage("Invalid email or password. Try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full h-11 px-4 border border-gray-300 rounded-lg bg-white " +
    "text-gray-900 placeholder-gray-400 " +
    "focus:outline-none focus:ring-2 focus:ring-blue-500 " +
    "[&:-webkit-autofill]:bg-white " +
    "[&:-webkit-autofill]:text-gray-900 " +
    "[&:-webkit-autofill]:shadow-[0_0_0_1000px_white_inset]";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form className="w-full max-w-md bg-white rounded-xl shadow-lg p-8"
            onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold text-center mb-8 text-gray-800">
          Login
        </h1>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Password <span className="text-red-500">*</span>
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`${inputClass} pr-20`}
              placeholder="Enter your password"
            />
            <motion.button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2
                         text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              {showPassword ? "Hide" : "Show"}
            </motion.button>
          </div>
        </div>

        <motion.button
          type="submit"
          disabled={loading}
          className={`w-full h-11 rounded-lg font-medium text-white
                      ${
                        loading
                          ? "bg-blue-400 cursor-not-allowed"
                          : "bg-blue-600 hover:bg-blue-700 active:scale-95"
                      }`}
        >
          {loading ? "Logging in..." : "Login"}
        </motion.button>

        {message && (
          <p className="mt-4 text-center text-sm text-gray-700">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
