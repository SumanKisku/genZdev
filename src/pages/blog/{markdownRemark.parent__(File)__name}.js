import React from "react"
import { graphql } from "gatsby"

export default function Post({data}) {
  return (
      <main>
      <h1 className="text-gray-100">{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </main>
  )
}

export const query = graphql`
query($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        title
      }
      html
    }
  }  
`