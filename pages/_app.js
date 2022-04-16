import { ChakraProvider } from '@chakra-ui/provider'
import Fonts from '../components/fonts'
import Layout from '../components/layouts/main'
import theme from '../libs/theme'
import { AnimatePresence } from 'framer-motion'
import { ParallaxProvider } from 'react-scroll-parallax'

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                {/* animating page transitions with AnimatePresence  */}
                <AnimatePresence exitBeforeEnter initial={true}>
                    <ParallaxProvider>
                        <Component {...pageProps} key={router.route} />
                    </ParallaxProvider>
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default Website
