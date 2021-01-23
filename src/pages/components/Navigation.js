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
      <nav className="flex h-24 p-10 px-32 justify-between">
          <div className="logo text-xl font-medium text-white">
              GenZdev.
          </div>
          <ul className="flex w-80 justify-between content-center">
              {links.map((elem) => <li><Link className="text-gray-100 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ease-in" to={elem['link']}>{elem["title"]}</Link></li>)}
          </ul>
      </nav>
  )
}