import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import "bootstrap/dist/css/bootstrap.min.css";

const Banner = () => {
    return (
      <div>
      <div className='container-fluid' >
     
      <div className="row">
          <div className="col-12">
              <Carousel>

                  <Carousel.Item>
                      <img
                          className="rounded mx-auto d-block img-fluid"
                          src="https://softwareunplugged.com/wp-content/uploads/2020/07/Top-10-Best-Virtual-Classroom-Software.png"
                          alt="First slide"
                      />
                    
                  </Carousel.Item>

                  <Carousel.Item>
                      <img
                          className="rounded mx-auto d-block img-fluid"
                          src="https://99social.co.uk/wp-content/uploads/2020/04/The-benefits-of-scheduling-content-for-social-media-01.png"
                          alt="Second slide"
                      />

                      
                  </Carousel.Item>

                  <Carousel.Item>
                      <img
                          className="rounded mx-auto d-block img-fluid"
                          src="https://www.talech.com/blog/wp-content/uploads/2019/12/shutterstock_397467481-1000x500.jpg"
                          alt="Third slide"
                      />
                  </Carousel.Item>

              </Carousel>
          </div>
      </div>
  </div>
</div>
    )
}

export default Banner