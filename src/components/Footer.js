import React from 'react'
import "../styles/Footer.css"

const Footer = () => {
    return (
        <>
        <div className="footer">
          <i>IMDB</i>
          <i>YouTube</i>
          <i>Facebook</i>
          <i>Instagram</i>
          <i>Twitter</i>
        </div>
    
        <div>
               <a
            href="https://www.gocalavera.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="calavera">Powered by Calavera
            {/* <img
              src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1620533450/Portfolio1/Calavera_oxwdwu.png"
              alt="Logo"
              className="logo"
            /> */}
          </p></a>
        </div>
        </>
    )
}

export default Footer
