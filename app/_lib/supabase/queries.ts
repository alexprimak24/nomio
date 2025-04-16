import type { Categories, Dish } from '@/app/types/db'
import { supabase } from '@/app/_lib/supabase/supabase'
import { cache } from 'react'

export async function getCategories(): Promise<Categories[]> {
  const { data: categories, error } = await supabase
    .from('categories')
    .select('*')
  if (error) {
    console.error(error)
    throw new Error('Categories couldn\'t be loaded')
  }

  return categories
}

export const getCategoryDishes = cache(async (categorySlug: string): Promise<Dish[]> => {
  const { data, error } = await supabase
    .from('dish_categories')
    .select(`
    dishes(*),
    categories!inner(slug)
  `)
    .eq('categories.slug', categorySlug)

  if (error) {
    console.error(error)
    return []
  }

  return data.map(row => row.dishes)
})

export async function getDish(dishSlug: string) {
  const { data, error } = await supabase
    .from('dishes')
    .select(`
    *,
    dish_ingredients (
      ingredients (
        id,
        ingredient,
        image
      )
    )
  `)
    .eq('slug', dishSlug)
    .single()

  if (error) {
    console.error(error)
    throw new Error('There is an error with loading dish')
  }

  return data
}
// if there is no such guest, supabase will return null
export async function getCustomer(email: string) {
  const { data: customers } = await supabase
    .from('customers')
    .select('*')
    .eq('email', email)
    .single()

  // no error handling as we handle it in auth.ts

  return customers
}

export async function createCustomer({ fullName, email }: { fullName: string, email: string }) {
  const { data, error } = await supabase
    .from('customers')
    .insert([
      { full_name: fullName, email },
    ])

  if (error) {
    console.error(error)
    throw new Error('Customer could not be created')
  }

  return data
}
