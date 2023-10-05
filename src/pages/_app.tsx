import { ThemeProvider } from '@/context/ThemeContext'
import ThemeConfig from '@/theme'
import type { AppProps } from 'next/app'
import 'antd/lib/button/style/index.js'

// ESTE CODIGO UTILIZA STYLED COMPONENTS COMO TEMA
export default function App({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
  )
}

// ESTE CODIGO UTILIZA MATERIAL UI COMO TEMA
// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <ThemeConfig>
//       <Component {...pageProps} />
//     </ThemeConfig>
//   )
// }
