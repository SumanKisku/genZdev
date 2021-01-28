import React from "react"
import FeatureImage from "./FeatureImage"
import FeatureText from "./FeatureText"
import Subtext from './Subtext'

export default function Feature(props) {
  return (
    <div
    data-sal="slide-up" data-sal-delay="300" data-sal-duration="1000" data-sal-easing="easeOutSine"
    className="feature my-7">
      <FeatureImage src={props.src} alt={props.alt}></FeatureImage>
      <FeatureText text={props.text}></FeatureText>
      <Subtext text={props.subtext}></Subtext>
    </div>
  )
}