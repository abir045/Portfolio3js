import { extendTheme, textDecoration } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: (props) => ({
        body: {
            bg: mode('#EEEDDE', '#141E27')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderLineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },

    Link: {
        baseStyle: (props) => ({
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderLineOffset: 3
        })
    }
}

const fonts = {
    heading: 'RaleWay'
}

const colors = {
    glassTeal: '#88ccca'
}

// Adding color mode config

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

//Extend the theme with config and other components

const theme = extendTheme({
    config,
    styles,
    components,
    colors,
    fonts
})

export default theme
