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
    <Link href="/" passHref>
      <p>
        <ButtonCustom text="Go home"/>
      </p>
    </Link>
  </Layout>
)

export default AboutPage
