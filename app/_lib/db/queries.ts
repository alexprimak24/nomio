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
// : Promise<Dish[]>
export async function getCategoryDishes(categoryName: string) {
  // const { data: id, error } = await supabase
  //   .from('categories')
  //   .select('id')
  //   .eq('slug', categoryName)

  // const { data: categoryDishes } = await supabase
  //   .from('dish_categories')
  //   .select('*')
  //   .eq('category', Number(id[0].id))

  // if (error) {
  //   console.error(error)
  //   throw new Error('Categories couldn\'t be loaded')
  // }
  const { data, error } = await supabase
  .from('dish_categories')
  .select(`
    dish_id,
    dishes (
      *
    ),
    categories (
      *
    )
  `)
  .eq('categories.slug', categoryName);

  return data
}
