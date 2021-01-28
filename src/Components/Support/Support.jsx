import React from 'react';
import { Col, Row } from 'react-bootstrap';
// style
import './Support.css';

const Support = () => {
  return (
    <>
      <div className="container-fluid pt-5">
        <Row className="px-xl-5" pb={3}>
          <Col lg={3} md={6} sm={12} pb={1}>
            <div className="d-flex align-items-center border mb-4">
              <h1>
                <i className="fas fa-check"></i>
              </h1>
              <h5>Quality Product</h5>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} pb={1}>
            <div className="d-flex align-items-center border mb-4">
              <h1>
                <i className="fas fa-shipping-fast"></i>
              </h1>
              <h5>Free Shipping</h5>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} pb={1}>
            <div className="d-flex align-items-center border mb-4">
              <h1>
                <i className="fas fa-exchange-alt"></i>
              </h1>
              <h5>14-Day Return</h5>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} pb={1}>
            <div className="d-flex align-items-center border mb-4">
              <h1>
                <i className="fas fa-phone-volume"></i>
              </h1>
              <h5>24/7 Support</h5>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Support;
