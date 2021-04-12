import React, { ReactNode } from 'react'
import { useRecoilState } from 'recoil'
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "../theme/theme"
import { GlobalStyle } from "./GlobalStyles"
import themeState from './ThemeState'

type props = {
  children?: ReactNode,
}

const Theme = ({children}:props) => {

  const [theme, setTheme] = useRecoilState(themeState);

  return(
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      {/* <ThemeProvider theme={lightTheme}> */}
        <GlobalStyle/>
        {children}
      </ThemeProvider>
    </>
  )
}

export default Theme