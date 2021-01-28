import React from "react"
import Card from './Card'

export default function Feature(props) {
  const basicWebsiteMenu = ['Home Page', 'About Page', 'Contact Page'];
  const blogWebsiteMenu = ['Basic Website', 'Blog Page'];

  const basicListItems = basicWebsiteMenu.map((elem) => <li className="ml-5">{elem}</li>);
  const blogListItems = blogWebsiteMenu.map((elem) => <li className="ml-5">{elem}</li>);

  return (
    <div className="flex flex-row justify-center space-x-8">
        <Card heading={"Basic Website"} list={basicListItems} price={"2999 Inr Only"}></Card>
        <Card heading={"Blog Website"} list={blogListItems} price={"3999 Inr Only"}></Card>
    </div>
  )
}