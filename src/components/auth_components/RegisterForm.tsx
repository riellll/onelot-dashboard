'use client'
import Link from 'next/link'
import { useForm, type FieldValues } from "react-hook-form";

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        getValues,
      } = useForm();


      const onSubmit = async (data: FieldValues) => {
        // TODO: submit to server
        // ...
        await new Promise((resolve) => setTimeout(resolve, 1000));
    
        reset();
      };

      
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6">
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-2">
        <label
          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium text-gray-900 dark:text-white"
        >
          First Name
        </label>
        <input
        {...register("firstname", {
            required: "first name is required",
          })}
          className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-300"
          id="first-name"
          placeholder="Enter your first name"
        />
        {errors.firstname && (
        <p className="text-red-500">{`${errors.firstname.message}`}</p>
      )}
      </div>
      <div className="flex flex-col space-y-2">
        <label
          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium text-gray-900 dark:text-white"
          htmlFor="last-name"
        >
          Last Name
        </label>
        <input
        {...register("lastname", {
            required: "last name is required",
          })}
          className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-300"
          id="last-name"
          placeholder="Enter your last name"
        />
        {errors.lastname && (
        <p className="text-red-500">{`${errors.lastname.message}`}</p>
      )}
      </div>
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
         {errors.email && (
        <p className="text-red-500">{`${errors.email.message}`}</p>
      )}
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
            minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
          })}
          className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-300"
          id="password"
          placeholder="Enter your password"
          type="password"
        />
        {errors.password && (
        <p className="text-red-500">{`${errors.password.message}`}</p>
      )}
      </div>
      <div className="flex flex-col space-y-2">
        <label
          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium text-gray-900 dark:text-white"
          htmlFor="confirm-password"
        >
          Confirm Password
        </label>
        <input
         {...register("confirmPassword", {
            required: "Confirm password is required",
            validate: (value) =>
              value === getValues("password") || "Passwords must match",
          })}
          className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-300"
          id="confirm-password"
          placeholder="Confirm your password"
          type="password"
        />
        {errors.confirmPassword && (
        <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
      )}
      </div>
      <button 
      disabled={isSubmitting}
      type="submit"
      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white">
        Create Account
      </button>
      <p>Already have account? Login <Link href={'/login'} className='text-blue-600 hover:text-blue-400'>here</Link></p>
    </div>
  </form>
  )
}

export default RegisterForm