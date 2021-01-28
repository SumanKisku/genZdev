import React from "react"

export default function Header(props) {
  return (
      <h2
      data-sal="slide-up" data-sal-delay="300" data-sal-duration="1000" data-sal-easing="easeOutSine"
      className="text-center text-gray-100 text-3xl font-bold w-4/6 m-auto my-6 md:text-4xl lg:text-5xl">{props.text}</h2>
  )
}