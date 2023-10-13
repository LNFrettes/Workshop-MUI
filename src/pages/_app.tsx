import { ThemeProvider } from '@/context/ThemeContext'
import ThemeConfig from '@/theme'
import type { AppProps } from 'next/app'
import 'antd/lib/button/style/index.js'

export default function App({ Component, pageProps }: AppProps) {
  return (
    // Descomenta el codigo para aplicar el tema de Material UI
    <ThemeProvider>
      <ThemeConfig>
        <Component {...pageProps} />
      </ThemeConfig>
    </ThemeProvider>
  )
}
