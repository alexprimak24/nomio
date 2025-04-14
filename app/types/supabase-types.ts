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
          created_at: string | null
          id: number
          name: string
          slug: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          name: string
          slug?: string
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
          slug?: string
        }
        Relationships: []
      }
      customers: {
        Row: {
          created_at: string
          full_name: string
          id: number
          phone_number: string
        }
        Insert: {
          created_at?: string
          full_name: string
          id?: number
          phone_number: string
        }
        Update: {
          created_at?: string
          full_name?: string
          id?: number
          phone_number?: string
        }
        Relationships: []
      }
      dish_categories: {
        Row: {
          category_id: number
          created_at: string
          dish_id: number
          id: number
        }
        Insert: {
          category_id: number
          created_at?: string
          dish_id: number
          id?: number
        }
        Update: {
          category_id?: number
          created_at?: string
          dish_id?: number
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
            foreignKeyName: 'dish_categories_category_id_fkey'
            columns: ['category_id']
            isOneToOne: false
            referencedRelation: 'categories'
            referencedColumns: ['id']
          },
        ]
      }
      dish_ingredients: {
        Row: {
          created_at: string
          dish_id: number
          id: number
          ingredient_id: number
        }
        Insert: {
          created_at?: string
          dish_id: number
          id?: number
          ingredient_id: number
        }
        Update: {
          created_at?: string
          dish_id?: number
          id?: number
          ingredient_id?: number
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
            foreignKeyName: 'dish_ingredients_ingredient_id_fkey'
            columns: ['ingredient_id']
            isOneToOne: false
            referencedRelation: 'ingredients'
            referencedColumns: ['id']
          },
        ]
      }
      dishes: {
        Row: {
          created_at: string
          description: string
          id: number
          image: string
          name: string
          price: number
          slug: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: number
          image?: string
          name: string
          price: number
          slug?: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: number
          image?: string
          name?: string
          price?: number
          slug?: string
        }
        Relationships: []
      }
      ingredients: {
        Row: {
          created_at: string
          id: number
          image: string
          ingredient: string
        }
        Insert: {
          created_at?: string
          id?: number
          image: string
          ingredient: string
        }
        Update: {
          created_at?: string
          id?: number
          image?: string
          ingredient?: string
        }
        Relationships: []
      }
      order_items: {
        Row: {
          created_at: string
          dish_id: number
          id: number
          order_id: number
          quantity: number
        }
        Insert: {
          created_at?: string
          dish_id: number
          id?: number
          order_id: number
          quantity: number
        }
        Update: {
          created_at?: string
          dish_id?: number
          id?: number
          order_id?: number
          quantity?: number
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
          delivery_date: string
          id: number
          is_paid: boolean
          observations: string | null
          payment_method: string
          public_id: string
          status: string
          user_id: number
        }
        Insert: {
          created_at?: string
          delivery_date: string
          id?: number
          is_paid?: boolean
          observations?: string | null
          payment_method: string
          public_id: string
          status: string
          user_id: number
        }
        Update: {
          created_at?: string
          delivery_date?: string
          id?: number
          is_paid?: boolean
          observations?: string | null
          payment_method?: string
          public_id?: string
          status?: string
          user_id?: number
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
          amount_for_discount: number
          created_at: string
          delivery_price: number
          discount: number
          free_delivery_amount: number
          id: number
          min_order_amount: number
        }
        Insert: {
          amount_for_discount: number
          created_at?: string
          delivery_price: number
          discount: number
          free_delivery_amount: number
          id?: number
          min_order_amount: number
        }
        Update: {
          amount_for_discount?: number
          created_at?: string
          delivery_price?: number
          discount?: number
          free_delivery_amount?: number
          id?: number
          min_order_amount?: number
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
