import React, { Component } from 'react'

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: ''
    };
  }

  render() {
    return (
      <div className="contact-container">
      <form className="contact-form">
        <input
        className="fname"
        type="text"
        placeholder="First Name"
        />
        <input
        className="lname"
        type="text"
        placeholder="Last Name"
        />
        <br/>
        <input
        type="text"
        placeholder="Email"
        />
        
        <input
        className="comments"
        type="text"
        placeholder="Comments"
        />
        <br/>
        <button className="submit" type="submit">Submit</button>
      </form>
      </div>
    )
  }
}
