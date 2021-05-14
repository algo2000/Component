import Link from 'next/link'
import React from 'react'
import { MotionStyle } from '.'

const AboutPage = () => (
  <div>
    <MotionStyle
      animate={{
        borderRadius: ["20%", "100%"]
      }}
      transition={{
        times: [0.5],
      }}
    />
    <Link href="/">
      <a>Link To home</a>
    </Link>
  </div>
)

export default AboutPage
