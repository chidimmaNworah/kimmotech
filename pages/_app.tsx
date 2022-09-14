import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import{Layout} from '../components'
import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
import '../styles/style.css'
import type { AppProps } from 'next/app'
import {SSRProvider} from '@react-aria/ssr'
import TagManager from 'react-gtm-module'
import { type } from 'os'
import { stringifyForDisplay } from '@apollo/client/utilities'

function MyApp({ Component, pageProps }: AppProps) {

React.useEffect(() => {
  // const tagManagerArgs = {
  //   gtmid: 'GTM-PRDB4F4'
  // }
  
  // TagManager.initialize(tagManagerArgs)
  if(typeof window !== 'undefined'){
    console.log('init gtm')
    TagManager.initialize({gtmId: 'GTM-PRDB4F4'})
  }else {
    console.log('GTM server side -ignoring')
  }
}, [])

  return (
    <SSRProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </SSRProvider>
  )
}

export default MyApp
