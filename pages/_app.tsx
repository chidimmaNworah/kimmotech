import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import{Layout} from '../components'
import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
import '../styles/style.css'
import type { AppProps } from 'next/app'
import {SSRProvider} from '@react-aria/ssr'
import TagManager, {TagManagerArgs} from 'react-gtm-module'
import { type } from 'os'
import { stringifyForDisplay } from '@apollo/client/utilities'

function MyApp({ Component, pageProps }: AppProps) {

const gtmId = process.env.NEXT_PUBLIC_GTM_ID || ""
const tagManagerArgs: TagManagerArgs = {
  gtmId,
}

useEffect(() => {
  TagManager.initialize(tagManagerArgs)
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
