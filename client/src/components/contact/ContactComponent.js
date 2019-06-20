import React from 'react'
import ContactFormComponent from './ContactFormComponent'

class ContactComponent extends React.Component{
  render() {
    return(
      <div className="contact_frame col-md-8 offset-md-2">
        <h1>Contact</h1>
        <p>
          Une question ? Une demande ? Ou juste parlé de la météo ?<br/>
          C'est ici que ça se passe !<br/><br/>
          Merci de correctement renseigner votre email
        </p>
        <ContactFormComponent/>
      </div>
    )
  }
}

export default ContactComponent