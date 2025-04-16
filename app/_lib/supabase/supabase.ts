/* eslint-disable node/prefer-global/process */
import type { Database } from '@/app/types/supabase-types'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables.')
}

export const supabase = createClient<Database>(supabaseUrl, supabaseKey)
