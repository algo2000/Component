import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'
import PlantingGlass from '../components/PlantingGlass'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <PlantingGlass/>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
