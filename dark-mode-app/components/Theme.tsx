import React, { ReactNode } from 'react'
import { useRecoilState } from 'recoil'
import { ThemeProvider } from "styled-components"
import darkTheme from '../theme/darkTheme'
import lightTheme from '../theme/lightTheme'
import { GlobalStyle } from "./GlobalStyles"
import themeState from './themeState'

type props = {
  children?: ReactNode,
}

const Theme = ({children}:props) => {

  const [theme, setTheme] = useRecoilState(themeState);

  return(
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle/>
        {children}
      </ThemeProvider>
    </>
  )
}

export default Theme