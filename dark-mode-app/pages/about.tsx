import Link from 'next/link'
import React from 'react'
import ButtonCustom from '../components/ButtonCustom'
import Display from '../components/Display'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <Display/>
    <p>
      <Link href="/">
        <ButtonCustom text="Go home"></ButtonCustom>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
