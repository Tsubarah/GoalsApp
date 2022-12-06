import { useEffect, useState } from "react"

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    // get value from localStorage and parse it from JSON
    const value = window.localStorage.getItem(key)
    console.log('value', value)
    return value ? JSON.parse(value) : initialValue
  })

  useEffect(() => {
    // convert storedValue to JSON and save in localStorage
    window.localStorage.setItem(key, JSON.stringify(storedValue))
    console.log('storedValue', storedValue)
  }, [key, storedValue])

  return [storedValue, setStoredValue]
}

export default useLocalStorage
