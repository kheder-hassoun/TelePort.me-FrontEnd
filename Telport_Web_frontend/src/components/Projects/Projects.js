import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import windows from "../../Assets/Projects/windows.png";
import linux from "../../Assets/Projects/linux.png";
import mac from "../../Assets/Projects/mac.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Download TelePort <strong className="purple">APPs </strong> its free
        </h1>
        <p style={{ color: "white" }}>
          chose your operating system .
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={windows}
              isBlog={false}
              title="TelePort for windows"
              description="if you are using windows os, download the desktop app to share your localhost "
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mac}
              isBlog={false}
              title="TelePort for MacOs"
              description="if you are using Mac os , download the desktop app to share your localhost "
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={linux}
              isBlog={linux}
              title="TelePort for Linux"
              description="if you are using Linux os , download the desktop app to share your localhost "
              ghLink="#"
              demoLink="#"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
