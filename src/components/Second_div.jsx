import { Row, Col } from "react-bootstrap";
import pfp from "../data/pfp.jpg";
export const Second_div = () => {
  return (
    <div
      className="bg-dark half-height d-flex justify-content-center"
      id="about"
    >
      <div className="text-light">
        <Row className="container d-flex justify-content-around align-items-center">
          <Col xs={4} id="pfp">
            <img
              src={pfp}
              className="social w-100"
              style={{ borderRadius: "50%" }}
            />
          </Col>
          <Col xs={6} id="about">
            <h3>About</h3>
            <hr />
            <p>
              Hello, my name is Tim. I'm young and I love software development.
              I speak multiple languages (English, Greek, Russian, and Polish)
              and like traveling. I'm passionate about programming, technology,
              and innovation. I learn fast and would like to join a dynamic and
              innovative team to develop my skills and deliver meaningful work.
              At the moment, I'm finishing EPICODE's Master Camp to become a
              Full-Stack Developer, but I'm already in search for a good job.
              <br />
              <div className="d-flex justify-content-around" id="skills">
                <div>
                  <h5>My front-end skills:</h5>
                  <ul>
                    <li>HTML+CSS</li>
                    <li>JavaScript/TypeScript</li>
                    <li>React.js/Redux</li>
                  </ul>
                </div>
                <div>
                  <h5>My back-end skills:</h5>
                  <ul>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
              </div>
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};
