
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";


// import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";


import whyImg from "../assets/images/location.png";



const Home = () => {



  return (
    <Helmet title="Home">
      <section className="top_content">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">Easy way to get your lunch</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just wait <br /> home food at
                  <span> your office</span>
                </h1>

                <p>
                  Get Your Lunch Delivered !
                </p>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just be at your Office</h2>
              <h2 className="feature__title">
                we will <span>take care of your Lunch</span>
              </h2>
              
            </Col>

          </Row>
        </Container>
      </section>



      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Employee Food?</span>
                </h2>
                <p className="tasty__treat-desc">
                  We pickup the Lunch from your home and get it delivered at your office.
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Fresh and tasty
                      food from your home
                    </p>
                    
                  </ListGroupItem>

                 

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>Pickup and Delivery from any
                      location{" "}
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      


    </Helmet>
  );
};

export default Home;
