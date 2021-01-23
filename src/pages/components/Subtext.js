import React from "react"

export default function Subtext(props) {
  return (
      <p className="text-center text-gray-100 text-lg w-2/5 m-auto my-6"><b>{props.title}</b> {props.text}</p>
  )
}