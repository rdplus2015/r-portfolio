// src/hooks/useTheme.ts

import { useState, useEffect } from "react"

// Maps our "light"/"dark" naming to the actual DaisyUI theme names.
const THEMES = {
  light: "lemonade",
  dark: "dim",
}

export function useTheme() {
  // Reads the saved theme on first load, defaults to "dark".
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("theme")
    if (saved === "light" || saved === "dark") return saved
    return "dark"
  })

  // Applies the theme to <html> and persists it whenever it changes.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", THEMES[theme])
    localStorage.setItem("theme", theme)
  }, [theme])

  return {
    isDark: theme === "dark",
    toggle: () => setTheme((prev) => (prev === "dark" ? "light" : "dark")),
  }
}