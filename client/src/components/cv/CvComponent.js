import React from 'react'
import downloadLogo from '../../assets/images/document-download-solid.png'
import Cv from '../../assets/cv.pdf'

class CvComponent extends React.Component{
  render() {
    return(
      <div className="cv_frame col-md-8 offset-md-2">
        <h1>CV</h1>
        <p>
          Vous pouvez télécharger mon CV par le liens ci-dessous:
        </p>
        <a href={Cv}><img src={downloadLogo} alt="TODO"/></a>
      </div>
    )
  }
}

export default CvComponent