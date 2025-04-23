'use client'
import type { FormFields } from '@/app/types/formSchema'
import type { SubmitHandler } from 'react-hook-form'
import { useCart } from '@/app/_context/CartContext'
import { createOrder } from '@/app/_lib/actions'
import { schema } from '@/app/types/formSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

interface CheckoutFormProps {
  email: string
  name: string
}

function CheckoutForm({ email, name }: CheckoutFormProps) {
  const { cartItems, clearCart } = useCart()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setError,
    control,
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
      await createOrder(data, cartItems)

      clearCart()

      router.push('/thankyou')
    }
    catch (error) {
      setError('email', {
        message: 'this email is already taken',
      })
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <input {...register('name')} type="text" placeholder="Name" />
        {errors.name && <div>{errors.name.message}</div>}
        <input {...register('email')} type="text" placeholder="Email" />
        {errors.email && <div>{errors.email.message}</div>}
        <input {...register('phone_number')} type="text" placeholder="Phone Number" />
        {errors.phone_number && <div>{errors.phone_number.message}</div>}
        <Controller
          control={control}
          name="delivery_date"
          render={({ field: { onChange, value } }) => (
            <DatePicker
              label="Controlled picker"
              selected={value}
              onChange={onChange}
            />
          )}
        />
        {/* <input {...register('delivery_date')} type="text" placeholder="Delivery Date" defaultValue="2025-04-23 14:30:00" /> */}
        {errors.delivery_date && <div>{errors.delivery_date.message}</div>}
        <select {...register('payment_method')} defaultValue="card">
          <option value="card">Card online</option>
          <option value="card on receival">Card on receival</option>
          <option value="card on receival">Cash</option>
        </select>
        {errors.payment_method && <div>{errors.payment_method.message}</div>}
        <textarea {...register('additional_comments')} placeholder="Is there anything additional that we should know" />
        {errors.payment_method && <div>{errors.payment_method.message}</div>}
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
        {/* this is the error that belongs to the whole form, not just to some field */}
        {errors.root && <div>{errors.root.message}</div>}
      </form>
    </LocalizationProvider>
  )
}

export default CheckoutForm
