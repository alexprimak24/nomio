import type { Tables, TablesInsert, TablesUpdate } from './supabase-types'

export type Order = Tables<'orders'>
export type NewOrder = TablesInsert<'orders'>
export type OrderUpdate = TablesUpdate<'orders'>

export type Dish = Tables<'dishes'>
export type NewDish = TablesInsert<'dishes'>
export type DishUpdate = TablesUpdate<'dishes'>

export type OrderItem = Tables<'order_items'>
export type NewOrderItem = TablesInsert<'order_items'>
export type OrderItemUpdate = TablesUpdate<'order_items'>
// will be removed as I see it at this stage
export type Ingredient = Tables<'ingredients'>
export type NewIngredient = TablesInsert<'ingredients'>
export type IngredientUpdate = TablesUpdate<'ingredients'>
// will be removed as I see it at this stage
export type DishIngredient = Tables<'dish_ingredients'>
export type NewDishIngredient = TablesInsert<'dish_ingredients'>
export type DishIngredientUpdate = TablesUpdate<'dish_ingredients'>

export type DishCategories = Tables<'dish_categories'>
export type NewDishCategories = TablesInsert<'dish_categories'>
export type DishCategoriesUpdate = TablesUpdate<'dish_categories'>

export type Customer = Tables<'customers'>
export type NewCustomer = TablesInsert<'customers'>
export type CustomerUpdate = TablesUpdate<'customers'>

export type Categories = Tables<'categories'>
export type NewCategories = TablesInsert<'categories'>
export type CategoriesUpdate = TablesUpdate<'categories'>
