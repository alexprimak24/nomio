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
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
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
      const error = await createOrder(data, cartItems)

      if (error?.error) {
        setError('root', { message: error.error })
      }
      clearCart()

      router.push('/thankyou')
    }
    catch (error) {
      console.error('There is an error with form submission')
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 p-6 rounded-2xl max-w-lg mx-auto shadow-md bg-white mt-2"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <input
          {...register('name')}
          type="text"
          placeholder="Name"
          className="border border-gray-300 rounded-xl px-4 py-2"
        />
        {errors.name && <div className="text-red-500 text-sm">{errors.name.message}</div>}

        <input
          {...register('email')}
          type="text"
          placeholder="Email"
          className="border border-gray-300 rounded-xl px-4 py-2"
        />
        {errors.email && <div className="text-red-500 text-sm">{errors.email.message}</div>}

        <input
          {...register('phone_number')}
          type="text"
          placeholder="Phone Number"
          className="border border-gray-300 rounded-xl px-4 py-2"
        />
        {errors.phone_number && <div className="text-red-500 text-sm">{errors.phone_number.message}</div>}

        <Controller
          control={control}
          name="delivery_date"
          render={({ field: { onChange, value } }) => (
            <div className="flex flex-col gap-2">
              <DatePicker
                label="Select delivery date"
                disablePast
                defaultValue={new Date()}
                onChange={(newDate) => {
                  if (newDate && value) {
                    const updatedDate = new Date(value)
                    updatedDate.setFullYear(newDate.getFullYear())
                    updatedDate.setMonth(newDate.getMonth())
                    updatedDate.setDate(newDate.getDate())
                    onChange(updatedDate)
                  }
                  else {
                    onChange(newDate)
                  }
                }}
              />
              <TimePicker
                label="Select delivery time"
                defaultValue={new Date()}
                onChange={(newTime) => {
                  if (newTime && value) {
                    const updatedDate = new Date(value)
                    updatedDate.setHours(newTime.getHours())
                    updatedDate.setMinutes(newTime.getMinutes())
                    updatedDate.setSeconds(0)
                    updatedDate.setMilliseconds(0)
                    onChange(updatedDate)
                  }
                  else {
                    onChange(newTime)
                  }
                }}
              />
            </div>
          )}
        />
        {errors.delivery_date && <div className="text-red-500 text-sm">{errors.delivery_date.message}</div>}

        <select
          {...register('payment_method')}
          defaultValue="card"
          className="border border-gray-300 rounded-xl px-4 py-2"
        >
          <option value="card">Card online</option>
          <option value="card on receival">Card on receival</option>
          <option value="cash">Cash</option>
        </select>
        {errors.payment_method && <div className="text-red-500 text-sm">{errors.payment_method.message}</div>}

        <textarea
          {...register('additional_comments')}
          placeholder="Is there anything additional that we should know"
          className="border border-gray-300 rounded-xl px-4 py-2"
        />
        {errors.additional_comments && <div className="text-red-500 text-sm">{errors.additional_comments.message}</div>}

        <button
          disabled={isSubmitting}
          type="submit"
          className="mt-4 px-6 py-3 rounded-xl font-semibold"
          style={{
            backgroundColor: '#FA4A0C',
            color: '#FFFFFF',
            opacity: isSubmitting ? 0.7 : 1,
          }}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>

        {errors.root && <div className="text-red-500 text-sm">{errors.root.message}</div>}
      </form>
    </LocalizationProvider>
  )
}

export default CheckoutForm
