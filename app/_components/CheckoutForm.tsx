'use client'
import type { SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  // ensures that it is a sting, then it checked that it is actually a valid email
  email: z.string().email(),
  password: z.string().min(8),
})

// you don't even need to add types, they just come aotomatically
type FormFields = z.infer<typeof schema>

function CheckoutForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: 'test@email.com',
    },
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log(data)
    }
    catch (error) {
      setError('email', {
        message: 'this email is already taken',
      })
    }
  }

  return (
    // that approeach will help us to preventDefault + will validate that all the form fields are valid before calling onSubmit
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} type="text" placeholder="Email" />
      {errors.email && <div>{errors.email.message}</div>}
      <input {...register('password')} type="password" placeholder="Password" />
      {errors.password && <div>{errors.password.message}</div>}
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
      {/* this is the error that belongs to the whole form, not just to some field */}
      {errors.root && <div>{errors.root.message}</div>}
    </form>
  )
}

export default CheckoutForm
