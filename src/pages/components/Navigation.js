import React from "react"
import { Link } from 'gatsby'

export default function Navigation(props) {
    let links = [
        {
            "title": "Portfolio",
            "link": "/portfolio" 
        },
        {
            "title": "About",
            "link": "/about" 
        },
        {
            "title": "Blog",
            "link": "/blog" 
        }
    ]
  return (
      <nav>
          <div className="logo">
              GenZdev.
          </div>
          <ul>
              {links.map((elem) => <Link to={elem['link']}>{elem["title"]}</Link>)}
          </ul>
      </nav>
  )
}