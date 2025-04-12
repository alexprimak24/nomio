export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      categories: {
        Row: {
          created_at: string
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      customers: {
        Row: {
          created_at: string
          full_name: string | null
          id: number
          phone_number: string | null
        }
        Insert: {
          created_at?: string
          full_name?: string | null
          id?: number
          phone_number?: string | null
        }
        Update: {
          created_at?: string
          full_name?: string | null
          id?: number
          phone_number?: string | null
        }
        Relationships: []
      }
      dish_categories: {
        Row: {
          category: number | null
          created_at: string
          dish_id: number | null
          id: number
        }
        Insert: {
          category?: number | null
          created_at?: string
          dish_id?: number | null
          id?: number
        }
        Update: {
          category?: number | null
          created_at?: string
          dish_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: 'category_dish_id_fkey'
            columns: ['dish_id']
            isOneToOne: false
            referencedRelation: 'dishes'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'dish_categories_category_fkey'
            columns: ['category']
            isOneToOne: false
            referencedRelation: 'categories'
            referencedColumns: ['id']
          },
        ]
      }
      dish_ingredients: {
        Row: {
          created_at: string
          dish_id: number | null
          id: number
          ingredient_it: number | null
        }
        Insert: {
          created_at?: string
          dish_id?: number | null
          id?: number
          ingredient_it?: number | null
        }
        Update: {
          created_at?: string
          dish_id?: number | null
          id?: number
          ingredient_it?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'dish_ingredients_dish_id_fkey'
            columns: ['dish_id']
            isOneToOne: false
            referencedRelation: 'dishes'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'dish_ingredients_ingredient_it_fkey'
            columns: ['ingredient_it']
            isOneToOne: false
            referencedRelation: 'ingredients'
            referencedColumns: ['id']
          },
        ]
      }
      dishes: {
        Row: {
          created_at: string
          description: string | null
          id: number
          name: string
          price: number | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          name: string
          price?: number | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          name?: string
          price?: number | null
        }
        Relationships: []
      }
      ingredients: {
        Row: {
          created_at: string
          id: number
          image: string | null
          ingredient: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          image?: string | null
          ingredient?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          image?: string | null
          ingredient?: string | null
        }
        Relationships: []
      }
      order_items: {
        Row: {
          created_at: string
          dish_id: number | null
          id: number
          order_id: number | null
          quantity: number | null
        }
        Insert: {
          created_at?: string
          dish_id?: number | null
          id?: number
          order_id?: number | null
          quantity?: number | null
        }
        Update: {
          created_at?: string
          dish_id?: number | null
          id?: number
          order_id?: number | null
          quantity?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'order_items_dish_id_fkey'
            columns: ['dish_id']
            isOneToOne: false
            referencedRelation: 'dishes'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'order_items_order_id_fkey'
            columns: ['order_id']
            isOneToOne: false
            referencedRelation: 'orders'
            referencedColumns: ['id']
          },
        ]
      }
      orders: {
        Row: {
          created_at: string
          delivery_date: string | null
          id: number
          is_paid: boolean | null
          observations: string | null
          payment_method: string | null
          public_id: string | null
          status: string | null
          user_id: number | null
        }
        Insert: {
          created_at?: string
          delivery_date?: string | null
          id?: number
          is_paid?: boolean | null
          observations?: string | null
          payment_method?: string | null
          public_id?: string | null
          status?: string | null
          user_id?: number | null
        }
        Update: {
          created_at?: string
          delivery_date?: string | null
          id?: number
          is_paid?: boolean | null
          observations?: string | null
          payment_method?: string | null
          public_id?: string | null
          status?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'orders_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'customers'
            referencedColumns: ['id']
          },
        ]
      }
      settings: {
        Row: {
          amount_for_discount: number | null
          created_at: string
          delivery_price: number | null
          discount: number | null
          free_delivery_amount: number | null
          id: number
          min_order_amount: number | null
        }
        Insert: {
          amount_for_discount?: number | null
          created_at?: string
          delivery_price?: number | null
          discount?: number | null
          free_delivery_amount?: number | null
          id?: number
          min_order_amount?: number | null
        }
        Update: {
          amount_for_discount?: number | null
          created_at?: string
          delivery_price?: number | null
          discount?: number | null
          free_delivery_amount?: number | null
          id?: number
          min_order_amount?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, 'public'>]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
  | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
  | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      Database[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
    Database[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
      ? R
      : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] &
    DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] &
      DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
        ? R
        : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
  | keyof DefaultSchema['Tables']
  | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
    Insert: infer I
  }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
      Insert: infer I
    }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
  | keyof DefaultSchema['Tables']
  | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
    Update: infer U
  }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
      Update: infer U
    }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
  | keyof DefaultSchema['Enums']
  | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
  | keyof DefaultSchema['CompositeTypes']
  | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const
