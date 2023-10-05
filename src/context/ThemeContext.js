import { useState, useContext, useEffect, createContext } from 'react'
import { ThemeProvider as ThemeStyled } from 'styled-components'
import getTheme from '../../oldTheme'


const ThemeContext = createContext()

function ThemeProvider({ children, version = `v1` }) {
  const [theme, setTheme] = useState(getTheme({}, version))
  function mergeTheme(theme) {
    setTheme(getTheme(theme))
  }

  return (
    <ThemeContext.Provider value={{ theme, mergeTheme }}>
      <ThemeStyled theme={theme}>{children}</ThemeStyled>
    </ThemeContext.Provider>
  )
}

function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error(`useTheme must be used within a ThemeProvider`)
  }
  return context
}

export { ThemeProvider, useTheme }
