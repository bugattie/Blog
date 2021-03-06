import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const HomePage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hi..</h1>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default HomePage
