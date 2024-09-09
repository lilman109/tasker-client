"use client";

import { Controller } from "react-hook-form";
import { useSignInHooks } from "./hooks";

const SignIn = () => {
  const { control, handleSubmit, isValid, isSubmitting } = useSignInHooks();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Controller
            control={control}
            name="username"
            render={({ field: { onChange, value } }) => (
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>

                <input
                  type="text"
                  id="username"
                  value={value}
                  onChange={onChange}
                  className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your username"
                  required
                />
              </div>
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="password"
                  value={value}
                  onChange={onChange}
                  className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
            )}
          />
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            disabled={!isValid || isSubmitting}
            style={{ cursor: !isValid || isSubmitting ? "not-allowed" : "pointer" }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
