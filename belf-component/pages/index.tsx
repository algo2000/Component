import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'
import { Counter } from '../features/counter/Counter'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <Counter/>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
