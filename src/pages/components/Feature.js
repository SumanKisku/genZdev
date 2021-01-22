import React from "react"
import FeatureImage from "./FeatureImage"
import FeatureText from "./FeatureText"
import Subtext from './Subtext'

export default function Feature(props) {
  return (
    <div className="feature">
      <FeatureImage src={props.src} alt={props.alt}></FeatureImage>
      <FeatureText text={props.text}></FeatureText>
      <Subtext text={props.subtext}></Subtext>
    </div>
  )
}