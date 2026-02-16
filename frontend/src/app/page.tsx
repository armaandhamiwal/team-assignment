"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  function handleLogout() {
    // later: clear auth token here
    router.push("/login");
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      {/* 🔹 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/main-bg.jpg')" }}
      />

      {/* 🔹 Dark overlay + blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* 🔹 Content */}
      <div className="relative z-10 w-full max-w-3xl bg-white/95 rounded-2xl shadow-lg p-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">
            Welcome 👋
          </h1>

          <button
            onClick={handleLogout}
            className="text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            Logout
          </button>
        </div>

        {/* Main content */}
        <div className="space-y-6">
          <p className="text-gray-600 text-lg">
            You are successfully logged in.
          </p>

          <div className="rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-800 mb-2">
              What would you like to do next?
            </h2>

            <ul className="space-y-2 text-gray-600">
              <li>• Explore your dashboard</li>
              <li>• Manage your account</li>
              <li>• Continue building your project</li>
            </ul>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-4">
            <button
              className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Go to Dashboard
            </button>

            <button
              className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition"
            >
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
