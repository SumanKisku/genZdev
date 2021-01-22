import React from "react"
import Button from './Button'

export default function ContactForm(props) {
  return (
      <div className="contact-form">
    <form method="post" action="https://getform.io/{your-unique-getform-endpoint}">

        <input type="email" name="email" placeholder="Email" />

        <input type="text" name="name" placeholder="Name" />

        <input type="text" name="message" placeholder="Message" />
        <Button text={"Send"}></Button>
    </form>
    </div>
  )
}