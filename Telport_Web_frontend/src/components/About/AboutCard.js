import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            TelePort system basicly use <span className="purple">Tcp port forwarding </span>
            that forward a port from public server to your <span className="purple"> localhost specific port</span> that's it thanks for join us
            <br />
            <br />
            <br />
            <br />
            here is   <span className="purple"> our products </span> free to use it
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> flutter app
            </li>
            <li className="about-activity">
              <ImPointRight /> web app
            </li>
           
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Your privacy is our responsibility"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
