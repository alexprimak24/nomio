'use client'
import type { FormFields } from '@/app/types/formSchema'
import type { SubmitHandler } from 'react-hook-form'
import { createOrder } from '@/app/_lib/actions'
import { schema } from '@/app/types/formSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

interface CheckoutFormProps {
  email: string
  name: string
}

function CheckoutForm({ email, name }: CheckoutFormProps) {
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
      console.log(data)
      await createOrder(data)
    }
    catch (error) {
      setError('email', {
        message: 'this email is already taken',
      })
    }
  }

  return (
    // that approeach will help us to preventDefault + will validate that all the form fields are valid before calling onSubmit
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <input {...register('name')} type="text" placeholder="Name" />
      {errors.name && <div>{errors.name.message}</div>}
      <input {...register('email')} type="text" placeholder="Email" />
      {errors.email && <div>{errors.email.message}</div>}
      <input {...register('phone_number')} type="text" placeholder="Phone Number" />
      {errors.phone_number && <div>{errors.phone_number.message}</div>}
      <input {...register('delivery_date')} type="text" placeholder="Delivery Date" defaultValue="2025-04-23 14:30:00" />
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
