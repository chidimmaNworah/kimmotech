import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import{Layout} from '../components'
import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
import '../styles/style.css'
import type { AppProps } from 'next/app'
import {SSRProvider} from '@react-aria/ssr'
import Script from 'next/script'
import * as ga from '../components/google-analytics'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(()=>{
    const handleRouteChange = (url) =>{
      ga.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <SSRProvider>
    <Layout>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`} strategy='afterInteractive' />
      <Script id='google-analytics-script' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
       
          gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
        `}
      </Script>
      <Component {...pageProps} />
    </Layout>
    </SSRProvider>
  )
}

export default MyApp
