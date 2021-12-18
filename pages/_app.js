import { ChakraProvider } from '@chakra-ui/react'
import store from "../redux/store";
import { Provider } from "react-redux";
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'

function Website({ Component, pageProps, router }) {
    return (
      <Provider store={store} >
      <ChakraProvider theme={theme} >
        <Fonts />
        <Layout router={router}>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
      </Provider>
    )
  }
  
  export default Website