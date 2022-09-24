import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import { AppContextProvider } from 'hooks/AppContextProvider'

import 'react-toastify/dist/ReactToastify.css'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>PokéDash</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2F4FE4" />
        <meta
          name="description"
          content="Conheça mais sobre seus pokémons favoritos"
        />
      </Head>
      <GlobalStyles />
      {/* @ts-ignore */}
      <AppContextProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </AppContextProvider>
    </ThemeProvider>
  )
}

export default App
