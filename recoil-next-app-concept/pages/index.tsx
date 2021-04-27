import Link from 'next/link'
import React from 'react'
import FontButton from '../components/FontButton'
import Text from '../components/Text'
import Input from '../components/Input'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <Input />
    <div>
      <FontButton />
      <Text />
    </div>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
