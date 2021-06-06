import React from 'react'
import "../styles/Landing.css"
import "../styles/Footer.css"
import Carousel from 'react-bootstrap/Carousel'

const Landing = () => {
    return (
        <>
        <div className="landing-container">
            <p>Kat Conley</p>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
       src="https://i.ibb.co/rpVTsps/C3L191.jpg"     
    alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/xXY7G9k/DSC00389.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/CbQXFtk/DSC-0168.jpg"     
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
        </div>
        {/* <Footer /> */}
        </>
    )
}

export default Landing
