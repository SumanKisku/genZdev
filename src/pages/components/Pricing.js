import React from "react"
import Card from './Card'

export default function Feature(props) {
  const basicWebsiteMenu = ['Home Page', 'About Page', 'Contact Page'];
  const blogWebsiteMenu = ['Basic Website', 'Blog Page'];

  const basicListItems = basicWebsiteMenu.map((elem) => <li className="ml-5">{elem}</li>);
  const blogListItems = blogWebsiteMenu.map((elem) => <li className="ml-5">{elem}</li>);

  return (
    <div data-sal="slide-up" data-sal-delay="300" data-sal-duration="1000" data-sal-easing="easeOutSine" className="md:flex md:flex-row md:justify-center md:space-x-8">
        <Card heading={"Basic Website"} list={basicListItems} price={"2999 Inr Only"}></Card>
        <Card heading={"Blog Website"} list={blogListItems} price={"3999 Inr Only"}></Card>
    </div>
  )
}