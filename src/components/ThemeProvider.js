import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext({
  theme: "light",
  setTheme: () => null,
})

export function ThemeProvider({ children, defaultTheme = "system", ...props }) {
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    // Check local storage first
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) {
      setTheme(storedTheme)
      applyTheme(storedTheme)
      return
    }

    // If no stored theme, check system preference
    if (defaultTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      setTheme(systemTheme)
      applyTheme(systemTheme)
    } else {
      applyTheme(defaultTheme)
    }
  }, [defaultTheme])

  const value = {
    theme,
    setTheme: (newTheme) => {
      setTheme(newTheme)
      localStorage.setItem("theme", newTheme)
      applyTheme(newTheme)
    },
  }

  function applyTheme(current) {
    const root = document.documentElement
    const isDark = current === "dark"

    // Update CSS variables based on theme
    root.style.setProperty("--background", isDark ? "#0a0a0a" : "#ffffff")
    root.style.setProperty("--foreground", isDark ? "#ededed" : "#171717")
    
    // Add or remove dark class on html element
    isDark 
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark")
  }

  return (
    <ThemeContext.Provider value={value} {...props}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook for accessing theme
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}