import { NavDropdown,Container, Row, Form, Button, FormControl, Navbar, Nav, NavDropdown, Col, Card, Image, Carousel, ToggleButton, ToggleButtonGroup, Badge } from "react-bootstrap";
import './Home.css';

export default function Home() {
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" style={{ color: "orange" }}>
                        <i class="bi bi-film"></i>Movix</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#Phim Lẻ">Phim Lẻ</Nav.Link>
                            <Nav.Link href="#Phim Bộ">Phim Bộ</Nav.Link>
                            <NavDropdown title="Thể loại" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/1">Thần thoại</NavDropdown.Item>
                                <NavDropdown.Item href="#action/2">Chiến tranh</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3">Viễn Tưởng</NavDropdown.Item>
                                <NavDropdown.Item href="#action/1">Cổ Trang</NavDropdown.Item>
                                <NavDropdown.Item href="#action/2">Học Đường</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3">Bí Ẩn</NavDropdown.Item>
                                <NavDropdown.Item href="#action/1">Phiêu Lưu</NavDropdown.Item>
                                <NavDropdown.Item href="#action/2">Hài Hước</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3">Tâm lý</NavDropdown.Item>
                               
                            </NavDropdown>
                            <NavDropdown title="Quốc Gia" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/4">Việt Nam</NavDropdown.Item>
                                <NavDropdown.Item href="#action/5">Nhật Bản</NavDropdown.Item>
                                <NavDropdown.Item href="#action/6">Mỹ</NavDropdown.Item>
                                <NavDropdown.Item href="#action/4">Hàn Quốc</NavDropdown.Item>
                                <NavDropdown.Item href="#action/5">Trung Quốc</NavDropdown.Item>
                                <NavDropdown.Item href="#action/6">Ấn Độ</NavDropdown.Item>

                            </NavDropdown>
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
            <Container fluid>
                <Carousel>
                    <Carousel.Item>
                        <Image src="./Anh/Banner.png" style={{ width: "100%" }} />
                        <Carousel.Caption>
                            <h3>Movixperience...</h3>
                            <p>Distinctive and immersive cinematic experience.Millions of movies, TV shows and people to discover. Explore now!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="./Anh/Banner.png " style={{ width: "100%" }} />
                        <Carousel.Caption>
                            <h3>Movixperience...</h3>
                            <p>Distinctive and immersive cinematic experience.Millions of movies, TV shows and people to discover. Explore now!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="./Anh/Banner.png" style={{ width: "100%" }} />
                        <Carousel.Caption>
                            <h3>Movixperience...</h3>
                            <p>Distinctive and immersive cinematic experience.Millions of movies, TV shows and people to discover. Explore now!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </Container>

            <Container>

                <Row >
                    <Container>
                        <Row>
                            <Col md={6}>
                                <h2 style={{textAlign:"left", marginLeft:"130px"}} className="text-white">Trending</h2>
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
                                    <Card.Img src="./Anh/anh1.png" />
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
                                    <Card.Img src="./Anh/anh2.png" />
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
                                    <Card.Img src="./Anh/anh4.png" />
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
                                    <Card.Img src="./Anh/anh5.png" />
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

                <Row >
                    <Container>
                    <Row>
                            <Col md={6}>
                                <h2 style={{textAlign:"left", marginLeft: "130px" }} className="text-white">Trending</h2>
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

                <Row >
                    <Container>
                    <Row>
                            <Col md={6}>
                                <h2 style={{textAlign:"left", marginLeft: "130px" }} className="text-white">Trending</h2>
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
                                    <a href="https://www.facebook.com" style={{ color: '#fff', margin: '0 10px' }}></a>
                                    <a href="https://www.instagram.com" style={{ color: '#fff', margin: '0 10px' }}></a>
                                    <a href="https://www.twitter.com" style={{ color: '#fff', margin: '0 10px' }}></a>
                                    <a href="https://www.linkedin.com" style={{ color: '#fff', margin: '0 10px' }}></a>
                                </Col>
                            </Row>
                        </Container>
                    </footer>

                </Row>

            </Container>
        </div>
    );
}
