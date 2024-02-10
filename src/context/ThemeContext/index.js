import {createContext} from 'react'

const ThemeContext = createContext({
  isDark: false,
  setTheme: () => {},
})

export default ThemeContext
