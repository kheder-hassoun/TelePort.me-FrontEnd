import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/hiast.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Hi again in <span className="purple"> TelePort.me web app  </span> 
            </h1>
            <p className="home-about-body">
            Many servers and a lot of work have been built to make this service possible
              <br />
              <br /> And many programming languages ​​and work environments
              <i>
                <b className="purple"> Go , Java , Dart , Javascript  </b>
                <b className="purple"> C++ , Python , React . </b>

              </i>
              <br />
              <br />
              kheder TelePort.me development  &nbsp;
              <i>
                <b className="purple">Web Application </b> 
                 {" "}
                <b className="purple">
                  
                </b>
              </i>
              <br />
              <br />
              
               <b className="purple"></b> 
              <i>
                <b className="purple">
                  {" "}
                  
                </b>
              </i>
              &nbsp;
              <i>
                <b className="purple"></b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>my github 😁</h1>
            <p>
              you can find TelePort <span className="purple">source Code </span> 
            </p>
            <ul className="home-about-social-links">
             
              <li className="social-icons">
                <a
                  href="https://github.com/kheder-hassoun"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                 <AiFillGithub />
                </a>
              </li>
       
           
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
