import { Nav, Container, Navbar, Form, FormControl, Button, Row, Col, Image, Badge, Card, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import './Detail.css';
export default function Details() {
  return (
    <Container fluid>
      <Row>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home" style={{ color: "orange" }}> <i class="bi bi-film"></i>Movix</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#Phim Lẻ">Phim Lẻ</Nav.Link>
                <Nav.Link href="#Phim Bộ">Phim Bộ</Nav.Link>
                <Nav.Link href="#Thể loại">Thể loại</Nav.Link>
                <Nav.Link href="#Quốc Gia">Quốc Gia</Nav.Link>
                <Nav.Link href="#Login">Login</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button style={{ backgroundColor: 'red' }}>Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
      <Row>
        <Container className="p-3" style={{ backgroundColor: '#1a2b48', color: 'white', borderRadius: '10px' }}>
          <Row>
            <Col md={4} >
              <Image src="./Anh/anh1.png" fluid rounded style={{ width: "100%", height: "auto" }} />
            </Col>
            <Col md={8}>
              <h2 style={{color:"white"}}>Hit Man (2024)</h2>
              <p>He's not a killer, but he can pretend.</p>
              <div className="mb-2">
                <Badge bg="danger" className="me-2">Romance</Badge>
                <Badge bg="info" className="me-2">Comedy</Badge>
                <Badge bg="success" className="me-2">Crime</Badge>
              </div>
              <div className="d-flex align-items-center mb-3">
                <Badge pill className="rating-circle d-flex justify-content-center align-items-center me-3" bg="success">
                  10.0
                </Badge>
                <Button  >
                  <i style={{ width: "100%" }} class="bi bi-play-circle"></i></Button>
                <h4>Watch Tralier</h4>
              </div>
              <h4>Overview</h4>
              <p>
                Gary Johnson is the most sought-after professional killer in New Orleans. To his clients, he is like something out of a movie: the mysterious gun for hire. But if you pay him to rub out a cheating spouse or an abusive boss, you'd better watch your back: he works for the cops. When he breaks protocol to help a desperate woman trying to flee an abusive boyfriend, he finds himself becoming one of his false personas, falling for the woman and flirting with turning into a criminal himself.
              </p>
              <p><strong>Status:</strong> Released</p>
              <p><strong>Release Date:</strong> May 16, 2024</p>
              <p><strong>Runtime:</strong> 1h 55m</p>
              <p><strong>Writer:</strong> Skip Hollandsworth</p>
            </Col>
          </Row>
        </Container>
      </Row>
      <Row style={{ justifyContent: "center", marginTop: "50px", marginBottom: "50px" }}>
        <h2 style={{ textAlign:"left", marginLeft: "250px" }} className="text-white">Top Cast</h2>
        <Col xs={6} md={2} className="text-center">
          <Image src="./Anh/anh11.png" fluid style={{ borderRadius: "200px", width: "200px", height: "200px" }} />
          <Card.Body>
          </Card.Body>
          <div className="text-white">
            <h1>Glen Powell</h1>
            <p>Gary Johnson</p>
          </div>
        </Col>
        <Col xs={6} md={2} className="text-center">
          <Image src="./Anh/anh11.png" fluid style={{ borderRadius: "200px", width: "200px", height: "200px" }} />
          <Card.Body>

          </Card.Body>
          <div className="text-white">
            <h1>Glen Powell</h1>
            <p>Gary Johnson</p>
          </div>
        </Col>
        <Col xs={6} md={2} className="text-center">
          <Image src="./Anh/anh11.png" fluid style={{ borderRadius: "200px", width: "200px", height: "200px" }} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
          <div className="text-white">
            <h1>Glen Powell</h1>
            <p>Gary Johnson</p>
          </div>
        </Col>
        <Col xs={6} md={2} className="text-center">
          <Image src="./Anh/anh11.png" fluid style={{ borderRadius: "200px", width: "200px", height: "200px" }} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
          <div className="text-white">
            <h1>Glen Powell</h1>
            <p>Gary Johnson</p>
          </div>
        </Col>
        <Col xs={6} md={2} className="text-center">
          <Image src="./Anh/anh11.png" fluid style={{ borderRadius: "200px", width: "200px", height: "200px" }} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
          <div className="text-white">
            <h1>Glen Powell</h1>
            <p>Gary Johnson</p>
          </div>
        </Col>

      </Row>

      <Row>
        <Container>
          <Row>
            <Col md={6}>
              <h2 style={{ textAlign:"left",marginLeft: "130px" }} className="text-white">What’s Popular</h2>
            </Col>
            <Col md={6} className="custom-align">
              <ToggleButtonGroup type="radio" name="options" defaultValue={1} className="mb-3">
                <ToggleButton id="tbg-radio-1" variant="warning" value={1}>
                  Day
                </ToggleButton>
                <ToggleButton id="tbg-radio-2" variant="primary" value={2}>
                  Week
                </ToggleButton>
              </ToggleButtonGroup>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Col xs={6} md={2} lg={2}>
              <Card className="bg-dark text-white">
                <Card.Img src="./Anh/anh3.png" />
                <Card.ImgOverlay>
                  <Badge bg="danger" className="me-2">Romance</Badge>
                  <Badge bg="danger" className="me-2">Romance</Badge>
                  <Button variant="success" className="position-absolute bottom-0 start-50 translate-middle-x">
                    10.0
                  </Button>
                </Card.ImgOverlay>
              </Card>
              <div className="text-white">
                <h1>Hit Man</h1>
                <p>Jun 8, 2024</p>
              </div>
            </Col>
            <Col xs={6} md={2} lg={2}>
              <Card className="bg-dark text-white">
                <Card.Img src="./Anh/anh3.png" />
                <Card.ImgOverlay>
                  <Badge bg="danger" className="me-2">Romance</Badge>
                  <Badge bg="danger" className="me-2">Romance</Badge>
                  <Button variant="success" className="position-absolute bottom-0 start-50 translate-middle-x">
                    10.0
                  </Button>
                </Card.ImgOverlay>
              </Card>
              <div className="text-white">
                <h1>Hit Man</h1>
                <p>Jun 8, 2024</p>
              </div>
            </Col>
            <Col xs={6} md={2} lg={2}>
              <Card className="bg-dark text-white">
                <Card.Img src="./Anh/anh3.png" />
                <Card.ImgOverlay>
                  <Badge bg="danger" className="me-2">Romance</Badge>
                  <Badge bg="danger" className="me-2">Romance</Badge>
                  <Button variant="success" className="position-absolute bottom-0 start-50 translate-middle-x">
                    10.0
                  </Button>
                </Card.ImgOverlay>
              </Card>
              <div className="text-white">
                <h1>Hit Man</h1>
                <p>Jun 8, 2024</p>
              </div>
            </Col>
            <Col xs={6} md={2} lg={2}>
              <Card className="bg-dark text-white">
                <Card.Img src="./Anh/anh3.png" />
                <Card.ImgOverlay>
                  <Badge bg="danger" className="me-2">Romance</Badge>
                  <Badge bg="danger" className="me-2">Romance</Badge>
                  <Button variant="success" className="position-absolute bottom-0 start-50 translate-middle-x">
                    10.0
                  </Button>
                </Card.ImgOverlay>
              </Card>
              <div className="text-white">
                <h1>Hit Man</h1>
                <p>Jun 8, 2024</p>
              </div>
            </Col>
            <Col xs={6} md={2} lg={2}>
              <Card className="bg-dark text-white">
                <Card.Img src="./Anh/anh3.png" />
                <Card.ImgOverlay>
                  <Badge bg="danger" className="me-2">Romance</Badge>
                  <Badge bg="danger" className="me-2">Romance</Badge>
                  <Button variant="success" className="position-absolute bottom-0 start-50 translate-middle-x">
                    10.0
                  </Button>
                </Card.ImgOverlay>
              </Card>
              <div className="text-white">
                <h1>Hit Man</h1>
                <p>Jun 8, 2024</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Row>
      <Row>
        <Container>
          <Row>
            <Col md={6}>
              <h2 style={{ textAlign:"left", marginLeft: "130px" }} className="text-white">Top Rated</h2>
            </Col>
            <Col md={6} className="custom-align">
              <ToggleButtonGroup type="radio" name="options" defaultValue={1} className="mb-3">
                <ToggleButton id="tbg-radio-1" variant="warning" value={1}>
                  Day
                </ToggleButton>
                <ToggleButton id="tbg-radio-2" variant="primary" value={2}>
                  Week
                </ToggleButton>
              </ToggleButtonGroup>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Col xs={6} md={2} lg={2}>
              <Card className="bg-dark text-white">
                <Card.Img src="./Anh/anh3.png" />
                <Card.ImgOverlay>
                  <Badge bg="danger" className="me-2">Romance</Badge>
                  <Badge bg="danger" className="me-2">Romance</Badge>
                  <Button variant="success" className="position-absolute bottom-0 start-50 translate-middle-x">
                    10.0
                  </Button>
                </Card.ImgOverlay>
              </Card>
              <div className="text-white">
                <h1>Hit Man</h1>
                <p>Jun 8, 2024</p>
              </div>
            </Col>
            <Col xs={6} md={2} lg={2}>
              <Card className="bg-dark text-white">
                <Card.Img src="./Anh/anh3.png" />
                <Card.ImgOverlay>
                  <Badge bg="danger" className="me-2">Romance</Badge>
                  <Badge bg="danger" className="me-2">Romance</Badge>
                  <Button variant="success" className="position-absolute bottom-0 start-50 translate-middle-x">
                    10.0
                  </Button>
                </Card.ImgOverlay>
              </Card>
              <div className="text-white">
                <h1>Hit Man</h1>
                <p>Jun 8, 2024</p>
              </div>
            </Col>
            <Col xs={6} md={2} lg={2}>
              <Card className="bg-dark text-white">
                <Card.Img src="./Anh/anh3.png" />
                <Card.ImgOverlay>
                  <Badge bg="danger" className="me-2">Romance</Badge>
                  <Badge bg="danger" className="me-2">Romance</Badge>
                  <Button variant="success" className="position-absolute bottom-0 start-50 translate-middle-x">
                    10.0
                  </Button>
                </Card.ImgOverlay>
              </Card>
              <div className="text-white">
                <h1>Hit Man</h1>
                <p>Jun 8, 2024</p>
              </div>
            </Col>
            <Col xs={6} md={2} lg={2}>
              <Card className="bg-dark text-white">
                <Card.Img src="./Anh/anh3.png" />
                <Card.ImgOverlay>
                  <Badge bg="danger" className="me-2">Romance</Badge>
                  <Badge bg="danger" className="me-2">Romance</Badge>
                  <Button variant="success" className="position-absolute bottom-0 start-50 translate-middle-x">
                    10.0
                  </Button>
                </Card.ImgOverlay>
              </Card>
              <div className="text-white">
                <h1>Hit Man</h1>
                <p>Jun 8, 2024</p>
              </div>
            </Col>
            <Col xs={6} md={2} lg={2}>
              <Card className="bg-dark text-white">
                <Card.Img src="./Anh/anh3.png" />
                <Card.ImgOverlay>
                  <Badge bg="danger" className="me-2">Romance</Badge>
                  <Badge bg="danger" className="me-2">Romance</Badge>
                  <Button variant="success" className="position-absolute bottom-0 start-50 translate-middle-x">
                    10.0
                  </Button>
                </Card.ImgOverlay>
              </Card>
              <div className="text-white">
                <h1>Hit Man</h1>
                <p>Jun 8, 2024</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Row>
      <Row style={{ marginTop: "80px" }}>
        <footer style={{ backgroundColor: '#0b0d17', color: '#fff', padding: '20px 0' }}>
          <Container>
            <Row>
              <Col className="text-center">
                <a href="#terms" style={{ color: '#fff', margin: '0 10px' }}>Term of use</a>
                <a href="#privacy" style={{ color: '#fff', margin: '0 10px' }}>Privacy Policy</a>
                <a href="#about" style={{ color: '#fff', margin: '0 10px' }}>About</a>
                <a href="#blog" style={{ color: '#fff', margin: '0 10px' }}>Blog</a>
                <a href="#faq" style={{ color: '#fff', margin: '0 10px' }}>FAQ</a>
              </Col>
            </Row>
            <Row >
              <Col className="text-center" style={{ marginTop: '50px' }}>
                <p>© 2023 Movie App. All rights reserved.</p>
                <p>Discover the latest movies and TV shows. Explore now! Designed with passion</p>
              </Col>
            </Row>
            <Row>
              <Col className="text-center" style={{ marginTop: '10px' }}>
                <a href="https://www.facebook.com" style={{ color: '#fff', margin: '0 10px' }}><i class="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com" style={{ color: '#fff', margin: '0 10px' }}><i class="bi bi-instagram"></i></a>
                <a href="https://www.twitter.com" style={{ color: '#fff', margin: '0 10px' }}><i class="bi bi-twitter"></i></a>
                <a href="https://www.linkedin.com" style={{ color: '#fff', margin: '0 10px' }}><i class="bi bi-linkedin"></i></a>
              </Col>
            </Row>
          </Container>
        </footer>

      </Row>
    </Container>
  );
}