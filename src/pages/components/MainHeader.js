import React from "react"

export default function MainHeader(props) {
  return (
      <h1 className="text-center text-gray-100 text-6xl w-1/2 m-auto mt-24">{props.text}</h1>
  )
}