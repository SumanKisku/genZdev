import React from "react"
import Button from './Button'

export default function ContactForm(props) {
  return (
      <div className="contact-form mt-16 w-11/12 md:w-1/2 m-auto">
      <form className="flex flex-col w-full" method="post" action="https://getform.io/{your-unique-getform-endpoint}">

        <input className="w-full my-2 pl-4 py-4" type="email" name="email" placeholder="Email" />

        <input className="w-full my-2 pl-4 py-4" type="text" name="name" placeholder="Name" />

        <textarea className="w-full my-2 pl-4 pt-4 h-36" name="message" form="usrform" placeholder="Message"></textarea>

        <Button text={"Send"}></Button>
    </form>
    </div>
  )
}