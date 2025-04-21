'use client'
import type { SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

interface CheckoutFormProps {
  email: string
  name: string
  customerId: number

}

const schema = z.object({
  // ensures that it is a sting, then it checked that it is actually a valid email
  email: z.string().email(),
  name: z.string().min(2),
  phone_number: z.string().min(5).max(15),
  delivery_date: z.string(),
  payment_method: z.string(),
  additional_comments: z.string().max(1000)
})

// you don't even need to add types, they just come aotomatically
type FormFields = z.infer<typeof schema>

function CheckoutForm({ email, name, customerId }: CheckoutFormProps) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email,
      name,
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
      <input {...register('name')} type="name" placeholder="Name" />
      {errors.name && <div>{errors.name.message}</div>}
      <input {...register('email')} type="text" placeholder="Email" />
      {errors.email && <div>{errors.email.message}</div>}
      <input {...register('phone_number')} type="phone_number" placeholder="Phone Number" />
      {errors.phone_number && <div>{errors.phone_number.message}</div>}
      <input {...register('delivery_date')} type="text" placeholder="Delivery Date" />
      {errors.delivery_date && <div>{errors.delivery_date.message}</div>}
      <input {...register('payment_method')} type="text" placeholder="Payment Method" />
      {errors.payment_method && <div>{errors.payment_method.message}</div>}
      <input {...register('additional_comments')} type="text" placeholder="Write there anything additional info u like" />
      {errors.payment_method && <div>{errors.payment_method.message}</div>}
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
      {/* this is the error that belongs to the whole form, not just to some field */}
      {errors.root && <div>{errors.root.message}</div>}
    </form>
  )
}

export default CheckoutForm
