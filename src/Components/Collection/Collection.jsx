import React from 'react';
import { Row, Col } from 'react-bootstrap';
import offer1 from '../../images/offer-1.png';
import offer2 from '../../images/offer-2.png';
import { Link } from 'react-router-dom';
// styles
import './Collection.css';
const Collection = () => {
  return (
    <section>
      <div className="container-fluid offer pt-5">
        <Row px-xl={5}>
          <Col md={6} pb={4}>
            <div className=" collection text-md-right text-white mb-2 py-5 px-5">
              <img src={offer1} alt="" className="" />
              <div className="collection-details">
                <h5>20% off all orders</h5>
                <h1>Spring Collection</h1>
                <Link to="/products" className="btn btn-outline">Shop Now</Link>
              </div>
            </div>
          </Col>

          <Col md={6} pb={4}>
            <div className="collection text-md-left text-white mb-2 py-5 px-5">
              <img src={offer2} alt="" />
              <div className="collection-details">
                <h5>20% off all orders</h5>
                <h1>Spring Collection</h1>
                <Link to="/products" className="btn btn-outline">Shop Now</Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Collection;
