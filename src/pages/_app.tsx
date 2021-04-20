import React from 'react';
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ApolloClient, ApolloProvider, NormalizedCacheObject } from '@apollo/client'
import {AnimateSharedLayout} from 'framer-motion'
import { useApollo } from '../components/hoc/apollo'


const MyApp: NextPage<AppProps> = (props: AppProps) => {
  const { Component, pageProps } = props;
  const apolloClientRef = React.useRef<ApolloClient<NormalizedCacheObject>>(useApollo(pageProps));

  return (
    <div className="flex flex-col h-screen w-screen">
      <ApolloProvider client={apolloClientRef.current}>
        <AnimateSharedLayout>
          <Component {...pageProps} />
        </AnimateSharedLayout>
      </ApolloProvider>
    </div>
  )
}

export default MyApp