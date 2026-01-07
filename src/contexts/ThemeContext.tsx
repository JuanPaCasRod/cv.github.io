import { createContext, useContext, ReactNode } from 'react'

interface ThemeContextType {
  theme: string
  setTheme: (theme: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
  defaultTheme?: string
  switchable?: boolean
}

export function ThemeProvider({ 
  children, 
  defaultTheme = 'dark',
  switchable = false 
}: ThemeProviderProps) {
  const theme = defaultTheme
  
  const setTheme = (newTheme: string) => {
    if (switchable) {
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(newTheme)
    }
  }

  if (typeof document !== 'undefined') {
    document.documentElement.classList.add(theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

