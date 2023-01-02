import { Row, Col, Badge, Carousel } from "react-bootstrap";
export const Fourth_div = () => {
  return (
    <>
      <div className="bg-dark p-2 pb-4 text-light skills d-flex justify-content-center">
        <div className="container pt-2">
          <div className="d-flex justify-content-center">
            <p className="w-75 text-center " id="intro-projects">
              Below are just a few of the major projects that I have worked on
              in the past. I have worked with a wide range of applications
              ranging from mobile apps to fully responsive webapps.
            </p>
          </div>
          <Row
            className="row-cols-1 row-cols-md-1 row-cols-lg-2 d-flex justify-content-center"
            id="projects"
          >
            <Col className="mb-2">
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
                  <Carousel>
                    <Carousel.Item interval={4000}>
                      <img
                        className="d-block w-100 sixteen-to-nine opacity-75"
                        src="https://i.imgur.com/b7UTTkt.png"
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                      <img
                        className="d-block w-100 sixteen-to-nine opacity-75"
                        src="https://i.imgur.com/jNSgeUT.png"
                        alt="Second slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                      <img
                        className="d-block w-100 sixteen-to-nine opacity-75"
                        src="https://i.imgur.com/vHMuklS.png"
                        alt="Third slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                  <div class="overlay" style={{ zIndex: "3" }}>
                    <div>
                      <span className="d-flex mb-2">
                        <Badge bg="opacity-75 me-1" className="bootstrap">
                          Bootsrap 5
                        </Badge>
                        <Badge bg="opacity-75 me-1" className="javascript">
                          Javascript
                        </Badge>
                        <Badge bg="secondary opacity-75 me-1">API</Badge>
                      </span>
                      <span>
                        Spotify Website's clone built on Deezer's API (Playable
                        songs, Albums page, Artist page, Search page) and
                        Bootstrap 5. There is also a recent version remade on
                        React.js & Redux, feel free to check out my Github!
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="mb-2">
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
                  <Carousel>
                    <Carousel.Item interval={4000}>
                      <img
                        className="d-block w-100 sixteen-to-nine opacity-75"
                        src="https://i.imgur.com/a7UrREb.png"
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                      <img
                        className="d-block w-100 sixteen-to-nine opacity-75"
                        src="https://i.imgur.com/WzqEtj6.png"
                        alt="Second slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                      <img
                        className="d-block w-100 sixteen-to-nine opacity-75"
                        src="https://i.imgur.com/A8smvsS.png"
                        alt="Third slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                  <div class="overlay pb-3" style={{ zIndex: "3" }}>
                    <div>
                      <span className="d-flex mb-2">
                        <Badge bg="opacity-75 me-1" className="react">
                          React.js
                        </Badge>
                        <Badge bg="opacity-75 me-1" className="redux">
                          Redux
                        </Badge>
                        <Badge bg="opacity-75 me-1" className="bootstrap">
                          Bootsrap 5
                        </Badge>
                        <Badge bg="secondary opacity-75 me-1">API</Badge>
                      </span>
                      <span>
                        Linkedin Website's Clone built on React.js (HTML, CSS,
                        JavaScript), Redux and Bootstrap 5. Posting, viewing
                        every possible profile of 3000 people and having
                        different experiences is possible.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="mb-2">
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
                  <Carousel>
                    <Carousel.Item interval={4000}>
                      <img
                        className="d-block w-100 sixteen-to-nine opacity-75"
                        src="https://i.imgur.com/Nyn5eqU.png"
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                      <img
                        className="d-block w-100 sixteen-to-nine opacity-75"
                        src="https://i.imgur.com/5ftb8Un.png"
                        alt="Second slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                  <div class="overlay" style={{ zIndex: "3" }}>
                    <div>
                      <span className="d-flex mb-2">
                        <Badge bg="opacity-75 me-1" className="react">
                          React.js
                        </Badge>
                        <Badge bg="opacity-75 me-1" className="redux">
                          Redux
                        </Badge>
                        <Badge bg="opacity-75 me-1" className="redux">
                          Bootstrap 4
                        </Badge>
                        <Badge bg="secondary opacity-75 me-1">API</Badge>
                      </span>
                      <span>
                        Remote Job Search built on React.js, Redux & Bootstrap
                        4. Also, I've added Local Memory with the encrypted key,
                        which makes this application safe&secured. I've focused
                        on functionality and clear code, not the look of the web
                        application.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="mb-2">
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
                  <Carousel>
                    <Carousel.Item interval={4000}>
                      <img
                        className="d-block w-100 sixteen-to-nine opacity-75"
                        src="https://i.imgur.com/LXH9yVa.png"
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                      <img
                        className="d-block w-100 sixteen-to-nine opacity-75"
                        src="https://i.imgur.com/OHkcxxg.png"
                        alt="Second slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                      <img
                        className="d-block w-100 sixteen-to-nine opacity-75"
                        src="https://i.imgur.com/75yXfWX.png"
                        alt="Third slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                  <div class="overlay" style={{ zIndex: "3" }}>
                    <div>
                      <span className="d-flex mb-2">
                        <Badge bg="opacity-75 me-1" className="bootstrap">
                          Bootsrap 5
                        </Badge>
                        <Badge bg="opacity-75 me-1" className="javascript">
                          Javascript
                        </Badge>
                        <Badge bg="secondary opacity-75 me-1">API</Badge>
                      </span>
                      <span>
                        Netflix's clone built on HTML, CSS, JavaScript,
                        Bootstrap 5 and Private Epicode's API.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="mb-2">
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
                  <Carousel>
                    <Carousel.Item interval={4000}>
                      <img
                        className="d-block w-100 sixteen-to-nine opacity-75"
                        src="https://i.imgur.com/vjHV4S0.png"
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                      <img
                        className="d-block w-100 sixteen-to-nine opacity-75"
                        src="https://i.imgur.com/vwrMjM2.png"
                        alt="Second slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                  <div class="overlay" style={{ zIndex: "3" }}>
                    <div>
                      <span className="d-flex mb-2">
                        <Badge bg="opacity-75 me-1" className="react">
                          React.js
                        </Badge>
                        <Badge bg="opacity-75 me-1" className="bootstrap">
                          Bootsrap 5
                        </Badge>

                        <Badge bg="secondary opacity-75 me-1">API</Badge>
                      </span>
                      <span>
                        Weather Web Application built on React.js and
                        OpenWeather API with nice and minimalistic styling.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
