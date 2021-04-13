import Link from 'next/link'
import React from 'react'
import Input from '../components/Input'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <Input/>
    <p>
      <Link href="/about">
        <button>About</button>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
