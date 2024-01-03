'use client'
import Link from 'next/link'
import { RiErrorWarningFill } from "react-icons/ri";
import { useForm, type FieldValues } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Loading from '../shared/Loading';
import { useState } from 'react';
interface Props {
  err: string | undefined
}

const LoginForm = ({err}: Props) => {
    const [hideErr, setHideErr] = useState(err) 
    const router = useRouter()
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
        reset,
        getValues,
      } = useForm();
    // console.log(err)
    const handleLogin = async (data: FieldValues) => {

        const { email, password } = data
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // console.log(email, password)

        signIn("credentials", { email, password });
      };

  return (
    <>
    <div className={`${hideErr ? '' : 'hidden'} flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400`} role="alert">
    <RiErrorWarningFill />
  <div className="ms-3 text-sm font-medium">
  {`${err?.split("%20").join(" ")}.`}
  </div>
  <button
  onClick={() => setHideErr('')}
  className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-2" aria-label="Close">
    <span className="">X</span>
  </button>
</div>
    <form onSubmit={handleSubmit(handleLogin)} className="p-6">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <label
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium text-gray-900 dark:text-white"
            htmlFor="email"
          >
            Email
          </label>
          <input
          {...register("email", {
            required: "email is required",
          })}
            className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-300"
            id="email"
            placeholder="Enter your email"
            type="email"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium text-gray-900 dark:text-white"
            htmlFor="password"
          >
            Password
          </label>
          <input
          {...register("password", {
            required: "password is required",
          })}
            className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-300"
            id="password"
            placeholder="Enter your password"
            type="password"
          />
        </div>
        <button
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-violet-500 hover:bg-violet-600 text-white">
          {isSubmitting ? <Loading/> : 'Login'}
        </button>
        <Link href={'/register'} className='text-violet-600 hover:text-violet-400'>Create Account &#8594;</Link>
      </div>
    </form>
    </>
  )
}

export default LoginForm