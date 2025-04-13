import type { Categories, Dish } from '@/app/types/db'
import { supabase } from '../supabase'

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

export async function getCategoryDishes(categoryName: string): Promise<Dish[] | []> {
  const { data: categories, error } = await supabase
    .from('categories')
    .select('id')
    .eq('slug', categoryName)

  if (!categories)
    return []

  if (error) {
    console.error(error)
    throw new Error('Categories couldn\'t be loaded')
  }

  const id = categories[0].id

  const { data: dishes, error: dishesError } = await supabase
    .from('dish_categories')
    .select('dishes(*)')
    .eq('category_id', Number(id))

  if (!dishes)
    return []

  const dishesArr = dishes.map(row => row.dishes)

  if (dishesError) {
    console.error(dishesError)
    throw new Error('Categories couldn\'t be loaded')
  }

  return dishesArr
}
