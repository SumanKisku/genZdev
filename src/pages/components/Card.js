import React from "react"

export default function Feature(props) {
  return (
    <div className="card text-gray-100 border border-gray-100 px-4 py-6 pr-8 relative">
      <div className="w-full h-full border border-gray-100 bg-black absolute"></div>
      <h4 className="text-2xl font-bold">{props.heading}</h4>
      <ul className="mt-2 list-disc">
          {props.list.map((elem) => <li className="ml-5">{elem}</li>)}
      </ul>
      
    </div>
  )
}