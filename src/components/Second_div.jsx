import { Row, Col } from "react-bootstrap";

export const Second_div = () => {
  return (
    <div className="bg-dark half-height">
      <div className="d-flex justify-content-center half-height text-light ">
        {/* <div className="bg-dark w-75">h1</div> */}
        <Row className="w-75 d-flex justify-content-center align-items-center">
          <Col xs={4} className="d-flex justify-content-center">
            <img
              src="https://i.pinimg.com/originals/f1/90/3d/f1903d1dc54f9bff26ae6a4b413181c7.gif"
              style={{ borderRadius: "50%", maxHeight: "350px" }}
            />
          </Col>
          <Col xs={7}>
            <h3>About</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              laudantium impedit laborum quasi laboriosam maxime, sequi fuga,
              dolores ut asperiores hic accusantium odio saepe. Repellat harum
              autem officia voluptates reiciendis.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};
