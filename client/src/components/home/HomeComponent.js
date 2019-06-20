import React from 'react'
import ProfilePic from '../../assets/images/profil.jpg'

class HomeComponent extends React.Component{
  render() {
    return(
      <div className="content col-md-10 offset-md-1">
        <h1>Bienvenue</h1>
        <p>
          Bonjour est bienvenue sur mon portfolio ! <br/>
          Ici vous trouverez une sélection de mes projets récent ainsi qu'une prise de contactpar formulaire et mon CV.
        </p>
        <img className="home_image" src={ProfilePic} alt="TODO"/>
        <p>
          A l'aise avec ES6, ES7 et les technologies autour de Javascript (ECMAScript) je touche parfois aussi au développement
          PHP avec Symfony.
        </p>
        <p>
          Certains projet ici seront des expérimentations, d'autre de vrais site... Vous pouvez toujours suivre mon Github qui
          dispose de la grande majorité des projets en dépôt publique.
        </p>
        <p>Bonne visite !</p>
      </div>
    )
  }
}

export default HomeComponent