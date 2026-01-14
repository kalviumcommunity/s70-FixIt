"use client";

export default function AuthForm({
  title,
  buttonText,
  isSignup = false,
  onSubmit,
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black-600 to-indigo-700">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {title}
        </h1>

        <form onSubmit={onSubmit} className="space-y-4">
          {isSignup && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {buttonText}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4 text-sm">
            {isSignup ? (
                <a href="/login" className="text-blue-600 font-medium hover:underline">
                    Already have an account? Login
                    </a>
                    ) : (
                    <a href="/signup" className="text-blue-600 font-medium hover:underline">
                        Don't have an account? Sign Up
                        </a>
                    )}
        </p>
      </div>
    </div>
  );
}
