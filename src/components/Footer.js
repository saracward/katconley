import React from 'react'
import "../styles/Footer.css"

const Footer = () => {
    return (
        <>
        <div className="footer">
          <i>IMDB</i>
          <a href="https://www.youtube.com/c/AllianceTheatre/featured">YouTube</a>
          <a href="https://www.facebook.com/kat.conley.5">Facebook</a>
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
