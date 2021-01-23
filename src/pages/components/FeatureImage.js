import React from "react"

export default function FeaturesImage(props) {
  return (
      <img className="m-auto w-48 h-48" src={props.src} alt={props.alt} />
  )
}