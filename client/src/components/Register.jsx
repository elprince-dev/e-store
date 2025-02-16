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
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
      const handleGoogleSignIn = () => {
        
      }


  return (
    <section className="h-screen flex justify-center items-center">
      <section className="justify-center w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-4">
        <h2 className="text-xl font-semibold mb-4 text-center">Register </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div className="mb-4">
            <labe className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email"> Email</labe>
            <input 
             {...register("email", { required: true })}
              type="email" 
              name="email" 
              id="email" 
              placeholder="Email Address"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            />
          </div>
          {/* Password */}
          <div className="mb-4">
            <labe className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password"> Password</labe>
            <input 
              {...register("password", { required: true })}
              type="password" 
              name="password" 
              id="password" 
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            />
          </div>
          { message && <p className="text-red-500 text-xs italic mb-3">{message}</p>}
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-8 rounded focus:outline text-white">Register</button>
          </div>
        </form>
        <p className="align-baseline font-medium mt-4 text-sm text-center">Have an account?{" "}
          <Link href={"/signin"} className="text-blue-500 hover:text-blue-700">
            Sign in
          </Link>
        </p>
        {/* Google sign in */}
        <div className="mt-4">
          
          <button 
          onClick={handleGoogleSignIn}
          className="w-full flex flex-wrap gap-1 justify-center items-center bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded focus:outline-none text-white fpcus:outline-none">
            <FaGoogle  className="mr-2"/>
            Sign in with Google
          </button>
        </div>
        <p className="mt-5 text-center text-gray-500 text-xs">
          ©2025 YasMade. All rights reserved.
        </p>
      </section>
    </section>
  )
}

export default Register