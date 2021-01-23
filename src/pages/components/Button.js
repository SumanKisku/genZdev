import React from "react"

export default function Button(props) {
  return (
      <button className="text-center text-gray-100 text-lg block py-4 px-10 mx-auto mt-20 border border-solid border-gray-100 rounded-full hover:border-green-400 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ease-in">{props.text}</button>
  )
}