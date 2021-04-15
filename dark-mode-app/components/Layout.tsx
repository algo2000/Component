import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRecoilState } from 'recoil'
import themeState from './themeState'
import ButtonCustom from './ButtonCustom'
import NavigationBar from './NavigationBar'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {

  const [theme, setTheme] = useRecoilState(themeState);
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
        |{' '}
          <Link href="/about">
            <a>About</a>
          </Link>{' '}
        |{' '}
          <ButtonCustom onClick={themeToggler}
            text={theme == 'light' ? 'Dark Mode' : 'Light Mode'} />
        </nav>
      </header>
      {children}
      <NavigationBar/>
    </div>
  )
}

export default Layout
