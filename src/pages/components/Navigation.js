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
      <nav className="text-center m-4 sm:flex md:h-24 sm:p-10 sm:px-32 sm:justify-between">
          <div className="logo text-xl font-medium text-white">
              GenZdev.
          </div>
          <ul id="menu" className="mt-5 sm:flex sm:w-80 justify-between content-center hidden">
              {links.map((elem) => <li><Link className="block text-gray-100 py-2 px-4 sm:border border-solid border-gray-100 rounded-full hover:border-green-400 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ease-in" to={elem['link']}>{elem["title"]}</Link></li>)}
          </ul>
          <div id="burger" className="w-6 text-white absolute top-4 right-4 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
      </nav>
  )
}