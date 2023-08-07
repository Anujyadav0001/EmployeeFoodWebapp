import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";

import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Employee Food</h5>
              <p>
                HUNGRY? Just wait
                home food at your office
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Week Days</span>
                <p>10:00am - 03:00pm</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Location: Spice Garden, Marathahalli, Bengaluru</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: +91 7353792468</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: employeefood9@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>


        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2023, Employee Foods, Inc. All Rights
              Reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                {" "}
                <Link to="https://www.facebook.com/muhib160">
                  <i class="ri-facebook-line"></i>
                </Link>{" "}
              </span>

              <span>
                <Link to="https://github.com/muhib160">
                  <i class="ri-github-line"></i>
                </Link>
              </span>

              <span>
                {" "}
                <Link to=" https://www.youtube.com/c/MuhibsTechDiary">
                  <i class="ri-youtube-line"></i>
                </Link>{" "}
              </span>

              <span>
                {" "}
                <Link to=" https://www.linkedin.com/in/muhib160/">
                  <i class="ri-linkedin-line"></i>
                </Link>{" "}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
