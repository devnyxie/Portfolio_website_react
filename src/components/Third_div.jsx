import { Row, Col } from "react-bootstrap";

export const Background = () => {
  return (
    <div className="p-3" style={{ backgroundColor: "#17191b" }} id="skills">
      <div className="d-flex justify-content-center align-items-center  text-light ">
        <div className="text-center">
          <div className="dont-show-on-mobile">
            <h4 className="p-1">Things I code with:</h4>

            <Row className="container mt-2 mb-2">
              <Col className="col">
                <img alt="" src="https://skillicons.dev/icons?i=html" />
              </Col>
              <Col className="col">
                <img alt="" src="https://skillicons.dev/icons?i=css" />
              </Col>
              <Col className="col">
                <img alt="" src="https://skillicons.dev/icons?i=bootstrap" />
              </Col>
              <Col className="col">
                <img alt="" src="https://skillicons.dev/icons?i=nodejs" />
              </Col>
              <Col className="col">
                <img alt="" src="https://skillicons.dev/icons?i=ts" />
              </Col>
              <Col className="col">
                <img alt="" src="https://skillicons.dev/icons?i=react" />
              </Col>
              <Col className="col">
                <img alt="" src="https://skillicons.dev/icons?i=redux" />
              </Col>
              <Col className="col">
                <img alt="" src="https://skillicons.dev/icons?i=mongodb" />
              </Col>
              <Col className="col">
                <img alt="" src="https://skillicons.dev/icons?i=git" />
              </Col>
            </Row>
          </div>
          <div id="stats">
            <img
              alt=""
              className="img"
              src="https://raw.githubusercontent.com/talmkg/github-stats/master/generated/overview.svg#gh-dark-mode-only"
            />
            <img
              alt=""
              className="img"
              src="https://raw.githubusercontent.com/talmkg/github-stats/master/generated/languages.svg#gh-dark-mode-only"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
