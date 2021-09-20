import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>You can contact me on meet.muhammadmohsin@gmail.com</p>
      <p>
        Have a look at google.com{" "}
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          Check Google
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
