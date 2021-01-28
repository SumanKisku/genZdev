import React from "react"

export default function MainHeader(props) {
  return (
      <h1 className="text-center text-gray-100 mx-auto mb-6 text-4xl font-bold w-4/5 sm:w-3/5 md:text-5xl lg:text-6xl">{props.text}</h1>
  )
}