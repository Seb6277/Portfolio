import React from 'react'
import ContactFormComponent from './ContactFormComponent'

class ContactComponent extends React.Component{
  render() {
    return(
      <div className="contact_frame col-md-8 offset-md-2">
        <h1>Contact</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, cumque
          dolorum eaque earum eligendi fuga, id illum omnis placeat praesentium quas
          repudiandae sequi sint unde vel. Corporis earum itaque sit.
        </p>
        <ContactFormComponent/>
      </div>
    )
  }
}

export default ContactComponent