import Link from 'next/link'
import React from 'react'
import Display from '../components/Display'
import Layout from '../components/Layout'
const AboutPage = () => {
  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      <p>This is the about page</p>
      <Display />
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  )
}

export default AboutPage
