import * as React from "react"
import { FiMoon, FiSun } from "react-icons/fi"
import { useTheme } from "./ThemeProvider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-10 h-10"></div>
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
    </button>
  )
}