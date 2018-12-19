import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Select from '../components/select'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Select/>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/page-3/">Go to page 3</Link>
  </Layout>
)

export default IndexPage
