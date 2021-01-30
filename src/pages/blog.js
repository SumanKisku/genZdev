import React from "react"
import Navigation from "./components/Navigation"
import { Link, graphql } from "gatsby"

export default function Blog({ data }) {
  return (
      <div className="overflow-hidden">
      <Navigation></Navigation>
      <ul className="overflow-hidden text-gray-100 md:w-3/4 md:mx-auto lg:w-10/12">
        {data.allMarkdownRemark.edges.map((post) => 
          (<li className="m-10 lg:m-20 lg:flex lg:flex-row lg:justify-between lg:items-center">
            <span className="font-bold"
            data-sal="slide-up" data-sal-delay="300" data-sal-duration="1000" data-sal-easing="easeOutSine"
            >{post.node.frontmatter.date}</span>
            <Link to={post.node.frontmatter.slug}
            data-sal="slide-up" data-sal-delay="300" data-sal-duration="1000" data-sal-easing="easeOutSine"
            >
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ease-in hover:text-green-500"
            
            >{post.node.frontmatter.title}
            </h2>
            </Link>
          </li>)
        )}
      </ul>
      </div>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          html
          excerpt
          frontmatter {
            title
            date
            slug
          }
        }
      }
    }
  }
  `