'use client'
import Link from "next/link"
import { useState } from "react"
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"

const Register = () => {
  const [message, setMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  const handleGoogleSignIn = () => {
    // Handle Google Sign In
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50">
      <section className="w-full max-w-md mx-4 bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="px-8 pt-10 pb-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Register</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">Email is required</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">Password is required</p>}
            </div>

            {message && <p className="text-red-500 text-xs italic">{message}</p>}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-400 to-purple-400 text-white py-3 rounded-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition duration-200"
            >
              Register
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Have an account?{" "}
            <Link href="/signin" className="text-blue-500 hover:text-blue-700 font-semibold">
              Sign In
            </Link>
          </p>

          {/* Google Sign In */}
          <div className="mt-6">
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-2 bg-red-400 text-white py-3 rounded-lg font-semibold hover:bg-red-500 transition duration-200"
            >
              <FaGoogle className="text-lg" />
              Sign in with Google
            </button>
          </div>
        </div>

        <footer className="bg-gray-100 py-4 text-center">
          <p className="text-xs text-gray-600">
            ©2025 YasMade. All rights reserved.
          </p>
        </footer>
      </section>
    </section>
  )
}

export default Register