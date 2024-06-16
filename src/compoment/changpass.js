import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './changpass.css';

export default function ChangePasswordPage() {
    return (
        <>
            <Container fluid className="container">
                <Row>
                    <Col>
                        <h2>Thay Đổi Mật Khẩu</h2>
                        <Form>
                            <Form.Group controlId="formBasicPassword" className="form-group">
                                <Form.Label className="form-label">Mật Khẩu Mới</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Nhập mật khẩu mới"
                                    className="form-control"
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicConfirmPassword" className="form-group">
                                <Form.Label className="form-label">Xác Nhận Mật Khẩu Mới</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Xác nhận mật khẩu mới"
                                    className="form-control"
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="btn-primary">
                                Thay Đổi Mật Khẩu
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            
        </>
    );
}
