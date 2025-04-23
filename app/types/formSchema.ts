import { z } from 'zod'

export const schema = z.object({
  // ensures that it is a sting, then it checked that it is actually a valid email
  email: z.string().trim().email({ message: 'Invalid Email Address' }),
  name: z.string().trim().min(2, { message: 'Please enter a valid name' }),
  phone_number: z.string().trim().min(5, { message: 'Your phone number is too short' }).max(15, { message: 'Your phone number is too long' }),
  delivery_date: z.date({
    required_error: 'Delivery date is required',
  }),
  payment_method: z.string().trim(),
  additional_comments: z.string().trim().max(1000, { message: 'Your comment is too long' }),
})

export type FormFields = z.infer<typeof schema>
