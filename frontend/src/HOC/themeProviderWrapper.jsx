// RTL :
import { ThemeProvider, createTheme } from '@mui/material/styles'
import rtlPlugin from 'stylis-plugin-rtl'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'

const theme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "vazir, roboto"
    }
})

const cacheRTL = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin]
})


const ThemeProviderWrapper = ({children}) => {
    return (
        <CacheProvider value={cacheRTL} >
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </CacheProvider>
    )
}

export default ThemeProviderWrapper;