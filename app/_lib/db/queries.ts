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

// export async function getCategoryDishes(categoryName: string): Promise<Dish[] | []> {
//   const { data: categories, error } = await supabase
//     .from('categories')
//     .select('id')
//     .eq('slug', categoryName)

//   if (!categories)
//     return []

//   if (error) {
//     console.error(error)
//     throw new Error('Categories couldn\'t be loaded')
//   }

//   const id = categories[0].id

//   const { data: dishes, error: dishesError } = await supabase
//     .from('dish_categories')
//     .select('dishes(*)')
//     .eq('category_id', Number(id))

//   if (!dishes)
//     return []

//   const dishesArr = dishes.map(row => row.dishes)

//   if (dishesError) {
//     console.error(dishesError)
//     throw new Error('Category dishes couldn\'t be loaded')
//   }

//   return dishesArr
// }

export async function getCategoryDishes(categorySlug: string): Promise<Dish[]> {
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
}

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
