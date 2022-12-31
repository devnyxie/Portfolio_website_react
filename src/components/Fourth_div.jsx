import { Row, Col, Badge } from "react-bootstrap";
export const Fourth_div = () => {
  return (
    <>
      <div className="bg-dark p-2 pb-4 text-light skills d-flex justify-content-center">
        <div className="container pt-2">
          <div className="d-flex justify-content-center">
            <p className="w-75 text-center">
              Below are just a few of the major projects that I have worked on
              in the past. I have worked with a wide range of applications
              ranging from mobile apps to fully responsive webapps.
            </p>
          </div>

          <Row>
            <Col xs={6}>
              <div class="container_window">
                <div class="top d-flex">
                  <span
                    class="dot me-1"
                    style={{ background: "#ED594A" }}
                  ></span>
                  <span
                    class="dot me-1"
                    style={{ background: "#FDD800" }}
                  ></span>
                  <span
                    class="dot me-1"
                    style={{ background: "#5AC05A" }}
                  ></span>
                </div>

                <div class="content">
                  <img
                    src="https://i.imgur.com/b7UTTkt.png"
                    style={{
                      width: "100%",
                      aspectRatio: 16 / 9,
                      objectFit: "cover",
                    }}
                    class="image"
                  />
                  <div class="overlay">
                    <div>
                      <span className="d-flex mx-4 mb-2">
                        <Badge bg="primary opacity-75 me-1">Bootsrap 5</Badge>
                        <Badge bg="warning opacity-75 me-1">Javascript</Badge>
                        <Badge bg="secondary opacity-75 me-1">API</Badge>
                      </span>
                      <span>
                        Spotify Website's clone built on Deezer's API (Playable
                        songs, Albums page, Artist page, Search page) and
                        Bootstrap 5.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={6}>
              <div class="container_window">
                <div class="top d-flex">
                  <span
                    class="dot me-1"
                    style={{ background: "#ED594A" }}
                  ></span>
                  <span
                    class="dot me-1"
                    style={{ background: "#FDD800" }}
                  ></span>
                  <span
                    class="dot me-1"
                    style={{ background: "#5AC05A" }}
                  ></span>
                </div>

                <div class="content">
                  <img
                    src="https://i.imgur.com/Nyn5eqU.png"
                    style={{
                      width: "100%",
                      aspectRatio: 16 / 9,
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
