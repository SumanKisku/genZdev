import React from "react"
import Navigation from '../components/Navigation'
import { graphql } from "gatsby"

export default function Post({data}) {
  return (
      <div className="overflow-hidden">
        <Navigation></Navigation>
        <div className="w-11/12 md:w-8/12 mx-auto mt-2">
        <h1 className="text-gray-100 text-5xl mb-2 md:text-6xl">{data.markdownRemark.frontmatter.title}</h1>
        <h2 className="text-gray-100 font-bold mb-4">{data.markdownRemark.frontmatter.date}</h2>
        <div className="text-lg" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </div>
      </div>
  )
}

export const query = graphql`
query($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        title
        date
      }
      html
    }
  }  
`