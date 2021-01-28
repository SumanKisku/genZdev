import React from "react"

export default function Subtext(props) {
  return (
      <p className="text-center text-gray-100 text-lg font-light w-4/6 lg:w-1/2 mx-auto lg:my-6"><b>{props.title}</b> {props.text}</p>
  )
}