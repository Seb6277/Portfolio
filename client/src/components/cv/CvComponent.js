import React from 'react'
import downloadLogo from '../../assets/images/document-download-solid.png'
import Cv from '../../assets/cv.pdf'

class CvComponent extends React.Component{
  render() {
    return(
      <div className="cv_frame col-md-8 offset-md-2">
        <h1>CV</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aliquid, asperiores assumenda corporis
          cupiditate debitis dolorem ducimus eaque eum ipsa laudantium magnam, neque nulla quis quo recusandae
          reprehenderit vel veniam.
        </p>
        <a href={Cv}><img src={downloadLogo} alt="TODO"/></a>
      </div>
    )
  }
}

export default CvComponent