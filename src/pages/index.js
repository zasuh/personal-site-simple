import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{
      border: '1px solid black',
      padding: '120px',
      boxShadow: '4px 7px 15px -7px rgba(0,0,0,0.61)',
      background: '#698796'
    }}>
    <h1 style={{
      fontSize: '66px'
    }}>Žane Suhadolnik</h1>
    <p style={{
      textAlign: 'center'
    }}>suhadolnik@protonmail.com</p>
    <ul>
      <li>
        <a href="https://github.com/zasuh">GitHub</a>
      </li>
      <li>
        <a href="https://twitter.com/zasuh_">Twitter</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/zasuhadolnik/">LinkedIn</a>
      </li>
      <li>
        <a href="https://letterboxd.com/znsh/">Letterboxd</a>
      </li>
      <li>
        <a href="https://www.goodreads.com/user/show/87198642-ane-suhadolnik">Goodreads</a>
      </li>
    </ul>
    </div>
  </Layout>
)

export default IndexPage
