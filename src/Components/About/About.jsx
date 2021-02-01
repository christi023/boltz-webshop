import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Col, Row } from 'react-bootstrap';
// images
import product2 from '../../images/product-2.jpg';
import product3 from '../../images/product-3.jpg';
import product4 from '../../images/product-4.jpg';
import product5 from '../../images/product-5.jpeg';

// style
import './About.css';

const About = () => {
  return (
    <>
      <section className="section">
        <div className="container-fluid py-5">
          <Row className="px-xl-5">
            <Col lg={5} pb={5}>
              <Carousel>
                <Carousel.Item>
                  <img src={product5} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={product2} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={product3} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={product4} alt="" />
                </Carousel.Item>
              </Carousel>
            </Col>

            <Col lg={7} pb={5} className="about">
              <br />
              <h2>BOLTZ WEBSHOP</h2>
              <div className="d-flex mb-3">
                <div className="text-primary mr-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <p>(50 Reviews)</p>
              </div>
              <h3>Our store is a Fashion Inspiration</h3>
              <br />
              <p className="mb-4">
                Due to the current challenges posed by COVID-19, we've extended our returns policy
                to 100 days, as we recognise that customers may be visiting our stores less
                frequently at this time. We may also experience some delays in our stock
                availability. Thank you for your understanding
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default About;
