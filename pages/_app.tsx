import React, {useEffect, useState} from 'react'
import{Layout} from '../components'
import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
import '../styles/style.css'
import type { AppProps } from 'next/app'
import {SSRProvider} from '@react-aria/ssr'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </SSRProvider>
  )
}

export default MyApp
