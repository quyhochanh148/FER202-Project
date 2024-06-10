import { Container, Form, Row, Col, Button } from "react-bootstrap";
import './login.css'
export default function Login() {
  return (
    <Container fluid className="login-container" style={{ justifyContent: "center" }}>
      <Row >
        <Col md={6} className="poster-column">
          <img src="./Anh/Rectangle 2.png" alt="Oppenheimer Poster" className="poster-image" />
        </Col>
        <Col md={6} className="form-column">
          <Row>
            <div className="form-wrapper">
              <h2>Login</h2>
              <Form>
                <div>Email</div>
                <Form.Group controlId="formBasicEmail">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="bi bi-envelope"></i> {/* Email icon */}
                      </span>
                    </div>
                    <Form.Control type="email" placeholder="Enter email" />
                  </div>
                </Form.Group>
                <div>Password</div>
                <Form.Group controlId="formBasicPassword">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i class="bi bi-lock"></i> {/* Email icon */}
                      </span>
                    </div>
                    <Form.Control type="password" placeholder="Password " />
                  </div>
                </Form.Group>
                <Button variant="primary" type="submit" className="login-button">
                  Login
                </Button>
                <div className="forgot-password">
                  <a href="/">Forgot password?</a>
                </div>
                <div className="signup-link">
                  Don't have an account? <a href="/">Sign up here</a>
                </div>
              </Form>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>

  );
}