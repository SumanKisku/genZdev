import React from "react"

export default function MainHeader(props) {
  return (
      <h1 className="text-center text-gray-100 mx-auto mb-6 text-4xl font-bold w-4/5">{props.text}</h1>
  )
}