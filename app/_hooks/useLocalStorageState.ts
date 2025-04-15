'use client'
import { useEffect, useState } from 'react'

export function useLocalStorageState<T>(
  initialState: T,
  key: string
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(initialState)

  useEffect(() => {
    try {
      const storedValue = localStorage.getItem(key)
      if (storedValue) {
        // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect
        setValue(JSON.parse(storedValue))
      }
    } catch (error) {
      console.error('Error reading from localStorage:', error)
    }
  }, [key])

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Error writing to localStorage:', error)
    }
  }, [value, key])

  return [value, setValue]
}