import React from "react"

export default function Feature(props) {
  return (
    <div className="card text-gray-100 border border-gray-100 rounded-3xl h-48 mt-8 px-8 py-6 pr-8 flex flex-col relative">
      {/* <div className="w-full h-full border border-gray-100 bg-black absolute"></div> */}
      <h4 className="text-2xl font-bold">{props.heading}</h4>
      <ul className="mt-2 list-disc">
          {props.list}
      </ul>
      <div className="transform translate-x-6 absolute bottom-3">
        <span>{props.price}</span>
      </div>
      
    </div>
  )
}