import React from "react"
import { graphql } from "gatsby"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
      }
    }
  }
`

const Blog = props => {
  const data = props.data.contentfulBlogPost

  return (
    <Layout>
      <Head title={data.title} />
      <h1>{data.title}</h1>
      <p>{data.publishedDate}</p>
      <div>{documentToReactComponents(data.body.raw)}</div>
    </Layout>
  )
}

export default Blog
