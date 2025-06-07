'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from 'next-themes'

export type ColorTheme = 'red' | 'blue' | 'green'

interface ColorThemeContextType {
  colorTheme: ColorTheme
  setColorTheme: (theme: ColorTheme) => void
}

// カラーテーマのためのコンテキストを作成
export const ColorThemeContext = React.createContext<ColorThemeContextType>({
  colorTheme: 'red',
  setColorTheme: () => null,
})

// カラーテーマ用のフックを作成
export const useColorTheme = () => React.useContext(ColorThemeContext)

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [colorTheme, setColorTheme] = React.useState<ColorTheme>('red')

  // カラーテーマがセットされたときにHTMLのclassを更新
  React.useEffect(() => {
    document.documentElement.classList.remove('theme-red', 'theme-blue', 'theme-green')
    document.documentElement.classList.add(`theme-${colorTheme}`)
  }, [colorTheme])

  return (
    <ColorThemeContext.Provider value={{ colorTheme, setColorTheme }}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </ColorThemeContext.Provider>
  )
}
