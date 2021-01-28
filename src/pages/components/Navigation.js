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
    ];
    
  return (
      <nav className="m-6 md:flex md:flex-row md:justify-between">
          <div className="logo text-xl m-1 font-medium text-white">
              GenZdev.
          </div>
          <label for="menu-toggle" className="cursor-pointer md:hidden block">
          <svg className="w-6 text-gray-100 absolute top-7 right-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
          </label>
          <input name="menu-toggle" type="checkbox" className="hidden" id="menu-toggle" />
          
          
          <ul id="menu" className="m-1 text-right transform translate-x-full transition-transform duration-300 md:transform md:translate-x-0 ease-linear md:flex md:flex-row md:space-x-5">
              {links.map((elem) => <li><Link className="inline-block text-gray-100 py-2 px-4 md:border border-solid border-gray-100 rounded-full hover:border-green-400 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ease-in" to={elem['link']}>{elem["title"]}</Link></li>)}
          </ul>
      </nav>
  )
}