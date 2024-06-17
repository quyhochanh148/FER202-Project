import { Container, Row, Form, Button, FormControl, Navbar, Nav, Col, Card, ButtonGroup, Badge } from "react-bootstrap";
import React, { useState } from 'react';
import './MovieContent.css';
import './VideoPlayer.css';
import './EpisodeList.css';
export default function Watching() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Giả sử chưa đăng nhập

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleSubmitComment = () => {
        if (isLoggedIn && newComment.trim() !== '') {
            setComments([...comments, newComment]);
            setNewComment('');
        }
    };
    const [selectedEpisode, setSelectedEpisode] = useState(1);

    const episodes = Array.from({ length: 10 }, (_, i) => i + 1);

    const handleEpisodeClick = (episode) => {
        setSelectedEpisode(episode);
    };
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
                            <Nav.Link href="#Thể loại">Thể loại</Nav.Link>
                            <Nav.Link href="#Quốc Gia">Quốc Gia</Nav.Link>
                            <Nav.Link href="#Login">Login</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Tìm tên phim, diễn viên..."
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button style={{ backgroundColor: 'red' }}>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className="video-player-container">
                <Row>
                    <Col md={8}>
                        <div className="video-wrapper">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Thay bằng link video của bạn
                                title="Video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="video-info">
                            <h3>KHI BỐ GẶP MẸ (PHẦN 2)</h3>
                            <p>HOW I MET YOUR MOTHER SEASON 2 (2006)</p>
                            <p>Số tập: 22</p>
                            <p>Thể loại: Hài kịch, Lãng mạn</p>
                            <p>Diễn viên: Josh Radnor, Jason Segel, Cobie Smulders, Neil Patrick Harris, Alyson Hannigan</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="episode-list-container">
            <ButtonGroup aria-label="Danh sách tập">
                {episodes.map((episode) => (
                    <Button
                        key={episode}
                        variant={episode === selectedEpisode ? 'primary' : 'outline-secondary'}
                        onClick={() => handleEpisodeClick(episode)}
                    >
                        Tập {episode}
                    </Button>
                ))}
            </ButtonGroup>
            </div>

            <Container className="movie-content">
                <p>"Ted và Robin chính thức yêu nhau trong khi Marshall cố gắng tiếp tục cuộc sống mà không có Lily. Không thể chấp nhận nhìn Marshall gặp nhiều sự suy sụp tình cảm nữa, bạn anh ấy và Barney can thiệp sử dụng chiêu trò nhằm giúp Marshall có thể hẹn hò lại. Sau đó, Lily quay lại New York sau khi nhận ra mình không thể làm một nghệ sĩ như mong muốn. Cô ấy quay lại với Marshall và lễ đính hôn được sắp đặt lại. Khi Robin từ chối đi tr..."</p>
                <a href="#" className="read-more">Xem thêm</a>
            </Container>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card style={{ width: '84%', maxWidth: '100%' }}>
                    <Card.Header>Comment</Card.Header>
                    <Card.Body>
                        {isLoggedIn ? (
                            <Form>
                                <Form.Group controlId="commentInput">
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        value={newComment}
                                        onChange={handleCommentChange}
                                    />
                                </Form.Group>
                                <Button variant="primary" onClick={handleSubmitComment}>
                                    Send comment
                                </Button>
                            </Form>
                        ) : (
                            <p>You should <span style={{ color: 'red' }}>Login</span> to comment</p>
                        )}

                        {comments.length === 0 ? (
                            <p>No Comment</p>
                        ) : (
                            <div>
                                {comments.map((comment, index) => (
                                    <p key={index}>{comment}</p>
                                ))}
                            </div>
                        )}
                    </Card.Body>
                </Card>
            </div>
            <Row >
                <Container>
                    <Row>
                        <Col md={6}>
                            <h2 style={{ marginLeft: "120px" }} className="text-white">MOVIES OF THE SAME GENRE
                            </h2>
                        </Col>
                        <Col md={6} className="custom-align">
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
                            <h2 style={{ marginLeft: "120px" }} className="text-white">MOVIE NOMINATION
                            </h2>
                        </Col>
                        <Col md={6} className="custom-align">
                            <Button variant="primary" className="mt-4">Xem tất cả</Button>
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



            <Container>
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
    )
}