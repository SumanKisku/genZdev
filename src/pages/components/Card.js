import React from "react"

export default function Feature(props) {
  return (
    <div className="card">
      <h4>{props.heading}</h4>
      <ul>
          {props.list.map((elem) => <li>{elem}</li>)}
      </ul>
    </div>
  )
}