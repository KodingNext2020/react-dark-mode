import React, { createContext, useState } from 'react'

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
    text: 'black'
  },
  dark: {
    foreground: '#ffffff',
    background: '#282c34',
    text: 'white'
  },
};

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const localTheme = localStorage.getItem('dark-mode')
  const [darkMode, setDarkMode] = useState(localTheme === 'true')

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    localStorage.setItem('dark-mode', !darkMode)
  }

  return (
    <ThemeContext.Provider value={{ theme: darkMode ? themes.dark : themes.light, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )

}

export default ThemeContextProvider