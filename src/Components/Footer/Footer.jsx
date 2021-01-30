import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import payment from '../../images/payments.png';
// styles
import './Footer.css';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <Row>
            <Col lg={4} md={6}>
              <div className="footer-info">
                <h3>BOLTZ</h3>
                <p className="pb-3">
                  <em>Please feel free to connect with us</em>
                </p>
                <p>
                  Carlsvägen 5 <br />
                  Malmö, Sweden
                  <br />
                  <br />
                  <strong>Phone:</strong> +46 876 765616
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br />
                </p>
                <div className="social-links mt-3">
                  <Link to="/" className="twitter">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to="/" className="facebook">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="/" className="instagram">
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link to="/" className="google-plus">
                    <i className="fab fa-google-plus"></i>
                  </Link>
                  <Link to="/" className="linkedin">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={2} md={6} className="footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="fas fa-chevron-right"></i> <Link to="/">Home</Link>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i>
                  <Link to="/service">Terms of service</Link>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i>
                  <Link to="/policy">Privacy policy</Link>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </Col>
            <Col lg={2} md={6} className="footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="fas fa-chevron-right"></i> <Link to="/">Support</Link>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i> <Link to="/">Testimonials</Link>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i>
                  <Link to="/">Careers</Link>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i> <Link to="/">Marketing</Link>
                </li>
                <li>
                  <i className="fas fa-chevron-right"></i> <Link to="/">Product Management</Link>
                </li>
              </ul>
            </Col>
            <Col lg={4} md={6} className="footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>You can unsubscribe at any time.</p>
              <Form action="" method="post">
                <input type="email" name="email" placeholder="Your Email" />
                <input type="submit" value="Subscribe" />
              </Form>
            </Col>
          </Row>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          © 2021 Copyright. | All Rights Reserved | Terms and Conditions
        </div>
        <div className="credits">
          <Link to="/">BOLTZ</Link>
        </div>

        <img class="img-fluid" src={payment} alt="" />
      </div>
    </footer>
  );
}
